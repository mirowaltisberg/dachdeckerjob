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
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  requirements: string;
  career: string;
}

// Roof and building-envelope labels only. Neighbouring trades are deliberately
// excluded from public SEO navigation and from the strict vacancy classifier.
const ROLE_CONTENT: Record<string, RoleContent> = {
  "Dachdecker EFZ": {
    label: "Dachdecker EFZ",
    roleDescription:
      "Dachdeckerinnen und Dachdecker erstellen, sanieren und unterhalten geneigte Dächer. Das konkrete Inserat bestimmt Dachsystem, Material und Aufgabenbereich.",
    requirements:
      "Für Stellen mit EFZ-Anforderung ist in der Regel der bezeichnete Abschluss oder eine im Inserat ausdrücklich akzeptierte gleichwertige Qualifikation nötig.",
    career:
      "Weiterbildungswege und Zulassungsbedingungen sind bei den offiziellen Berufs- und Bildungsträgern für die Gebäudehülle zu prüfen.",
  },
  Dachdecker: {
    label: "Dachdecker",
    roleDescription:
      "Dachdeckerstellen betreffen häufig Eindeckungen, Unterdächer, Dämmungen, Anschlüsse, Reparaturen und die sichere Organisation des Arbeitsplatzes auf dem Dach.",
    requirements:
      "Massgebend sind Ausbildung, Baustellenerfahrung, Schwindelfreiheit und Sicherheitsanforderungen des jeweiligen Inserats.",
    career:
      "Spezialisierungen und Führungsfunktionen hängen von Abschluss, Erfahrung und den angebotenen Weiterbildungen ab.",
  },
  Flachdachmonteur: {
    label: "Flachdachmonteur",
    roleDescription:
      "Flachdachstellen können Dämm-, Abdichtungs- und Anschlussarbeiten sowie Kontrollen und Reparaturen an Flachdachaufbauten umfassen.",
    requirements:
      "Das Inserat nennt die erwartete Erfahrung mit Bahnen, Dämmstoffen, Verarbeitungsverfahren und Arbeitssicherheit.",
    career:
      "Herstellerkurse und formale Weiterbildungen können je nach Funktion relevant sein, sind aber keine pauschale Voraussetzung.",
  },
  Fassadenbauer: {
    label: "Fassadenbauer",
    roleDescription:
      "Fassadenbauerstellen betreffen Unterkonstruktionen, Dämmungen, Bekleidungen und präzise Anschlüsse an der Gebäudehülle.",
    requirements:
      "Ausbildung, Planverständnis, Montagepraxis und die verlangte Sicherheitsausrüstung ergeben sich aus dem konkreten Inserat.",
    career:
      "Spezialisierung und Weiterentwicklung hängen von Fassadensystem, Betrieb und vorhandener Qualifikation ab.",
  },
  "Projektleiter Gebäudehülle": {
    label: "Projektleiter Gebäudehülle",
    roleDescription:
      "Projektleitungsstellen können Ausmass, Kalkulation, Planung, Terminsteuerung und die Koordination von Dach- und Fassadenarbeiten umfassen.",
    requirements:
      "Fachausbildung, Berufspraxis und Führungserfahrung werden je nach Inserat unterschiedlich gewichtet.",
    career:
      "Titel, Verantwortungsumfang und Vergütung lassen sich nur aus dem konkreten Stellenprofil ableiten.",
  },
  "Servicemonteur Dach": {
    label: "Servicemonteur Dach",
    roleDescription:
      "Servicefunktionen verbinden Zustandskontrollen, Wartung, Fehlersuche und Reparaturen an Dach- und Gebäudehüllenteilen.",
    requirements:
      "Breite Berufspraxis, selbstständige Einsatzplanung und ein Führerausweis können verlangt sein; entscheidend ist das Inserat.",
    career:
      "Serviceerfahrung kann zu Koordinations- oder Leitungsaufgaben führen, ohne dass daraus ein automatischer Anspruch entsteht.",
  },
  "Vorarbeiter Dach": {
    label: "Vorarbeiter Dach",
    roleDescription:
      "Vorarbeiterstellen verbinden praktische Dacharbeiten mit der Koordination von Team, Material, Sicherheit und Terminen.",
    requirements:
      "Massgebend sind die ausgeschriebene Fachpraxis, Organisationsfähigkeit und Führungserfahrung.",
    career:
      "Mögliche Weiterbildungen hängen vom vorhandenen Abschluss und der angestrebten Funktion ab.",
  },
};

const CANTON_CONTENT = {
  ZH: "Zürich", BE: "Bern", BS: "Basel-Stadt", AG: "Aargau",
  SG: "St. Gallen", LU: "Luzern", SO: "Solothurn", ZG: "Zug",
  TG: "Thurgau", GR: "Graubünden", SH: "Schaffhausen", FR: "Freiburg",
} as const;

function buildLandingConfig(roleKey: string, cantonKey: keyof typeof CANTON_CONTENT): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const cantonName = CANTON_CONTENT[cantonKey];
  if (!role || !cantonName) throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);

  const cantonContext = `Der Ortsfilter verwendet den Kanton ${cantonName} (${cantonKey}). Der genaue Arbeitsort und ein allfälliger Einsatzradius ergeben sich aus dem jeweiligen Inserat.`;
  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${cantonName}`,
    description: `Aktuelle Stelleninserate mit Bezug zu ${role.label} im Kanton ${cantonName}. Aufgaben, Anforderungen und Arbeitsort im Inserat prüfen.`,
    intro: `Diese Suchseite zeigt aktuelle Treffer für ${role.label} mit Ortsbezug zum Kanton ${cantonName}. Sie erhebt keinen Anspruch auf vollständige Marktabdeckung. ${cantonContext}`,
    roleDescription: role.roleDescription,
    requirements: role.requirements,
    career: role.career,
    cantonContext,
    faqs: [
      {
        question: `Wie viele ${role.label} Stellen gibt es in ${cantonName}?`,
        answer: "Die Trefferzahl wird aus dem aktuellen öffentlichen Bestand berechnet und kann sich jederzeit ändern. dachdeckerjobs.ch verspricht keine vollständige Marktabdeckung.",
      },
      { question: `Welche Voraussetzungen gelten für ${role.label}?`, answer: role.requirements },
      {
        question: `Was verdient ein ${role.label} in ${cantonName}?`,
        answer: "Massgebend ist die Lohnangabe im Inserat oder Arbeitsvertrag. Für statistische Vergleiche verweisen wir auf Salarium des Bundesamts für Statistik.",
      },
      { question: `Wo befindet sich die Stelle im Kanton ${cantonName}?`, answer: cantonContext },
    ],
  };
}

export const TOP_LANDING_PAGES = Object.keys(ROLE_CONTENT).flatMap((role) =>
  (Object.keys(CANTON_CONTENT) as Array<keyof typeof CANTON_CONTENT>).map((canton) =>
    buildLandingConfig(role, canton),
  ),
);

function normalizeSlug(value: string): string {
  return value.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/\u00df/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export const toRoleSlug = normalizeSlug;
export const toCantonSlug = normalizeSlug;

export function getLandingPath(config: LandingPageConfig): string {
  return `/dachdeckerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return TOP_LANDING_PAGES.find(
    (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug,
  ) ?? null;
}

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCanton = TOP_LANDING_PAGES.filter((page) => page.canton === config.canton && page.role !== config.role);
  const sameRole = TOP_LANDING_PAGES.filter((page) => page.role === config.role && page.canton !== config.canton);
  const maxPerGroup = Math.ceil(limit / 2);
  return [...sameCanton.slice(0, maxPerGroup), ...sameRole.slice(0, maxPerGroup)].slice(0, limit);
}
