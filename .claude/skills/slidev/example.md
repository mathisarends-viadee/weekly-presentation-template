# Reference Deck

A complete, minimal two-chapter deck showing every structural element in order.
Copy the shapes, not the content. The live deck at the repo root (`slides.md`) is
the longer real-world version.

````markdown
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
  chapters:
    - number: 1
      title: 'Einführung in MongoDB'
    - number: 2
      title: 'CRUD-Operationen'
---

---
layout: cover
---

---
layout: chapter-intro
chapter: 1
---

---
title: Einführung in MongoDB
subtitle: Was ist MongoDB?
chapter: 1
---

<DefinitionBox title="MongoDB" source="MongoDB Manual 2024">
  MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die Daten in flexiblen,
  JSON-ähnlichen Dokumenten statt in Tabellen speichert.
</DefinitionBox>

<Text title="Kernmerkmale">
  Daten liegen als <HighlightedText>BSON-Dokumente</HighlightedText> in Collections<Footnote text="Vgl. [Chod15, S. 12]" />.
  <SubText>Schema-Änderungen sind ohne Migration möglich</SubText>
</Text>

---
title: Einführung in MongoDB
subtitle: Entwicklungsmeilensteine
chapter: 1
---

<NumberedList title="Von 10gen zu MongoDB Inc.">
  <li>
    <span><HighlightedText>2007 – Gründung</HighlightedText> – 10gen entwickelt MongoDB für die eigene Cloud-Plattform</span>
    <SubText>Ursprünglich Teil einer Platform-as-a-Service-Lösung</SubText>
  </li>
  <li>
    <span><HighlightedText>2009 – Open Source</HighlightedText> – Veröffentlichung als eigenständige Datenbank</span>
  </li>
  <li>
    <span><HighlightedText>2017 – IPO</HighlightedText> – Börsengang an der NASDAQ</span>
    <SubText>MongoDB Atlas wird zum Hauptprodukt</SubText>
  </li>
</NumberedList>

---
title: Einführung in MongoDB
subtitle: Architektur eines Sharded Clusters
chapter: 1
---

<Image
  src="/images/sharding.png"
  alt="Aufbau eines Sharded Clusters"
  caption="Architektur eines Sharded Clusters"
  source="MongoDB Manual 2024"
  maxWidth="80%"
  height="320px"
  captionAlign="center"
/>

---
layout: chapter-intro
chapter: 2
---

---
title: CRUD-Operationen
subtitle: Die vier Grundoperationen
chapter: 2
---

<Table
  :headers="['Operation', 'Methode', 'Beschreibung']"
  :columnWidths="['20%', '30%', '50%']"
  :rows="[
    ['Create', '<code>insertOne()</code>', 'Fügt ein einzelnes Dokument ein'],
    ['Read', '<code>find()</code>', 'Liest Dokumente anhand eines Filters'],
    ['Update', '<code>updateOne()</code>', 'Ändert Felder eines Dokuments'],
    ['Delete', '<code>deleteOne()</code>', 'Entfernt ein Dokument']
  ]"
  caption="CRUD-Operationen im Überblick"
/>

---
title: CRUD-Operationen
subtitle: Abfragen in der Praxis
chapter: 2
---

```javascript {1-3|5-8|10-12}
// Alle volljährigen Nutzer
db.users.find({ age: { $gte: 18 } });

// Ein Dokument einfügen
db.users.insertOne({
  name: 'Anna Schmidt',
  age: 24
});

// Alter aktualisieren
db.users.updateOne({ name: 'Anna Schmidt' }, { $set: { age: 25 } });
```

---
title: CRUD-Operationen
subtitle: Embedding oder Referencing?
chapter: 2
---

<Columns>

<Text title="Embedding">
  Verschachtelte Dokumente in einem Datensatz.
  <SubText>Ein Lesezugriff, aber begrenzt auf 16 MB pro Dokument</SubText>
</Text>

<Text title="Referencing">
  Verweise über <HighlightedText>ObjectIds</HighlightedText>.
  <SubText>Vermeidet Duplikate, erfordert aber zusätzliche Abfragen</SubText>
</Text>

</Columns>

<ExampleBox title="Faustregel">
  <HighlightedText>Embedding</HighlightedText> für 1:1- und kleine 1:n-Beziehungen,
  Referencing für n:m und unbegrenzt wachsende Listen.
</ExampleBox>

---
title: Quellen
subtitle: Literatur und Dokumentation
---

<CitationTable
  :citations="[
    { id: '[Chod15]', text: 'Chodorow, K.: <em>MongoDB: The Definitive Guide.</em> 3rd Edition, O\'Reilly Media, 2015' },
    { id: '[MonDB24]', text: 'MongoDB Inc.: <em>MongoDB Manual.</em> Version 7.0, https://docs.mongodb.com/manual/, 2024' }
  ]"
/>

---
title: Abbildungsverzeichnis
subtitle: Verwendete Abbildungen
---

<FigureList />

---
layout: closing
---
````
