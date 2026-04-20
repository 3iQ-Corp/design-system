---
name: 3iq-brand
description: Applies 3iQ Corp's official brand tokens (colors, typography, gradients, voice, disclaimers) to any 3iQ-branded artifact — slides, documents, emails, social cards, web pages, posters, diagrams, charts. Use when producing anything that represents 3iQ externally or internally. Pulls from the canonical design system at ~/Sites/design-system (locally) or https://github.com/3iQ-Corp/design-system.
---

# 3iQ Brand Styling

## Overview

3iQ is a Toronto-based institutional digital asset manager (founded 2012, Monex/Coincheck Group). The brand is **muted warm neutrals on dark backgrounds**, with gradients doing most of the visual work and a single yellow accent. It is **not** "navy + gold + green" — treat anything that looks generic-fintech as a bug.

**Canonical source:** `~/Sites/design-system/` if cloned locally, otherwise <https://github.com/3iQ-Corp/design-system>. Key files: `AGENTS.md` (governance and rationale), `tokens/tokens.json` (full machine-readable spec), `reference/gradients.md` (gradient rationale). Read those first if producing anything non-trivial; the values below are an inlined subset for quick application. When the local clone is present, prefer it — it may be ahead of what's pushed to GitHub.

**Keywords:** 3iQ, 3iq, ThreeIQ, branding, visual identity, brand colors, brand typography, Denton, Neue Haas, forge, growth, warmth, institutional, digital assets.

## Non-negotiable rules

### Default theme is DARK
- Background: `#080E23` (deep navy, nearly black)
- Text: `#FDFCFA` (warm off-white)
- Prefer the **Forge gradient** over flat navy for hero surfaces.

### Color swatches (use only these)
| Role | Hex | Notes |
|---|---|---|
| Dark bg | `#080E23` | Primary background |
| Dark surface | `#4C3D32` | Warm brown secondary surface |
| Light bg | `#FDFCFA` | Off-white |
| Light surface | `#F8F7F5` | Subtle tint |
| Sand (brand) | `#D6D5BF` | Muted warm neutral — primary brand color |
| Sky | `#C9D7D7` | Muted cool neutral |
| Cream | `#EAE9DD` | Light warm neutral |
| Sage | `#B8C6C6` | Muted green-grey |
| Yellow | `#EDC576` | **Primary accent** — eyebrows, rules, highlights. Not "gold." |
| Green | `#4C9478` | CEF / positive / accent — NOT the default CTA color |
| Orange | `#E6704E` | Multi-crypto / warmth accent |
| Alert negative | `#DA3B3B` | Errors only |

**Never introduce new hex codes.** If a need arises (chart palette, new product gradient), derive from the above and ask the user to confirm before committing.

### Fund-theme colorways
When the artifact is tied to a specific fund family, apply the matching theme:

| Fund type | Gradient | Accent |
|---|---|---|
| ETF products | **Forge** (`#080E23` → `#4C3D32`) | Yellow `#EDC576` |
| CEF products | **Growth** (`#1E3239` → `#02393C`) | Green `#4C9478` |
| Multi-crypto products | **Warmth** (`#1C0E1D` → `#3A1717`) | Orange `#E6704E` |

### Gradients
Every gradient must read as **smooth** — no banding. In modern CSS, use `linear-gradient(in oklab ...)`. For PPTX, email, and older renderers, use the pre-computed 3-stop sRGB form where the middle stop was calculated in OKLAB space:

- **Forge:** `linear-gradient(180deg, #080E23 0%, #28252C 50%, #4C3D32 100%)`
- **Growth:** `linear-gradient(180deg, #1E3239 0%, #14363A 50%, #02393C 100%)`
- **Warmth:** `linear-gradient(180deg, #1C0E1D 0%, #2B131B 50%, #3A1717 100%)`
- **Button (dark bg):** `linear-gradient(to right, #FDFCFA 15%, #E9E8DC 57%, #D6D5BF 100%)` — CTA buttons on dark use this, NOT solid green.

### Typography

- **Headlines (display, H1–H5):** **Denton** — serif, light weight (300), tight leading (`1em`–`1.1em`), `0.01em` letter-spacing.
- **Body, UI, H6, buttons, eyebrows:** **Neue Haas Grotesk Display** — sans, body weight is **500 (medium)**, not 400.

**Fallback policy — always state the fallback to the user when rendering:**

| Target | Denton fallback | Neue Haas fallback |
|---|---|---|
| Web (modern) | `Palatino Linotype, Georgia, serif` | `Inter, system-ui, sans-serif` |
| HTML email | `Georgia, "Times New Roman", serif` | `Arial, Helvetica, sans-serif` |
| PowerPoint / Word | `Times New Roman` | `Arial` |
| PDF (embedded) | Local `DentonVariableTest-VF.otf` (placeholder — real Denton-Light is licensed) | Local sans until Neue Haas licensed |

**Caveat to flag:** The font files in the repo's `assets/fonts/` are placeholders, not the true licensed brand fonts. Renders will be close but not pixel-identical to 3iq.io. Mention this when producing rendered output.

### Logo
- Source: `assets/logos/3iq_logo.svg` in the design-system repo ([local](~/Sites/design-system/assets/logos/3iq_logo.svg) or [raw on GitHub](https://raw.githubusercontent.com/3iQ-Corp/design-system/main/assets/logos/3iq_logo.svg))
- Clearspace = height of the "Q"
- Minimum width 80px
- Recolor only via `currentColor` (the SVG uses `fill="currentColor"` to inherit from CSS `color`)
- Never stretch

### Voice
- Confident, precise, institutional. Measured language: "pioneering," "forging," "institutional-grade," "regulated."
- Lead with the fact or milestone; context follows.
- Name specific regulators, exchanges, instruments. Cite firsts with dates.
- Prefer "digital assets" over "crypto" in institutional contexts.

**Do NOT:**
- Emojis in marketing copy
- Crypto-native slang (HODL, WAGMI, moon, ape)
- Exclamation marks
- Hype adjectives (revolutionary, game-changing, disruptive, insane)
- All-caps headlines (except short eyebrows)

Signature phrases available for reuse:
- "Forging new paths in alternative investing."
- "Institutional-grade digital asset investments."
- "Pioneering digital asset investment management since 2012."

### Disclaimer
When producing anything that looks like marketing, include this verbatim unless the user explicitly opts out:

> This communication is for informational purposes only and does not constitute investment advice or an offer to sell or solicitation to buy any security.

Footer for dated/public-facing material:

> © 2026 3iQ Corp. All rights reserved. Investing in digital assets involves risks. Please read all offering documents carefully before investing.

## Composition with other skills

This skill is designed to compose with format-producing skills:

- **With `pptx`:** override the skill's palette-invention step — use 3iQ tokens instead. Fonts: Times New Roman (headings), Arial (body). Apply gradients via `srgb` stop form. Dark theme default.
- **With `docx`:** Arial body at 500-equivalent weight (use "Medium" if available, else Regular). Times New Roman for headings. Light theme is acceptable for docs.
- **With `canvas-design` / poster / PDF:** dark theme default, Forge gradient backgrounds, yellow accent for single highlight element.
- **With `frontend-design` / HTML:** import `tokens/tokens.css` from the design-system repo (local clone, or https://raw.githubusercontent.com/3iQ-Corp/design-system/main/tokens/tokens.css) or inline its `:root` block. Use `var(--bg)`, `var(--cta-text)`, `var(--gradient-forge)`, etc. Apply fund themes via `data-fund-theme="etf|cef|multi-crypto"` wrapper.
- **With `internal-comms`:** use voice rules above; relax disclaimer requirement for internal-only pieces.

## When uncertain

If the user asks for something tokens don't cover (chart palette, new product-line gradient, icon style), **ask before inventing**. Propose a value derived from the existing palette and wait for confirmation. If approved, the user should update `tokens.yaml` / `.json` / `.css` in the design-system repo so the decision is captured in the canonical source.

## Out of scope

- React/Vue component library — not yet
- Icon set — not yet (use Lucide as placeholder)
- Motion/animation tokens — not yet
- Chart palettes — not yet (derive from brand/fund-theme and flag)
