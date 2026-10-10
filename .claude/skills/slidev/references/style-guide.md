# Slide Style Guide

How to decide what belongs on a slide, and what the deck must never contain.

## Density limits

Slides are projected, not read. Hard budget per content slide:

- **2–3 major components** maximum
- **1 box** (`DefinitionBox` / `ExampleBox` / `Quotebox`) maximum
- **5–7 items** in a `BulletedList` or `NumberedList`
- **~20 lines** in a code block
- **~5 rows** in a `Table`

Over budget means split, never shrink. A second slide is free; an unreadable slide
is not.

## Splitting patterns

| Situation | Split into |
| --- | --- |
| Definition plus a long example | definition slide → example slide |
| 10-step process | steps 1–5, then `<NumberedList :start="6">` |
| Code plus its explanation | `<Columns>`, or code slide → consequences slide |
| Wide table | two tables grouped by theme, one per slide |

The `subtitle` carries the split: keep `title` identical, and let the subtitles read
as a sequence (`CRUD-Operationen`, `CRUD-Operationen im Beispiel`).

## Writing style

- Slide text is a support, not a script: fragments in lists, full sentences in
  `Text` and boxes.
- German decks stay German throughout — headings, captions, `SubText`. Technical
  terms (Sharding, Replica Set, Index) stay in English and are not translated.
- `<HighlightedText>` marks the 2–3 terms a listener should remember from the
  slide. Highlighting everything highlights nothing.
- `<SubText>` holds the nuance, caveat or "why it matters" line that would
  otherwise become a second bullet. One per item at most.
- Prefer a concrete number or example over an adjective ("~10 ms" beats "sehr
  schnell").

## Component choice

| Content | Component |
| --- | --- |
| Unordered facts, properties | `<BulletedList>` |
| Sequence, timeline, ranked steps | `<NumberedList>` |
| A paragraph of explanation | `<Text>` |
| Formal definition of a term | `<DefinitionBox>` |
| Concrete case or best practice | `<ExampleBox>` |
| Verbatim quotation | `<Quotebox>` |
| Comparison of two things | `<Columns>` |
| Structured multi-attribute data | `<Table>` |
| Any figure | `<Image>` |

If a `<Text>` is turning into three bullets, it was a list. If a `<BulletedList>`
has one item, it was a `<Text>`.

## Anti-patterns

```
❌ Raw markdown list (- / 1.)   → <BulletedList> / <NumberedList>
❌ style="…" or inline CSS      → components and the CSS variables in style.css
❌ Raw <img>                    → <Image> (otherwise no figure numbering)
❌ Hand-written figure table    → <FigureList>
❌ Hand-written footnote list   → <Footnote> renders it automatically
❌ <Code> wrapper component     → native fenced code block
❌ <HighlightBox>               → does not exist; use <ExampleBox>
❌ Missing title / subtitle     → empty slide header
❌ Missing chapter: N           → empty footer
❌ Content slides without a preceding chapter-intro
❌ A chapter number with no matching entry in presentationInfo.chapters
❌ Two boxes on one slide
❌ A <Footnote> key with no entry in <CitationTable>
❌ <Todo> left in a deck being handed in
❌ Blank lines inside a component body (Slidev re-parses it as markdown)
```

## Before finishing an edit

1. Every content slide has `title`, `subtitle`, `chapter`.
2. Every `chapter: N` exists in `presentationInfo.chapters`, and each has a `chapter-intro`.
3. Every footnote key resolves in `<CitationTable>`; no unused citations.
4. Back matter order: Quellen → Abbildungsverzeichnis → `layout: closing`.
5. No `<Todo>` left behind.
6. Screenshot changed slides with the **slides-preview** skill — density problems
   only show up visually.
