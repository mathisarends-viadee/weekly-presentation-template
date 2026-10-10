# Gestaltung

Die Vorlage folgt den Komponenten und Layouts des [FH Münster Slidev Starters](https://github.com/mathisarends/fh-muenster-slidev-starter/tree/57af20ea67e73b6d0092043abb8560305be2e88a).

## Farben

Die Gestaltung der FH-Vorlage bleibt erhalten. Nur die Farbrollen sind auf viadee übertragen:

| Rolle in der FH-Vorlage | viadee |
| --- | --- |
| Dunkelblau für Titel | Schwarz `#202020` |
| Blau für Abschnittstitel, Nummern und Boxen | Koralle für Text `#d63a2c` (Kontrast 4,7:1) |
| Orange für Trennlinie, Aufzählungszeichen und Akzente | viadee-Koralle `#ff5546` |
| Graublau für Nebentexte | neutrale Grautöne |

Hervorhebungen im Fließtext (`HighlightedText`) sind halbfett in Schwarz und nicht farbig. So steht auf einer Folie nicht zu viel Rot.

Die Farbwerte stehen zentral in `style.css`. `uno.config.ts` stellt dazu `viadee-*`-Utilities bereit und ersetzt die blaustichige Tailwind-Grauskala durch eine neutrale. Die bisherigen `fh-*`-Klassen bleiben als Aliase verfügbar.

## Schrift

Nunito Sans für Text und Fira Code für Code, wie in der FH-Vorlage. Beide Schriften werden lokal über Fontsource ausgeliefert, damit ein Vortrag ohne Google-Fonts-Verbindung funktioniert. Die kommerzielle viadee-Hausschrift wird nicht mitgeliefert.

Die FH-Vorlage hat Nunito Sans nur in den Stärken 400, 600 und 700 geladen. `font-black` wurde dort deshalb als 700 dargestellt. Die Variable-Font enthält auch 900. Darum verwenden die Layouts `font-bold`, damit Titel nicht schwarz und klobig wirken.

## Logo und Herkunft

Das viadee-Logo wurde am 10. Oktober 2026 als SVG aus dem Header der [viadee-Website](https://www.viadee.de/) übernommen und in Koralle gesetzt. Das Favicon ist ein eigenes, vereinfachtes v-Symbol.

Dies ist eine an viadee angepasste Vorlage. Eine offizielle Freigabe des Corporate Designs wird damit nicht behauptet. Markenrechte bleiben bei viadee. Das Ausgangsrepository enthielt zum Zeitpunkt der Übernahme keine separate Lizenzdatei.
