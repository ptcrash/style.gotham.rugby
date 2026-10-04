# Gotham Knights RFC — Design System

The club's design system and its published brand guidelines, in one repo. GitHub Pages
serves the root, so the system is browsable and linkable at **https://style.gotham.rugby**.

- **Brand guidelines** — `/` (`index.html`): the club's logos, colors, type and voice.
- **Drag Show design guide** — `/drag/` (`drag/index.html`): the show's register, for show artwork only.
- **The system** — `styles.css` (one entry point), `tokens/`, `assets/`, `components/`, `ui_kits/`, `guidelines/`.

## Layout

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
| `docs/` | The print brand book, the Pantone swatch card and the pattern studies. |
| `readme.md`, `SKILL.md` | The system's own guide and its agent-skill wrapper. Read `readme.md` first. |

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
