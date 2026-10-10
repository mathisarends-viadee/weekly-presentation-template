---
name: slides-preview
description: >
  Render and screenshot slides from the Slidev dev server to check how they
  actually look. Use when asked to look at, screenshot, or visually verify a
  slide or a design change.
---

# Slidev Preview

Look at rendered slides with the Playwright CLI (installed globally, v1.62+).
Every slide has its own URL, so you can isolate any slide without clicking through
the deck.

## 1. Attach to a running dev server first

Never start a second server. Probe the usual ports and use the first that answers:

```bash
for p in 3030 3031 3032; do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 2 "http://localhost:$p/")
  [ "$code" = "200" ] && echo "running on $p" && break
done
```

Only if none answers, start one in the background (Bash tool with `run_in_background: true`)
and note that **you** started it, so you know to stop it later:

```bash
npm run dev -- --port 3030 --open false
```

Wait for it by polling the port (a few seconds), not with a fixed `sleep`.

## 2. Navigate by URL

Everything is a URL — there is no clicking, no browser session to keep alive.

| URL | Shows |
| --- | --- |
| `/1` | Slide 1 (the cover). Slides are 1-based in `slides.md` order |
| `/14` | Slide 14 in isolation |
| `/14?clicks=3` | Slide 14 with the first 3 `v-click` / code-highlight steps revealed |
| `/overview` | Numbered thumbnails of all slides — use it to find the number you want |
| `/presenter/14` | Presenter view with the speaker notes for slide 14 |

Notes:

- **The URL number is not the number printed in the footer.** The footer counts
  presentation pages, the URL counts slides in `slides.md`. When in doubt, resolve the
  number from `/overview` rather than from the footer.
- `/overview` renders its thumbnails lazily, so a screenshot shows only the first few.
  It is for locating a slide, not for reviewing all of them at once — review individual
  slides via `/N`.
- Without `?clicks=`, a slide renders at its initial state: content hidden behind
  `v-click` is not visible. If an element seems missing, raise `clicks` before assuming
  the slide is broken.

## 3. Screenshot a slide

```bash
npx playwright screenshot \
  --viewport-size=1280,720 \
  --wait-for-timeout=2500 \
  "http://localhost:3030/14?clicks=3" \
  "<scratchpad>/slide-14.png"
```

Then view the PNG with the Read tool. Notes:

- Write PNGs into the scratchpad directory, never into the repo.
- `--wait-for-timeout=2500` gives fonts and transitions time to settle; raise it if a
  screenshot looks half-rendered.
- 1280x720 matches the 16:9 slide canvas — keep it unless the user asks otherwise.
  For `/overview` add `--full-page` and a taller viewport.
- Each call opens and closes its own browser, so several slides at once = one call per
  URL (they can run in parallel), then Read each PNG.
- Vite hot-reloads on save, so after editing `slides.md` just take a new screenshot —
  no restart needed.
- A screenshot showing a big `404 Page not found` means the URL form was wrong (e.g.
  `/14/3` instead of `/14?clicks=3`), not that the slide is missing.

## 4. Stop the server

Only stop the dev server if you started it yourself in this session — kill the background
shell you launched. A server that was already running belongs to the user; leave it alone.
