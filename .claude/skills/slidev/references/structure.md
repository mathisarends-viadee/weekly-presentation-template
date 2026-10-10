# Deck Structure, Frontmatter & Layouts

## Full frontmatter

The first block of `slides.md` configures both Slidev and this project's layouts.

```yaml
---
theme: default
highlighter: shiki
favicon: /images/favicon.png
title: MongoDB
fonts:
  sans: 'Nunito Sans'
  serif: 'Nunito Sans'
  mono: 'Fira Code'
  weights: '400,600,700'
presentationInfo:
  title: 'MongoDB'
  subtitle: 'NoSQL-Datenbanken für moderne Anwendungen'
  semester: 'Wintersemester 2025/26'
  authors:
    - name: 'Max Mustermann'
      matrikelnummer: 1234567
      email: 'max.mustermann@fh-muenster.de'
    - name: 'Anna Schmidt'
      matrikelnummer: 7654321
      email: 'anna.schmidt@fh-muenster.de'
  chapters:
    - number: 1
      title: 'Einführung in MongoDB'
    - number: 2
      title: 'Datenmodellierung'
---
```

`presentationInfo` is read by the cover, chapter-intro, closing and footer layouts:

- `title` / `subtitle` — printed on the cover and closing slide
- `semester` — cover slide
- `authors[]` — cover and closing slide; `matrikelnummer` and `email` are optional per author
- `chapters[]` — drives the chapter outline on `chapter-intro` slides **and** the
  footer chapter label on content slides. A slide's `chapter: N` is matched against
  `chapters[].number`, so every chapter used on a slide must exist here.

Adding a chapter means two edits: an entry in `chapters` **and** a `chapter-intro`
slide before its content slides.

## Layouts

Defined in `layouts/`. Slides are separated by `---` fences.

### `cover` — exactly one, first slide

```markdown
---
layout: cover
---
```

Takes no frontmatter of its own and no body; everything comes from `presentationInfo`.

### `chapter-intro` — one before each chapter's content

```markdown
---
layout: chapter-intro
chapter: 2
---
```

Renders the chapter outline with chapter `2` highlighted and the others dimmed.
`chapter` is required and must match a `chapters[].number`. No body content.

### default (no `layout:` key) — every content slide

```markdown
---
title: Datenmodellierung
subtitle: Embedding vs. Referencing
chapter: 2
---

<body content>
```

- `title` — the **chapter** title, repeated verbatim on every slide of the chapter
- `subtitle` — this individual slide's heading
- `chapter` — the chapter number; omitting it blanks the footer

The default layout also provides the footnote context, so `<Footnote>` only works
on these slides (not on cover/chapter-intro/closing).

### `closing` — exactly one, last slide

```markdown
---
layout: closing
---
```

No body; renders the thank-you slide from `presentationInfo`.

## Back matter order

Sources come before figures, both before the closing slide:

```markdown
---
title: Quellen
subtitle: Literatur und Dokumentation
---

<CitationTable :citations="[...]" />

---
title: Abbildungsverzeichnis
subtitle: Verwendete Abbildungen
---

<FigureList />

---
layout: closing
---
```

Both back-matter slides deliberately omit `chapter`. Skip the
Abbildungsverzeichnis entirely when the deck contains no captioned figures.
