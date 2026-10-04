# Gotham Knights Drag Show — Design System

> **Where this lives now.** The show register is part of the club's design-system repo. `tokens/drag.css`, `tokens/motion.css` and `tokens/formats.css` sit beside the club tokens in `../tokens/`, and the root `../styles.css` imports all of them. Everything else here (`guidelines/`, `posters/`, `templates/`, `motion/`, `render/`) is the show's own. The published design guide is `index.html` in this folder, live at https://style.gotham.rugby/drag/. Font files are not kept in the repo: Gotham Black loads from the club's Adobe Fonts project; Harbour is set from the font files the club holds.

A variant of the **Gotham Knights Rugby** design system for the club's drag show.
Not a separate brand: the same club, in a third register.

The parent system ships two registers — **Loud/Matchday** (navy field, gold shouting)
and **Professional/Clubhouse** (warm paper, navy ink). This adds a third:

- **Drag / Showtime** — the house lights going down. Navy goes darker than the pitch,
  the Pride spectrum steps forward as a structural element, and the show title gets a
  marquee lockup. Posters, socials, lineups, ticketing.

> Loud/Matchday is a navy **field** with gold shouting across it.
> Drag is a navy **house** with a spectrum lit up on the stage.

---

## How it relates to the club system

This project is a **fork of the parent token spine**, not a re-skin of it. It carries
the parent's `tokens/` unchanged and adds one file, `tokens/drag.css`, which re-points
the existing semantic aliases under `[data-theme="drag"]`.

That matters practically: because the parent's components consume semantic aliases
(`--accent`, `--surface-page`, `--border-brand`…) rather than raw brand colors, every
component rethemes for the show without a fork. The entire variant is one new file and
three lines added to `styles.css`.

**The club's canonical design system is never written to from here.** Fixes that belong
to the shared spine should be made there and pulled down, not made here and pushed up.

---

## What carries over — non-negotiable

This is still Gotham Knights. The following do not change for the show:

- **The crest and the wordmark.** Untouched, unrecolored, no spectrum fills.
- **Navy as the anchor.** The show is darker, not different.
- **Gold as the thread back to the club.** Gold stays the link and highlight color even
  though violet leads the accents. It is the single strongest signal that this is the
  rugby club putting on a show rather than an unrelated event brand.
- **The 4px spacing spine, 2px strokes, low athletic radii.** Nothing gets bubbly.
- **The voice** — bold, warm, a little cheeky; inclusive structurally, not decoratively;
  never punching down, never leaning on tired gay-bar clichés.

## What changes

- **The spectrum becomes structural.** In the club system Pride is a deliberate thin
  accent — the readme is explicit that it must never be rainbow-everything. For the drag
  show that rule is *deliberately relaxed*, because the occasion is the point. It shows
  up as frames, marquee rules and the lead accent. It is still not a default gradient on
  every surface.
- **The house goes darker.** `--house-black` (`#04091a`) sits below the club's darkest
  navy. A theater with the lights down, not a pitch at night.
- **Violet and pink ramps arrive.** The parent has no violet scale; this defines one
  locally rather than editing shared color tokens.
- **The show title gets a marquee lockup.** See below.

---

## TYPE — the marquee rule

Show titles are set in **Harbour Bold**, the wordmark face, at wordmark tracking
(`--tracking-wordmark`), via `--font-marquee` / `.gkd-marquee`.

The parent reserves Harbour for the logo wordmark and warns that letting it loose makes
the brand read "ye olde". **That rule still holds.** This is not an exception to it — a
show title *is* a wordmark. It is the event's lockup:

- **One per composition.** Never two Harbour elements on the same surface.
- **Poster/title scale only.** Never a heading style, never body, never a pull quote.
- **Wordmark tracking.** It is set like the lockup because it is one.

Everything else keeps the parent's roles: **Hanken Grotesk** for headings, body and UI,
**GothamHTF Black** for athletic all-caps hype (the lineup, ticket CTAs), **Spline Sans
Mono** for dates, times, door prices and anything scoreboard-shaped.

> **Harbour Decor is rejected.** The blackletter cut was tested on the poster and failed
> on legibility — the title could not be read until it was set in another face for
> comparison. It is deliberately not bundled in `assets/fonts/`.

---

## PATTERNS

Same discipline as the parent's textures: **loud by nature, used as frames, bands and
single moments — never wallpaper.** Live in `tokens/drag.css`, shipped via `styles.css`.

- `.gkd-marquee-rule` — a row of warm bulbs, like a stage-door sign. Top/bottom rules on
  posters and ticket bands.
- `.gkd-spectrum-rule` — the club's thin `.gk-pride-rule`, promoted to a structural band.
  The show's signature stroke.
- `.gkd-spectrum-frame` — a full border in the spectrum. The loudest move in the
  register; **one per composition, maximum.**
- `.gkd-spotlight` — a warm wash thrown from above, over the dark house. Behind a
  performer or a title.
- `.gkd-sequin` — a fine violet/pink glitter grain. The quiet one.

The parent's patterns (`.gk-checker`, `.gk-stripes`, the halftones, `.gk-pinstripe`,
`.gk-crest-watermark`) all still apply and still work under this theme.

---

## USAGE

Link `styles.css` and set the theme:

```html
<html data-theme="drag">
  <link rel="stylesheet" href="styles.css">
```

Any container can carry `data-theme="drag"` — a single dark show panel can sit inside an
otherwise Clubhouse-register page.

### Where a token goes — primitives vs. re-pointing

`tokens/drag.css` has two blocks, and putting a value in the wrong one is a real bug:

- **`:root`** — palette *primitives*: the violet/pink ramps, `--house-black`,
  `--spectrum`, `--font-marquee`, `--shadow-glow`. Declaring these changes nothing on its
  own; they simply become available. This mirrors the parent, which declares its
  `--pride-*` spectrum at `:root` even though Pride is accent-only.
- **`[data-theme="drag"]`** — *semantic re-pointing* only: `--surface-page`, `--accent`,
  `--text-strong` and friends. Exactly what `[data-theme="loud"]` does upstream.

**A primitive scoped to the theme block will silently render as nothing** anywhere the
attribute isn't present — `.gkd-spectrum-frame` becomes an invisible border,
`.gkd-sequin` loses its dots, the marquee falls back to a serif. The Design System pane
drops `data-theme` off `<html>`, so this fails there specifically while looking fine
locally.

For the same reason, **specimen cards and posters carry `data-theme="drag"` on an element
inside `<body>`** (the `.pad` wrapper, the `.poster` itself) rather than on `<html>`, and
set their own background from `--house-black` rather than `--surface-page`.

---

---

## MOTION & OUTPUT FORMATS

The system covers three output classes: **print/graphics**, **venue screen** (projector or
LED wall, 16:9) and **social video** (9:16). Motion is authored as HTML/CSS and rendered
to files.

### The hard constraint: motion is CSS `@keyframes`

`render/rec.cjs` captures frames by pausing every Web Animation and setting `currentTime`
explicitly per frame. That is what makes renders deterministic and loops seamless — wall
clock, GC pauses and machine speed cannot affect output.

**It only sees animations the Web Animations API knows about.** A `requestAnimationFrame`
loop, a `<canvas>` simulation, an animated GIF or an embedded `<video>` is not
frame-addressable and will render as a frozen first frame. If it moves, it is a
`@keyframes` rule.

### The design principle: event and hold

Motion here is not continuous. The sheen crosses the crest in 16% of the loop and then
sits still; the spark travels the rule once and waits. This is the brand's "quick and
decisive, never bouncy" character stretched to loop length — **punctuation against
stillness**. Continuous motion reads as a screensaver; event-and-hold reads as a stage.
`--mo-event: 16%` is the ceiling for a punctuating gesture; past ~20% it stops reading as
an event.

The one sanctioned exception is `gkd-house-swell`, because a slow warm swell reads as a
room rather than as a widget.

### Resolution independence

Inside `.stage__canvas` (which sets `container-type: size`), **size everything in `cqh`/
`cqw`, never px.** A 1920×1080 and a 3840×2160 render of the same file must be identical
after scaling, which only holds if nothing is measured absolutely. Minimum legible sizes
are tokens, not judgement calls: `--type-min-venue` (4cqh) for anything that must be read
across a room, `--type-min-venue-support` (2.2cqh) for supporting text.

### Timing

Broadcast timing is a separate scale from the parent's UI tokens. `--dur-fast/base/slow`
(120–320ms) stay for interfaces; motion uses `--mo-reveal` (700ms), `--mo-exit` (500ms),
`--mo-hold*` (3–8s) and `--mo-loop` (24s) / `--mo-loop-short` (12s).

**Every `animation-duration` in a looping piece must divide evenly into the loop period**,
or the loop will visibly jump. `--verify` catches this by rendering one frame past the end
and byte-comparing it to frame 0.

### Rendering

```bash
node render/rec.cjs --in motion/idle-loop.html \
  --size 1920x1080 --fps 30 --secs 24 --verify \
  --out dist/idle-loop.mp4
```

`.mp4` → H.264 (venue playback, socials) · `.mov` → ProRes 422 HQ (hand to an editor or a
VJ rig) · `.webm` → VP9. Use `--scale 2` to render 4K from a 1080-authored layout,
`--frames` to keep the PNG sequence, `--verify` on anything that loops.

The harness refuses to render a file containing the `.show-safe` dev overlay, and forces
`prefers-reduced-motion: no-preference` so rendered files always contain the full motion
regardless of the rendering machine's accessibility settings.

---

## INDEX

- `../styles.css` — the repo's single entry point. Imports the club spine, then
  `formats.css`, `motion.css` and, **last**, `drag.css`.
- `../tokens/` — the club's `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `base.css`, `patterns.css` + the show's **`formats.css`** (canvases + safe areas),
  **`motion.css`** (timing + keyframe vocabulary) and **`drag.css`** (the variant).
- `index.html`, `drag.css`, `img/` — the published design guide (`/drag/`).
- `guidelines/` — specimen cards, the Design Guide and the mood boards.
- `posters/show-poster.html` — the reference composition.
- `templates/next-generation-cover/` — the Season 25 template (square + story).
- `motion/` — motion pieces. `idle-loop.html` is the reference.
- `render/rec.cjs` — the deterministic frame renderer + encoder (`npm install` in
  `render/` for puppeteer; output goes to `render/dist/`, which is ignored by git).
- `../assets/logos/` — the club's marks. No font files in the repo.

## ACTION ITEMS — considered, not yet done

- **Serve renders over a local HTTP port instead of `file://`.** `render/rec.cjs` currently
  loads the page as `file://` and needs `--allow-file-access-from-files` because Chrome
  silently refuses to load CSS mask images over `file://` — the mask never loads, the
  masked element renders fully transparent, and the effect vanishes with no console error.
  The flag fixes today's case, but the class of bug remains for any future asset type
  (fonts, `fetch`, video). Spinning up a throwaway static server in `rec.js` and loading
  `http://127.0.0.1:<port>/…` would remove it permanently. Worth doing before the motion
  library grows.

  Related: **`--verify` cannot catch a missing effect.** It compares frame 0 to frame N,
  and an effect that degrades to invisible is perfectly seamless. The mask bug passed the
  loop check every time.

## CAVEATS

- **Components are not yet ported.** The parent's nine React primitives (Button, Badge,
  Tag, Card, Crest, Input, Stat, SectionHeading, FixtureRow) retheme correctly under
  `[data-theme="drag"]` because they consume semantic aliases, but they have not been
  copied into this project. Show-specific components (PerformerCard, LineupRow,
  TicketCTA) are not built.
- **Event content is now mostly confirmed** (see `guidelines/mood-board.html`, the
  grounding reference): the show is **"Gotham Drag Show: The Next Generation"**,
  Wed 18 Nov 2026 at The Cutting Room (44 E 32nd St), doors 7pm, show 8pm, tickets $35
  at go.gotham.rugby/drag. Performer stage names are still stand-ins — the likely cast is
  Brandy Manhattan, Chelsea Cloisters, Raul and Jorge (stage names TBC).
- **The poster has no photography.** Its center is deliberately open; that space is for
  a performer image the club supplies.
