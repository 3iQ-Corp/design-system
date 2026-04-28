# #MakeItMatter Design System

Single source of truth for **3iQ Corp's #MakeItMatter employer brand campaign** — colors, typography, spacing, gradients, logos, highlights, fonts, voice, and the visual language of the campaign. Built for both designers and LLM-driven rendering so we can produce on-brand employer brand content, careers pages, social posts, internal communications, and merchandise without re-inventing brand decisions each time.

> **Campaign statement:** *#MakeItMatter — what you do here matters.*

#MakeItMatter is 3iQ's employer brand initiative (launched February 2026). It complements the corporate brand — it does not replace it. The campaign is grounded in six core values: **Lead with Kyodo, Stay Humble, Elevate Others, Innovate & Adapt, Offer Radical Candour, Follow Through** — each tied back to the word "matter."

---

## Sources

All tokens, fonts, and structure in this project are derived from:

- **MIM Guidelines PDF** — `3iQ-MakeItMatter-Guidelines-v2.pdf` (v2.0, February 2026) — the canonical color palette, gradient set, logo rules, highlight assets, voice guidelines, and application examples.
- **Corporate Design System** — [`3iQ-Corp/design-system`](https://github.com/3iQ-Corp/design-system) — typography, spacing, and component patterns are inherited from the corporate brand.

Nothing in this project is invented. If you find a decision that doesn't trace back to one of those two sources, flag it — it's a bug.

---

## Index

| File | What it is |
|---|---|
| `README.md` | This file — campaign overview, content + visual fundamentals |
| `SKILL.md` | Agent-Skills-compatible entry-point for agents |
| `INSTALL.md` | Install instructions for opencode |
| `colors_and_type.css` | Drop-in semantic CSS. Re-exports `tokens/tokens.css`. |
| `tokens/tokens.yaml` | Human-readable source of truth for all tokens |
| `tokens/tokens.json` | Machine-readable mirror |
| `tokens/tokens.css` | CSS custom properties |
| `tokens/tokens.schema.json` | JSON Schema for validation |
| `reference/logo.md` | Logo rules — MIM logo + corporate wordmark |
| `reference/gradients.md` | When to use Forge vs Growth vs Warmth vs Sky vs Golden vs Platinum |
| `reference/highlights.md` | Hand-drawn highlight usage guidelines |
| `reference/typography/` | Live HTML specimens (dark, light, editorial, forge-hero) |
| `fonts/` | Licensed `.woff2` (Denton-Light + Neue Haas Grotesk Display) |
| `assets/logos/` | MIM logos (Navy/White SVG+PNG) + 3iQ corporate logo |
| `assets/highlights/` | 132 hand-drawn highlight PNGs (12 shapes x 11 colors) |
| `assets/3iq_favicon.png`, `assets/3iq_webclip.png` | Favicons |
| `preview/` | Small HTML cards for the Design System tab |
| `ui_kits/website/` | React/JSX careers page components |

---

## Content fundamentals

### Voice
Warm, purposeful, human. Speaks to what drives people at 3iQ — purpose, collaboration, growth, and impact. More personal than the corporate brand voice, but still grounded and authentic. Never performative or hollow.

### Tone
First-person-plural ("we"). Speaks TO prospective and current team members — not investors. Encouraging but never syrupy.

### Casing
- **Headlines:** Sentence case (`What you do here matters`). Never all-caps except for eyebrows.
- **Eyebrows / UI labels:** `UPPERCASE` with `0.04em` letter-spacing.
- **Body, buttons:** Sentence case.

### Signature phrases
- "If you're driven by purpose, you're already one of us."
- "Celebrate those who raise others higher."
- "It's not just what we build, it's how we build it together."
- "We before me, always."
- "We don't wait for the future, we build it."

### Narrative lines (for highlights)
- "That what you do here **matters.**"
- "How you work **matters.**"
- "How you treat others **matters.**"
- "And the difference we make together, really **matters.**"

### Do
- Lead with purpose and values.
- Use the #MakeItMatter hashtag consistently.
- Pair the MIM logo with approved messaging.
- Vary highlight styles within a document for a natural feel.
- Complement the corporate brand — never replace it.
- **Ask the user** before producing any visual artifact: light or dark background? What format/medium? What messaging emphasis? Gather specific design preferences to ensure a clean, on-target result.

### Don't
- **No emojis** in employer brand content.
- **No exclamation marks** in headlines.
- **No hype language** — "amazing culture", "work hard play hard", "rockstar", "ninja".
- **No all-caps headlines** — eyebrows only.
- **No word spaces** in #MakeItMatter — it is one word.
- **No distortion** of the logo — never remove the underline or hashtag.
- **No synthetic/estimated rendering of hand-drawn elements.** Never use CSS, SVG, or any other method to approximate the hand-drawn highlights. Always use the original artist-created PNG files from `assets/highlights/`. The visual integrity of the hand-drawn artwork is non-negotiable.
- **No crossing out words with highlight PNGs.** The PNG files from `assets/highlights/` must never be positioned, scaled, or layered so they cross out, strike through, or fully overlay text. Highlights sit beneath/behind the word. A slight overlap with the baseline is acceptable; covering the middle or top of the word is not. Text must always render on top and remain fully legible.

---

## Visual foundations

### Palette — MIM campaign colors

**Core:**
- **Navy `#080E23`** — primary ink / dark backgrounds.
- **Off White `#FDFEFA`** — primary paper / light backgrounds.

**Accent:**
- **Neutral `#EAE7E2`** — soft warm grey.
- **Gold `#D6D5BF`** — primary brand accent.
- **Platinum `#B8C6C4`** — cool silver-green.
- **Yellow `#EDC577`** — eyebrows, accent bars, highlights.
- **Green `#4C9478`** — Growth theme accent.
- **Orange `#E6704E`** — Warmth theme accent.

**People & Culture additions (restricted use):**
- **Fuchsia `#ED5377`**
- **Mauve `#9269AE`**
- **Blue `#2EA1AE`**

### Gradients

Six named gradients, three dark (hero) and three light (card/section):

| Name | Gradient | Accent |
|---|---|---|
| **Forge** | `#080E23 -> #4C3D32` | Yellow |
| **Growth** | `#1E3239 -> #02393C` | Green |
| **Warmth** | `#1C0E1D -> #3A172A` | Orange |
| **Sky** | `#C9D7D7 -> #F4ECE5` | — |
| **Golden** | `#D6D5BF -> #F8F7F5` | — |
| **Platinum** | `#B8C6C4 -> #F8F7F5` | — |

### Typography
Inherited from the corporate design system:
- **Display / H1-H5:** Denton Light (300). Serif.
- **H6, body, UI, buttons, eyebrows:** Neue Haas Grotesk Display. Sans. Body weight is **500 (Medium)**.
- **Scale:** display `7rem` . h1 `5rem` . h2 `4rem` . h3 `3rem` . h4 `2.5rem` . h5 `2rem` . h6 `1.5rem` . body `1rem` . small `0.875rem`.

### Hand-drawn highlights
- **12 unique shapes**, each in **11 colour variants** = **132 PNG assets**.
- Use to emphasize the word **"matters"** in campaign copy.
- Vary the highlight style within a document for a natural look.
- **Always use the original PNG files** from `assets/highlights/`. Never approximate, redraw, or simulate these with CSS, SVG, gradients, or any other method. The hand-drawn artwork was created by artists and must be reproduced exactly as provided.
- **Position highlight PNGs beneath or behind text** — they should underline or accent, never overwrite or cross out. The actual PNG files can slightly overlap the bottom of letterforms but must never fully cover or strike through the word. Text always renders on top.
- Full rules: `reference/highlights.md`.

### #MakeItMatter logo
- Stylised `#MakeItMatter` text with hand-drawn underline beneath "Matter".
- **One colour only:** Navy `#080E23` or White `#FDFEFA`.
- Clearspace = height of the hashtag (#).
- Never remove the underline, hashtag, or add word spaces.
- Full rules: `reference/logo.md`.

---

## Values

| # | Value | MIM Expression |
|---|---|---|
| 01 | Lead with Kyodo | We before me. Collaboration makes it matter. |
| 02 | Stay Humble | Curiosity, learning, and listening make our work matter. |
| 03 | Elevate Others | Recognition and empowerment show others matter. |
| 04 | Innovate & Adapt | Our ability to lead makes us matter. |
| 05 | Offer Radical Candour | Honest feedback makes growth matter. |
| 06 | Follow Through | Delivering on promises proves it matters. |

---

## Contacts

| Name | Title | Email |
|---|---|---|
| Kerry Lower | VP, People & Culture | klower@3iq.io |
| Nathalie Burdet | Global Head of Marketing | NathalieB@3iq.io |
