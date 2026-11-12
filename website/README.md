# Always Beauty

Die Website startet mit `index.html`. Für die lokale Vorschau reicht ein Doppelklick auf diese Datei. Für das Hosting wird der gesamte Ordner `website` mit seiner Struktur auf einen statischen Webserver kopiert.

## Terminanfrage

Das Formular in `app.js` setzt den E-Mail-Entwurf für `info@always-beauty.ch` zusammen und öffnet ihn per `mailto:`. Besucher prüfen und senden den Entwurf in ihrem E-Mail-Programm. Oxana bestätigt den Termin persönlich per Antwort. Die Website speichert die Eingaben weder im Browser noch auf einem Server.

React und ReactDOM 18.3.1 sowie die Schriften liegen mit den Lizenzdateien lokal bei. Die Website benötigt weder Installation noch Build-Schritt.

## Behandlungen und Weihnachtsgutschein

Die sechs Unterseiten liegen in `behandlungen`. Ihre Terminschaltflächen wählen im Formular die passende Behandlung vor. Preise und Dauer stammen von der [Salonsite](https://always-beauty.ch/). Bei Änderungen bitte die Startseite und die betroffene Unterseite abgleichen.

Der Abo-Gutschein steht als zweite Sektion auf der Startseite. Die Gutscheinanfrage und «Mit Oxana sprechen» führen zur auf der Salonsite verlinkten WhatsApp-Nummer.

## Bilder ersetzen

| Datei | Einsatz | Format |
| --- | --- | --- |
| `assets/images/hero.jpg` | Grosses Hautpflege-Motiv auf der Startseite | Hochformat 4:5 |
| `assets/images/treatment.jpg` | Detailmotiv zur Behandlung | Hochformat 3:4 |
| `assets/images/studio.jpg` | Studio-Visualisierung bei den Kontaktdaten | Hochformat 3:4 |

Die drei Motive sind generiert. Sie lassen sich unter denselben Dateinamen austauschen. Bei einem neuen Bildmotiv bitte in `index.html` auch den Alternativtext, die Bildunterschrift und bei anderen Seitenverhältnissen die Bildabmessungen prüfen. Das Logo ist als SVG in `assets` abgelegt.

Vor der Veröffentlichung bitte die finalen Fotos, die Kontaktdaten, die Texte und die Angaben zu Impressum und Datenschutz mit Oxana abstimmen.
