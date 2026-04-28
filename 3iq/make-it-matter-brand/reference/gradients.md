# Gradients

The #MakeItMatter campaign uses six named gradients — three dark hero
gradients (**Forge**, **Growth**, **Warmth**) and three light section/card
gradients (**Sky**, **Golden**, **Platinum**).

## Dark hero gradients

All three are vertical (`180deg`, top -> bottom) and dark. Use them as
full-bleed page/section backgrounds, with white text and a single accent
color on top.

| Name | Gradient | Top -> Bottom | Accent | Used for |
|---|---|---|---|---|
| **Forge** | `linear-gradient(180deg, #080E23, #4C3D32)` | Navy -> warm brown | Yellow `#EDC577` | Default, corporate, general MIM |
| **Growth** | `linear-gradient(180deg, #1E3239, #02393C)` | Deep slate -> deep teal | Green `#4C9478` | Growth themes, elevate others |
| **Warmth** | `linear-gradient(180deg, #1C0E1D, #3A172A)` | Plum-black -> deep mauve | Orange `#E6704E` | Warmth, community, follow through |

### When to pick which

- **Default to Forge.** If the content isn't tied to a specific theme,
  use Forge. It's the default #MakeItMatter gradient.
- **Growth** when the subject is about growth, learning, elevating others,
  or staying humble. The cooler palette reinforces development.
- **Warmth** when the subject is community, collaboration, or follow-through.
  The warmer palette hints at personal connection.

### Don't

- Don't mix two hero gradients on the same surface.
- Don't recolor the text over a gradient. White (`#FDFEFA`) only, with the
  matching accent for eyebrows/rules.
- Don't use these gradients as card fills — use the light gradients below.

## Light section/card gradients

Light, top-to-bottom fades for cards, tiles, and section backgrounds on
light pages.

| Name | Gradient | Top -> Bottom |
|---|---|---|
| `sky`      | `linear-gradient(180deg, #C9D7D7, #F4ECE5)` | Pale sky -> warm cream |
| `golden`   | `linear-gradient(180deg, #D6D5BF, #F8F7F5)` | Gold -> light paper |
| `platinum` | `linear-gradient(180deg, #B8C6C4, #F8F7F5)` | Platinum -> light paper |

Use these to create subtle color variation across a grid of cards or as
soft full-bleed section backgrounds.

## Button gradient

The primary CTA on dark backgrounds uses a horizontal gradient:

```
linear-gradient(to right, #FDFEFA 15%, #D6D5BF 100%)
```

Text on this button is `#080E23` (dark). On hover, opacity drops to 75%.
