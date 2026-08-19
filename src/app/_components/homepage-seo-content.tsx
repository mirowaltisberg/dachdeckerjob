import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dachdeckerjobs.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Dachdeckerjobs gibt es auf dachdeckerjobs.ch?",
    answer:
      "Auf dachdeckerjobs.ch findest du alle relevanten Stellenprofile der Schweizer Dachdecker- und Gebäudehüllenbranche. Dazu gehören die EFZ-Lehrabschluss-Berufe Dachdecker, Abdichter, Spengler, Fassadenbauer, Gerüstbauer und Zimmermann, dazu Spezialisten-Profile wie Flachdachspezialisten, Steildachspezialisten, Dachsanierer und Bauspengler. Auf der Bauleitungs- und Führungsebene listen wir Vorarbeiter Dach, Dachdeckerpoliere, Spenglerpoliere und Bauführer Dachdecker. Spezialisierungen wie Solardach-Montage, Begrünungsspezialisten, Denkmalpflege-Dachdecker, Steildach-Eindecker für Schiefer und Holzschindel sowie PSAgA-Sicherheitsbeauftragte sind ebenfalls regelmässig vertreten. Auf der Werkstattseite listen wir Spengler mit Schwerpunkt Kupfer- und Zinkarbeiten sowie CAD-gestützter Blechabwicklung. Für Berufseinsteigende, Quereinsteiger und Wiedereinsteigende sind Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote separat ausgewiesen, damit Berufsanfänger und Personen aus verwandten Bauberufen die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich für die wechselnden Baustellen im Hüllenbau. Die Stellen werden täglich aktualisiert und decken alle 26 Schweizer Kantone ab, mit besonderer Dichte in Zürich, Bern, Aargau, St. Gallen und der Zentralschweiz.",
  },
  {
    question: "Was verdient ein Dachdecker EFZ in der Schweiz?",
    answer:
      "Ein Dachdecker EFZ verdient in der Schweiz im Durchschnitt CHF 65'000 bis 80'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Spezialisierung und Arbeitgebergrösse. Im Kanton Zürich, in Zug und in Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Glarus, Jura oder Appenzell Innerrhoden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 60'000 bis 68'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 72'000 bis 82'000. Spezialisierungen auf Flachdach, Solardach, denkmalgeschützte Eindeckung oder Dachbegrünung bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter rechnen mit weiteren 6 bis 10 Prozent, Dachdeckerpoliere bewegen sich bei CHF 80'000 bis 100'000. Der 13. Monatslohn ist in der Hüllenbranche Standard. Die vollständige Lohnübersicht für alle Dachdecker- und Gebäudehüllen-Berufe findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Dachdecker in der Schweiz?",
    answer:
      "Auf dachdeckerjobs.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile rund um die Gebäudehülle), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Du kannst zusätzlich nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) filtern und Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Branchentreffen wie die Suisse Public, regionale Berufsbildungsmessen sowie Polybau-Veranstaltungen bieten zusätzliche Direktkontakte zu Arbeitgebern; viele KMU-Betriebe haben offene Stellen, die sie noch nicht öffentlich ausgeschrieben haben.",
  },
  {
    question: "Welche Kantone haben die meisten Dachdeckerjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Dachdecker- und Gebäudehüllen-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, St. Gallen und Waadt. Diese fünf Kantone vereinen rund 60 Prozent aller publizierten Hüllen-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen Luzern, Basel-Stadt, Thurgau, Solothurn und Zug. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Sanierung und Industrieprojekte zunehmen, steigt auch die Nachfrage nach Dachdeckern, Spenglern und Flachdachspezialisten. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren in Solothurn und Luzern, Zürcher in Schaffhausen, Thurgau und Schwyz, Berner im Wallis und Solothurn. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt in Fribourg, Wallis und der Region Biel/Bienne. Die täglich aktualisierten Stellenzahlen pro Kanton siehst du in unserem Filter.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Dachdecker, Abdichter und Spengler?",
    answer:
      "Der Unterschied liegt in Materialfokus, Befähigung und Einsatzgebiet. Der Dachdecker EFZ absolviert eine 3-jährige Lehre und deckt vor allem Steildächer mit Ziegeln, Schiefer, Faserzement oder Holzschindel ein, baut Dachfenster, Schneefangsysteme und Photovoltaik-Unterkonstruktionen. Der Abdichter EFZ macht ebenfalls eine 3-jährige Lehre und ist auf wasserdichte Abdichtungen spezialisiert — Flachdächer, Terrassen und Tiefbauten mit Bitumen- und Kunststoffbahnen. Der Spengler EFZ absolviert eine 4-jährige Lehre und arbeitet mit Metallblechen aus Kupfer, Zink, Aluminium oder Edelstahl: Dachrinnen, Ablaufrohre, Anschlussbleche, Kamineinfassungen und Fassadenverkleidungen, dazu zunehmend auch komplette Metallfassaden. Alle drei Berufe gehören zur Gebäudehülle und arbeiten oft eng auf derselben Baustelle zusammen — die Anschlussdetails zwischen Eindeckung, Abdichtung und Blecharbeit sind die häufigsten Schadenstellen. Lohntechnisch liegen Dachdecker und Spengler beim Einstieg auf ähnlichem Niveau (CHF 65'000 bis 80'000), Abdichter leicht darunter. Wechsel zwischen den Berufen sind über verkürzte Zusatzlehren oder die gemeinsame Polier- und Bauführerweiterbildung gut möglich. Welcher Beruf besser passt, hängt von Lust auf Höhenarbeit, Werkstattanteil und Materialvorliebe ab — eine Berufsberatung in deinem Wohnkanton hilft bei der konkreten Wahl.",
  },
  {
    question: "Gibt es auf dachdeckerjobs.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf dachdeckerjobs.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Auf der Baustellenseite (Dachdecker, Abdichter, Spengler, Fassadenbauer) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden und Wetterfenster eng getaktet sind. Im Werkstattbetrieb der Spengler, in der Bauleitung sowie für erfahrene Poliere und Bauführer sind 80- und 90-Prozent-Modelle dagegen gut etabliert. Vorruhestand mit schrittweiser Reduzierung auf 60 oder 80 Prozent ist in vielen KMU-Hüllenbetrieben Standard, ebenso Wiedereinstieg nach Pause. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden vereinzelt für Bauleitungs- und Bürofunktionen angeboten. Frage in Erstgesprächen explizit nach gestaffelter Pensumserhöhung — viele Betriebe bieten dieses Modell ohne aktive Werbung an. Wir kennzeichnen jedes Inserat klar mit dem akzeptierten Pensumband, damit du auf einen Blick siehst, welche Stelle zu deiner gewünschten Arbeitszeit passt.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Bauführer Dachdecker", range: "CHF 85'000 – 110'000" },
  { role: "Dachdeckerpolier", range: "CHF 80'000 – 100'000" },
  { role: "Flachdachspezialist", range: "CHF 68'000 – 85'000" },
  { role: "Steildachspezialist", range: "CHF 68'000 – 85'000" },
  { role: "Zimmermann", range: "CHF 68'000 – 85'000" },
  { role: "Dachdecker EFZ", range: "CHF 65'000 – 80'000" },
  { role: "Spengler EFZ", range: "CHF 65'000 – 80'000" },
  { role: "Dachsanierer", range: "CHF 65'000 – 82'000" },
  { role: "Abdichter EFZ", range: "CHF 65'000 – 78'000" },
  { role: "Bauspengler", range: "CHF 65'000 – 80'000" },
  { role: "Fassadenbauer EFZ", range: "CHF 62'000 – 78'000" },
  { role: "Gerüstbauer", range: "CHF 60'000 – 75'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Dachdecker-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Dachdeckerjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf dachdeckerjobs.ch finden Dachdecker-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Dachdecker EFZ über Abdichter und Spengler bis hin zu
            Flachdachspezialisten, Dachdeckerpolieren und Bauführern. Ob du deinen nächsten Dachdeckerjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Gebäudehülle.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>

          <p className="text-slate-600 text-base leading-relaxed mt-4">
            Zusätzlich findest du Festanstellungen, Temporärstellen, Teilzeitpensen, Lehrstellen und Stellenangebote mit Lohnband. Besonders gesucht werden Fachkräfte mit EFZ/EBA, Erfahrung im Service, in der Montage oder Projektleitung und regionaler Mobilität. Damit eignet sich die Suche für klassische Dachdecker Jobs in der Schweiz ebenso wie für spezialisierte Profile wie Dachdecker EFZ, Abdichter, Spengler EFZ und Fassadenbauer.
          </p>
        </div>

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Dachdeckerberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Dachdecker-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.gh-schweiz.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">Gebäudehülle Schweiz</a>,{" "}
            <a href="https://www.suissetec.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">suissetec</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Dachdecker- und Gebäudehüllenbranche aus
                den Jahres- und Branchenstatistiken von{" "}
                <a
                  href="https://www.gh-schweiz.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Gebäudehülle Schweiz
                </a>{" "}
                (Verband der Schweizer Gebäudehüllen-Unternehmen),{" "}
                <a
                  href="https://www.suissetec.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  suissetec
                </a>{" "}
                (Schweizerisch-Liechtensteinischer Gebäudetechnikverband) und
                dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf dachdeckerjobs.ch
                indexierten öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Dachdecker Jobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
