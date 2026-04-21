---
name: workspace-guide
description: Workspace guide to introduce OpenWork and onboard new users.
---
# 3iQ design-system workspace

Hi, this is OpenWork — an open-source alternative to Claude's cowork. This particular workspace is set up for **3iQ design-system** work: tokens, components, brand documentation, and any engineering that backs the 3iQ visual language.

Before we start, use the question tool to ask:
"Are you more technical or non-technical? I'll tailor the explanation."

## What lives here

This workspace is for the *system*, not the deliverables built on top of it:

- Design tokens (colors, typography, spacing, gradients)
- Component specs and references
- Brand voice and writing guidelines
- Engineering scaffolding for the above

Marketing outputs — decks, one-pagers, fund fact sheets, landing pages — typically live in a **sibling `marketing/` workspace**, which links back to the tokens defined here. If that's what you're trying to build, open that workspace instead; this one is for the underlying system.

## The brand authority

The `3iq-brand` skill is the source of truth for anything that needs to look or sound like 3iQ. It's already installed globally and triggers automatically when you ask for 3iQ copy or visual work. It knows:

- The palette (muted warm neutrals on near-black or paper — **not** navy + gold + green)
- The fonts (Denton for headlines, Neue Haas Grotesk Display for everything else — body is weight 500, not 400)
- The three hero gradients (Forge / Growth / Warmth) and which fund family each one belongs to
- Voice rules (institutional, fact-first, no emojis, no crypto-slang, no hype adjectives)
- Composition patterns (four-part block, cards, pill buttons with trailing `↗`)

Read `3iq-brand`'s bundled `references/` before hand-rolling anything. The tokens, fonts, and UI kits are all there.

## If the person is non-technical

Try asking me things like:
- "Show me the 3iQ color palette."
- "Draft an 'About' paragraph in 3iQ voice."
- "What font am I supposed to use for a headline?"
- "Summarize the files in this workspace."

I'll read the brand skill before answering, so you'll get the real values, not approximations.

## If the person is technical

This workspace is a standard OpenCode project with OpenWork's workspace chrome on top. Everything that works in OpenCode works here.

Setup:
1) Install OpenCode from opencode.ai
2) Configure providers there (models and API keys)
3) Come back to OpenWork and start a session

Skills:
- The `3iq-brand` skill is installed globally and ships the canonical tokens / fonts / UI kits in its `references/` bundle. Don't duplicate tokens locally — link to that bundle or pull values from it.
- Install more skills from the Skills tab, or add them to this workspace under `.opencode/skills/`.
- Docs: https://opencode.ai/docs/skills

Plugins:
- Configure in `opencode.json` or use the Plugins tab.
- Docs: https://opencode.ai/docs/plugins/

MCP servers:
- Add external tools via `opencode.json`.
- Docs: https://opencode.ai/docs/mcp-servers/

Config reference:
- Docs: https://opencode.ai/docs/config/

## Two things to try next

1. Ask: **"What are the 3iQ hero gradients and when do I use each one?"** — triggers the brand skill and gives you the Forge / Growth / Warmth rubric.
2. Ask: **"Show me a four-part block (eyebrow · rule · headline · lede) in 3iQ style."** — the core composition pattern used on every section of 3iq.io.
