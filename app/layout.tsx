import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Meu Flat na Praia — Gestão de imóveis por temporada",
    template: "%s | Meu Flat na Praia",
  },
  description:
    "Gestão profissional de imóveis por temporada no litoral de Pernambuco e Alagoas: preparação do imóvel, reservas, precificação e distribuição multicanal.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
