---
name: 3iq-brand
description: Design, write, and render artifacts on brand for 3iQ Corp — an institutional digital-asset manager (ETFs, CEFs, multi-crypto funds). Use this skill whenever the user asks for anything that should look or sound like 3iQ — marketing pages, product/fund pages, investor decks, one-pagers, press releases, social posts, email, blog posts, ad creative, slides, or UI mockups. Trigger on mentions of "3iQ", "3iq.io", Forge/Growth/Warmth gradients, Denton or Neue Haas fonts, or any 3iQ fund (Bitcoin ETF, ETH Staking ETF, Solana Staking ETF, QMAP, etc.). Also trigger whenever the user is writing copy or building a visual artifact for a digital-asset manager and context suggests 3iQ — even if they don't say the name explicitly.
---

# 3iQ brand skill

3iQ Corp is a Toronto-based institutional digital-asset manager (founded 2012, now part of Monex/Coincheck Group). The brand promise is **"Forging new paths in alternative investing."**

Tone: confident, precise, institutional. Digital assets are a legitimate asset class for traditional allocators — no crypto-native slang, no hype, no emojis in marketing copy. Lead with the fact, let it stand.

This skill wraps the canonical 3iQ design system repo. The paths referenced below are real files in the same repo as this file; read them before producing anything.

## Read order (do this first)

1. **`README.md`** — full brand overview: content fundamentals (voice, tone, casing, firsts, do/don't), visual foundations (palette, gradients, typography, spacing, cards, buttons, animation), iconography rules. Source of truth — defer to it if anything below conflicts.
2. **`reference/logo.md`** — canonical wordmark rules. Read every time the output will show a logo.
3. **`reference/gradients.md`** — when to pick Forge (default/corporate/ETF) vs Growth (CEFs, yield) vs Warmth (multi-crypto, thematic). Short; read every time.
4. **`colors_and_type.css`** — drop-in semantic stylesheet. Classes: `.display .h1 .h2 .h3 .h4 .h5 .h6 .p .p-large .p-small .caption .eyebrow .ticker .rule-accent .hairline-rule`. Variables: `--fg1 --fg2 --bg1 --bg2 --bg-hero --hairline --accent-yellow --accent-green --accent-orange --serif-display --sans`. Link this in `<head>` and most typography + color is done for you.
5. **`tokens/tokens.css`** — raw CSS custom properties (swatches, scale, spacing, radii, gradients). `colors_and_type.css` re-exports from here; look here when you need primitives directly.
6. **`tokens/tokens.json`** / **`tokens/tokens.yaml`** — same tokens in machine-readable form. Use these when injecting values into python-pptx, Jinja, or any non-CSS context. `disclaimer.standard` and `disclaimer.footer` live in `tokens.yaml`.

For components (nav, hero, feature grid, footer, CTA), read `ui_kits/website/*.jsx` — these are ready-made and correctly styled. Adapt, don't hand-roll, when building site-shaped artifacts.

## Non-negotiables

Check each before shipping — these are the things most easily gotten wrong.

### Fonts

- **Headlines (display, h1–h5):** Denton Light (300), serif. Tight leading, `0.01em` tracking, sentence case.
- **Everything else (h6, body, UI, buttons, eyebrows, tickers):** Neue Haas Grotesk Display, sans.
- **Body default weight is 500 (Medium), not 400.** Neue Haas looks under-weight at 400 on this palette.
- The site loads Light (300), Roman (400), and Medium (500) only. The Medium face is mapped to weights 500–700 so "semibold" feature titles still render; letterforms at 600+ look a touch lighter than a true Semibold cut.
- Real licensed `.woff2` files live in `fonts/`. Never substitute Inter, Roboto, Fraunces, or a system serif — the brand reads wrong without them. For email/print fallbacks the `tokens.yaml` spec is authoritative (`Palatino Linotype`/`Georgia` for serif; `Arial`/`Helvetica` for sans).

### Color

- Primary palette is muted warm neutrals: sand `#D6D5BF`, sky `#C9D7D7`, cream `#EAE9DD`, sage `#B8C6C6`. These are the identity.
- They sit on near-black `#080E23` (dark) or warm paper `#FDFCFA` (light).
- **Accent yellow `#EDC576`** is the only high-chroma color that appears regularly — rules, eyebrows, link underlines, ticker badges, Forge-gradient CTAs.
- Green `#4C9478` and orange `#E6704E` are **thematic accents**, not general-purpose. Reserve green for CEF/Growth surfaces, orange for multi-crypto/Warmth surfaces.
- The brand is **not** "navy + gold + green". If the output reads that way, step back and re-check against the palette.

### Gradients

- Hero sections and section starters default to a gradient, not flat color. Gradients are the brand's signature texture.
- Three hero gradients, one per product family:
  - **Forge** `linear-gradient(180deg, #080E23, #4C3D32)` — navy → warm brown. Yellow accent. ETF, corporate, default.
  - **Growth** `linear-gradient(180deg, #1E3239, #02393C)` — slate → teal. Green accent. CEF, yield.
  - **Warmth** `linear-gradient(180deg, #1C0E1D, #3A1717)` — plum → oxblood. Orange accent. Multi-crypto, thematic.
- Apply via `data-fund-theme="etf|cef|multi-crypto"` on a wrapper — the CSS swaps gradient + accent + rule color in one step.
- Never mix two hero gradients on the same surface. Never use a hero gradient as a card fill; use the `card_sand/sky/cream/sage` light tints for that.

### Logo

The canonical 3iQ wordmark SVG (use this verbatim — never redraw or approximate):

```svg
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 96 30">
  <rect x="60.48" y="10.57" width="3.76" height="17.7"/>
  <path d="M52.76,14.44h0c2.16-.99,3.33-3,3.33-5.75,0-4.3-3.63-7.19-9.04-7.19s-9,3.3-9.04,8.04v.37s3.79,0,3.79,0v-.36c.04-2.72,2.16-4.54,5.28-4.54s5.09,1.56,5.09,3.87c0,2.61-2.01,4.17-5.39,4.17h-2.4v3.43h2.58c3.67,0,5.86,1.52,5.86,4.06s-2.29,4.46-5.57,4.46c-3.6,0-5.94-1.98-5.98-5.06v-.37h-3.8v.37c0,5.28,3.67,8.56,9.59,8.56s9.66-3.11,9.66-7.74c0-3.54-1.9-5.51-4-6.31Z"/>
  <path d="M29.25,0H.75c-.41,0-.75.34-.75.75v28.5c0,.41.34.75.75.75h28.5c.41,0,.75-.34.75-.75V.75c0-.41-.34-.75-.75-.75ZM6.6,6.78h11.52v2.52H6.6v-2.52ZM23.4,13.74v2.52h-11.52v-2.52h11.52ZM8.04,13.2c1.03,0,1.8.77,1.8,1.8s-.77,1.8-1.8,1.8-1.8-.77-1.8-1.8.77-1.8,1.8-1.8ZM18.12,23.22H6.6v-2.52h11.52v2.52ZM21.96,23.76c-1.03,0-1.8-.77-1.8-1.8s.77-1.8,1.8-1.8,1.8.77,1.8,1.8-.77,1.8-1.8,1.8ZM21.96,9.84c-1.03,0-1.8-.77-1.8-1.8s.77-1.8,1.8-1.8,1.8.77,1.8,1.8-.77,1.8-1.8,1.8Z"/>
  <path d="M62.36,1.87c-1.58,0-2.77,1.19-2.77,2.77s1.19,2.77,2.77,2.77,2.77-1.19,2.77-2.77-1.19-2.77-2.77-2.77Z"/>
  <path d="M93.66,25.46c-1.24,0-2.4-.56-3.18-1.51,1.89-2.38,2.93-5.52,2.93-8.95,0-3.78-1.25-7.22-3.53-9.67h0c-2.3-2.47-5.55-3.83-9.15-3.83s-6.85,1.36-9.15,3.83c-2.28,2.45-3.53,5.88-3.53,9.67s1.25,7.22,3.53,9.66c2.3,2.47,5.55,3.83,9.15,3.83,2.6,0,5-.72,7.01-2.04l.08.11c.78,1.05,2.01,1.67,3.32,1.67h2.84v-2.78h-.31ZM88.01,20.62l-1.31-1.78c-.78-1.05-2.01-1.67-3.32-1.67h-3.75v3.69h3.02c.59,0,1.15.28,1.51.76l1.31,1.77c-1.33.91-2.93,1.42-4.74,1.42h0c-5.1,0-8.67-4.03-8.67-9.81s3.57-9.81,8.67-9.81,8.67,4.04,8.67,9.81c0,2.16-.5,4.07-1.39,5.62Z"/>
</svg>
```

- **Only ever use the committed file:** `assets/logos/3iq_logo.svg`. In JSX, import the `Logo` component from `ui_kits/website/Icons.jsx`. Never retype "3iQ" in Denton or any display font and present it as the logo. Never redraw from memory. Never trace. Never generate a new SVG. If the file isn't available in the runtime, **say so and stop** — don't improvise.
- viewBox `0 0 96 30`. Fill is `currentColor` — set CSS `color: #FDFCFA` on dark surfaces, `color: #080E23` on light. Never fill child `<path>` elements directly; never recolor to an accent.
- Minimum width `80px`. Set `width` only; the viewBox handles height. Standard sizes: 80 (nav) · 96 (footer, email signature) · 128+ (hero).
- Clearspace equals the height of the uppercase "Q" on all four sides. Nothing crosses into it.
- No filters, shadows, outlines, rotations, stretches, or mirrorings. No lockups with a tagline, "since 2012", or anything else — no lockup asset exists.
- The favicon (`assets/3iq_favicon.png`) and webclip (`assets/3iq_webclip.png`) are application icons **only** — never use them as a wordmark substitute.
- Full rules and embed patterns (raw SVG, `<img>`, JSX, python-pptx): see `reference/logo.md`.

### Voice

- Clear, calm, institutional. Short sentences.
- **Lead with the fact.** *"2020: North America's first major exchange-listed Bitcoin and Ether Funds."* Not *"We're proud to have…"*.
- Use **"digital assets"**, not "crypto", in institutional contexts. ("Crypto" is OK in casual body copy or product-feature lists — *multi-crypto fund* — never in headlines.)
- Number + unit, every time: `USD 200M`, `4.25% yield`, `listed on Nasdaq Dubai`, `regulated in Canada by the OSC`.
- Cite firsts — they're the central marketing asset. See `README.md` §Cite firsts for the canonical list.
- **Never:** emojis, crypto-slang (HODL, moon, ape, WAGMI), exclamation marks, hype adjectives (revolutionary, game-changing, insane, epic), all-caps headlines, "we're excited to announce" openers.

### Casing

- **Headlines:** sentence case.
- **Eyebrows, UI labels, ticker badges:** UPPERCASE, `0.04em` tracking.
- **Body, buttons:** sentence case.
- **Product names:** Title Case (*3iQ Bitcoin ETF*, *3iQ Solana Staking ETF*).

### Iconography

- No emojis. No unicode glyphs as icons (no `✓ → ↗` standing alone). SVG only.
- 1.5px stroke, square caps, `currentColor` for fills/strokes so icons inherit from CSS `color`.
- Optional single-element yellow accent inside an icon — never more than one.
- Default icon set is **Lucide** (`https://unpkg.com/lucide@latest`) — matches the brand's geometric feel. Flag to the client that it's a substitution until 3iQ commissions an owned set.
- For the 3iQ wordmark itself, see the Logo section above — it is not an icon, and the rules are different.

## Composition patterns

Prefer these recurring blocks over inventing new ones.

- **Section rhythm.** Alternate dark (Forge gradient or flat `#080E23`) and light (cream gradient or flat `#FDFCFA`) sections. Two dark in a row is monotonous; two light in a row reads like a doc, not marketing.
- **Eyebrow · rule · headline · lede** is the core repeating unit: UPPERCASE eyebrow (accent yellow on dark, `--fg1` @ 0.7 on light) → 2px × 4rem `--rule` bar → Denton 300 display headline at `clamp(3rem, 6vw, 5.5rem)` line-height 1, sentence case → Neue Haas 500 lede at 17–18px line-height 1.5, `max-width 38–52ch` → optional content grid → optional right-aligned CTA.
- **Cards.** Fill `#FDFCFA` (on dark sections) or one of the `card_sand/sky/cream/sage` gradients (on light sections). `border-radius: 1rem`, padding `2–2.5rem`, almost no shadow (`0 1px 0 rgba(8, 14, 35, 0.04)`), hairline `rgb(8 14 35 / 0.12)` between rows. Never pill-shaped cards.
- **Buttons.** Fully-rounded pill (`border-radius: 100vw`). Primary on dark = `--gradient-button-dark` fill (`linear-gradient(to right, #FDFCFA 15%, #D6D5BF 100%)`), `#080E23` text. Primary on light = solid sand `#D6D5BF` fill, `#080E23` text. Secondary = transparent, 1px `currentColor` border. Always trailing `↗` ArrowUpRight SVG — never a chevron, plain right-arrow, or unicode glyph. Hover opacity → 0.75; press → 0.60; no scale transforms.
- **Numbered grids.** Firsts / milestones / 5-step processes → 5-up grid. Each cell: Denton 300 40px numeral (`01`, `02`…), 2×32 yellow rule under it, then eyebrow + title + body. See `ui_kits/website/CTA.jsx`.
- **Hero headlines.** Wrap at meaningful phrase endings with `max-width: 14ch` and careful line breaks. Long unbroken hero lines break the elegance.
- **Animation.** Easing `cubic-bezier(0.2, 0.8, 0.2, 1)`. 200–400ms for UI, 600–900ms for hero fades on first view. Fades over scale. Parallax OK in hero; bounce is off-brand. No page-load stagger on marketing body copy.

## Disclaimers

Marketing output should include the standard disclaimer. The canonical text is in `tokens/tokens.yaml` under `disclaimer.standard` and `disclaimer.footer` — use verbatim.

## When in doubt

- Read `README.md` again — it has worked examples of almost everything, including off-brand vs on-brand copy contrasts.
- The `preview/` cards are a visual inventory of every pattern that already exists. Scan them before inventing something new — odds are something already fits.
- If you're about to hand-roll a nav, hero, feature grid, footer, or CTA, stop and look at `ui_kits/website/*.jsx` first.
