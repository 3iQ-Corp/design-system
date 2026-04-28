---
name: make-it-matter
description: Design, write, and render artifacts on brand for the 3iQ #MakeItMatter employer brand campaign. Use this skill whenever the user asks for anything related to #MakeItMatter — careers pages, employer brand content, social posts for talent attraction, internal communications, team culture materials, values messaging, or merchandise. Trigger on mentions of "#MakeItMatter", "Make It Matter", "employer brand", "3iQ careers", "3iQ culture", "3iQ values", or any of the six values (Lead with Kyodo, Stay Humble, Elevate Others, Innovate & Adapt, Radical Candour, Follow Through). Also trigger when the user is writing employer brand copy or building visual artifacts for talent/culture and context suggests 3iQ.
---

# #MakeItMatter brand skill

#MakeItMatter is 3iQ Corp's employer brand campaign (v2.0, February 2026). It complements the corporate brand — it does not replace it.

The campaign is grounded in six values: Lead with Kyodo, Stay Humble, Elevate Others, Innovate & Adapt, Offer Radical Candour, Follow Through. Each ties back to the word "matter."

Tone: warm, purposeful, human. Speaks to what drives people at 3iQ — purpose, collaboration, growth, and impact.

This skill wraps the #MakeItMatter design system repo. The paths referenced below are real files in the same repo as this file; read them before producing anything.

## Read order (do this first)

1. **`README.md`** — full campaign overview: voice, visual foundations, values, palette, gradients, highlights, logo rules. Source of truth.
2. **`reference/logo.md`** — MIM logo rules + corporate wordmark rules.
3. **`reference/gradients.md`** — when to pick Forge vs Growth vs Warmth vs Sky vs Golden vs Platinum.
4. **`reference/highlights.md`** — hand-drawn highlight usage guidelines.
5. **`colors_and_type.css`** — drop-in semantic stylesheet.
6. **`tokens/tokens.css`** — raw CSS custom properties.
7. **`tokens/tokens.json`** / **`tokens/tokens.yaml`** — machine-readable tokens.

For components (nav, hero, editorial, values grid, feature cards, CTA, footer), read `ui_kits/website/*.jsx`.

## Non-negotiables

### Logo
- **#MakeItMatter logo:** use only the committed SVG/PNG files. Navy on light, White on dark. One colour only.
- **Never** remove the underline, remove the hashtag, add word spaces, use accent colours on the logo, or distort it.
- **3iQ corporate logo** appears alongside — top-left of pages, footer. Full rules in `reference/logo.md`.

### Colors
- Core: Navy `#080E23` + Off White `#FDFEFA`.
- Accents: Neutral `#EAE7E2`, Gold `#D6D5BF`, Platinum `#B8C6C4`, Yellow `#EDC577`, Green `#4C9478`, Orange `#E6704E`.
- P&C only: Fuchsia `#ED5377`, Mauve `#9269AE`, Blue `#2EA1AE`.

### Gradients
- Six gradients. Default to Forge for general MIM content.
- Never mix two hero gradients on the same surface.

### Highlights — CRITICAL RULES
- 12 hand-drawn shapes x 11 colors = 132 PNGs in `assets/highlights/`.
- Use to emphasize "matters" in copy. Vary style for natural feel.
- **ALWAYS use the original PNG files.** Never approximate, simulate, or redraw the hand-drawn highlights using CSS pseudo-elements, SVG shapes, gradients, border-radius hacks, or any other method. The artwork was created by artists and must be used exactly as provided. No exceptions.
- **The PNG highlight files must never be used to cross words out.** When placing the actual PNG files from `assets/highlights/`, they must sit beneath/behind the text — never overlaying or striking through it. A slight overlap with the bottom of letterforms is acceptable and looks natural; fully covering or obscuring the word is not. The text must always remain on top and fully legible.
- Full rules in `reference/highlights.md`.

### Typography
- Inherited from corporate design system: Denton Light (headings) + Neue Haas Grotesk Display (body, weight 500).
- Real `.woff2` files in `fonts/`.

### Voice
- Warm, purposeful, human. Purpose-driven, not hype-driven.
- **Never:** emojis, exclamation marks in headlines, hype language, word spaces in #MakeItMatter.
- Signature phrases: "If you're driven by purpose, you're already one of us." / "We before me, always." / "We don't wait for the future, we build it."

## Before producing any visual artifact — ASK THE USER

Before creating posters, social cards, web pages, emails, slides, or any visual output, always ask the user these questions first:

1. **Light or dark background?** (Forge gradient / cream / sky / platinum / white / custom)
2. **What format/medium?** (poster, social card, web page, email, slide, etc.)
3. **What size/dimensions?** (A3, A4, 1080x1080 social, etc.)
4. **Which values or messaging to feature?** (all six values, a specific subset, a specific campaign phrase)
5. **Any specific highlight colours or styles preferred?**

Gathering these details upfront prevents rework and ensures the output is clean and on-target.

## When in doubt
- Read `README.md` again.
- The `preview/` cards are a visual inventory of every pattern.
- If you're building a careers page, start from `ui_kits/website/*.jsx`.
- If you're placing highlights, use the actual PNGs. Never fake them.
