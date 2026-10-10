---
name: slidev
description: >
  Use this skill whenever the user wants to create, edit, or extend a Slidev
  presentation markdown file in this repository. Triggers include: any mention of
  "Slidev", "Folien erstellen", "Präsentation", "Vortrag", references to layouts
  like "chapter-intro", "cover" or "closing", requests to add, rewrite, split or
  fix slides, questions about citations, footnotes, Abbildungsverzeichnis or
  Quellenverzeichnis, or when the user pastes a Slidev markdown file. Also trigger
  when the user references the custom components BulletedList, NumberedList,
  DefinitionBox, ExampleBox, Quotebox, Table, Columns, Text, HighlightedText,
  SubText, Footnote, CitationTable, Image, FigureList, Divider or Todo.
---

# Slidev Presentation Skill

Academic FH Münster presentations, written as Slidev markdown (`slides.md`) with a
fixed component library. Content is authored **only** through the project's Vue
components — never raw markdown lists, never inline styles.

## Read this first

Everything below is the working minimum. Load a reference file when the task
actually needs it — don't read them all up front.

| Reference | Load it when |
| --- | --- |
| `references/structure.md` | Setting up a new deck, editing frontmatter, `presentationInfo`, layouts, chapter wiring |
| `references/components.md` | Writing slide body content — full props for every component |
| `references/citations.md` | Footnotes, `CitationTable`, `Image`, `FigureList`, academic source handling |
| `references/style-guide.md` | Deciding what goes on a slide: density limits, splitting, anti-patterns |
| `example.md` | A complete, working two-chapter deck to copy patterns from |

The live deck is `slides.md` at the repo root; components live in `components/`,
layouts in `layouts/`. If something here disagrees with those files, the source wins —
check `components/<Name>.vue` for the authoritative props.

## Deck skeleton

```
frontmatter
→ cover slide            (layout: cover)
→ per chapter:  chapter-intro slide (layout: chapter-intro, chapter: N)
                content slides      (title + subtitle + chapter: N)
→ Quellen slide          (<CitationTable>)
→ Abbildungsverzeichnis  (<FigureList>, only if the deck has figures)
→ closing slide          (layout: closing)
```

## A content slide

```markdown
---
title: Einführung in MongoDB
subtitle: Was ist MongoDB?
chapter: 1
---

<DefinitionBox title="MongoDB" source="MongoDB Documentation 2024">
  Dokumentenorientierte NoSQL-Datenbank, die Daten in JSON-ähnlichen Dokumenten speichert.
</DefinitionBox>

<Text title="Kernmerkmale">
  Speichert Daten als <HighlightedText>BSON-Dokumente</HighlightedText> in Collections.
  <SubText>Schema-Änderungen ohne komplexe Migrationen</SubText>
</Text>
```

`title` is the **chapter** title and repeats identically on every slide of that
chapter; `subtitle` is that one slide's own heading. `chapter: <number>` drives the
footer and must be present on every content slide.

## Non-negotiables

- Body content goes through components — no raw `-`/`1.` markdown lists, no `<img>`, no `style="…"`.
- Code uses native fenced blocks with a language tag; there is no `<Code>` component.
- Max ~2–3 components and at most **one** box per slide. Split rather than cram.
- Inline sources as `<Footnote text="Vgl. [Chod15, S. 42]" />`, collected in `<CitationTable>`.
- Images always via `<Image>` so `<FigureList>` can auto-number them.
- German decks: keep headings, captions and `SubText` in German.

## Verifying

To actually look at a slide after editing, use the **slides-preview** skill
(`.claude/skills/slides-preview/`) — it screenshots the Slidev dev server.
