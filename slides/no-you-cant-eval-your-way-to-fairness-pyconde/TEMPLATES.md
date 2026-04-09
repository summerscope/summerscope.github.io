# Slide Templates — Legend

Quick reference for the slide templates available in this deck. Each template has a short name, ASCII layout, use case, and the minimum HTML structure needed.

All templates go inside:

```html
<section>
  <div class="slide-wrap has-marks">
    <div class="mark-tr"></div>
    <div class="mark-bl"></div>
    <div class="guide-h-top"></div>
    <div class="guide-h-bottom"></div>
    <div class="guide-v-left"></div>
    <div class="guide-v-right"></div>

    <!-- template layout goes here -->

    <div class="slide-meta">
      <span>Laura Summers</span>
      <span>PyCon DE & PyData 2026</span>
    </div>

    <aside class="notes">speaker notes</aside>
  </div>
</section>
```

---

## `split-photo-right`

Text left, photo right. Good for: title slide, split content with image support, observations.

```
+--------------------+--------------------+
|                    |                    |
|  [LABEL]           |                    |
|                    |       PHOTO        |
|  headline          |                    |
|  spans two lines   |   (can include     |
|                    |    instrument      |
|  optional subtitle |    overlay)        |
|                    |                    |
+--------------------+--------------------+
```

```html
<div class="layout-split">
  <div class="split-text">
    <span class="label">Label</span>
    <h1>headline</h1>
    <p class="text-light text-small">optional subtitle</p>
  </div>
  <div class="split-photo">
    <img src="img/photo.jpg" alt="" />
    <!-- optional instrument, positioned relative to photo cell -->
    <div class="instrument instrument--orange" style="width: 180px; top: 15%; left: -90px;">
      <img src="img/protractor.svg" alt="" />
    </div>
  </div>
</div>
```

---

## `split-photo-left`

Photo left, text right. Good for: section dividers, chapter intros.

```
+--------------------+--------------------+
|                    |                    |
|                    |  [LABEL]           |
|       PHOTO        |                    |
|                    |  headline          |
|   (can include     |  spans two lines   |
|    instrument      |                    |
|    overlay)        |                    |
|                    |                    |
+--------------------+--------------------+
```

```html
<div class="layout-split layout-split--text-right">
  <div class="split-photo">
    <img src="img/photo.jpg" alt="" />
  </div>
  <div class="split-text">
    <span class="label">Chapter One</span>
    <h2>heading</h2>
  </div>
</div>
```

---

## `bio`

Portrait left (fixed ~280px), bio text right. Good for: speaker intro.

```
+----------+-------------------------------+
|          | [LABEL]                       |
|          |                               |
| PORTRAIT | Name                          |
|          |                               |
|          | Body copy about the speaker.  |
|          |                               |
+----------+-------------------------------+
```

```html
<div class="layout-bio">
  <div class="bio-photo">
    <img src="img/Laura.jpg" alt="Laura Summers" />
  </div>
  <div class="bio-text">
    <span class="label">About</span>
    <h2>Name</h2>
    <p>Bio text.</p>
  </div>
</div>
```

---

## `photo-top`

Full-width photo on top, label + heading strip below. Good for: emotional punctuation, context setting.

```
+-------------------------------------------+
|                                           |
|                  PHOTO                    |
|                                           |
|              (full width)                 |
|                                           |
+-------------------------------------------+
| [LABEL]  heading text                     |
+-------------------------------------------+
```

```html
<div class="layout-photo-top">
  <div class="photo-area">
    <img src="img/photo.jpg" alt="" />
  </div>
  <div class="text-area">
    <span class="label">Context</span>
    <h2>heading</h2>
  </div>
</div>
```

---

## `statement`

Big text, filling most of the slide, optional small instrument accent. Good for: key findings, punchline statements, emphasis.

```
+-------------------------------------------+
|                             [instrument]  |
|                                           |
|  Big statement text that                  |
|  takes up most of the slide               |
|  and says something important.            |
|                                           |
|                                           |
|  [LABEL]                                  |
+-------------------------------------------+
```

```html
<div class="layout-statement">
  <div class="statement-text">
    Big statement text.
  </div>
  <div class="statement-label">
    <span class="label">Finding</span>
  </div>
</div>

<!-- optional instrument accent, positioned on slide-wrap -->
<div class="instrument instrument--orange" style="width: 100px; top: 50px; right: 60px; opacity: 0.35;">
  <img src="img/set-square.svg" alt="" />
</div>
```

---

## `quote`

Centered italic quote with chevron marks, optional attribution. Good for: pull quotes, emotional beats, bridge moments between sections.

```
+-------------------------------------------+
|                                           |
|                   «                       |
|                                           |
|      italic quote text centered           |
|       across the slide can be long        |
|                                           |
|                   »                       |
|                                           |
|              attribution                  |
+-------------------------------------------+
```

```html
<div class="layout-quote">
  <div class="quote-mark">&laquo;</div>
  <blockquote>
    quote text
  </blockquote>
  <div class="quote-mark">&raquo;</div>
  <p class="quote-attribution">Optional attribution</p>
</div>
```

---

## `list`

Instrument graphic left, numbered list right. Good for: agenda, findings, step-by-step process.

```
+-------------+-----------------------------+
|             |                             |
|             |  01   list item             |
|             |                             |
|  INSTRUMENT |  02   list item             |
|   GRAPHIC   |                             |
|             |  03   list item             |
|             |                             |
|             |                             |
+-------------+-----------------------------+
```

```html
<div class="layout-list">
  <div class="list-graphic">
    <img src="img/compass.svg" alt="" class="instrument--orange" />
  </div>
  <ol>
    <li>item one</li>
    <li>item two</li>
    <li>item three</li>
  </ol>
</div>
```

---

## `columns-2` / `columns-3`

Two or three equal columns with numbered circles, heading, body. Good for: comparisons, parallel concepts.

```
+---------------------+---------------------+
|                     |                     |
|  ( 1 )              |  ( 2 )              |
|                     |                     |
|  HEADING            |  HEADING            |
|                     |                     |
|  Body copy for      |  Body copy for      |
|  column one.        |  column two.        |
|                     |                     |
+---------------------+---------------------+
```

```html
<div class="layout-columns cols-2">
  <div class="col">
    <span class="num-circle">1</span>
    <h3>Heading</h3>
    <p>Body copy.</p>
  </div>
  <div class="col">
    <span class="num-circle" style="border-color: var(--color-blue); color: var(--color-blue);">2</span>
    <h3>Heading</h3>
    <p>Body copy.</p>
  </div>
</div>
```

For 3 columns use `cols-3` instead of `cols-2` and add a third `.col`.

---

## `padded`

Simple label + heading + bullet list. Good for: activity prompts, audience questions, straightforward content slides.

```
+-------------------------------------------+
|                                           |
|                                           |
|  [LABEL]                                  |
|                                           |
|  the big question / heading               |
|                                           |
|  — option one                             |
|  — option two                             |
|  — option three                           |
|                                           |
+-------------------------------------------+
```

```html
<div class="layout-padded">
  <span class="label">Activity</span>
  <h2>the question?</h2>
  <ul class="body-list">
    <li>option one</li>
    <li>option two</li>
    <li>option three</li>
  </ul>
</div>
```

---

## Color modifiers

- `.label` — orange by default
- `.label--blue` — electric blue variant (add alongside `.label`)
- `.instrument--orange` — hot orange fill for SVG instruments
- `.instrument--blue` — electric blue fill for SVG instruments

## Available instrument SVGs

In `img/`:
- `protractor.svg`
- `calipers.svg`
- `compass.svg`
- `ruler.svg`
- `set-square.svg`
- `pressure-gauge.svg`
- `laser-level.svg`
- `tape-measure.svg`
- `micrometer.svg`

## Speaker notes convention

Wrap stage directions (things the speaker *does* rather than *says*) in `<em>` tags:

```html
<aside class="notes"><em>Ask for hands —</em> who prefers X? <em>Pause. Then:</em> 'The thing to say.' <em>Move on.</em></aside>
```
