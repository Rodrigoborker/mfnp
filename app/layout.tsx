import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Meu Flat na Praia | Gestão de imóveis por temporada",
    template: "%s | Meu Flat na Praia",
  },
  description:
    "Gestão profissional de imóveis por temporada no litoral de Pernambuco: preparação do imóvel, reservas, precificação e distribuição multicanal.",
  verification: {
    google: "EmuX4Cgq_zkWIE8d11czpeAEEonm39QQOetKfCbHXC4",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${cormorant.variable} ${script.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
