---
name: gotham-knights-design
description: Use this skill to generate well-branded interfaces and assets for Gotham Knights Rugby Football Club (NYC's LGBT rugby club), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Gotham Knights RFC — bold, warm, a little cheeky. Navy + gold heraldry; Pride
  as a deliberate accent, never rainbow-everything.
- **Two registers:** *Loud/Matchday* (navy field, gold GothamHTF all-caps) and
  *Professional/Clubhouse* (warm paper, modern Hanken headings). Toggle dark mode with
  `data-theme="loud"`.
- **Entry point:** link `styles.css` (it `@import`s all tokens + webfonts). Font files are
  not in the repo: Gotham Black comes from Adobe Fonts (family `gotham`, 800); Harbour is
  the wordmark SVG on the web.
- **Drag Show:** the show's register lives in `drag/` (own `readme.md` and `SKILL.md`);
  apply it with `data-theme="drag"`. For club work ignore it.
- **Tokens:** `tokens/` — colors, typography, spacing, fonts, base utilities.
- **Components:** `components/<Name>/` — Button, Badge, Tag, Card, Crest, Input, Stat,
  SectionHeading, FixtureRow. Compiled to `_ds_bundle.js`, exposed on
  `window.GothamKnightsDesignSystem_c42f90`.
- **UI kit:** `ui_kits/website/` — marketing site recreation.
- **Assets:** `assets/logos/` (crest, lockups, wordmarks — SVG + PNG), `assets/img/`.
- **Published guide:** https://style.gotham.rugby (this repo's `index.html`).
