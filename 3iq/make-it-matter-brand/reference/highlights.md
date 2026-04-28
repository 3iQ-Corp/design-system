# Hand-drawn highlights

The #MakeItMatter campaign features **12 unique hand-drawn highlight/underline
shapes** designed to emphasize words — especially the word **"matters."**

## Asset library

Each of the 12 highlights is provided in **11 colour variants**:

| Colour | Hex |
|---|---|
| Blue | `#2EA1AE` |
| Gold | `#D6D5BF` |
| Green | `#4C9478` |
| Mauve | `#9269AE` |
| Navy | `#080E23` |
| Neutral | `#EAE7E2` |
| Orange | `#E6704E` |
| Platinum | `#B8C6C4` |
| Red | `#DA3B3B` |
| White | `#FDFEFA` |
| Yellow | `#EDC577` |

**Total: 132 PNG assets** (12 shapes x 11 colors), all with transparency.

### File naming

```
assets/highlights/3iQ-Highlight-{n}-{Color}.png
```

Where `{n}` is 1-12 and `{Color}` is one of the 11 variants above.

## Usage guidelines

### Original artwork mandate

**The hand-drawn highlight PNGs are original artwork created by artists.
They must be used exactly as provided — no exceptions.**

- **ALWAYS** reference the actual PNG files from `assets/highlights/` when
  placing highlights in any output (HTML, slides, print, email, etc.).
- **NEVER** approximate, simulate, or redraw these highlights using CSS
  pseudo-elements (`::after`, `::before`), SVG shapes, gradient hacks,
  `border-radius` tricks, `box-shadow`, or any other programmatic method.
- **NEVER** alter the highlight images — no recolouring, no filters, no
  distortion, no cropping. Use the colour variant you need from the 11
  provided; don't edit the artwork itself.
- The visual integrity of the artist's work is non-negotiable. If a
  rendering method cannot load the PNG files (e.g. some email clients),
  omit the highlights entirely rather than faking them.

### Placement rules — never cross out words

Highlights are **underlines and accents**, not strikethroughs. This applies
to the actual PNG files from `assets/highlights/` — they must never be
positioned, scaled, or layered in a way that crosses out, strikes through,
or obscures the text they accompany.

- Position the highlight PNG **beneath or behind** the word it emphasises.
  The text must remain fully legible at all times.
- **A slight overlap** with the bottom of letterforms (descenders, baseline)
  is acceptable and looks natural — this is how the guidelines show them.
- **Never** position a highlight PNG so it covers the middle or top of a word.
  It should never look like the word is being crossed out, redacted, or
  obscured. Even partial coverage of the upper half of the text is too much.
- The PNG images are wide brush/chalk strokes. When scaling them to fit a
  word, ensure the stroke sits at or just below the text baseline — not
  centred on the word and not floating above it.
- In HTML/CSS, achieve this by making the highlight PNG `position: absolute`
  with a low `z-index`, and the text `position: relative` with a higher
  `z-index`. Set the highlight's `bottom` to a small negative value so it
  tucks under the text baseline. The text must always render on top.

### Do

- Use highlights to **emphasize the word "matters"** in campaign copy.
- **Vary the highlight style** within a document for a more natural,
  hand-drawn feel. Don't use the same highlight shape repeatedly.
- Match highlight color to the gradient/accent theme in use:
  - Yellow/Gold highlights on Forge gradient backgrounds
  - Green highlights on Growth gradient backgrounds
  - Orange highlights on Warmth gradient backgrounds
  - White highlights on any dark background
  - Navy/dark highlights on light backgrounds

### Don't

- Don't use highlights on the #MakeItMatter logo itself — the logo has
  its own underline.
- Don't use highlights to emphasize every word — reserve them for "matters"
  and occasionally other key campaign words.
- Don't scale highlights disproportionately — they should appear natural.
- **Don't simulate highlights with CSS, SVG, or any non-PNG method.**
- **Don't position the PNG highlights over text so they cross out or obscure words.** The actual PNG files from `assets/highlights/` must sit beneath/behind the text — they can slightly overlap but must never fully overlay or strike through a word.

## Recommended copy patterns

- "That what you do here **matters.**" (with gold highlight)
- "How you work **matters.**" (with orange highlight)
- "How you treat others **matters.**" (with green highlight)
- "And the difference we make together, really **matters.**" (with white highlight)
