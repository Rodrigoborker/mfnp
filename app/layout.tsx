import type { Metadata } from "next";
import { Poppins, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Meu Flat na Praia | Administradora de flats por temporada",
    template: "%s | Meu Flat na Praia",
  },
  description:
    "Administradora de flats e Airbnb em Porto de Galinhas, Tamandaré e Carneiros: preparação do imóvel, reservas, precificação dinâmica e repasse direto.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Meu Flat na Praia",
    images: ["/photos/hero-jangada.jpg"],
  },
  verification: {
    google: "EmuX4Cgq_zkWIE8d11czpeAEEonm39QQOetKfCbHXC4",
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meu Flat na Praia",
  legalName: "Meu Flat na Praia Locações por Temporada",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-cor.png`,
  image: `${SITE_URL}/brand/logo-cor.png`,
  telephone: "+5581994869792",
  description:
    "Administradora de flats e imóveis para aluguel por temporada no litoral sul de Pernambuco.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto de Galinhas",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  founder: [
    {
      "@type": "Person",
      name: "Rodrigo Montenegro",
      jobTitle: "Corretor de imóveis (CRECI-PE 16191)",
    },
    {
      "@type": "Person",
      name: "Rosana Costa",
      jobTitle: "Administradora",
    },
  ],
  knowsAbout: [
    "Administração de flats por temporada",
    "Gestão de Airbnb e Booking",
    "Montagem e decoração de imóveis para temporada",
  ],
  areaServed: [
    { "@type": "Place", name: "Porto de Galinhas" },
    { "@type": "Place", name: "Tamandaré" },
    { "@type": "Place", name: "Praia dos Carneiros" },
  ],
  sameAs: ["https://www.instagram.com/meuflatnapraia/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} ${script.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
