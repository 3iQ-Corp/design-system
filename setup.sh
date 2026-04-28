#!/usr/bin/env bash
set -euo pipefail

# 3iQ Skills Hub - Setup Script (macOS / Linux)
# Creates symlinks from this repo into your OpenCode skills directory.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Determine skills target directory
if [ "$(uname)" = "Darwin" ]; then
  SKILLS_DIR="$HOME/.config/opencode/skills"
elif [ -n "${XDG_CONFIG_HOME:-}" ]; then
  SKILLS_DIR="$XDG_CONFIG_HOME/opencode/skills"
else
  SKILLS_DIR="$HOME/.config/opencode/skills"
fi

echo "3iQ Skills Hub - Setup"
echo "======================"
echo "Repo:       $SCRIPT_DIR"
echo "Skills dir: $SKILLS_DIR"
echo ""

mkdir -p "$SKILLS_DIR"

install_skills_from() {
  local source_dir="$1"
  local label="$2"

  if [ ! -d "$source_dir" ]; then
    echo "  Skipping $label (directory not found)"
    return
  fi

  for skill_path in "$source_dir"/*/; do
    [ -d "$skill_path" ] || continue
    skill_name="$(basename "$skill_path")"
    target="$SKILLS_DIR/$skill_name"

    if [ -L "$target" ]; then
      existing="$(readlink "$target")"
      if [ "$existing" = "$skill_path" ] || [ "$existing" = "${skill_path%/}" ]; then
        echo "  OK   $skill_name (already linked)"
        continue
      else
        echo "  UPDATE $skill_name (repointing symlink)"
        rm "$target"
      fi
    elif [ -d "$target" ]; then
      echo "  SKIP $skill_name (non-symlink directory exists — back up and remove to link)"
      continue
    fi

    ln -s "${skill_path%/}" "$target"
    echo "  LINK $skill_name -> $skill_path"
  done
}

echo "Installing Anthropic skills..."
install_skills_from "$SCRIPT_DIR/anthropic" "anthropic"

echo ""
echo "Installing 3iQ skills..."
install_skills_from "$SCRIPT_DIR/3iq" "3iq"

echo ""
echo "Done! $(ls -1d "$SKILLS_DIR"/*/ 2>/dev/null | wc -l | tr -d ' ') skills installed."
echo "Restart OpenCode to pick up any new skills."
