---
name: gotham-drag-design
description: Use this skill to generate well-branded interfaces and assets for the Gotham Knights Drag Show — the drag show run by Gotham Knights RFC, NYC's LGBT rugby club. Covers posters, socials, lineups and ticketing. Contains the show's colors, type, patterns and assets. For general club work (matchday, recruitment, grants, sponsors) use the gotham-knights-design skill instead.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (posters, socials, mocks, throwaway prototypes), copy assets
out and create static HTML files for the user to view. If working on production code, copy
assets and read the rules here to become an expert in designing for this show.

If the user invokes this skill without any other guidance, ask what they want to build,
ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick orientation

- **What this is:** a *variant* of the Gotham Knights Rugby design system — the same club
  in a third register, not a separate brand. The club ships Loud/Matchday and
  Professional/Clubhouse; this is **Drag/Showtime**.
- **The idea:** Loud/Matchday is a navy *field* with gold shouting across it. Drag is a
  navy *house* with a spectrum lit up on the stage.
- **Entry point:** link the repo root's `styles.css` (it imports the club spine and then
  the show register), set `data-theme="drag"` on `<html>` or any container.
- **Tokens:** `../tokens/drag.css` holds the whole variant, beside the club's spine and the
  show's `motion.css` and `formats.css`.
- **Published guide:** https://style.gotham.rugby/drag/ (this folder's `index.html`).
- **Two blocks in `drag.css`:** palette *primitives* live at `:root`; only *semantic
  re-pointing* lives under `[data-theme="drag"]`. Putting a primitive in the theme block
  makes the `.gkd-*` patterns render as nothing wherever the attribute is absent — the
  Design System pane drops it. Cards and posters therefore set `data-theme` on a wrapper
  inside `<body>`, and take their background from `--house-black`, not `--surface-page`.

## The rules that matter most

1. **Gold stays the link and highlight color.** Violet leads the accents, but gold is the
   thread back to the club. Remove it and the show reads as an unrelated event brand.
2. **The crest and wordmark are untouched.** No spectrum fills, no recoloring.
3. **Harbour Bold is for the show title only** — one per composition, poster scale, at
   `--tracking-wordmark`, via `.gkd-marquee`. It is a *lockup*, not a display font. Never
   a heading, never body, never a pull quote. Harbour Decor is rejected outright.
4. **Patterns are single moments, not wallpaper.** `.gkd-spectrum-frame` in particular is
   one per composition, maximum.
5. **The spectrum is structural here** — this is the one place the club's "Pride, not
   rainbow-everything" rule is deliberately relaxed. It is still not a gradient on
   everything.
6. **Voice:** bold, warm, a little cheeky. Inclusive structurally, not decoratively.
   Never punches down; no tired gay-bar clichés. Mono face for dates, times and prices.

## Motion & video

- **All motion is CSS `@keyframes`.** `render/rec.cjs` renders by pausing every Web
  Animation and setting `currentTime` per frame. `requestAnimationFrame`, `<canvas>`,
  GIF and `<video>` are not frame-addressable and render as a frozen frame.
- **Event and hold.** Motion punctuates stillness — a gesture fires for ≤`--mo-event`
  (16%) of a loop then holds. Continuous motion reads as a screensaver.
- **Events vs. ambient.** Punctuating gestures use the decisive eases (`--mo-ease`, etc.).
  Background texture uses `--mo-ease-ambient` with a shallow, slow swing — the idle loop
  plays while the spotlight is on a performer, so it competes with a live human for
  attention and must lose. If you notice it while looking at something else, it's too strong.
- **Size in `cqh`/`cqw` inside `.stage__canvas`, never px**, so 1080p and 4K renders match.
  Minimums are tokens: `--type-min-venue` (4cqh), `--type-min-venue-support` (2.2cqh).
- **Every `animation-duration` must divide evenly into the loop period** or the loop
  jumps. Always render looping pieces with `--verify`.
- Wrap pieces in `.stage > .stage__canvas.fmt-venue|fmt-vertical|…` and put content
  inside `.safe--venue` / `.safe--reel` / `.safe--story`.

### Vertical / social (Reels, Stories)

- **The event-and-hold rule inverts.** Venue motion must lose the fight for attention;
  a Reel has under a second to win it. Everything essential on screen by `--mo-hook`
  (400ms), loop on `--mo-loop-social` (8s), continuous motion allowed.
- **Seamless-with-a-reveal:** return to the pre-reveal state at 100% so the hook replays
  each cycle while frame 0 still equals frame N. **Never use `animation-delay`** — a
  delayed animation is mid-cycle at the loop point and the loop stops closing. Put the
  stagger in the keyframe percentages.
- **Size in `cqw`, not `cqh`** — portrait is width-constrained. Minimums are
  `--type-min-social` / `--type-min-social-support`.
- **`.fmt-vertical` applies the social lift** automatically: floor raised off
  `--house-black`, coarser sequin grid, and heavier grain (grain dithers gradients and
  reduces the banding the platform encoder introduces). Venue output is unaffected.
- **The Reels action rail covers the lower right.** Content above ~55% height can use full
  width; below that use `.safe--reel-rail`. Build to Reel constraints and the result is
  automatically Story-safe — Stories has no rail and a shallower bottom inset.
- Render: `node render/rec.cjs --in motion/x.html --size 1920x1080 --fps 30 --secs 24
  --verify --out dist/x.mp4`

## Where things are

- **Type:** Hanken Grotesk (headings/body/UI), GothamHTF Black (athletic all-caps hype —
  lineups, ticket CTAs), Harbour Bold (show title lockup only), Spline Sans Mono (dates,
  times, prices).
- **Patterns:** `.gkd-marquee-rule`, `.gkd-spectrum-rule`, `.gkd-spectrum-frame`,
  `.gkd-spotlight`, `.gkd-sequin` — plus all the parent's `.gk-*` patterns, which still work.
- **Reference composition:** `posters/show-poster.html`. Its open center is where performer
  photography goes. Event content is partly stand-in — venue is real, the date (Sat 21 Nov
  2026) is a stand-in, and the show name, performer names, price and body copy are invented.
- **Assets:** `../assets/logos/` (crest, lockups, wordmarks, watermark). No font files in the repo.

## Not yet built

The parent's nine React components retheme correctly under this theme but have not been
copied here, and show-specific components (PerformerCard, LineupRow, TicketCTA) don't
exist yet. Build them from the parent's component APIs if needed.
