# The Human-in-the-Loop Is Tired

reveal.js build of the talk for PyData London 2026, following the build spec in
`slidedeckspec.md`.

Placeholder/stub slides (slop sequence, latency, self-worth stub, Akós quote)
are rendered as clearly-marked placeholders for Laura to source/redact/finalise
later.

## `revealjs/`

Plain [reveal.js](https://revealjs.com/) deck — `index.html` is the whole deck.

- Theme: `white` (vanilla dark-on-light).
- **Speaker notes** live in `<aside class="notes">` on each slide. Press **`s`**
  for the speaker view (notes + next slide + timer).
- Source citations for quote/meme/video slides sit on the slide itself.
- Loaded with the same classic `<script src="dist/reveal.js">` pattern the other
  decks in this repo use, so it works opened directly from disk (`file://`) as
  well as when served.
- `dist/` and `plugin/` are the vendored reveal.js library + the notes and
  highlight plugins.

To view: open `revealjs/index.html` in a browser.
