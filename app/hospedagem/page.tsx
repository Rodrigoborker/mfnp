import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, BedDouble } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { booking, IS_MOCK } from "@/lib/ayrton";

// Protótipo: fora do índice até a API real da Ayrton ser ligada.
export const metadata: Metadata = {
  title: "Flats para temporada em Porto de Galinhas e Tamandaré",
  description:
    "Reserve flats e apartamentos por temporada em Porto de Galinhas e Tamandaré, a poucos passos da praia, direto com a Meu Flat na Praia.",
  robots: { index: false, follow: false },
};

const DEST: Record<string, string> = {
  "porto-de-galinhas": "Porto de Galinhas",
  tamandare: "Tamandaré",
};

export default async function HospedagemPage() {
  const flats = await booking.listFlats();

  return (
    <>
      <Header />
      <main>
        <Breadcrumb current="Hospedagem" href="/hospedagem" />
        <section className="mx-auto max-w-brand px-6 pb-20 pt-10">
          {IS_MOCK && (
            <p className="mb-8 border border-orange bg-orange/10 px-4 py-3 text-[18px] text-ink">
              <strong>Protótipo:</strong> preços e fotos são exemplos. Ainda não
              ligado à API da Ayrton.
            </p>
          )}
          <h1 className="mb-3 font-heading text-[41px] leading-[1.15] text-navy sm:text-[50px]">
            Flats por temporada em Porto de Galinhas e Tamandaré
          </h1>
          <p className="mb-10 max-w-[760px] text-[22px] text-ink-soft">
            Reserve direto com a gente: sem taxa de plataforma, com atendimento
            local no WhatsApp.
          </p>
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {flats.map((f) => (
              <li key={f.id} className="flex flex-col border border-border bg-white">
                <Link href={`/hospedagem/${f.slug}`} className="group flex flex-1 flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={f.photos[0].src} alt={f.photos[0].alt} fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[17px] uppercase tracking-[0.1em] text-orange">{DEST[f.destination]}</p>
                    <h2 className="mt-1 font-heading text-[26px] leading-tight text-navy">{f.name}</h2>
                    <p className="mt-2 text-[18px] text-ink-soft">{f.tagline}</p>
                    <p className="mt-4 flex gap-5 text-[17px] text-ink-soft">
                      <span className="flex items-center gap-1.5"><Users className="h-5 w-5" aria-hidden /> até {f.maxGuests}</span>
                      <span className="flex items-center gap-1.5"><BedDouble className="h-5 w-5" aria-hidden /> {f.bedrooms} {f.bedrooms === 1 ? "quarto" : "quartos"}</span>
                    </p>
                    <p className="mt-auto pt-5 text-[18px] text-ink">
                      {f.fromPrice ? <>a partir de <strong className="text-navy">R$ {f.fromPrice}</strong>/noite</> : "Consulte valores"}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
