# The Human-in-the-Loop Is Tired

reveal.js build of the talk for PyData London 2026, following the build spec in
`slidedeckspec.md`.

Placeholder/stub slides (slop sequence, latency, self-worth stub, Akós quote)
are rendered as clearly-marked placeholders for Laura to source/redact/finalise
later.

## `revealjs/`

Plain [reveal.js](https://revealjs.com/) deck — `index.html` is the whole deck.

- Theme: **`human-loop`** — custom SCSS theme (dark ink on warm paper).
  Display headings in **Black Han Sans** with a subtle ink→violet gradient
  (`background-clip: text`); body copy in **Newsreader** (a friendly,
  slightly-narrow literary serif, for contrast). Fonts load from Google Fonts
  via `<link>` tags in `index.html`.
  - Source: `css/theme/human-loop.scss` (built on `css/theme/template/`,
    mirroring the other decks).
  - Built distro: `dist/theme/human-loop.css` (committed).
  - Rebuild after editing the SCSS:
    `bunx sass css/theme/human-loop.scss dist/theme/human-loop.css --no-source-map --style=expanded`
  - To try a different body serif, change the `Newsreader` family in
    `css/theme/human-loop.scss` (and the `<link>`) — e.g. `Bitter` or
    `Fraunces` — and rebuild.
- **Speaker notes** live in `<aside class="notes">` on each slide. Press **`s`**
  for the speaker view (notes + next slide + timer).
- Source citations for quote/meme/video slides sit on the slide itself.
- Loaded with the same classic `<script src="dist/reveal.js">` pattern the other
  decks in this repo use, so it works opened directly from disk (`file://`) as
  well as when served.
- `dist/` and `plugin/` are the vendored reveal.js library + the notes and
  highlight plugins.

To view: open `revealjs/index.html` in a browser.
