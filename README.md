# style.gotham.rugby

The Gotham Knights RFC brand guidelines as a single-page static site, hosted on GitHub Pages.

No build step: `index.html` is the whole guide.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The guide. Every section is plain HTML. |
| `site.css`, `site.js` | Page layout, click-to-copy, section highlighting, mobile menu. |
| `styles.css`, `tokens/` | The design system's tokens and `.gk-*` utilities, copied from `gotham-rugby-design-system`. Only the webfont source differs (see Fonts). |
| `assets/logos/` | Every logo file the guide links to, plus `assets/gotham-knights-logos.zip`. |
| `assets/img/` | The photo-treatment example. |
| `CNAME` | Custom domain for GitHub Pages. |
| `drag/` | The Drag Show design guide (`/drag/`), a separate page in the show's register. `drag/drag.css` re-skins the shared shell; `tokens/drag.css` is the show's token file from `gotham-drag`. Not linked from the club guide. |

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Fonts

No font files are hosted here.

- **Gotham Black** (loud headlines) comes from the club's Adobe Fonts web project, imported in `tokens/fonts.css`. The CSS family is `gotham`; Black is weight 800.
- **Hanken Grotesk** and **Spline Sans Mono** come from Google Fonts, imported in `styles.css`.
- **Harbour** (the wordmark face) is not a webfont here. The guide shows it with the wordmark SVG.

## Updating

The source of truth is the `gotham-rugby-design-system` repo (`Gotham Knights Brand Guidelines.html`, `tokens/`, `assets/`).

- **Tokens or patterns changed:** copy `styles.css` and `tokens/` over from the design system, but keep this repo's `tokens/fonts.css` and the `--font-athletic` line in `tokens/typography.css`. Hex values shown on swatches in `index.html` are written out by hand, so update those too.
- **Logos changed:** replace the files in `assets/logos/`, then rebuild the zip:
  ```sh
  cd assets && rm gotham-knights-logos.zip && zip -r gotham-knights-logos.zip logos -x 'logos/crest-watermark.svg'
  ```
- **Wording changed:** edit the matching section in `index.html`.

## Deploying

GitHub Pages serves the `main` branch from the repo root (Settings → Pages → Deploy from a branch). Pushing to `main` publishes.

The custom domain needs a DNS `CNAME` record for `style` pointing at `<owner>.github.io`.
