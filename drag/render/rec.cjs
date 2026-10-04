/**
 * render/rec.cjs — deterministic frame renderer for the Gotham Knights
 * Drag Show motion system.
 *
 * Generalised from the club's original looper recorder. The core trick is
 * unchanged and is the whole reason this is reliable: rather than letting
 * animations run in real time and screenshotting whenever we get around to
 * it, we PAUSE every Web Animation and set `currentTime` explicitly for each
 * frame. Wall-clock timing, GC pauses and a slow machine then cannot affect
 * the output. Two runs are byte-identical, and frame N of a loop lines up
 * exactly with frame 0.
 *
 * That is also why the system rule is "all motion is CSS @keyframes" — this
 * only sees animations the Web Animations API knows about. A
 * requestAnimationFrame loop or a <canvas> sim renders as a frozen frame.
 *
 * Usage:
 *   node render/rec.js --in motion/idle-loop.html \
 *                      --size 1920x1080 --fps 30 --secs 24 \
 *                      --out dist/idle-loop.mp4
 *
 *   --in      HTML file to render (required)
 *   --out     output file; extension picks the encoder (.mp4 | .mov | .webm)
 *   --size    WxH, default 1920x1080
 *   --fps     default 30
 *   --secs    duration; for a loop this must equal the loop period
 *   --frames  keep the intermediate PNG sequence instead of deleting it
 *   --verify  render frame 0 and frame N and fail if they differ (loop check)
 *   --scale   deviceScaleFactor, default 1. Use 2 to render 4K from a 1080 layout.
 *   --settle  ms to wait after load before capturing, default 400
 */

const puppeteer = require('puppeteer');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- args ----------------------------------------------------------------
function parseArgs(argv) {
  const a = {};
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (!k.startsWith('--')) continue;
    const name = k.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) a[name] = true;
    else { a[name] = next; i++; }
  }
  return a;
}

const args = parseArgs(process.argv);
if (!args.in) {
  console.error('rec.js: --in <file.html> is required');
  process.exit(1);
}

const inFile = path.resolve(args.in);
if (!fs.existsSync(inFile)) {
  console.error(`rec.js: input not found: ${inFile}`);
  process.exit(1);
}

const [width, height] = String(args.size || '1920x1080').split('x').map(Number);
const fps = Number(args.fps || 30);
const secs = Number(args.secs || 24);
const scale = Number(args.scale || 1);
const settle = Number(args.settle || 400);
const totalFrames = Math.round(fps * secs);

if (!width || !height) { console.error('rec.js: --size must look like 1920x1080'); process.exit(1); }

const outFile = args.out ? path.resolve(args.out) : null;
const keepFrames = Boolean(args.frames);
const frameDir = keepFrames
  ? path.resolve(path.dirname(outFile || inFile), 'frames')
  : fs.mkdtempSync(path.join(os.tmpdir(), 'gkd-render-'));

fs.mkdirSync(frameDir, { recursive: true });
if (outFile) fs.mkdirSync(path.dirname(outFile), { recursive: true });

// ---- render --------------------------------------------------------------
(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--force-device-scale-factor=' + scale,
      '--hide-scrollbars',
      '--font-render-hinting=none',
      // Required for CSS mask-image (and any other subresource Chrome treats
      // as cross-origin) to load over file://. Without it a mask silently
      // fails to load and the masked element renders as fully transparent —
      // the effect just disappears, with no console error.
      '--allow-file-access-from-files',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scale });

  // Rendered output must always contain the full motion, regardless of what
  // the rendering machine's OS accessibility settings happen to be.
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'no-preference' },
  ]);

  await page.goto('file://' + inFile, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await sleep(settle);

  // Guard: the safe-area dev overlay must never make it into a render.
  const hasOverlay = await page.evaluate(() => !!document.querySelector('.show-safe'));
  if (hasOverlay) {
    console.error('rec.js: refusing to render — .show-safe dev overlay is present in ' + path.basename(inFile));
    await browser.close();
    process.exit(1);
  }

  // Collect animations across shadow roots too.
  const seekTo = (ms) => page.evaluate((t) => {
    const deep = (root) => {
      let els = [...root.querySelectorAll('*')];
      for (const e of els) if (e.shadowRoot) els = els.concat(deep(e.shadowRoot));
      return els;
    };
    const anims = deep(document).flatMap((e) => e.getAnimations());
    anims.forEach((a) => { a.pause(); a.currentTime = t; });
    return anims.length;
  }, ms);

  const animCount = await seekTo(0);
  if (animCount === 0) {
    console.warn('rec.js: warning — no Web Animations found. If this file is supposed to move, ' +
                 'its motion is not @keyframes-driven and will render static.');
  }

  const pad = (n) => String(n).padStart(5, '0');
  process.stdout.write(`rendering ${totalFrames} frames @ ${width}x${height}${scale > 1 ? ` x${scale}` : ''} · ${animCount} animations\n`);

  for (let i = 0; i < totalFrames; i++) {
    await seekTo(i * (1000 / fps));
    await page.screenshot({ path: path.join(frameDir, `${pad(i)}.png`) });
    if (i % fps === 0) process.stdout.write(`  ${(i / fps).toFixed(0)}s / ${secs}s\r`);
  }
  process.stdout.write(`  ${secs}s / ${secs}s\n`);

  // ---- loop verification -------------------------------------------------
  // A seamless loop means the state at t=duration is identical to t=0. We
  // render one frame past the end and compare it to frame 0.
  if (args.verify) {
    const probe = path.join(frameDir, 'loop-probe.png');
    await seekTo(totalFrames * (1000 / fps));
    await page.screenshot({ path: probe });
    const a = fs.readFileSync(path.join(frameDir, `${pad(0)}.png`));
    const b = fs.readFileSync(probe);
    fs.unlinkSync(probe);
    if (Buffer.compare(a, b) === 0) {
      console.log('loop check: PASS — frame at t=' + secs + 's is identical to t=0');
    } else {
      console.error('loop check: FAIL — the loop does not close. Frame at t=' + secs +
                    's differs from t=0, so playback will visibly jump.');
      console.error('  Every animation-duration must divide evenly into --secs (' + secs + 's).');
      await browser.close();
      process.exit(2);
    }
  }

  await browser.close();

  // ---- encode ------------------------------------------------------------
  if (outFile) {
    const ext = path.extname(outFile).toLowerCase();
    const src = path.join(frameDir, '%05d.png');
    let ffArgs;

    if (ext === '.mov') {
      // ProRes 422 HQ — for handing to an editor or a VJ rig.
      ffArgs = ['-y', '-framerate', String(fps), '-i', src,
                '-c:v', 'prores_ks', '-profile:v', '3', '-pix_fmt', 'yuv422p10le', outFile];
    } else if (ext === '.webm') {
      ffArgs = ['-y', '-framerate', String(fps), '-i', src,
                '-c:v', 'libvpx-vp9', '-crf', '24', '-b:v', '0', '-pix_fmt', 'yuv420p', outFile];
    } else {
      // H.264 — yuv420p and even dimensions for maximum player compatibility.
      ffArgs = ['-y', '-framerate', String(fps), '-i', src,
                '-c:v', 'libx264', '-preset', 'slow', '-crf', '17',
                '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
                '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', outFile];
    }

    process.stdout.write(`encoding ${path.basename(outFile)}\n`);
    execFileSync('ffmpeg', ffArgs, { stdio: ['ignore', 'ignore', 'pipe'] });
    const mb = (fs.statSync(outFile).size / 1e6).toFixed(1);
    console.log(`done: ${outFile} (${mb} MB)`);
  }

  if (!keepFrames) fs.rmSync(frameDir, { recursive: true, force: true });
  else console.log(`frames kept: ${frameDir}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
