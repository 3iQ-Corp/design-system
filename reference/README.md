# Reference material

Narrative companions to the machine-readable files in `tokens/`. Anything
in here should explain a brand decision or show tokens in context — it
should not introduce new tokens.

## Contents

| Path | What it covers |
|---|---|
| [`gradients.md`](./gradients.md) | When to use Forge vs Growth vs Warmth, card-tint gradients, button gradient |
| [`typography/`](./typography/) | Live HTML specimens of the type scale and brand layouts (open [`typography/index.html`](./typography/index.html) to navigate) |

## Adding new reference material

- **Documents a decision (when / why)** → add a Markdown file here.
- **Introduces a new token (size, color, gradient)** → add it to
  `tokens/tokens.yaml`, mirror to `tokens.json` and `tokens.css`, then
  add a prose explanation here if it needs one.
- **Shows tokens rendered in context** → add an HTML specimen under
  `typography/` (or a new subfolder) and link it from
  `typography/index.html`.
