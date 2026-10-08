# Gotham Knights Rugby — Design System

The club's design system and its published brand guidelines (https://style.gotham.rugby), in one repo. This file is the brand book; the repository layout and workflow are at the end.

New York City's LGBT rugby club. A fearless, welcoming home for queer athletes in a
sport that hasn't always made room for them. The brand is **heraldic and athletic** —
a dragon crest, deep navy, bold gold — with a tone that is **bold, warm, and a little
cheeky**. It speaks to two rooms at once: the queer NYC community and the players who
live for matchday, *and* the grant officers and sponsors who fund the club. So the
system ships in two registers:

- **Loud / Matchday** — navy field, gold shouting, GothamHTF all-caps. Posters, socials,
  hype, recruitment.
- **Professional / Clubhouse** — warm paper, navy ink, modern Hanken headings. Decks, grant
  applications, sponsor one-pagers, the website's calmer pages.

Both share one palette and one type family set — only the emphasis changes.

> **Pride, not rainbow-everything.** The club is proudly LGBT, but the identity leads with
> navy + gold confidence. Pride shows up as a *deliberate* spectrum accent — a thin rule, a
> single highlighted moment — never as a default gradient on everything.

---

## Source materials provided

Brand assets supplied by the club (originals live in `assets/originals/`, working copies in `assets/logos/`):

- **Logos** — Horizontal lockup, Stacked lockup, Shield/crest, and Wordmark, each in
  `2C` (navy+gold), `1C` (single-color), `K` (black), and `KI` (knockout/inverse) variants,
  as both SVG and PNG. Vector masters also supplied as `.ai`.
- **Fonts** — Gotham Black (heavy geometric sans) and Harbour Bold (heraldic wedge
  serif — the wordmark voice). The font files are not kept in this repo: Gotham loads
  from the club's Adobe Fonts project (`tokens/fonts.css`, CSS family `gotham`, Black is
  weight 800) and Harbour is set from the files the club holds; on the web the wordmark
  is always the SVG.
- **Photography** — `intro-to-rugby.jpg`, a matchday social poster (navy/gold treatment
  over a real game photo).

No codebase, Figma, or website URL was provided — the system is reconstructed from the
brand assets and the tone brief. See **Caveats** at the bottom.

---

## CONTENT FUNDAMENTALS — how Gotham Knights writes

**Voice:** Bold, warm, a little cheeky. Confident without being macho. Welcoming without
being soft. The club has swagger *and* a door held open.

- **Person:** Speaks as **"we"** (the club, the squad) and addresses the reader as
  **"you."** Recruitment and community copy is direct and invitational: *"Come find your
  pack."* / *"No experience? Perfect."*
- **Casing:** Headlines and hype are frequently **ALL CAPS** in the athletic font
  (`INTRO TO RUGBY`, `COME PLAY`). Body and professional copy use sentence case. Eyebrows
  / labels are all-caps with wide tracking.
- **Sentence length:** Short, punchy lines for hype. Fuller, plain-spoken sentences for
  the professional register (grants, sponsors) — still warm, never corporate-stiff.
- **Cheek:** A wink is welcome — *"Built different. Tackle harder."* — but it never
  punches down and never leans on tired gay-bar clichés.
- **Inclusivity is structural, not decorative:** pronoun-friendly, "all bodies / all
  levels" framing, explicit welcome. Say *queer* and *LGBT* plainly and proudly.
- **Emoji:** Avoid in formal/professional contexts. Sparingly acceptable in social copy,
  but the brand's energy comes from type and color, not emoji. No emoji in UI.
- **Numbers & stats:** Set in the mono face for scores, kit numbers, fixtures — gives a
  scoreboard feel.

**Example voice — loud:**
> COME PLAY. / Tuesday nights, Wall Street. / No experience, no problem — bring yourself.

**Example voice — professional:**
> Gotham Knights RFC is one of New York's longest-running inclusive rugby clubs. We field
> competitive sides while keeping our doors open to players of every background and skill
> level.

---

## VISUAL FOUNDATIONS

**Colors.** Two heroes: **navy `#0D1D41`** and **gold `#FEC526`** (sampled directly from the
crest). Navy is the anchor — backgrounds in loud mode, ink in professional mode. Gold is the
accent: CTAs, highlights, the signature underline rule. Neutrals are **warm** — a cream
`#FBF7EE` paper rather than cold white — which keeps the professional mode from feeling
clinical. A muted **Pride spectrum** exists as an accent palette only.

**Type.** Three voices:
- **Hanken Grotesk** (heavy geometric-humanist sans) — the **default headline voice** *and*
  body/UI. Strong, modern, takes itself seriously: h1–h4 and SectionHeading render in
  Hanken extrabold. Carries long-form copy, forms, captions too.
- **GothamHTF Black** (heavy geometric sans) — the athletic loud voice. ALL-CAPS hype
  headlines, posters, numbers-on-jerseys energy. Use tight leading and stack lines.
- **Harbour** (wedge serif) — the **logo wordmark only** (`--font-wordmark`). Sturdy, a
  touch gothic. It is *not* a display or accent font: there is no general "big quote" slot.
  Loud moments use GothamHTF; headings use Hanken extrabold. Keeping Harbour to the
  wordmark stops it reading "ye olde" and keeps the lockup special.
- **Spline Sans Mono** — scores, fixtures, kit numbers, data.

**Spacing & layout.** 4px base scale. Generous gutters; confident, blocky compositions
that echo a crest/banner. Content sits on strong horizontal bands rather than floaty cards.

**Backgrounds.** Three modes: (1) solid navy field, (2) warm paper, (3) full-bleed
matchday photography with a navy multiply/scrim and gold type over it (see the poster).
No noisy gradients, no purple. A faint paper texture is fine; loud mode stays flat navy.

**Borders.** The brand likes a **confident 2px stroke** (`--bw-base`) — gold or navy
outlines on cards, buttons, and the crest itself. Hairlines (1px) for quiet dividers.

**Corner radius.** Low and athletic — `6–10px` for most UI, `16px` for large feature
cards. Pills only for chips, tags, and avatars. Nothing is bubbly.

**Shadows.** Restrained and **navy-tinted** (cool, not gray). Cards lift with a soft
`--shadow-md`; a special `--shadow-gold` glow is reserved for the primary CTA on dark.

**Cards.** Flat fill + 2px border *or* soft navy shadow — rarely both. On paper: white fill,
hairline/2px border, `--shadow-sm`. On navy: lifted navy-600 panel with a subtle light
top inset. A gold top-rule or left-accent can mark a featured card (used sparingly).

**Hover.** Buttons/links shift toward the lighter tint (gold-400) or gain a subtle lift;
ghost elements fill with a low-opacity wash. **Press** nudges to the darker tint
(gold-600) and a 1px translate-down — never a cute bounce.

**Motion.** Quick and decisive: `120–320ms`, standard ease `cubic-bezier(.2,0,0,1)`.
Fades and short slides; no spring/bounce on UI. Respect `prefers-reduced-motion`.

**Transparency & blur.** Used lightly — a navy scrim over photos, a translucent sticky
header on scroll. Not a frosted-glass-everything aesthetic.

**Focus.** Always visible: 3px gold outline, 2px offset.

---

## ICONOGRAPHY

The brand has **no proprietary icon font**. Its signature "icons" are the **crest, shield,
and dragon** — used as badges, watermarks, and bullet marks, not decorative line icons.

- **UI icons:** use **Lucide** (https://lucide.dev) via CDN — a clean, modern 2px stroke
  set that matches the brand's confident `--bw-base` stroke. Consistent 24px grid, round
  caps/joins. This is a documented **substitution** (no club icon set exists) — swap if the
  club adopts an official set.
- **Brand marks:** the shield/crest SVGs in `assets/logos/` double as the strongest
  iconographic element — use the shield as a favicon, bullet, loading mark, or section
  divider.
- **Emoji / Unicode:** not used as UI icons. Avoid.
- **Stroke weight:** 2px (Lucide default) to echo the brand stroke; fill style only for
  the crest.

---

## VISUAL FOUNDATIONS INDEX (Design System tab)

Specimen cards live in `guidelines/` and render in the **Design System** tab, grouped:
**Colors**, **Type**, **Spacing**, **Brand**, **Components**, plus the **Website** UI kit
and **Slides**.

---

The club's design system and its published brand guidelines, in one repo. GitHub Pages
serves the root, so the system is browsable and linkable at **https://style.gotham.rugby**.

## INDEX / MANIFEST

This repo is both the design system and the published brand guidelines; one entry point serves both.

| Path | What it is |
| --- | --- |
| `index.html`, `site.css`, `site.js` | The club brand guidelines page. |
| `drag/` | The Drag / Showtime register: its design guide (`index.html`, `drag.css`, `img/`), `readme.md`, `SKILL.md`, specimen cards, the show poster, the Next Generation template, motion pieces and the render harness. |
| `styles.css` | The single stylesheet consumers link. Imports the club tokens, then the show's `formats.css`, `motion.css` and `drag.css`. Linkable at `https://style.gotham.rugby/styles.css`. |
| `tokens/` | CSS custom properties: colors (with `loud` and `drag` themes), typography, spacing, base utilities, patterns, webfonts, output formats, motion. |
| `assets/` | `logos/` (every mark, SVG + PNG, plus `gotham-knights-logos.zip`), `img/`, `originals/` (the club's untouched exports). |
| `components/` | Nine React primitives, each with `.jsx`, `.d.ts`, `.prompt.md` and a specimen card. Compiled to `_ds_bundle.js`. |
| `ui_kits/website/` | A click-through marketing-site kit built from the primitives. |
| `guidelines/` | Specimen cards for colors, type, spacing, brand and patterns. |
| `docs/` | The print brand book, the Pantone swatch card, the pattern studies and the letterhead (`letterhead.html`, with a print-ready `letterhead.pdf`). |
| `README.md`, `SKILL.md` | This guide and its agent-skill wrapper. |

## Fonts

No font files are in this repo.

- **Gotham Black** comes from the club's Adobe Fonts web project, imported in `tokens/fonts.css` (CSS family `gotham`; Black is weight 800).
- **Hanken Grotesk** and **Spline Sans Mono** come from Google Fonts, imported in `styles.css`.
- **Harbour** (the wordmark and the show's marquee face) is not served as a webfont. On the web the wordmark is always the SVG; the Drag guide's marquee specimens are rendered images. Pages that set Harbour as live text fall back to Georgia.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000, /drag/, /guidelines/colors-brand.html, /ui_kits/website/ …
```

## Claude Design

The "Gotham Knights Rugby" design system in Claude is synced **from this repo** (Sync from GitHub on its page, or from Claude Code). After changing tokens, components or assets here, re-sync it. Component cards are the `.card.html` files; their first-line `@dsCard` comment names and groups them.

## Updating the site

Push to `main` and GitHub Pages publishes. Hex values shown on the guide pages are written by hand, so a token change needs the matching swatch updated in `index.html` or `drag/index.html`. When logos change, rebuild the zip:

```sh
cd assets && rm gotham-knights-logos.zip && zip -r gotham-knights-logos.zip logos -x 'logos/crest-watermark.svg'
```

## Rendering the show's motion pieces

```sh
cd drag/render && npm install
node rec.cjs --in ../motion/idle-loop.html --size 1920x1080 --fps 30 --secs 24 --verify --out dist/idle-loop.mp4
```

The custom domain is set by `CNAME`; `robots.txt` and `sitemap.xml` cover search.

### Components
(See `components/` — each has `.jsx`, `.d.ts`, `.prompt.md`, and a card.)
Button, Badge, Tag, Card, Crest, Input, Stat, SectionHeading, FixtureRow.

### Patterns
Brand textures as drop-in utility classes (in `tokens/patterns.css`, shipped via
`styles.css`). **LOUD by nature — use sparingly: borders, bands, accents, single
moments. Never wallpaper a whole layout.** Specimen cards live in `guidelines/`
under the **Patterns** group.

- `.gk-checker` — the checkerboard. Loudest move; **borders & frames only**
  (tile size via `--gk-checker-size`).
- `.gk-stripes` — Sideline Stripes: bold diagonal bars for accent edges, footers, CTAs
  (bar width via `--gk-stripe-size`).
- `.gk-halftone-fade` — Fine Fade: quiet navy dots on paper, diagonal dissolve. Clubhouse default.
- `.gk-halftone-duotone` — Loud Duotone: gold dots on navy. Matchday / socials.
- `.gk-halftone-spotlight` — focal dot ring behind a face or kit number
  (move focus with `--gk-spot-x` / `--gk-spot-y`).
- `.gk-crest-watermark` — one faint shield on a navy panel, bled off the right edge
  (asset: `assets/logos/crest-watermark.svg`).
- `.gk-pinstripe` — the whisper: a fine 10%-navy pinstripe for professional docs.
  Pair with `.gk-pride-rule` (base.css) as the one deliberate Pride moment.
