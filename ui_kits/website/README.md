# Website UI Kit — Gotham Knights RFC

A click-through recreation of the club's marketing site, built entirely from the
design-system primitives (no bespoke components re-implemented here).

## Screens
- **HomeScreen** — full-bleed matchday hero (photo + navy scrim + gold athletic
  headline), gold stats band, "why join" featured cards, athletic CTA strip.
- **FixturesScreen** — filterable fixtures & results list using `FixtureRow` + `Tag`.
- **JoinScreen** — two-column recruitment form (`Input`, `Tag`, `Button`, `Card`) with a
  success state.

## Run
Open `index.html`. It loads `../../styles.css` and the compiled `../../_ds_bundle.js`,
then mounts the screens. Navigation is in-memory via `App.jsx` (sticky `SiteHeader`).

## Files
`index.html` · `App.jsx` (router) · `SiteHeader.jsx` · `SiteFooter.jsx` ·
`HomeScreen.jsx` · `FixturesScreen.jsx` · `JoinScreen.jsx`

Each `.jsx` pulls primitives from `window.GothamKnightsDesignSystem_c42f90` and exports
its component to `window` so sibling Babel scripts can compose them.

> Note: this is a recreation for prototyping — copy/fixtures are representative
> placeholders, not live club data.
