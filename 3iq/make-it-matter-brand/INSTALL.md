# Installing the #MakeItMatter brand skill

Pick the path that matches your setup. The zip install works on any machine.

---

## Option 1 — Zip install (easiest, works everywhere)

### Step 1 — Download the repo as a zip

Download from your team's shared repository or receive the zip from your CTO.

### Step 2 — Extract it

Double-click the zip. You'll get the `make-it-matter-design-system` folder.

### Step 3 — Rename the folder to `make-it-matter`

Rename `make-it-matter-design-system` -> `make-it-matter`. The folder name matters — it's what the skill is registered as.

### Step 4 — Move it into your skills directory

Paste the `make-it-matter` folder into:

| OS | Path |
|---|---|
| **macOS / Linux** | `~/.config/opencode/skills/` |
| **Windows** | `%APPDATA%\opencode\skills\` |

If the `skills` folder doesn't exist yet, create it.

### Step 5 — Verify

Inside `make-it-matter/` you should see `SKILL.md`, `README.md`, `colors_and_type.css`, and folders named `reference`, `tokens`, `assets`, `fonts`, `preview`, `ui_kits`.

---

## Option 2 — Symlink install (auto-updates via git pull)

### Prerequisites

```sh
git clone <your-repo-url> ~/Sites/make-it-matter-design-system
```

### Install

```sh
mkdir -p ~/.config/opencode/skills
ln -s ~/Sites/make-it-matter-design-system ~/.config/opencode/skills/make-it-matter
```

### Update

```sh
cd ~/Sites/make-it-matter-design-system && git pull
```

---

## Troubleshooting

**Skill doesn't trigger.** Check that the folder is named exactly `make-it-matter` (lowercase, hyphenated) and that `SKILL.md` sits directly inside it.

**Reference paths 404.** The skill expects the repo's root-level layout: `reference/`, `tokens/`, `assets/`, `fonts/`, `ui_kits/`, `preview/`, `colors_and_type.css`.

**Windows: symlink creation fails.** Use Option 1 (zip install).
