# Konzept: Website-Relaunch Plantoclean

> **Claim:** „Plantoclean – alles sauber?!"
> **Branche:** Garten- und Landschaftsbau
> **Einsatzgebiet:** Nordrhein-Westfalen (NRW)
> **Zielgruppe:** Privat- und Gewerbekunden (gleichwertig)
> **Sprache:** Deutsch

---

## 1. Projektübersicht

### 1.1 Ausgangslage
Die bestehende Website von Plantoclean stammt aus dem Jahr 1999 und entspricht weder technisch noch gestalterisch den heutigen Anforderungen. Ein vollständiger Relaunch ist notwendig, um das Unternehmen zeitgemäß und professionell zu präsentieren.

### 1.2 Ziele des Relaunchs
- Moderner, vertrauenserweckender Webauftritt für Privat- und Gewerbekunden
- Klare Darstellung des Leistungsportfolios mit visuellen Vorher/Nachher-Vergleichen
- Einfache Kontaktaufnahme (Formular + WhatsApp)
- Rechtlich einwandfreie Pflichtseiten (Impressum, Datenschutz, Haftungsausschluss)
- Suchmaschinenoptimierung (SEO) für den Raum NRW
- Mobile-First-Design für optimale Darstellung auf allen Endgeräten
- Schnelle Ladezeiten durch statische Seitengenerierung (Astro)

### 1.3 Tech-Stack
| Technologie | Zweck |
|---|---|
| **Astro** | Static Site Generator – schnell, SEO-freundlich, modular |
| **Tailwind CSS** | Utility-First CSS Framework für konsistentes, responsives Design |
| **shadcn/ui** | UI-Komponentenbibliothek für hochwertige, barrierefreie Komponenten |
| **React** | Wird als UI-Runtime für shadcn/ui-Komponenten eingebunden (Astro Islands) |

---

## 2. Seitenstruktur & Navigation

### 2.1 Sitemap

```
plantoclean.de/
├── / .......................... Hero / Landingpage (Startseite)
├── /leistungen ............... Leistungsübersicht mit Vorher/Nachher
├── /kontakt .................. Kontaktformular + WhatsApp
├── /impressum ................ Impressum (rechtl. Pflicht)
├── /datenschutz .............. Datenschutzerklärung (DSGVO-Pflicht)
├── /haftungsausschluss ....... Haftungsausschluss / Disclaimer
└── /nachricht-gesendet ....... Bestätigungsseite nach Formularversand
```

### 2.2 Navigation (Header)
- **Logo** (links) – verlinkt zur Startseite
- **Leistungen** – Ankerlink oder Unterseite
- **Kontakt** – Kontaktseite
- **Hamburger-Menü** auf Mobile mit Slide-In-Animation

### 2.3 Footer
- Firmenname + Claim
- Schnelllinks: Impressum | Datenschutz | Haftungsausschluss
- Kontaktdaten (Telefon, E-Mail)
- WhatsApp-Button
- © 2026 Plantoclean – Alle Rechte vorbehalten

---

## 3. Seitenbeschreibungen

### 3.1 Startseite / Hero-Landingpage (`/`)

Die Startseite ist das Herzstück der Website und soll in wenigen Sekunden überzeugen.

#### Hero-Section
- **Vollbreites Hintergrundbild** (Platzhalter: gepflegter Garten / grüne Landschaft)
- **Overlay** mit leichtem Grün-Gradient für Lesbarkeit
- **Headline:** „Plantoclean – alles sauber?!"
- **Subheadline:** „Ihr Partner für professionelle Grünpflege in NRW"
- **CTA-Buttons:**
  - Primär: „Jetzt Anfrage senden" → Link zu /kontakt
  - Sekundär: „Unsere Leistungen" → Link zu /leistungen
- **Trust-Elemente** unterhalb: z.B. „Langjährige Erfahrung | Flexibel | Schnelle Umsetzung"

#### USP-Section (Warum Plantoclean?)
Vier Karten im Grid-Layout mit Icons:

| Icon | USP | Beschreibung |
|---|---|---|
| 🕐 | **Langjährige Erfahrung** | Jahrelange Kompetenz in der Grünpflege – wir kennen jede Herausforderung. |
| ⚡ | **Hohe Flexibilität** | Kurzfristige Einsätze? Kein Problem – wir sind da, wenn Sie uns brauchen. |
| 🤝 | **Niederschwelliger Zugang** | Unkomplizierte Auftragserteilung – ein Anruf oder eine Nachricht genügt. |
| 🚀 | **Schnelle Umsetzung** | Vom Auftrag zur Umsetzung ohne Umwege – flache Strukturen, direkte Kommunikation. |

#### Leistungs-Teaser
- Kompakte Vorschau der vier Kernleistungen als Bildkarten
- Jede Karte: Icon + Titel + 1-Satz-Beschreibung + „Mehr erfahren"-Link
- Verlinkung zur ausführlichen Leistungsseite

#### Referenzen / Kundenstimmen (Platzhalter)
- Karussell oder Grid mit 3 Testimonial-Karten
- Platzhalter-Texte und -Namen
- Sternebewertung (5/5)
- Hinweis: „Wird durch echte Kundenstimmen ersetzt"

#### Kontakt-CTA-Banner
- Farbig abgehobener Bereich am Seitenende
- Text: „Bereit für einen gepflegten Garten? Kontaktieren Sie uns jetzt!"
- Buttons: „Anfrage senden" + „WhatsApp"

---

### 3.2 Leistungsseite (`/leistungen`)

Ausführliche Darstellung aller Dienstleistungen mit visuellen Vorher/Nachher-Vergleichen.

#### Seitenaufbau

**Header-Bereich:**
- Überschrift: „Unsere Leistungen"
- Einleitungstext: Kurze Beschreibung des Gesamtportfolios

**Leistung 1: Grünschnitt**
- **Beschreibung:** Professioneller Grünschnitt für Rasenflächen, Wiesen und Freiflächen. Ob Privatgarten oder Gewerbegrundstück – wir sorgen für gepflegte Grünflächen in jeder Größe.
- **Vorher/Nachher-Slider:** Interaktiver Schieberegler zum visuellen Vergleich (Platzhalterbilder)
- **Leistungsumfang (Bullet-Liste):**
  - Rasenmähen und Rasenpflege
  - Wiesenmahd
  - Freiflächen- und Grünflächenpflege
  - Entsorgung des Schnittguts
- **Geeignet für:** Privatkunden, Hausverwaltungen, Kommunen, Gewerbetreibende

**Leistung 2: Jahrespflege**
- **Beschreibung:** Ganzjährige Betreuung Ihrer Grünanlagen – von der Frühjahrskur bis zur Wintervorbereitung. Mit einem Jahrespflegevertrag haben Sie das ganze Jahr über einen zuverlässigen Partner an Ihrer Seite.
- **Vorher/Nachher-Slider:** Interaktiver Schieberegler (Platzhalterbilder)
- **Leistungsumfang (Bullet-Liste):**
  - Regelmäßige Grünflächenpflege nach Pflegeplan
  - Saisonale Bepflanzung und Pflege
  - Laubbeseitigung im Herbst
  - Winterdienst-Vorbereitung der Grünanlagen
- **Geeignet für:** Hausverwaltungen, Gewerbeobjekte, Privathaushalte mit Pflegevertrag

**Leistung 3: Rückschnitt**
- **Beschreibung:** Fachgerechter Rückschnitt von Bäumen, Sträuchern und Hecken. Wir bringen Ihre Gehölze in Form und sorgen für gesundes Wachstum – unter Beachtung der gesetzlichen Schnittzeiten.
- **Vorher/Nachher-Slider:** Interaktiver Schieberegler (Platzhalterbilder)
- **Leistungsumfang (Bullet-Liste):**
  - Baumrückschnitt und Kronenpflege
  - Heckenschnitt
  - Strauchschnitt und Formschnitt
  - Totholzentfernung
  - Entsorgung des Schnittguts
- **Geeignet für:** Alle Kunden mit Gehölzbestand

**Leistung 4: Beischnitt**
- **Beschreibung:** Präziser Beischnitt für ein gepflegtes Erscheinungsbild. Ob Einfassungen, Beetränder oder Wege – wir sorgen für saubere Kanten und definierte Übergänge.
- **Vorher/Nachher-Slider:** Interaktiver Schieberegler (Platzhalterbilder)
- **Leistungsumfang (Bullet-Liste):**
  - Kantenschnitt an Wegen und Beeten
  - Einfassungsarbeiten
  - Formgebung von Hecken und Büschen
  - Pflege von Rasenrändern
- **Geeignet für:** Alle Kunden, die Wert auf ein ordentliches Gesamtbild legen

#### Vorher/Nachher-Slider – Technische Umsetzung
- Interaktive Komponente (React Island in Astro)
- Zwei übereinanderliegende Bilder mit verschiebbarem Trennbalken
- Touch-fähig für Mobile
- Platzhalterbilder initial, später austauschbar durch echte Projektfotos
- Beschriftung: „Vorher" / „Nachher" an den jeweiligen Seiten

#### CTA am Seitenende
- „Interesse an einer unserer Leistungen? Kontaktieren Sie uns für ein unverbindliches Angebot!"
- Buttons: „Anfrage senden" + „WhatsApp"

---

### 3.3 Kontaktseite (`/kontakt`)

#### Kontaktformular
Felder:
| Feld | Typ | Pflicht |
|---|---|---|
| Name | Text | Ja |
| E-Mail | E-Mail | Ja |
| Telefon | Tel | Nein |
| Betreff | Dropdown (Grünschnitt, Jahrespflege, Rückschnitt, Beischnitt, Sonstiges) | Ja |
| Nachricht | Textarea | Ja |
| Datenschutz-Checkbox | Checkbox | Ja |

- **Submit-Button:** „Anfrage absenden"
- **Erfolgreich:** Weiterleitung zu `/nachricht-gesendet`
- **Formular-Backend:** Astro-kompatible Lösung (z.B. Formspree, Netlify Forms, oder eigenes API-Endpoint)

#### WhatsApp-Button
- Prominenter grüner WhatsApp-Button
- Vorbefüllte Nachricht: „Hallo Plantoclean, ich interessiere mich für Ihre Leistungen und hätte gerne ein Angebot."
- Öffnet WhatsApp Web / App je nach Gerät

#### Kontaktdaten-Sidebar
- Telefonnummer (klickbar)
- E-Mail-Adresse (klickbar)
- Adresse
- Einsatzgebiet: NRW

---

### 3.4 Bestätigungsseite (`/nachricht-gesendet`)

- **Headline:** „Vielen Dank für Ihre Nachricht!"
- **Text:** „Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen – in der Regel innerhalb von 24 Stunden."
- **Icon:** Grüner Haken / Checkmark
- **Button:** „Zurück zur Startseite"
- **Kein Indexing:** `noindex, nofollow` Meta-Tag

---

### 3.5 Impressum (`/impressum`)

Rechtlich vorgeschriebene Angaben gemäß § 5 TMG / § 18 MStV:

- Firmenname (Platzhalter)
- Rechtsform
- Vertretungsberechtigter / Inhaber (Platzhalter)
- Postanschrift (Platzhalter)
- Telefon (Platzhalter)
- E-Mail (Platzhalter)
- Umsatzsteuer-Identifikationsnummer (falls vorhanden, Platzhalter)
- Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV (Platzhalter)
- Berufshaftpflichtversicherung (falls vorhanden, Platzhalter)
- Streitschlichtung: Hinweis auf OS-Plattform der EU + Hinweis zur Teilnahme an Streitbeilegungsverfahren

---

### 3.6 Datenschutzerklärung (`/datenschutz`)

DSGVO-konforme Datenschutzerklärung mit folgenden Abschnitten:

1. **Verantwortlicher** – Platzhalter-Kontaktdaten
2. **Übersicht der Verarbeitungen** – Welche Daten werden erhoben
3. **Hosting** – Angaben zum Webhoster
4. **Kontaktformular** – Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO
5. **WhatsApp-Kommunikation** – Hinweis auf Nutzung von WhatsApp (Meta), Datenverarbeitung durch Dritte, Rechtsgrundlage
6. **Server-Log-Dateien** – Automatisch erhobene Daten
7. **Cookies** – Hinweis (idealerweise keine Cookies notwendig bei statischer Seite)
8. **Rechte der betroffenen Personen** – Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch
9. **Beschwerderecht bei der Aufsichtsbehörde** – Zuständige Behörde NRW (LDI NRW)
10. **Aktualität und Änderung dieser Datenschutzerklärung**

> **Hinweis:** Für eine rechtssichere Datenschutzerklärung wird die Nutzung eines DSGVO-Generators empfohlen (z.B. e-recht24.de, Datenschutz-Generator.de) oder die Beratung durch einen Datenschutzbeauftragten.

---

### 3.7 Haftungsausschluss / Disclaimer (`/haftungsausschluss`)

1. **Haftung für Inhalte** – Haftungsbeschränkung gem. §§ 7, 8 TMG
2. **Haftung für Links** – Distanzierung von verlinkten Inhalten Dritter
3. **Urheberrecht** – Hinweis auf Urheberrechtsschutz der Inhalte und Bilder
4. **Bildnachweise** – Platzhalter für Bildquellen (Stock-Fotos etc.)

---

## 4. Design-Konzept

### 4.1 Farbpalette (Grün/Natur)

| Verwendung | Farbe | Hex | Beschreibung |
|---|---|---|---|
| **Primär** | Waldgrün | `#2D5016` | Hauptfarbe – Headlines, Buttons, Akzente |
| **Primär Hell** | Blattgrün | `#4A7C29` | Hover-States, sekundäre Akzente |
| **Primär Sehr Hell** | Mintgrün | `#E8F5E0` | Hintergrundflächen, Karten-Hintergrund |
| **Sekundär** | Erdbraun | `#8B6914` | Akzentfarbe für Kontraste, Icons |
| **Neutral Dunkel** | Anthrazit | `#1A1A2E` | Fließtexte, Footer |
| **Neutral Mittel** | Grau | `#6B7280` | Sekundärtexte, Beschreibungen |
| **Neutral Hell** | Warmweiß | `#FAFAF5` | Seitenhintergrund |
| **Weiß** | Reinweiß | `#FFFFFF` | Karten, Formulare |
| **Akzent** | Frisches Grün | `#22C55E` | CTA-Buttons, Erfolgsmeldungen, WhatsApp |
| **Fehler** | Rot | `#EF4444` | Formularfehler |

### 4.2 Typografie

| Element | Schrift | Größe | Gewicht |
|---|---|---|---|
| **H1** | Inter / Manrope | 48–64px (responsive) | Bold (700) |
| **H2** | Inter / Manrope | 32–40px | Semibold (600) |
| **H3** | Inter / Manrope | 24–28px | Semibold (600) |
| **Fließtext** | Inter | 16–18px | Regular (400) |
| **Small / Caption** | Inter | 14px | Regular (400) |
| **Button** | Inter | 16px | Medium (500) |

> Schriften werden über Google Fonts oder als lokale Dateien (DSGVO-konform!) eingebunden. **Empfehlung: Lokales Hosting zur Vermeidung von Google-Fonts-DSGVO-Problemen.**

### 4.3 Design-Prinzipien

- **Mobile First:** Design wird von Mobile aufwärts entwickelt
- **Großzügiger Whitespace:** Inhalte atmen lassen, keine überladenen Layouts
- **Konsistente Abstände:** 8px-Raster-System (8, 16, 24, 32, 48, 64, 96px)
- **Weiche Schatten:** Subtile Box-Shadows für Tiefenwirkung
- **Abgerundete Ecken:** Border-Radius 8–12px für einen freundlichen Look
- **Natürliche Bildsprache:** Grüne Gärten, saubere Schnitte, Natur-Texturen

### 4.4 Komponenten (shadcn/ui)

Folgende shadcn/ui-Komponenten werden eingesetzt:

| Komponente | Einsatz |
|---|---|
| `Button` | CTAs, Formular-Submit, Navigation |
| `Card` | Leistungskarten, USP-Karten, Testimonials |
| `Input` / `Textarea` | Kontaktformular |
| `Select` | Betreff-Dropdown im Formular |
| `Checkbox` | Datenschutz-Einwilligung |
| `Sheet` | Mobile Navigation (Slide-In-Menü) |
| `Carousel` | Testimonial-Karussell |
| `Badge` | Kennzeichnungen (z.B. „Beliebt", Leistungskategorien) |
| `Separator` | Visuelle Trennlinien |
| `Accordion` | FAQ oder Detail-Informationen auf Leistungsseite |

---

## 5. Interaktive Elemente

### 5.1 Vorher/Nachher-Slider
- **Typ:** Horizontaler Schieberegler
- **Umsetzung:** Custom React-Komponente (Astro Island, `client:visible`)
- **Verhalten:**
  - Drag-and-Drop auf Desktop
  - Touch-Swipe auf Mobile
  - Beschriftung „Vorher" (links) / „Nachher" (rechts)
  - Initialer Slider-Position: 50%

### 5.2 WhatsApp-Button (Floating)
- Fester, schwebender WhatsApp-Button unten rechts
- Grüner Kreis mit WhatsApp-Icon
- Pulsing-Animation als Aufmerksamkeits-Element
- Auf allen Seiten sichtbar (außer Bestätigungsseite)

### 5.3 Smooth Scroll
- Sanftes Scrollen bei Ankerlinks
- Scroll-to-Top-Button ab bestimmter Scrollhöhe

### 5.4 Scroll-Animationen
- Dezente Fade-In/Slide-Up-Animationen beim Scrollen (Intersection Observer)
- Keine übertriebenen Effekte – subtil und professionell

---

## 6. SEO-Strategie

### 6.1 Technisches SEO
- Statische HTML-Seiten (Astro SSG) für maximale Ladegeschwindigkeit
- Semantisches HTML5 (header, main, section, article, footer)
- Strukturierte Daten (JSON-LD): LocalBusiness Schema
- Sitemap.xml (automatisch generiert)
- robots.txt
- Canonical-Tags
- Open Graph Meta-Tags für Social Media Sharing

### 6.2 On-Page SEO

| Seite | Title-Tag | Meta Description |
|---|---|---|
| Startseite | Plantoclean – Professionelle Grünpflege in NRW \| alles sauber?! | Plantoclean bietet professionellen Grünschnitt, Jahrespflege, Rückschnitt und Beischnitt in NRW. Flexibel, erfahren und unkompliziert. Jetzt anfragen! |
| Leistungen | Unsere Leistungen – Grünschnitt, Rückschnitt & mehr \| Plantoclean | Entdecken Sie unser Leistungsportfolio: Grünschnitt, Jahrespflege, Rückschnitt und Beischnitt. Mit Vorher/Nachher-Bildern. Für Privat und Gewerbe in NRW. |
| Kontakt | Kontakt – Plantoclean \| Jetzt unverbindlich anfragen | Kontaktieren Sie Plantoclean für ein unverbindliches Angebot. Per Formular, Telefon oder WhatsApp. Wir sind flexibel und schnell für Sie da. |
| Impressum | Impressum – Plantoclean | Impressum der Plantoclean – Angaben gemäß § 5 TMG. |
| Datenschutz | Datenschutzerklärung – Plantoclean | Datenschutzerklärung der Plantoclean gemäß DSGVO. |
| Haftung | Haftungsausschluss – Plantoclean | Haftungsausschluss und Disclaimer der Plantoclean. |

### 6.3 Lokales SEO
- Fokus-Keywords: „Grünpflege NRW", „Grünschnitt NRW", „Gartenpflege Nordrhein-Westfalen"
- NAP-Konsistenz (Name, Address, Phone) auf allen Seiten
- Empfehlung: Google Business Profil anlegen/aktualisieren (extern)

---

## 7. Performance & Technische Anforderungen

### 7.1 Performance-Ziele
- **Lighthouse Score:** > 95 in allen Kategorien
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1

### 7.2 Optimierungen
- Bildoptimierung: WebP/AVIF-Format, responsive `<picture>`-Tags
- Lazy Loading für Bilder unterhalb des Viewports
- Minimaler JavaScript-Einsatz dank Astro (nur interaktive Islands laden JS)
- CSS-Purging durch Tailwind CSS (nur verwendete Klassen im Bundle)
- Schriften: Lokales Hosting, `font-display: swap`, Subset

### 7.3 Hosting-Empfehlung
- **Netlify** oder **Vercel** (kostenlose Tier für statische Seiten)
- Automatisches Deployment via Git
- HTTPS out-of-the-box
- CDN für globale Auslieferung

---

## 8. Barrierefreiheit (Accessibility)

- Semantisches HTML
- ARIA-Labels für interaktive Elemente
- Ausreichende Farbkontraste (WCAG 2.1 AA)
- Keyboard-Navigation für alle interaktiven Elemente
- Alt-Texte für alle Bilder
- Focus-Styles für Tastaturnutzer

---

## 9. Projektstruktur (Astro)

```
plantoclean/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│       ├── hero/              # Hero-Bilder (Platzhalter)
│       ├── leistungen/        # Vorher/Nachher-Bilder (Platzhalter)
│       │   ├── gruenschnitt/
│       │   ├── jahrespflege/
│       │   ├── rueckschnitt/
│       │   └── beischnitt/
│       ├── testimonials/      # Kundenbilder (Platzhalter)
│       └── logo.svg           # Plantoclean Logo
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── MobileMenu.tsx    # React (shadcn Sheet)
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── USPGrid.astro
│   │   │   ├── LeistungenTeaser.astro
│   │   │   ├── Testimonials.astro
│   │   │   └── CTABanner.astro
│   │   ├── ui/                   # shadcn/ui Komponenten
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── badge.tsx
│   │   │   └── accordion.tsx
│   │   ├── BeforeAfterSlider.tsx  # Vorher/Nachher React-Komponente
│   │   ├── ContactForm.tsx        # Kontaktformular React-Komponente
│   │   ├── WhatsAppButton.astro   # Floating WhatsApp-Button
│   │   └── ScrollToTop.astro      # Scroll-to-Top Button
│   ├── layouts/
│   │   └── BaseLayout.astro       # Basis-Layout mit Head, Header, Footer
│   ├── pages/
│   │   ├── index.astro            # Startseite
│   │   ├── leistungen.astro       # Leistungsseite
│   │   ├── kontakt.astro          # Kontaktseite
│   │   ├── impressum.astro        # Impressum
│   │   ├── datenschutz.astro      # Datenschutzerklärung
│   │   ├── haftungsausschluss.astro # Disclaimer
│   │   └── nachricht-gesendet.astro # Bestätigungsseite
│   ├── styles/
│   │   └── globals.css            # Tailwind Base + Custom Styles
│   └── lib/
│       └── utils.ts               # Utility-Funktionen (cn, etc.)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── KONZEPT.md
```

---

## 10. Content-Planung (Platzhalter)

### 10.1 Texte
Alle Texte werden initial mit sinnvollen Platzhaltertexten befüllt (siehe Abschnitt 3). Diese können später durch finale Texte ersetzt werden.

### 10.2 Bilder
| Bereich | Anzahl | Status |
|---|---|---|
| Hero-Bild(er) | 1–3 | Platzhalter (Unsplash/Pexels) |
| Vorher/Nachher pro Leistung | 2 Bilder × 4 | Platzhalter |
| USP-Icons | 4 | Lucide Icons (via shadcn) |
| Testimonial-Avatare | 3 | Platzhalter |
| Logo | 1 | Wird benötigt oder erstellt |

### 10.3 Rechtliche Texte
- Impressum: Platzhalter – muss mit echten Daten befüllt werden
- Datenschutz: Generator-basiert + Anpassung empfohlen
- Haftungsausschluss: Standard-Vorlage

---

## 11. Offene Punkte / Nächste Schritte

- [ ] **Logo:** Existiert ein aktuelles Logo oder muss eines erstellt werden?
- [ ] **Domain & Hosting:** Wo soll die Seite gehostet werden? Bestehende Domain plantoclean.de weiternutzen?
- [ ] **Formular-Backend:** Welcher Service soll für das Kontaktformular genutzt werden? (Empfehlung: Formspree oder Netlify Forms)
- [ ] **WhatsApp-Nummer:** Welche Telefonnummer soll für den WhatsApp-Button verwendet werden?
- [ ] **Bildmaterial:** Eigene Fotos nachliefern für Vorher/Nachher-Slider
- [ ] **Impressumsdaten:** Vollständige Firmendaten für Impressum und Datenschutz nachliefern
- [ ] **Google Business:** Profil anlegen/aktualisieren (empfohlen für lokales SEO)
- [ ] **Cookie-Banner:** Prüfen, ob ein Cookie-Banner notwendig ist (bei rein statischer Seite ohne Tracking i.d.R. nicht)

---

*Erstellt am: 15.02.2026*
*Tech-Stack: Astro + Tailwind CSS + shadcn/ui*
*Status: Konzeptphase – Awaiting Approval*
