# Citations, Figures & Academic Apparatus

Two independent auto-numbering systems run in this deck: **footnotes** (per slide)
and **figures** (per deck).

---

## Footnotes — inline sources

```markdown
MongoDB verzichtet auf ein festes Schema<Footnote text="Vgl. [Chod15, S. 42]" />.
```

| Prop | Type | Required |
| --- | --- | --- |
| `text` | String | yes |

- Numbering restarts on every slide and follows registration order.
- Identical `text` on the same slide reuses the same number.
- Footnotes render automatically at the bottom of the slide — never write the list yourself.
- Only works inside the default (content) layout; cover, chapter-intro and closing
  slides provide no footnote context and will render `?`.

Cite the short key used in `<CitationTable>`, e.g. `Vgl. [Chod15, S. 42]`,
`[MonDB24a]` for a direct reference.

---

## `<CitationTable>` — the Quellen slide

| Prop | Type | Default |
| --- | --- | --- |
| `citations` | Array | `[]` — `{ id, text }` objects |
| `title` | String | `''` |
| `idWidth` | String | `'100px'` — widen for long keys |

`text` accepts inline HTML; italicise titles with `<em>`.

```markdown
---
title: Quellen
subtitle: Literatur und Dokumentation
---

<CitationTable
  :citations="[
    { id: '[Chod15]', text: 'Chodorow, K.: <em>MongoDB: The Definitive Guide.</em> 3rd Edition, O\'Reilly Media, 2015' },
    { id: '[MonDB24a]', text: 'MongoDB Inc.: <em>MongoDB Manual.</em> Version 7.0, https://docs.mongodb.com/manual/, 2024' }
  ]"
/>
```

Note the escaped apostrophe (`O\'Reilly`) inside the single-quoted string.

Key convention: first 3–4 letters of the author (or organisation) plus the
two-digit year, disambiguated with a trailing letter — `[Chod15]`, `[MonDB24a]`,
`[MonDB24b]`. Sort the list alphabetically by key. Every key used in a `<Footnote>`
must exist here, and vice versa.

---

## `<Image>` — all figures

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `src` | String | — | **required**; path relative to `public/`, e.g. `/images/x.png` |
| `alt` | String | `''` | accessible description |
| `caption` | String | `''` | shown below the image; **triggers auto-numbering** |
| `source` | String | `''` | italic attribution after the caption |
| `title` | String | `''` | heading above the image |
| `width` | String | `'auto'` | CSS width of the image |
| `maxWidth` | String | `'100%'` | CSS max-width of the figure wrapper |
| `height` | String | `'auto'` | CSS max-height of the image |
| `captionAlign` | `'left' \| 'center' \| 'right'` | `'left'` | |
| `figureId` | String | auto from `src` | set only when the same `src` appears twice |

```markdown
<Image
  src="/images/sharding.png"
  alt="Aufbau eines Sharded Clusters"
  caption="Architektur eines Sharded Clusters"
  source="MongoDB Manual 2024"
  maxWidth="80%"
  height="300px"
  captionAlign="center"
/>
```

Never use a raw `<img>` tag — it bypasses registration and the figure will be
missing from the Abbildungsverzeichnis.

A figure registers only when it has a `caption` **or** a `source`. Purely
decorative images can omit both to stay out of the list.

The generated id defaults to the sanitised `src`, so the *same file* used twice
counts as one figure. Give the second occurrence an explicit `figureId` if it
should be listed separately.

---

## `<FigureList>` — the Abbildungsverzeichnis

| Prop | Type | Default |
| --- | --- | --- |
| `title` | String | `'Abbildungsverzeichnis'` |

```markdown
---
title: Abbildungsverzeichnis
subtitle: Verwendete Abbildungen
---

<FigureList />
```

Collects every registered `<Image>` in DOM order and renders `Nr. · Beschreibung ·
Quelle`, numbering them `Abb. 1`, `Abb. 2`, … A figure without a `source` shows
`–`. Nothing is maintained by hand — never write this table manually, and place the
slide after all content slides so every figure has registered by then.

To reference a figure from body text, write the number that matches its position
in the deck (`siehe Abb. 3`) — but re-check after inserting or reordering images,
since the numbers shift.
