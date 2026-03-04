export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Dachdecker EFZ (m/w/d)",
    company: "Alpin Bedachungen AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Dachdecker für spannende Neubau- und Sanierungsprojekte im Raum Zürich.",
    responsibilities: [
      "Ausführung von Flach- und Steildacharbeiten",
      "Verlegung von Dachziegeln, Schiefer und Bitumenbahnen",
      "Montage und Abdichtung von Dachfenstern und Durchdringungen",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Dachdecker EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Höhentauglichkeit und Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Modernes Firmenfahrzeug",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Abdichter EFZ",
    company: "Swiss Dachtechnik GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Ausführung von Abdichtungsarbeiten an Flachdächern und Balkonen.",
    responsibilities: [
      "Ausführung von Bitumen- und Kunststoffabdichtungen",
      "Montage von Wärmedämmungen unter Abdichtungen",
      "Einbau von Dachentwässerungssystemen",
      "Allgemeine Flachdacharbeiten"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Abdichter EFZ",
      "Handwerkliches Geschick und Zuverlässigkeit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Bauführer Dachdecker (w/m)",
    company: "Helvetia Gebäudehülle AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie anspruchsvolle Dach- und Fassadenprojekte von der Planung bis zur Übergabe.",
    responsibilities: [
      "Projektleitung von A bis Z inklusive Kostenkontrolle",
      "Kundenberatung und Offertenerstellung",
      "Führung der Montageequipen auf der Baustelle",
      "Qualitätssicherung und Abnahme"
    ],
    requirements: [
      "Weiterbildung zum Dachdeckerpolier oder Bauführer",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in Flach- und Steildachtechnik",
      "Verhandlungsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Geschäftsauto auch zur privaten Nutzung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Spengler EFZ / Bauspengler",
    company: "Rhein Spenglerei GmbH",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie fertigen und montieren Blechverkleidungen sowie Entwässerungssysteme für Dach und Fassade.",
    responsibilities: [
      "Anfertigung und Montage von Blechverkleidungen",
      "Einbau von Dachrinnen und Fallrohren",
      "Ausführung von Fassadenblecharbeiten",
      "Mithilfe bei Dachsanierungen"
    ],
    requirements: [
      "Berufsabschluss als Spengler EFZ oder Bauspengler",
      "Präzises Arbeiten mit Blech und Metallprofilen",
      "Selbständige und sorgfältige Arbeitsweise"
    ],
    benefits: [
      "Moderne Werkstatt und Maschinen",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Dachdecker EFZ - Unterhalt & Service",
    company: "Dach Partner AG",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Dachdecker im Servicebereich führen Sie Unterhaltsarbeiten und Reparaturen direkt bei unseren Kunden durch.",
    responsibilities: [
      "Ausführung von Dachreparaturen bei Privat- und Gewerbekunden",
      "Kleinere Abdichtungsarbeiten und Ausbesserungen",
      "Reinigung und Kontrolle von Dachentwässerungen",
      "Kundenberatung vor Ort"
    ],
    requirements: [
      "Ausbildung als Dachdecker EFZ",
      "Freude am Kundenkontakt und gepflegtes Auftreten",
      "Schwindel- und höhentauglich",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Umfassend ausgerüstetes Servicefahrzeug",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
