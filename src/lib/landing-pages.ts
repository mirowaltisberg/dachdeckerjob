export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  roleDescription: string;
  salaryRange: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  salaryRange: string;
  requirements: string;
  career: string;
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Dachdecker EFZ": {
    label: "Dachdecker EFZ",
    roleDescription:
      "Dachdecker EFZ decken Steil- und Flachdächer mit verschiedenen Materialien wie Ziegel, Schiefer, Metall und Bitumen. Sie führen Abdichtungen aus, montieren Dachfenster und Schneefangsysteme und sorgen für den Wetterschutz von Gebäuden.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Dachdecker EFZ, Schwindelfreiheit, gute körperliche Verfassung, Fahrausweis Kategorie B.",
    career:
      "Weiterbildung zum Dachdeckerpolier, Bauführer Gebäudehülle oder eidg. dipl. Dachdeckermeister.",
    related: ["Abdichter EFZ", "Spengler EFZ", "Fassadenbauer EFZ"],
  },
  "Abdichter EFZ": {
    label: "Abdichter EFZ",
    roleDescription:
      "Abdichter EFZ sind Spezialisten für die Abdichtung von Flachdächern, Terrassen und unterirdischen Bauwerken. Sie verarbeiten Bitumen- und Kunststoffbahnen, erstellen Dampfsperren und sorgen für langfristigen Schutz vor Feuchtigkeit.",
    salaryRange: "CHF 65'000 – 78'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Abdichter EFZ, Erfahrung mit Bitumen- und Kunststoffabdichtungen, Schwindelfreiheit.",
    career:
      "Spezialisierung auf Flachdachsanierung, Weiterbildung zum Polier oder Bauführer Gebäudehülle.",
    related: ["Dachdecker EFZ", "Flachdachspezialist", "Fassadenbauer EFZ"],
  },
  "Spengler EFZ": {
    label: "Spengler EFZ",
    roleDescription:
      "Spengler EFZ fertigen und montieren Blechverkleidungen, Dachrinnen, Ablaufrohre und Fassadenverkleidungen aus Metall. Sie arbeiten mit Kupfer, Zink, Aluminium und Edelstahl und sorgen für die fachgerechte Entwässerung von Dächern.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Spengler EFZ, handwerkliches Geschick, Erfahrung mit Blechbearbeitung und Löttechnik.",
    career:
      "Weiterbildung zum Spenglerpolier, Bauführer oder Spezialisierung auf Fassadenbau und Metallverkleidungen.",
    related: ["Dachdecker EFZ", "Bauspengler", "Fassadenbauer EFZ"],
  },
  "Fassadenbauer EFZ": {
    label: "Fassadenbauer EFZ",
    roleDescription:
      "Fassadenbauer EFZ montieren vorgehängte hinterlüftete Fassaden, Kompaktfassaden und Verkleidungen aus verschiedenen Materialien. Sie arbeiten an der Gebäudehülle und sorgen für Wärmedämmung, Witterungsschutz und ästhetische Gestaltung.",
    salaryRange: "CHF 62'000 – 78'000",
    requirements:
      "Abgeschlossene 3-jährige Lehre als Fassadenbauer EFZ, Kenntnisse in Wärmedämmung und Fassadensystemen, Schwindelfreiheit.",
    career:
      "Spezialisierung auf energetische Fassadensanierung, Weiterbildung zum Polier oder Bauführer Gebäudehülle.",
    related: ["Dachdecker EFZ", "Spengler EFZ", "Zimmermann"],
  },
  "Dachdeckerpolier": {
    label: "Dachdeckerpolier",
    roleDescription:
      "Dachdeckerpoliere leiten Teams auf der Baustelle, koordinieren Arbeitsabläufe und überwachen die Qualität der Dachdeckerarbeiten. Sie sind die Schnittstelle zwischen Bauführung und Montageequipe und verantworten Material- und Terminplanung.",
    salaryRange: "CHF 80'000 – 100'000",
    requirements:
      "Ausbildung als Dachdecker EFZ mit Weiterbildung zum Polier, Führungserfahrung, Organisationstalent.",
    career:
      "Aufstieg zum Bauführer Gebäudehülle, Betriebsleiter oder Geschäftsführer eines Dachdeckerbetriebs.",
    related: ["Bauführer Dachdecker", "Dachdecker EFZ", "Spengler EFZ"],
  },
  "Bauführer Dachdecker": {
    label: "Bauführer Dachdecker",
    roleDescription:
      "Bauführer Dachdecker leiten Dachdeckerprojekte von der Offerte über die Planung bis zur Abnahme. Sie führen Montageequipen, kontrollieren Kosten und Termine, beraten Bauherren und Architekten und stellen die Qualität sicher.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements:
      "Weiterbildung zum Bauführer Gebäudehülle oder gleichwertig, Führungserfahrung, Kenntnisse in Baunormen und AVOR.",
    career:
      "Aufstieg zum Bereichsleiter, Geschäftsführer oder Gründung eines eigenen Dachdeckerbetriebs.",
    related: ["Dachdeckerpolier", "Dachdecker EFZ", "Spengler EFZ"],
  },
  "Flachdachspezialist": {
    label: "Flachdachspezialist",
    roleDescription:
      "Flachdachspezialisten sind Experten für die Konstruktion, Abdichtung und Sanierung von Flachdächern. Sie arbeiten mit modernen Abdichtungssystemen, Begrünungen und Photovoltaik-Unterkonstruktionen auf Flachdächern.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Dachdecker EFZ oder Abdichter EFZ, Erfahrung mit Flachdachsystemen, Kenntnisse in Dachbegrünung.",
    career:
      "Spezialisierung auf Gründächer, Solardach-Systeme oder energetische Dachsanierung. Weiterbildung zum Polier.",
    related: ["Abdichter EFZ", "Dachdecker EFZ", "Dachsanierer"],
  },
  "Zimmermann": {
    label: "Zimmermann",
    roleDescription:
      "Zimmerleute erstellen Dachstühle, Holzkonstruktionen und Aufbauten für Steildächer. Sie arbeiten eng mit Dachdeckern zusammen und sind für die tragende Konstruktion unter der Dacheindeckung verantwortlich.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Abgeschlossene 4-jährige Lehre als Zimmermann EFZ, Erfahrung im Holzbau und Dachstuhlbau, Fahrausweis.",
    career:
      "Spezialisierung auf Dachausbauten, Weiterbildung zum Zimmereipolier, Holzbau-Vorarbeiter oder Holzbauingenieur.",
    related: ["Dachdecker EFZ", "Spengler EFZ", "Fassadenbauer EFZ"],
  },
  "Bauspengler": {
    label: "Bauspengler",
    roleDescription:
      "Bauspengler fertigen und montieren Blechabschlüsse, Dachentwässerungen und Wandanschlüsse auf Baustellen. Sie arbeiten an der Schnittstelle zwischen Dach und Fassade und sorgen für dichte Übergänge und Anschlüsse.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements:
      "Ausbildung als Spengler EFZ oder gleichwertig, Erfahrung mit Falz- und Löttechnik, handwerkliches Geschick.",
    career:
      "Weiterbildung zum Spenglerpolier, Spezialisierung auf Kupfer- und Zinkarbeiten oder Fassadenverkleidungen.",
    related: ["Spengler EFZ", "Dachdecker EFZ", "Fassadenbauer EFZ"],
  },
  "Dachsanierer": {
    label: "Dachsanierer",
    roleDescription:
      "Dachsanierer sind spezialisiert auf die Erneuerung und Instandsetzung bestehender Dächer. Sie beurteilen den Zustand von Dächern, planen Sanierungsmassnahmen und führen Reparaturen an Steil- und Flachdächern durch.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements:
      "Ausbildung als Dachdecker EFZ oder Abdichter EFZ, Erfahrung in Dachsanierung, Kenntnisse verschiedener Dachsysteme.",
    career:
      "Spezialisierung auf energetische Dachsanierung, Weiterbildung zum Polier oder Bauführer.",
    related: ["Dachdecker EFZ", "Flachdachspezialist", "Abdichter EFZ"],
  },
  "Gerüstbauer": {
    label: "Gerüstbauer",
    roleDescription:
      "Gerüstbauer erstellen Fassaden- und Dachgerüste, die Dachdeckern und anderen Handwerkern sicheres Arbeiten in der Höhe ermöglichen. Sie planen, montieren und demontieren Gerüstkonstruktionen gemäss Sicherheitsvorschriften.",
    salaryRange: "CHF 60'000 – 75'000",
    requirements:
      "Ausbildung als Gerüstbauer EFZ oder Gerüstmonteur, Schwindelfreiheit, gute körperliche Verfassung, Sicherheitsbewusstsein.",
    career:
      "Weiterbildung zum Gerüstbaupolier, Spezialisierung auf Spezialgerüste oder Sicherheitsbeauftragter.",
    related: ["Dachdecker EFZ", "Fassadenbauer EFZ", "Zimmermann"],
  },
  "Steildachspezialist": {
    label: "Steildachspezialist",
    roleDescription:
      "Steildachspezialisten sind Experten für die Eindeckung und Sanierung von geneigten Dächern. Sie arbeiten mit Ziegeln, Schiefer, Faserzement und Metalleindeckungen und beherrschen verschiedene Verlegetechniken.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements:
      "Ausbildung als Dachdecker EFZ, Erfahrung mit verschiedenen Eindeckungsmaterialien, Schwindelfreiheit.",
    career:
      "Spezialisierung auf denkmalgeschützte Dächer, Weiterbildung zum Polier oder Bauführer Gebäudehülle.",
    related: ["Dachdecker EFZ", "Spengler EFZ", "Dachsanierer"],
  },
};

interface CantonContent {
  name: string;
  abbr: string;
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, Dachsanierungen und einer hohen Dichte an Gebäudehülle-Betrieben.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Dachdecker-Fachkräften, besonders in der Bundesstadt und im Berner Oberland — von Wohnbau bis denkmalgeschützte Gebäude.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Sanierungsprojekten, Neubauten und Industriedächern.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Wirtschaftsstandort mit vielen Neubauprojekten und einer hohen Nachfrage nach Dachdecker-Fachkräften in Wohn- und Gewerbebau.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Dachdecker-Fachkräfte — von KMU-Betrieben bis zu grossen Gebäudehülle-Unternehmen.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Dachdecker-Fachkräften stetig — getrieben durch Neubauprojekte, Tourismusinfrastruktur und energetische Sanierungen.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Standort zwischen Bern und Basel gute Karrierechancen für Dachdecker-Fachkräfte in Neubau, Sanierung und Industriebau.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und anspruchsvolle Projekte im Bereich Gebäudehülle und Dachbau.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Dachdecker-Fachkräfte — besonders in Wohnungsbau und Landwirtschaftsgebäuden.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Dachdecker-Fachkräfte gefragt — von Ferienort-Chalets über Berghotels bis zu Infrastrukturgebäuden mit anspruchsvollen Dachkonstruktionen.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Standort attraktive Stellen für Dachdecker-Fachkräfte, insbesondere in Sanierung und Wohnungsbau.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Dachdecker-Fachkräften vielfältige Möglichkeiten in Wohnungsbau, Gewerbe und öffentlicher Infrastruktur.",
  },
};

const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf dachdeckerjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf dachdeckerjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Dachdeckerbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    roleDescription: role.roleDescription,
    salaryRange: role.salaryRange,
    requirements: role.requirements,
    career: role.career,
    cantonContext: canton.context,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf dachdeckerjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
      {
        question: `Wie ist der Arbeitsmarkt für ${role.label} in ${canton.name}?`,
        answer: `${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch. Das Durchschnittsgehalt liegt bei ${role.salaryRange} pro Jahr. Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}.`,
      },
    ],
  };
}

export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/dachdeckerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
