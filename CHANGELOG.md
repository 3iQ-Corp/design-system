# Changelog

Notable changes to the 3iQ design system. The format loosely follows
[Keep a Changelog](https://keepachangelog.com/). Because tokens are
consumed by LLMs and rendering scripts, every change that could affect
rendered output should land here with an explanation of the **decision**,
not just the diff.

## [Unreleased]

### Changed — smoothness policy for all gradients
- **All gradient tokens now resolve to OKLAB interpolation** in modern
  browsers and a perceptually-eased sRGB three-stop fallback elsewhere.
  This fixes visible banding seen on tall `card_sky` and `card_cream`
  surfaces when interpolated in straight sRGB.
- `tokens.css` declares each `--gradient-<name>` as the sRGB fallback at
  `:root`, then overrides inside
  `@supports (background: linear-gradient(in oklab, red, blue))`.
- `tokens.yaml` and `tokens.json` now publish each gradient as an object
  with keys `direction`, `oklab`, `srgb`, `stops` — **this is a
  breaking change for consumers that read `tokens.gradient.forge` as a
  string.** Migration: read `tokens.gradient.forge.oklab` (for CSS) or
  `tokens.gradient.forge.srgb` (for PPTX/email).
- `reference/gradients.md` rewritten to document the policy and the
  two-form publication.
- `tokens/tokens.schema.json` updated to accept the new gradient object
  shape.

### Added
- `tokens/tokens.schema.json` — JSON Schema describing the shape of
  `tokens.json`. Referenced from `tokens.json`'s `$schema` key so editors
  can validate on save.
- `--pad-v-*` / `--pad-h-*` custom properties in `tokens.css`, mirroring
  `tokens.padding.*` in YAML/JSON so CSS consumers can reach the brand's
  section rhythm directly.
- Semantic tokens `--border-muted` and `--rule-muted` (25% opacity of the
  theme's `--border` / `--rule`) to replace one-off `rgba(…)` literals in
  downstream code.
- `reference/README.md` index.
- `reference/typography/` — rendered HTML specimens for type scale (light
  + dark) and four layout compositions (editorial hero, numbered grid,
  feature cards on sky gradient, forge hero on the dark ETF gradient).
- `scripts/check-tokens.sh` — sanity check that every swatch in
  `tokens.yaml` also appears in `tokens.json` and `tokens.css`.
- This `CHANGELOG.md`.

### Changed
- **Fund-theme overrides now also set `--rule`** (previously only
  `--bg-gradient` and `--accent`). Rules, eyebrows, and ticker badges on
  ETF / CEF / multi-crypto surfaces now correctly track the themed
  accent colour.
- Logo `assets/logos/3iq_logo.svg` now declares `fill="currentColor"` so
  consumers can tint it via CSS `color`. Matches `AGENTS.md`'s rule.
- Disclaimer footer copyright year updated from 2024 → 2026.
- Specimen HTML no longer contains hardcoded hex colours or `rgba()`
  literals. Check-mark and icon SVGs use `currentColor` + token-driven
  classes so they follow fund themes.
- `_specimen.css` and `_layouts.css` now `@import` a shared `_base.css`
  (removes duplicated `@font-face` declarations and body reset).

### Fixed
- `tokens.json`'s `$schema` pointer is no longer a dead link — the
  referenced file now exists.

## [2026-04] Rebuild from live 3iq.io Webflow stylesheet

- Tokens reset to match the live 3iq.io stylesheet as of April 2026.
- Added fund-theme colorways (`etf`, `cef`, `multi_crypto`) mapped to
  Forge / Growth / Warmth gradients.
- Recorded voice, product taxonomy, and known firsts in `tokens.yaml`.

## [Initial] Bootstrap

- Initial design-system skeleton with tokens, brand assets, and
  `AGENTS.md` guide for LLM consumers.
