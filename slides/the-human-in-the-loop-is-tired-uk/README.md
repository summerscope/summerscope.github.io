# The Human-in-the-Loop Is Tired — competing baselines

Two parallel builds of the same talk (PyData London 2026), so the design
direction can be chosen from a real starting point rather than a blank page.

Both use a **vanilla theme with dark text on a light background**, and both
follow the build spec in `slidedeckspec.md`. Placeholder slides (slop sequence,
latency, self-worth stub, Akós quote) are rendered as clearly-marked
placeholders for Laura to source/redact/finalise later.

## `revealjs/`

Plain [reveal.js](https://revealjs.com/) deck — `index.html` is the whole deck.

- Theme: `white` (vanilla dark-on-light).
- **Speaker notes** live in `<aside class="notes">` on each slide. Press **`s`**
  for the speaker view (notes + next slide + timer).
- Source citations for quote/meme/video slides sit on the slide itself.
- View it: open `revealjs/index.html` (or serve the folder and browse to it).
  `dist/` and `plugin/` are the vendored reveal.js library + the notes and
  highlight plugins.

## `deckx/`

[deckx](https://github.com/samuelcolvin/deckx) deck — MDX + React, one
`deck.mdx` plus `styles.css` and `deckx.toml`.

- Theme: `light` (vanilla dark-on-light).
- **No speaker notes.** deckx has no notes/aside feature, so by decision the
  notes were left out of this baseline (they're populated in the reveal.js one).
- Build / preview:

  ```bash
  cd deckx
  bun install        # restores node_modules (gitignored)
  bunx deckx dev     # hot-reloading dev server at http://localhost:5173/
  bunx deckx html    # rebuild the self-contained dist/index.html
  bunx deckx pdf      # dist/deck.pdf via headless Chrome
  ```

- The committed `dist/index.html` is a self-contained build, so the deck is
  viewable on the Pages site without a build step.

## reveal.js vs deckx — quick comparison

| | reveal.js | deckx |
|---|---|---|
| Authoring | HTML `<section>`s (or a Markdown plugin) | one `deck.mdx` (Markdown + JSX) |
| Runtime | ships a JS library you link to | builds a single self-contained HTML file |
| Components | HTML/CSS/JS, large plugin ecosystem | React/TSX components, CSS-variable theming |
| Theming | drop-in theme CSS files | CSS-variable token contract + 4 built-in themes |
| Speaker notes | yes — `<aside class="notes">` + speaker view | none |
| PDF export | print-to-PDF (`?print-pdf`) | `deckx pdf` via headless Chrome |
| Maturity | very mature, widely used | new, minimal, opinionated |
