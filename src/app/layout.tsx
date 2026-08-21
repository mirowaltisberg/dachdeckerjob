import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dachdeckerjobs.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dachdecker Jobs Schweiz | Dach & Gebäudehülle",
    template: "%s | dachdeckerjobs.ch",
  },
  description:
    "Finde aktuelle Stellen für Dachdecker, Flachdach- und Fassadenfachkräfte sowie Projektleitung Gebäudehülle in der Schweiz.",
  keywords: [
    "Dachdeckerjobs",
    "Dachdeckerjobs Schweiz",
    "Dachdecker Jobs",
    "Projektleiter Gebäudehülle",
    "Flachdachmonteur Jobs",
    "Fassadenbauer Jobs",
    "Servicemonteur Dach Jobs",
    "Stellen Gebäudehülle Schweiz",
    "Dach Job Schweiz",
    "Gebäudehülle Stellen Schweiz",
    "Dachdecker Stellenangebote",
    "Dachdecker Jobs Schweiz",
    "Dachdecker Temporär",
    "Dachdecker Festanstellung",
    "Dachdecker Lohn Schweiz",
  ],
  openGraph: {
    title: "Dachdecker Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Dachdecker, Flachdach, Fassade, Service und Projektleitung Gebäudehülle.",
    type: "website",
    url: "/",
    siteName: "dachdeckerjobs.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dachdecker Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Dachdecker, Flachdach, Fassade, Service und Projektleitung Gebäudehülle.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "dachdeckerjobs.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "dachdeckerjobs.ch bündelt Stellenangebote mit klarem Bezug zu Dach und Gebäudehülle in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "dachdeckerjobs.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Dach- und Gebäudehüllen-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
