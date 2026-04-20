#!/usr/bin/env bash
# check-tokens.sh — sanity-check that tokens.yaml, tokens.json, and
# tokens.css agree on the core brand swatches. Exits non-zero on drift.
#
# Not exhaustive: only verifies that every hex value declared under
# color.swatch in tokens.yaml also appears in tokens.json and tokens.css.
# Good enough to catch accidental one-sided edits.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
YAML="$ROOT/tokens/tokens.yaml"
JSON="$ROOT/tokens/tokens.json"
CSS="$ROOT/tokens/tokens.css"

for f in "$YAML" "$JSON" "$CSS"; do
  [ -f "$f" ] || { echo "missing: $f" >&2; exit 2; }
done

# Extract 6- or 8-digit hex values from the swatch section of tokens.yaml.
# (awk: print lines between "swatch:" and the next top-level sibling key
# "role:", then grep hex tokens.)
hexes="$(awk '/^  swatch:/{flag=1;next}/^  role:/{flag=0}flag' "$YAML" \
  | grep -oE '#[0-9A-Fa-f]{6,8}' \
  | sort -uf)"

if [ -z "$hexes" ]; then
  echo "no swatches found in $YAML — aborting" >&2
  exit 2
fi

missing=0
total=0
while read -r hex; do
  [ -z "$hex" ] && continue
  total=$((total + 1))
  if ! grep -qi -- "$hex" "$JSON"; then
    echo "drift: $hex in tokens.yaml swatch is NOT in tokens.json"
    missing=$((missing + 1))
  fi
  if ! grep -qi -- "$hex" "$CSS"; then
    echo "drift: $hex in tokens.yaml swatch is NOT in tokens.css"
    missing=$((missing + 1))
  fi
done <<< "$hexes"

# JSON parse smoke-check (python is present on macOS by default).
if command -v python3 >/dev/null 2>&1; then
  python3 -c "import json,sys; json.load(open('$JSON'))" \
    || { echo "drift: $JSON is not valid JSON"; missing=$((missing + 1)); }
  python3 -c "import json,sys; json.load(open('$ROOT/tokens/tokens.schema.json'))" \
    || { echo "drift: tokens.schema.json is not valid JSON"; missing=$((missing + 1)); }
fi

if [ "$missing" -gt 0 ]; then
  echo ""
  echo "FAIL: $missing drift(s) across $total swatch values"
  exit 1
fi

echo "OK: $total swatches consistent across yaml/json/css"
