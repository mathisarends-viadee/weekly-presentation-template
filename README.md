# viadee Slidev Starter

Helle Vorlage für technische Präsentationen auf Basis des [FH Münster Slidev Starters](https://github.com/mathisarends/fh-muenster-slidev-starter). Die Komponenten und Layouts bleiben erhalten. Die Gestaltung verwendet schwarze Schrift, neutrale Grautöne und viadee-Koralle für Logo und Akzente. Der Footer zeigt nur Vortragstitel, Kapitel und Seitenzahl.

## Start

Voraussetzung: Node.js 22.12+, 24 oder 26+ innerhalb der in `package.json` angegebenen Versionen.

```bash
npm ci
npm run dev
```

Die Vorschau läuft unter `http://localhost:3030`. In `slides.md` stehen die Präsentationsmetadaten und ein Beispieldeck mit 16 Folien. Titel, Datum, Anlass, Autor:innen und Kapitel werden im ersten Frontmatter-Block angepasst.

```bash
npm run lint
npm run build
```

Der Build liegt in `dist/`. Schriften und Markenassets werden lokal ausgeliefert.

## Komponenten und Layouts

| Inhalt | Komponenten |
| --- | --- |
| Struktur | `SlideLayout`, `Columns`, `Divider` |
| Text | `Text`, `SectionTitle`, `HighlightedText`, `SubText` |
| Listen | `BulletedList`, `NumberedList`, `NumberBadge` |
| Boxen | `DefinitionBox`, `ExampleBox`, `Quotebox` |
| Tabellen und Bilder | `Table`, `Image` |
| Kapitel und Quellen | `ChapterOutline`, `Outline`, `OutlineItem`, `Footnote` |
| Entwürfe | `Todo` |

Die Layouts heißen weiterhin `cover`, `chapter-intro`, `default` und `closing`. Jede Inhaltsfolie erhält `title`, `subtitle` und `chapter`. Kapitelnummern verweisen auf `presentationInfo.chapters`. Code wird als nativer Markdown-Codeblock geschrieben. Mermaid-Diagramme folgen der neutralen Gestaltung.

`HighlightedText` verwendet fette schwarze Schrift. Die bisherigen `fh-*`-Utilities bleiben als Farbaliase verfügbar. Die Farben werden zentral in `style.css` definiert. Details zu Herkunft und Gestaltung stehen in [docs/branding.md](docs/branding.md).

## Export

```bash
npx playwright install chromium
npx slidev export --output /tmp/viadee-template.pdf
```

Die Playwright-Abhängigkeit für den Export ist enthalten. Weitere Optionen beschreibt die [Slidev-Dokumentation](https://sli.dev/guide/exporting).

## Hinweise zur Übernahme

Die Basis stammt aus Commit `57af20ea67e73b6d0092043abb8560305be2e88a` des FH-Starters. Der erste lokale Commit enthält die unveränderte Vorlage.

Das viadee-Logo stammt aus dem Header der [viadee-Website](https://www.viadee.de/). Die Vorlage ist eine Anpassung, kein offiziell freigegebenes Corporate-Design-Template. Das Ausgangsrepository enthielt keine separate Lizenzdatei.

`magic-string` 1.x ist auf Version 1.4.2 begrenzt, um den [aktuellen UnoCSS-Buildfehler](https://github.com/unocss/unocss/issues/5373) zu umgehen. Die von Vue benötigte 0.30.x-Reihe bleibt davon unberührt. `npm audit` meldet weiterhin Probleme in transitiven Slidev-Abhängigkeiten. Ein erzwungenes Downgrade wurde nicht durchgeführt.
