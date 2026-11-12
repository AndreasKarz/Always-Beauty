# Always Beauty
## Ihre Haut. Ihre Zeit.

Designsystem 1.1 · Clinical Elegance · 12. November 2026

## Zuerst öffnen

**Always-Beauty-Designsystem.fig** ist die zentrale, bearbeitbare Designdatei. Die Datei ist ein natives .fig-Archiv, keine umbenannte Grafik und kein PDF.

Nach dem Entpacken zeigt **Vorschau.html** die Gestaltung auch ohne Figma. Die SVG- und PNG-Dateien in den Unterordnern lassen sich einzeln verwenden.

## In Figma verwenden

Die .fig-Datei in der Figma-Dateiverwaltung importieren oder auf die Dateiverwaltung ziehen. Nicht als Grafik in eine bereits geöffnete Arbeitsfläche ziehen. Danach die drei Seiten links im Seitenbereich öffnen.

Die native Datei wurde lokal wieder eingelesen. Komponenten, Instanzen, Variablen und die sechs Bildressourcen wurden mit der vorherigen Version verglichen. Der Import in Figma ist noch zu prüfen.

## Persönlichkeit in der Gestaltung

**Always Beauty** ist der Salon. **Oxana Peske** begleitet die Kunden vom ersten Gespräch über die Behandlung bis zur Pflege zu Hause. Der Claim bleibt **«Ihre Haut. Ihre Zeit.»**. Die Website spricht an zentralen Stellen in Oxanas Ich-Form und lädt mit «Termin bei Oxana anfragen» zum persönlichen Kontakt ein. In Social Media wechselt die Markenkommunikation mit Oxanas eigenen Erklärungen und echten Arbeitssituationen. Für die Website und Social Media sind authentische Porträts von Oxana vorgesehen. Die Bildreferenzen in den Entwürfen markieren den Platz dafür.

## Zeichenflächen

**00 · Marke & Grundlagen**
Markenübersicht, 12 Logo-Varianten, Farbwelt, Google-Fonts-Hierarchie, Raster, Abstände, Kontrastregeln und Markenstimme. Die Logo-Hauptkomponenten liegen unterhalb der Übersichtsboards.

**01 · Komponenten & Website**
Buttons mit sechs Zuständen, Eingabefelder mit fünf Zuständen, Checkbox, Accordion, Behandlungskarte, Badge und zehn Vektoricons. Dazu Startseite für Desktop und Mobile, Terminanfrage in beiden Formaten, Bestätigungszustand und eine Behandlungs-Detailvorlage.

**02 · Social, Print & Bildwelt**
Sechs eingebettete Bildreferenzen, Shooting-Regeln, drei Feed-Vorlagenfamilien, sechs Beispielposts, zwei Stories, Avatar, Highlight-Symbole, Visitenkarte mit Vorder- und Rückseite, Terminkarte, Gutschein, Briefpapier und Übergabecheckliste.

## Bearbeitbare Struktur

52 Komponenten, 5 Komponenten-Sets, 80 Instanzen, 52 Farb- und Layoutvariablen, 15 Textstile, 10 lokale Farbstile, 448 normale Textknoten und 200 Vektorknoten wurden nach dem Export wieder eingelesen. Die Bilder sind eingebettet und nicht extern verlinkt.

Die Entwürfe sind nicht als grosse Hintergrundbilder angelegt: Text, Vektoren, Flächen und Bilder liegen auf getrennten Ebenen. Auto Layout ist bei den Buttons eingesetzt. Die komplexen Website-, Social- und Printbeispiele sind feste Referenzlayouts; sie sind keine automatisch responsiven oder fertig programmierten Oberflächen. Desktop und Mobile sind bewusst separat gestaltet. Zustände sind dokumentiert, aber nicht zu einem klickbaren Buchungsprototyp verbunden.

Die Komponenten werden über Instanzen eingesetzt. Benannte Text-Properties steuern zum Beispiel Buttonbeschriftung, Feldbeschriftung und Kartentitel. Bei den Farbvariablen nach Möglichkeit die semantischen Farben verwenden. Die SVG-Logoexporte enthalten Schrift als Vektorpfade; in der .fig-Datei bleibt die Wortmarke als Text editierbar.

## Google Fonts

**Cormorant Garamond – Medium 500** für Wortmarke und Headlines.
https://fonts.google.com/specimen/Cormorant+Garamond

**Inter – Regular 400, Medium 500, SemiBold 600** für Fliesstext und Bedienung.
https://fonts.google.com/specimen/Inter

Bei einer Schriftwarnung diese Familien über die offiziellen Google-Fonts-Seiten installieren und Figma anschliessend erneut öffnen. Das Paket enthält keine Fontdateien. Design-Tokens.css enthält alternativ die Google-Fonts-Einbindung für eine Website; vor einer Live-Einbindung Datenschutz- und Hostinganforderungen klären.

## Farbpalette

| Rolle | Wert |
| --- | --- |
| Warm Ivory | #F7F2EC |
| Soft Nude | #E7D7CC |
| Taupe Beige | #B9A79B |
| Deep Mocha | #5B4A42 |
| Champagne Gold | #C7A46A |
| Action Bronze | #806235 |

Gold bleibt ein sparsamer Akzent. Action Bronze ergänzt die Auswahl für lesbare Buttons. Berechnete sRGB-Kontraste: Weiss auf Bronze 5,65:1; Mocha auf Ivory 7,54:1. Das allein ist keine Zertifizierung der gesamten Website. Orientierung für die Umsetzung: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

## Referenzbilder: bewusst keine vermeintlich echten Salonfotos

Die sechs Referenzen stammen aus den KI-generierten Moodboards des Projekts. Sie zeigen weder Oxana noch den tatsächlichen Salon. Sie belegen keine Behandlungsergebnisse. Die kleinen Bildausschnitte dienen der Abstimmung von Licht, Tonwerten, Fokus und Atmosphäre; sie sind keine hochauflösenden, freigegebenen Werbefotos.

Vor der Veröffentlichung eigene Aufnahmen von Oxana, den Räumen und der tatsächlichen Arbeit einsetzen. Keine künstlichen Vorher-nachher-Bilder und keine erfundenen Testimonials verwenden. Die Markenbotschaften in den Social-Posts sind keine Kundenzitate.

## Logo verwenden

Primary: Goldsignet mit Mocha-Wortmarke. White: weiss auf dunklen Flächen. Mono: vollständig Mocha. Layouts: Stacked, Horizontal, Compact und Mark. PNG ist transparent; SVG ist vollständig vektorbasiert. Für kleine Icons die Bildmarke verwenden. Favicons und App-Symbole sind zusätzlich enthalten.

Markenname und Claim immer exakt: **Always Beauty** / **Ihre Haut. Ihre Zeit.** Die Bildmarke wurde nach der ausgewählten Bildidee neu als Vektor aufgebaut; die ursprüngliche Bildvorlage war kein fertiges Vektorlogo.

## Social Media

Feed: 1080 × 1350 px. Story: 1080 × 1920 px. Avatar: 640 × 640 px. Wichtige Storytexte möglichst zwischen y=250 und y=1670 halten. Link-Sticker erst in Instagram ergänzen. Die Feed-Beispiele sind als SVG und PNG exportiert. Fotomotive vor einer Veröffentlichung durch freigegebene, ausreichend aufgelöste Aufnahmen ersetzen.

## Druck

Die Print-SVGs definieren das physische Endformat: Visitenkarte und Terminkarte 85 × 55 mm, Gutschein A5 quer 210 × 148 mm, Briefpapier A4 210 × 297 mm. Die zugehörigen Figma-Frames nutzen grössere Designkoordinaten und müssen bei einem direkten Figma-PDF-Export auf das benannte Endformat skaliert werden. Die SVGs besitzen bereits diese Endformatangaben.

Die PNGs sind Ansichtsdateien, keine verbindliche Druckvorstufe. Die Printlayouts sind noch keine druckfreigegebenen CMYK-Dateien: 3 mm Beschnitt, Papier, Farbprofil, Auflösung und gegebenenfalls Goldfolie mit der Druckerei abstimmen. Gutscheinbedingungen sind im Entwurf als Platzhalter markiert.

## Vor dem Livegang

Oxana gibt Inhalte und Fotos frei. Konkrete Leistungen, Eignung, Qualifikationen, Dauer, Preise und Kontaktangaben vor Veröffentlichung bestätigen. Buchungsziel oder Formularanbindung definieren. Datenschutz, Impressum, Kontrast, Tastaturbedienung und Mobilansichten prüfen. Marken-, Domain- und Handle-Prüfung sind nicht Bestandteil dieses gestalterischen Entwurfs.

## Technische Übergabe

handoff/Design-Tokens.json: Farben, Rollen, Typografie, Abstände und Assetverzeichnis.
handoff/Design-Tokens.css: CSS-Grundlagen und Beispielklassen, kein fertiges Frontend.
handoff/Pruefbericht.json: lokal wieder eingelesene Struktur und Prüfumfang.
handoff/Asset-Verzeichnis.json: SVG-Dateien und zugehörige Zeichenflächen.

Der lokale Vergleich bestätigte alle vorhandenen Knoten, Komponentenverweise und eingebetteten Bilder sowie zwei ergänzte Bildlegenden. Website-, Social- und Markenvorschauen wurden aus den aktualisierten SVGs gerendert. Offen bleiben der Import in Figma, die Browser-Implementierung und die Druckfreigabe.
