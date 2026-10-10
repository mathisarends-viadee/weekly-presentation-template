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
    - number: 3
      title: 'CRUD-Operationen'
    - number: 4
      title: 'Indexierung und Performance'
    - number: 5
      title: 'Aggregation Framework'

---
layout: cover

---
layout: chapter-intro
chapter: 1
---

---
title: Einführung in MongoDB
subtitle: Was ist MongoDB?
chapter: 1
---

<DefinitionBox title="MongoDB" source="MongoDB Documentation 2024">
  MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die Daten in flexiblen, JSON-ähnlichen Dokumenten speichert. Sie ermöglicht eine skalierbare, leistungsstarke und entwicklerfreundliche Datenverwaltung für moderne Anwendungen.
</DefinitionBox>

<Text title="Kernmerkmale">
  MongoDB speichert Daten als <HighlightedText>BSON-Dokumente</HighlightedText> (Binary JSON) in Collections statt in traditionellen Tabellen.
  <SubText>Diese flexible Struktur ermöglicht es, Schema-Änderungen ohne komplexe Migrationen durchzuführen</SubText>
</Text>

---
title: Einführung in MongoDB
subtitle: Die MongoDB-Geschichte
chapter: 1
---

<NumberedList title="Entwicklungsmeilensteine">
  <li>
    <span><HighlightedText>2007 - Gründung</HighlightedText> - 10gen entwickelt MongoDB für eigene Cloud-Plattform</span>
    <SubText>Ursprünglich als Teil einer Platform-as-a-Service-Lösung konzipiert</SubText>
  </li>
  <li>
    <span><HighlightedText>2009 - Open Source</HighlightedText> - Veröffentlichung als eigenständige Datenbank</span>
    <SubText>MongoDB wird unter der AGPL-Lizenz für die Community verfügbar gemacht</SubText>
  </li>
  <li>
    <span><HighlightedText>2013 - MongoDB Inc.</HighlightedText> - Umbenennung und Enterprise-Fokus</span>
    <SubText>Etablierung als führende NoSQL-Datenbank für Unternehmen</SubText>
  </li>
  <li>
    <span><HighlightedText>2017 - IPO</HighlightedText> - Börsengang an der NASDAQ</span>
    <SubText>MongoDB Atlas als vollständig verwaltete Cloud-Lösung wird zum Hauptprodukt</SubText>
  </li>
</NumberedList>

---
title: Einführung in MongoDB
subtitle: MongoDB vs. Relationale Datenbanken
chapter: 1
---

<Columns>

<BulletedList title="Relationale Datenbanken">
  <li>Strukturierte Daten
    <ul>
      <li>Festes Schema erforderlich</li>
      <li>Normalisierung notwendig</li>
      <li>Tabellen mit Fremdschlüsseln</li>
    </ul>
  </li>
  <li>Skalierung
    <ul>
      <li>Primär vertikale Skalierung</li>
      <li>ACID-Transaktionen garantiert</li>
      <li>Komplexe Joins für Relationen</li>
    </ul>
  </li>
</BulletedList>

<BulletedList title="MongoDB">
  <li>Flexible Dokumente
    <ul>
      <li>Dynamisches Schema</li>
      <li>Eingebettete Dokumente</li>
      <li>Collections ohne Constraints</li>
    </ul>
  </li>
  <li>Skalierung
    <ul>
      <li>Horizontale Skalierung (Sharding)</li>
      <li>ACID auf Dokumentebene<Footnote text="Ab Version 4.0 auch Multi-Document Transactions" /></li>
      <li>Embedded Documents statt Joins</li>
    </ul>
  </li>
</BulletedList>

</Columns>

---
layout: chapter-intro
chapter: 2
---

---
title: Datenmodellierung
subtitle: Embedded Documents vs. Referenzen
chapter: 2
---

<Columns>

<div>

<Text title="Embedded Documents">
  Daten werden <HighlightedText>direkt im Dokument</HighlightedText> gespeichert.
  <SubText>Bessere Read-Performance durch Datenlokalität</SubText>
</Text>

<BulletedList title="Vorteile">
  <li>Ein Query für alle Daten</li>
  <li>Atomare Operationen</li>
  <li>Optimale Read-Performance</li>
</BulletedList>

</div>

<div>

<Text title="Referenzen">
  Daten werden in <HighlightedText>separaten Collections</HighlightedText> gespeichert.
  <SubText>Flexible Updates und vermeidet Duplikation</SubText>
</Text>

<BulletedList title="Vorteile">
  <li>Kleinere Dokumente</li>
  <li>Weniger Daten-Duplikation</li>
  <li>Vermeidung des 16MB Limits</li>
</BulletedList>

</div>

</Columns>

---
layout: chapter-intro
chapter: 3
---

---
title: CRUD-Operationen
subtitle: Update Operatoren
chapter: 3
---

<Table 
  :headers="['Operator', 'Beschreibung', 'Beispiel']"
  :columnWidths="['20%', '40%', '40%']"
  :rows="[
    ['<code>$set</code>', 'Setzt Feldwerte oder fügt neue Felder hinzu', '<code>{ $set: { age: 30 } }</code>'],
    ['<code>$inc</code>', 'Inkrementiert numerische Werte', '<code>{ $inc: { views: 1 } }</code>'],
    ['<code>$push</code>', 'Fügt Element zu Array hinzu', '<code>{ $push: { tags: &quot;new&quot; } }</code>'],
    ['<code>$pull</code>', 'Entfernt Element aus Array', '<code>{ $pull: { tags: &quot;old&quot; } }</code>'],
    ['<code>$unset</code>', 'Entfernt Feld aus Dokument', '<code>{ $unset: { tempField: &quot;&quot; } }</code>']
  ]"
  caption="Wichtige Update-Operatoren in MongoDB"
/>

---
layout: chapter-intro
chapter: 4
---

---
title: Indexierung und Performance
subtitle: Index erstellen und verwalten
chapter: 4
---

```javascript
// Single Field Index
db.users.createIndex({ email: 1 });

// Compound Index
db.orders.createIndex({ customerId: 1, orderDate: -1 });

// Index im Hintergrund (empfohlen für Production)
db.users.createIndex({ email: 1 }, { background: true });

// Unique Index
db.users.createIndex({ username: 1 }, { unique: true });

// Text Index
db.articles.createIndex({ title: "text", content: "text" });

// Alle Indexes anzeigen
db.users.getIndexes();
```

<ExampleBox title="Wann Partial Indexes verwenden?">
  Partial Indexes sind ideal für große Collections, bei denen nur ein Teil der Dokumente häufig abgefragt wird. Sie sparen Speicherplatz und verbessern die Performance.
</ExampleBox>

---
layout: chapter-intro
chapter: 5
---

---
title: Aggregation Framework
subtitle: Leistungsstarke Datenverarbeitung
chapter: 5
---

<DefinitionBox title="Aggregation Pipeline" source="MongoDB Manual, Aggregation">
  Die Aggregation Pipeline ist ein Framework zur Datenverarbeitung, das Dokumente durch eine Reihe von Stages transformiert. Jede Stage führt eine Operation auf den Dokumenten aus und gibt das Ergebnis an die nächste Stage weiter.
</DefinitionBox>

<Text title="Pipeline-Konzept">
  Ähnlich wie <HighlightedText>Unix Pipes</HighlightedText>: Daten fließen durch mehrere Verarbeitungsschritte.
  <SubText>Jeder Schritt transformiert das Ergebnis des vorherigen - ermöglicht komplexe Analysen mit lesbarem Code</SubText>
</Text>

---
title: Aggregation Framework
subtitle: Aggregation Beispiel
chapter: 5
---

```javascript {1-3|4-9|10-17|18-20}
db.orders.aggregate([
  // Stage 1: Nur abgeschlossene Bestellungen
  {
    $match: {
      status: "completed",
      orderDate: { $gte: ISODate("2024-01-01") }
    }
  },
  // Stage 2: Nach Kategorie gruppieren
  {
    $group: {
      _id: "$category",
      totalRevenue: { $sum: "$amount" },
      orderCount: { $count: {} },
      avgOrderValue: { $avg: "$amount" }
    }
  },
  // Stage 3: Nach Umsatz sortieren
  { $sort: { totalRevenue: -1 } }
]);
```

---
layout: closing
---
