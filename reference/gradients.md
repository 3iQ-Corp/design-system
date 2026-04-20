# Gradients

The 3iQ brand leans on gradients more than flat color for surface treatments.
The live site uses three named hero gradients — **Forge**, **Growth**, and
**Warmth** — each mapped to a product family.

## Smoothness is non-negotiable

Every gradient in this system **must render smoothly, with no visible
banding or contouring**. sRGB interpolation between close, desaturated
neutrals (the card tints especially) produces a visible step somewhere
around the middle. We fix that two ways:

1. **`in oklab` interpolation** — modern browsers (Chrome 111+,
   Safari 16.2+, Firefox 113+) interpolate perceptually when you write
   `linear-gradient(in oklab …)`. This is the preferred form.
2. **An eased sRGB midpoint** — for renderers that don't understand
   `in oklab` (email, PPTX, older Playwright), we publish a three-stop
   sRGB fallback whose middle stop is the OKLAB midpoint of the two
   endpoints, converted back to sRGB. Visually close to the oklab
   version, no banding.

Tokens publish both:

| Key | Use for |
|---|---|
| `gradient.<name>.oklab` | Modern CSS, HTML email with `in oklab` (rare), SVG |
| `gradient.<name>.srgb`  | PPTX, older email clients, Playwright <=2023, print |
| `gradient.<name>.stops` | Programmatic pipelines that build their own gradient string |

In `tokens.css`, `--gradient-<name>` is set to the sRGB fallback at
`:root`, then overridden inside `@supports (background:
linear-gradient(in oklab, red, blue))` to the OKLAB form. Consumers who
reference `var(--gradient-forge)` always get the best version their
renderer supports.

## Hero gradients

All three are vertical (`180deg`, top → bottom) and dark. Use them as
full-bleed page/section backgrounds, with white text and a single accent
color on top.

| Name | Endpoints | Top → Bottom | Accent | Used for |
|---|---|---|---|---|
| **Forge**  | `#080E23 → #4C3D32` | Navy → warm brown       | Yellow `#EDC576` | ETFs, general corporate, default |
| **Growth** | `#1E3239 → #02393C` | Deep slate → deep teal  | Green `#4C9478`  | CEFs, yield products |
| **Warmth** | `#1C0E1D → #3A1717` | Plum-black → oxblood    | Orange `#E6704E` | Multi-crypto, thematic products |

### When to pick which

- **Default to Forge.** If the content isn't tied to a specific fund family,
  use Forge. It's the corporate identity gradient.
- **Growth** when the subject is yield, income, or a CEF. The cooler palette
  reinforces "returns / steady".
- **Warmth** when the subject is multi-asset, thematic, or a hedge fund
  product (e.g. QMAP). The warmer palette hints at active / dynamic.

### Don't

- Don't mix two hero gradients on the same surface.
- Don't recolor the text over a gradient. White (`#FDFCFA`) only, with the
  matching accent for eyebrows/rules.
- Don't use these gradients as card fills — use the light card tints below.
- **Don't author a two-stop sRGB gradient by hand.** Use a token, or if you
  must hand-roll one, compute the midpoint in OKLAB (see the snippet in
  `scripts/check-tokens.sh` or ask the AI to compute it).

## Card tint gradients

Light, top-to-bottom fades for cards, tiles, and testimonial blocks on
light backgrounds.

| Name         | Endpoints         | Top → Bottom |
|---|---|---|
| `card_sand`  | `#D6D5BF → #F8F7F5` | Sand → light paper |
| `card_sky`   | `#C9D7D7 → #F4ECE5` | Pale sky → warm cream |
| `card_cream` | `#EAE9DD → #FDFCFA` | Cream → white |
| `card_sage`  | `#B8C6C6 → #F8F7F5` | Sage → light paper |

Card tints are the most banding-prone because the endpoints are close
and desaturated. Always use the token — a raw two-stop sRGB version will
show contouring on anything taller than ~400px.

## Button gradient

The primary CTA on dark backgrounds uses a horizontal gradient from
white to sand:

- Endpoints: `#FDFCFA 15% → #D6D5BF 100%`
- Text: `#080E23`
- Hover: opacity 75%

## Dark fade utility

A horizontal dark-to-transparent fade for edges of dark sections over
imagery:

- Endpoints: `#080E23 0% → #080E231A 65%`

Useful for fading masthead imagery into a dark background.

## Debugging "my gradient is banding"

1. Are you using `var(--gradient-…)` from `tokens.css`? If yes, you're
   already getting the smoothest available form. Check that the rendering
   surface supports `in oklab` (DevTools → Rendering → check computed
   style includes `in oklab`).
2. Rendering in PPTX / email / PDF? Use `gradient.<name>.srgb` from
   `tokens.json`. The three-stop fallback is already perceptually eased.
3. Still banding on a tall viewport? Add an overlay of ~2% noise
   (`filter: contrast(1.02) brightness(0.98)` on a ::before with a tiny
   SVG noise pattern). This is industry-standard — Webflow pages use it
   on their dark heroes.
