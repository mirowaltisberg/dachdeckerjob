// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (Höhentauglichkeit, Wetter, ÖV) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "dachdecker-efz::zh": {
    whatDoes:
      "Ein Dachdecker EFZ im Kanton Zürich deckt Steildächer mit Ziegeln, Schiefer oder Faserzement ein, dichtet Flachdächer mit Bitumen- oder Kunststoffbahnen ab und baut Dachfenster, Schneefangsysteme sowie Photovoltaik-Unterkonstruktionen ein. In Zürich verschiebt sich der Auftragsmix klar Richtung Dachsanierung und energetische Erneuerung — viele Liegenschaften aus den 1960er- bis 1980er-Jahren stehen für Hülle und Dämmung neu an. Dazu kommen Industrie- und Logistikflachdächer am Stadtrand, Bürobauten in Zürich-West sowie Wohnüberbauungen in Glattpark und Affoltern. Höhenarbeit, wechselndes Wetter und enge Termine im urbanen Umfeld prägen den Alltag spürbar.",
    salary:
      "Ein Dachdecker EFZ verdient im Kanton Zürich typisch CHF 70'000 bis 82'000 pro Jahr — am oberen Rand des Schweizer Bands. Mit Spezialisierung auf Flachdach, Solardach oder denkmalgeschützte Steildächer lassen sich CHF 80'000 bis 90'000 erreichen. Als Vorarbeiter rechnet man mit 6 bis 10 Prozent Aufschlag. Der Schritt zum Dachdeckerpolier öffnet das Band CHF 85'000 bis 100'000, mit der höheren Fachprüfung zum eidg. dipl. Dachdeckermeister sind im Kanton Zürich CHF 100'000 bis 130'000 realistisch. Die vollständige Lohnübersicht für alle Dachdeckerberufe steht auf unserer Startseite.",
    employers:
      "Im Kanton Zürich rekrutieren vor allem KMU-Dachdeckerbetriebe mit 8 bis 40 Mitarbeitenden — typische regionale Bedachungsfirmen mit Fokus auf Wohnungs- und Gewerbebau. Daneben besetzen Generalunternehmer für Sanierungsprojekte regelmässig Stellen für Hüllen-Equipen rund um Zürich, im Limmattal und im Glattal. Industrie- und Sporthallenbauer brauchen Dachdecker für grossflächige Flachdächer in Zürich-Nord und Zürich-West. Spezialisten für denkmalgeschützte Bauten in der Innenstadt und Quartiererneuerungsträger ergänzen das Bild. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate sind anonymisiert, der Arbeitgeber wird im Erstgespräch offengelegt.",
    applicationTips:
      "Dachdecker werden im Kanton Zürich nach Erfahrung mit konkreten Eindeckungsmaterialien, Schwindelfreiheit und Wetterbestaendigkeit ausgewählt — liste im Lebenslauf Ziegel- und Plattentypen, Bitumenbahnen-Hersteller und konkrete Referenzobjekte mit Dachfläche in Quadratmetern auf. Höhentauglichkeit (PSAgA-Schulung) und Pendelbereitschaft via S-Bahn oder eigenem Fahrzeug prominent angeben — Baustellen wechseln wöchentlich quer durch den Kanton. Fahrausweis Kategorie B ist Pflicht, Kategorie BE ein Plus für Materialtransporte. Ein Foto deiner EFZ-Urkunde im Anhang beschleunigt die Vorauswahl, weil viele Betriebe Inserate ohne sichtbaren Lehrabschluss aussortieren. Bereite konkrete Antworten zu Witterungseinsatz und Pikettbereitschaft im Winterdienst vor.",
  },

  "dachdeckerpolier::be": {
    whatDoes:
      "Ein Dachdeckerpolier im Kanton Bern führt täglich eine Equipe von vier bis acht Dachdeckern, koordiniert Material, Zeit und Sicherheit auf der Baustelle und steht im engen Austausch mit dem Bauführer. Im Mittelland dominieren Wohnüberbauungen und Sanierungen, im Berner Oberland Hotelprojekte, Chalets und denkmalgeschützte Eindeckungen mit Schiefer oder Holzschindel. Der Polier kontrolliert Anschlussdetails an Spenglerarbeiten, dokumentiert Abnahmen, organisiert Hebebühnen und Gerüste und macht die Sicherheitseinweisung. Pendel- und Fahrzeiten quer durch den Kanton gehören zum Berufsbild — von Burgdorf über Thun bis Spiez wechseln Baustellen oft wöchentlich.",
    salary:
      "Ein Dachdeckerpolier verdient im Kanton Bern typisch CHF 82'000 bis 100'000 pro Jahr. Mit langjähriger Führungserfahrung, Verantwortung für komplexe Sanierungs- oder Denkmalprojekte sowie sicherem Umgang mit AVOR-Software und Aufmasstools lässt sich das obere Drittel erreichen. Der nächste Schritt zum Bauführer Gebäudehülle hebt das Band auf CHF 90'000 bis 115'000, mit der höheren Fachprüfung zum eidg. dipl. Dachdeckermeister sind CHF 110'000 bis 135'000 möglich — auch in selbstständiger Tätigkeit als Inhaber eines Kleinbetriebs. Die vollständige Lohnübersicht für alle Dachdeckerberufe steht auf unserer Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem mittelständische KMU-Dachdeckerbetriebe (15 bis 60 Mitarbeitende) Polierstellen — viele davon mit Standorten in Bern, Burgdorf, Thun und Interlaken. Dazu kommen Generalunternehmer für Sanierungsprojekte, die Hüllen-Equipen für ganze Wohnüberbauungen disponieren, sowie Industrie- und Sporthallenbauer für Flachdach-Grossflächen im Mittelland. Spezialisten für denkmalgeschützte Bauten in der Berner Altstadt und im Oberland brauchen Poliere mit Erfahrung in traditionellen Eindeckungstechniken. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf dachdeckerjobs.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Poliere werden im Kanton Bern nach belegter Führungserfahrung, Pendelbereitschaft und Sicherheitsbewusstsein eingestellt — beschreibe im Lebenslauf konkret, wie viele Personen du im Schnitt geführt hast und welche Projektgrössen du verantwortest. Höhentauglichkeit, PSAgA-Zertifikat und Wetterbestaendigkeit prominent angeben. Mundartverständnis ist im Berner Mittelland und Oberland ein deutlicher Pluspunkt — beton es im Anschreiben, wenn du es mitbringst. Fahrausweis Kategorie B ist Pflicht, BE für Anhängerbetrieb ein Plus. Hänge die Polier- oder Vorarbeiterprüfungs-Bestätigung als PDF an. Bereite Antworten zu Sicherheitsverantwortung, Materialdisposition und Umgang mit Termindruck im Saisongeschäft konkret vor.",
  },

  "spengler-efz::ag": {
    whatDoes:
      "Ein Spengler EFZ im Kanton Aargau fertigt und montiert Blechabschlüsse, Dachrinnen, Ablaufrohre, Anschlussbleche, Kamineinfassungen und Fassadenverkleidungen aus Kupfer, Zink, Aluminium oder Edelstahl. Der Tag wechselt zwischen Werkstattarbeit (Zuschnitt, Falzen, Löten und Abkanten nach Plan) und Baustelleneinsatz auf Steil- und Flachdächern. Im Aargau prägen Industrie- und Gewerbebauten den Auftragsmix — Logistikzentren rund um Spreitenbach, Pharma- und Maschinenbaustandorte zwischen Aarau und Baden, dazu klassischer Wohnungsbau in den Agglomerationen. Energetische Sanierungen mit neuen Fassadenverkleidungen sowie Solardach-Anbindungen über Spenglerarbeiten gehören heute zum Standardrepertoire.",
    salary:
      "Ein Spengler EFZ verdient im Kanton Aargau typisch CHF 68'000 bis 82'000 pro Jahr. Spezialisierung auf Kupfer- und Zinkarbeiten, denkmalgeschützte Eindeckungen oder anspruchsvolle Fassadenverkleidungen hebt den Marktwert ins obere Drittel. Als Vorarbeiter rechnet man mit 6 bis 10 Prozent Aufschlag. Der Schritt zum Spenglerpolier öffnet das Band CHF 80'000 bis 95'000, mit der höheren Fachprüfung zum eidg. dipl. Spenglermeister oder als Bauführer Gebäudehülle sind CHF 95'000 bis 120'000 realistisch. Berufsbegleitende Polier- und Bauführerlehrgänge werden im Aargau von vielen Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf unserer Startseite.",
    employers:
      "Im Kanton Aargau besetzen vor allem KMU-Dachdecker- und Spenglerbetriebe mit eigener Werkstatt (10 bis 50 Mitarbeitende) Spenglerstellen — verteilt zwischen Aarau, Baden, Wettingen, Lenzburg und Wohlen. Dazu kommen Generalunternehmer für Sanierungsprojekte mit eigenen Hüllen-Equipen sowie Industrie- und Sporthallenbauer, die Spengler für grossflächige Anschlüsse, Lichtbänder und Entwässerungen brauchen. Fassadenbau-Spezialisten und Solardach-Anbieter integrieren Spenglerarbeiten zunehmend direkt ins Komplettangebot. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen auf dachdeckerjobs.ch — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Spengler werden im Kanton Aargau nach Erfahrung mit konkreten Metallen und Verbindungstechniken ausgewählt — liste im Lebenslauf Material-Erfahrung (Kupfer, Zink, Aluminium, Edelstahl), beherrschte Falz- und Löttechniken sowie Werkstatt- versus Baustellenanteil auf. Höhentauglichkeit, Schwindelfreiheit, PSAgA-Schulung und Wetterbestaendigkeit prominent angeben. Pendelbereitschaft ist im Aargau Standard — viele Betriebe arbeiten auch in Solothurn, Luzern und Zürich. Fahrausweis Kategorie B ist Pflicht, BE ein Plus für Material- und Anhängertransporte. Hänge ein Foto deiner EFZ-Urkunde sowie ein bis zwei dokumentierte Referenzobjekte (anonymisiert, mit Bildausschnitt einer Lötnaht oder Falzkante) an. Bereite konkrete Antworten zu Witterungseinsatz und Saisonarbeit vor.",
  },

  "flachdachspezialist::zg": {
    whatDoes:
      "Ein Flachdachspezialist im Kanton Zug konstruiert, dichtet und saniert Flachdächer auf Bürobauten, Industriegebäuden, Logistikhallen und Wohnüberbauungen. Der Tag wechselt zwischen Aufmass und Detailplanung, dem Einbau von Dampfsperre, Wärmedämmung und Bitumen- oder Kunststoffabdichtung sowie der Endkontrolle mit Dichtigkeitsprüfung. Im Kanton Zug dominieren Hightech- und Pharmazulieferer-Standorte rund um Rotkreuz, Baar und Cham — viele Neubauten mit anspruchsvollen Flachdach-Konstruktionen, Lichtkuppeln, Solar-Unterkonstruktionen und extensiven Begrünungen. Daneben prägen Bürotürme im Stadtgebiet Zug und Logistikzentren im Talboden den Auftragsmix. Höhenarbeit, Wetterabhängigkeit und enge Termine sind Alltag.",
    salary:
      "Ein Flachdachspezialist verdient im Kanton Zug typisch CHF 75'000 bis 92'000 pro Jahr — am oberen Rand des Schweizer Bands. Spezialisierung auf Gründächer, Solardach-Systeme oder energetische Dachsanierung hebt den Marktwert ins obere Drittel. Als Vorarbeiter rechnet man mit 6 bis 10 Prozent Aufschlag. Der Schritt zum Polier öffnet das Band CHF 90'000 bis 105'000, mit der höheren Fachprüfung zum eidg. dipl. Dachdeckermeister oder als Bauführer Gebäudehülle sind CHF 105'000 bis 130'000 realistisch. Hightech-Arbeitgeber im Kanton Zug zahlen oft marktführend. Die vollständige Lohnübersicht für alle Dachdeckerberufe steht auf unserer Startseite.",
    employers:
      "Im Kanton Zug besetzen vor allem KMU-Dachdeckerbetriebe mit Flachdach-Schwerpunkt (15 bis 60 Mitarbeitende) sowie Generalunternehmer für Sanierungsprojekte die Spezialisten-Stellen. Dazu kommen Industrie- und Sporthallenbauer mit eigenen Hüllen-Equipen für Logistik- und Datacenter-Bauten in Rotkreuz, Baar und Risch. Pharmazulieferer und Hightech-Standorte vergeben Hüllenarbeiten häufig an spezialisierte Subunternehmer mit ausgewiesener Reinraum-Erfahrung. Anbieter für Solardach-Unterkonstruktionen und extensive Begrünungen ergänzen das Bild. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen auf dachdeckerjobs.ch — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Flachdachspezialisten werden im Kanton Zug nach Erfahrung mit konkreten Abdichtungssystemen, Detailplanung und Sicherheitsbewusstsein ausgewählt — liste im Lebenslauf Bitumenbahnen- und Kunststoffbahnen-Hersteller, beherrschte Schweissverfahren sowie Erfahrung mit Gründächern, Solar-Unterkonstruktionen und Lichtkuppeln auf. Höhentauglichkeit, PSAgA-Zertifikat und Wetterbestaendigkeit prominent angeben. Pendelbereitschaft via Autobahn (A4, A14) ist Standard — viele Aufträge laufen auch in Schwyz, Luzern und Zürich. Fahrausweis Kategorie B ist Pflicht. Hänge ein Foto deiner EFZ-Urkunde sowie ein bis zwei anonymisierte Referenzobjekte (mit Quadratmeter-Angabe und Systemaufbau) an. Bereite konkrete Antworten zu Termindruck im Sommerhalbjahr und Notdiensteinsätzen nach Unwettern vor.",
  },

  "baufuehrer-dachdecker::sg": {
    whatDoes:
      "Ein Bauführer Dachdecker im Kanton St. Gallen leitet Hüllen-Projekte von der Offerte über die Detailplanung bis zur Schlussabnahme. Der Tag teilt sich auf zwischen Büroarbeit (Aufmass, Kalkulation, AVOR, Materialdisposition mit Lieferanten) und Baustellenbesuchen quer durch die Ostschweiz — von der Stadt St. Gallen ins Rheintal, ins Toggenburg und ans Obere Zürichsee-Ufer. Er führt Poliere und Equipen, kontrolliert Termine, Kosten und Qualität, koordiniert mit Architekten, Bauherrschaften und Fremdgewerken. Sanierungen von Wohnüberbauungen, Industriedächer im Rheintal und denkmalgeschützte Steildächer im historischen Stadtkern St. Gallen prägen den Auftragsmix.",
    salary:
      "Ein Bauführer Dachdecker verdient im Kanton St. Gallen typisch CHF 88'000 bis 110'000 pro Jahr. Mit langjähriger Führungserfahrung, Verantwortung für Mehrmillionen-Projekte und sicherem Umgang mit Kalkulations- und AVOR-Software lassen sich CHF 105'000 bis 120'000 erreichen. Der nächste Schritt zum Bereichsleiter, Niederlassungsleiter oder eidg. dipl. Dachdeckermeister hebt das Band auf CHF 115'000 bis 145'000 — selbstständige Tätigkeit als Geschäftsführer eines KMU-Betriebs öffnet zusätzliche Spielräume. Berufsbegleitende Bauführer- und Meisterlehrgänge werden in der Ostschweiz von vielen Arbeitgebern mitfinanziert. Die vollständige Lohnübersicht für alle Dachdeckerberufe steht auf unserer Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem mittelständische KMU-Dachdeckerbetriebe (20 bis 80 Mitarbeitende) mit Standorten in St. Gallen, Wil, Rapperswil und im Rheintal die Bauführerstellen. Dazu kommen Generalunternehmer für Sanierungsprojekte mit eigenen Hüllen-Abteilungen sowie Industrie- und Sporthallenbauer mit Schwerpunkt Flachdach-Grossflächen für Produktions- und Logistikbauten im Rheintal. Spezialisten für denkmalgeschützte Bauten im historischen St. Galler Stadtkern und in Appenzeller Dorfkernen brauchen Bauführer mit Erfahrung in traditionellen Eindeckungstechniken. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen auf dachdeckerjobs.ch — die Inserate sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Bauführer werden in der Ostschweiz nach belegter Projektverantwortung, Kalkulationssicherheit und Führungserfahrung eingestellt — beschreibe im Lebenslauf konkret, welche Projektvolumen du bisher verantwortet hast (Auftragssumme, Anzahl Equipen, Bauzeit) und welche Software-Tools du beherrschst (Messerli, Sorba, Bauad oder Excel-AVOR). Pendelbereitschaft quer durch die Ostschweiz inklusive Rheintal und Toggenburg ist Standard — Wohnort und Pendelradius prominent angeben. Fahrausweis Kategorie B ist Pflicht. Hänge die Bauführer-Diplomurkunde sowie eine kompakte Auswahl anonymisierter Referenzprojekte mit Bauvolumen und Nutzungsart an. Bereite konkrete Antworten zu Termindruck, Bauherren-Kommunikation und Umgang mit Nachträgen und Mängelrügen vor.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion dachdeckerjobs.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
