# #MakeItMatter — Website UI Kit

Pixel-faithful React/JSX components for a #MakeItMatter employer brand
careers page. Built on the same design tokens and font stack as the
corporate 3iQ site.

## Components

| Component | Description |
|---|---|
| `App.jsx` | Root layout — assembles all sections |
| `Nav.jsx` | Sticky top nav with 3iQ logo and CTA |
| `Hero.jsx` | Full-bleed Forge-gradient hero with campaign headline |
| `Editorial.jsx` | Two-column editorial section with MIM messaging |
| `Values.jsx` | Six 3iQ values with MIM expressions |
| `FeatureGrid.jsx` | Feature cards highlighting culture pillars |
| `CTA.jsx` | Bottom call-to-action section |
| `Footer.jsx` | Footer with 3iQ logo and MIM badge |
| `Icons.jsx` | SVG icons: Logo, MIMBadge, ArrowUpRight |

## Usage

These are reference components. Drop them into any React project that
has the design-system fonts loaded (see `colors_and_type.css`).

```jsx
import App from './App';
// Renders a complete MIM employer brand page
```
