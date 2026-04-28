# Specimens

Self-contained HTML pages showing the #MakeItMatter typography, color,
and layout in context. All values resolve to `var(--...)` from
`tokens/tokens.css` — no new brand decisions are introduced in this folder.

Start at [`index.html`](./index.html) for a navigable gallery.

## Type scale

| File | Theme | Background |
|---|---|---|
| `dark.html`  | `data-theme="dark"` (default) | `#080E23` |
| `light.html` | `data-theme="light"`          | `#FDFEFA` |

Each page walks down the scale: Display -> H1-H6 -> Eyebrow -> Body
(large / main / small) -> Weights -> Headline-body pairing. All copy
uses #MakeItMatter campaign messaging.

Shared styles: `_specimen.css`.

## Layout compositions

| File | Background | Pattern |
|---|---|---|
| `editorial-hero.html` | `gradient-golden` | Split headline + 2-column body with MIM messaging |
| `values-grid.html`    | `gradient-golden` | Intro + 6-column values grid (01-06) |
| `feature-cards.html`  | `gradient-sky`    | Intro + 2-up value cards with MIM expressions |
| `forge-hero.html`     | `gradient-forge`  | Dark hero with #MakeItMatter campaign messaging |

Shared styles: `_layouts.css`.

## Font caveat

Both stylesheets register `Denton` and `Neue Haas Grotesk Display`
against the `.woff2` files in `fonts/`. These are the same fonts used
by the corporate 3iQ design system.
