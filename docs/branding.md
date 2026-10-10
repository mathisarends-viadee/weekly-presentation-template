# Gestaltung

Die Vorlage folgt den Komponenten und Layouts des [FH Münster Slidev Starters](https://github.com/mathisarends/fh-muenster-slidev-starter/tree/57af20ea67e73b6d0092043abb8560305be2e88a).

## Farben

- Weiß als Folienhintergrund.
- Schwarz (`#202020`) für Titel, Fließtext und Hervorhebungen.
- Neutrale Grautöne für Untertitel, Quellen und sekundäre Informationen.
- viadee-Koralle (`#ff5546`) für Logo, Trennlinien und aktive Kapitelnummern.
- Dezente graue Flächen für Definitionen, Beispiele, Tabellen und Code.

Die Farbwerte stehen zentral in `style.css`. `uno.config.ts` stellt dazu `viadee-*`-Utilities bereit. Die bisherigen `fh-*`-Klassen bleiben als kompatible Aliase verfügbar, verwenden aber die neue Gestaltung. `HighlightedText` betont Text über die Schriftstärke.

Das ursprüngliche Footer-Muster bleibt erhalten. Die Kreisformen auf Titel- und Abschlussfolien sowie Abstände, Listenformen und Boxen stammen aus der FH-Vorlage.

## Schrift

Die Vorlage behält Nunito Sans und Fira Code für Code bei. Beide Schriften werden lokal über Fontsource ausgeliefert, damit ein Vortrag nach Installation und Build keine Google-Fonts-Verbindung benötigt. Die kommerzielle viadee-Hausschrift wird nicht mitgeliefert.

## Logo und Herkunft

Das viadee-Logo wurde am 10. Oktober 2026 als SVG aus dem Header der [viadee-Website](https://www.viadee.de/) übernommen und in Koralle gesetzt. Das Favicon ist ein eigenes, vereinfachtes v-Symbol.

Dies ist eine an viadee angepasste Vorlage. Eine offizielle Freigabe des Corporate Designs wird damit nicht behauptet. Markenrechte bleiben bei viadee. Das Ausgangsrepository enthielt zum Zeitpunkt der Übernahme keine separate Lizenzdatei.
