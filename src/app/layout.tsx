import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dachdeckerjobs.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dachdecker Jobs Schweiz 2026 | Stellenangebote & Lohn",
    template: "%s | dachdeckerjobs.ch",
  },
  description:
    "Finde Dachdecker Jobs und Stellenangebote in der Schweiz: Dachdecker EFZ, Abdichter, Spengler, Fassadenbauer, Temporär, Festanstellung und Lohninfos.",
  keywords: [
    "Dachdeckerjobs",
    "Dachdeckerjobs Schweiz",
    "Dachdecker EFZ Jobs",
    "Abdichter Jobs",
    "Spengler EFZ Jobs",
    "Fassadenbauer Jobs",
    "Dachdeckerpolier",
    "Bauführer Dachdecker",
    "Flachdach Jobs",
    "Steildach Jobs",
    "Dachsanierung Jobs",
    "Bauspengler Jobs",
    "Zimmermann Dach",
    "Gebäudehülle Jobs Schweiz",
    "Stellen Dachdeckerbranche Schweiz",
    "Dachdecker Job Schweiz",
    "Dachdecker Stellen Schweiz",
    "Dachdecker Stellenangebote",
    "Abdichter Stellenangebote",
    "Fassadenbauer Jobs Schweiz",
    "Dachdecker Temporär",
    "Dachdecker Lohn Schweiz",
  ],
  openGraph: {
    title: "Dachdecker Jobs Schweiz 2026 | Stellenangebote & Lohn",
    description:
      "Finde Dachdecker Jobs und Stellenangebote in der Schweiz: Dachdecker EFZ, Abdichter, Spengler, Fassadenbauer, Temporär, Festanstellung und Lohninfos.",
    type: "website",
    url: "/",
    siteName: "dachdeckerjobs.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dachdecker Jobs Schweiz 2026 | Stellenangebote & Lohn",
    description:
      "Finde Dachdecker Jobs und Stellenangebote in der Schweiz: Dachdecker EFZ, Abdichter, Spengler, Fassadenbauer, Temporär, Festanstellung und Lohninfos.",
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
  logo: `${SITE_URL}/logo.png`,
  description:
    "dachdeckerjobs.ch ist die spezialisierte Jobbörse für Dachdecker-Fachkräfte in der Schweiz. Finde offene Stellen als Dachdecker EFZ, Abdichter, Spengler, Fassadenbauer und mehr.",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/`,
  },
  sameAs: [
    "https://www.youtube.com/@dachdeckerjob",
    "https://www.facebook.com/dachdeckerjob",
    "https://www.instagram.com/dachdeckerjob",
    "https://www.linkedin.com/company/dachdeckerjob",
    "https://twitter.com/dachdeckerjob",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "dachdeckerjobs.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Dachdecker-Fachkräfte in der Schweiz.",
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
    <html lang="de">
      <head>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body lang="de" className={`${plusJakarta.variable} antialiased font-sans bg-slate-50`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-0000000000"}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${process.env.NEXT_PUBLIC_GA_ID || "G-0000000000"}');
          `}
        </Script>
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID || "0000000000000000"}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
