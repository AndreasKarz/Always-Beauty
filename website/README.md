# Always Beauty · Website

[Start](#start) · [Dateien](#dateien) · [Behandlungsseiten](#behandlungsseiten) · [Terminanfrage](#terminanfrage) · [Bilder ersetzen](#bilder-ersetzen) · [Vor der Veröffentlichung](#vor-der-veröffentlichung)

## Start

Öffne [index.html](index.html) im Website-Ordner per Doppelklick für die lokale Vorschau. Für das Hosting wird der gesamte Ordner `website` mit seiner Struktur auf einen statischen Webserver kopiert.

**Direkt zur Vorschau** · [Weihnachtsgutschein](index.html#weihnachtsgutschein) · [Behandlungen](index.html#behandlungen) · [Über Oxana](index.html#oxana) · [Terminanfrage](index.html#termin) · [Kontakt](index.html#kontakt)

## Dateien

| Was möchtest du ändern? | Datei oder Ordner |
| --- | --- |
| Startseite, Weihnachtsgutschein, Kontaktdaten und WhatsApp-Links | [index.html](index.html) |
| Texte, Preise und Dauer auf den Detailseiten | [behandlungen/](behandlungen/) |
| Farben, Abstände und Layout | [styles.css](styles.css) · [Layout der Detailseiten](behandlungen/details.css) |
| Vorauswahl und E-Mail-Entwurf der Terminanfrage | [app.js](app.js) |
| Bilder, Logo und Schriften | [Bilder](assets/images/) · [Logo](assets/always-beauty-logo.svg) · [Schriften](assets/fonts/) |
| Mitgelieferte React-Dateien und Lizenz | [vendor/](vendor/) |

## Behandlungsseiten

| Behandlung | Detailseite |
| --- | --- |
| Klassische Gesichtsbehandlung | [Seite öffnen](behandlungen/klassische-gesichtsbehandlung.html) |
| Hydradermie | [Seite öffnen](behandlungen/hydradermie.html) |
| Sauerstoffbehandlung | [Seite öffnen](behandlungen/sauerstoffbehandlung.html) |
| Gesichts-, Hals- und Dekolleté-Massage | [Seite öffnen](behandlungen/gesichts-und-dekollete-massage.html) |
| Hydradermie Lift Augenbehandlung | [Seite öffnen](behandlungen/hydradermie-lift-augen.html) |
| Wimpern färben | [Seite öffnen](behandlungen/wimpern-faerben.html) |

Die Terminschaltflächen der Unterseiten wählen im Formular die passende Behandlung vor. Preise und Dauer stammen von der [Salonsite](https://always-beauty.ch/). Bei Änderungen bitte die Startseite und die betroffene Unterseite abgleichen.

Der Abo-Gutschein steht als zweite Sektion auf der Startseite. Die Gutscheinanfrage und «Mit Oxana sprechen» führen zur auf der Salonsite verlinkten WhatsApp-Nummer.

## Terminanfrage

Das Formular in [app.js](app.js) setzt den E-Mail-Entwurf für `info@always-beauty.ch` zusammen und öffnet ihn per `mailto:`. Besucher prüfen und senden den Entwurf in ihrem E-Mail-Programm. Oxana bestätigt den Termin persönlich per Antwort. Die Website speichert die Eingaben weder im Browser noch auf einem Server.

React und ReactDOM 18.3.1 sowie die Schriften liegen mit den Lizenzdateien lokal bei. Die Website benötigt weder Installation noch Build-Schritt.

## Bilder ersetzen

| Datei | Einsatz | Format |
| --- | --- | --- |
| [assets/images/hero.jpg](assets/images/hero.jpg) | Grosses Hautpflege-Motiv auf der Startseite | Hochformat 4:5 |
| [assets/images/treatment.jpg](assets/images/treatment.jpg) | Detailmotiv zur Behandlung | Hochformat 3:4 |
| [assets/images/studio.jpg](assets/images/studio.jpg) | Studio-Visualisierung bei den Kontaktdaten | Hochformat 3:4 |

Die drei Motive sind generiert. Sie lassen sich unter denselben Dateinamen austauschen. Bei einem neuen Bildmotiv bitte auf der Startseite und den betreffenden Behandlungsseiten auch den Alternativtext, die Bildunterschrift und bei anderen Seitenverhältnissen die Bildabmessungen prüfen. Das Logo ist als SVG in `assets` abgelegt.

## Vor der Veröffentlichung

Bitte die finalen Fotos, die Kontaktdaten, die Texte und die Angaben zu Impressum und Datenschutz mit Oxana abstimmen.
