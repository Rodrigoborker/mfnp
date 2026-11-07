import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/site";
import { CONDOMINIOS, DESTINOS, type DestinoId } from "@/lib/condominios";

export const metadata: Metadata = {
  title: "Condomínios que administramos",
  description:
    "Administração de flats por temporada em Porto Kai, Nixxus II, Ora Beach, Terraza Tamandaré, Prime Beach Carneiros e outros condomínios do litoral sul de Pernambuco.",
  alternates: { canonical: "/condominios" },
};

const ORDEM: DestinoId[] = [
  "porto-de-galinhas",
  "tamandare",
  "carneiros",
  "litoral-sul",
];

export default function CondominiosPage() {
  const grupos = ORDEM.map((id) => ({
    destino: DESTINOS[id],
    itens: CONDOMINIOS.filter((c) => c.destino === id),
  })).filter((g) => g.itens.length > 0);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Condomínios administrados pela Meu Flat na Praia",
    itemListElement: CONDOMINIOS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.nome,
      url: `${SITE_URL}/condominios/${c.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <Header />
      <main>
        <Breadcrumb current="Condomínios" href="/condominios" />

        <section className="px-6 pb-14 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              Condomínios
            </p>
            <h1 className="mb-5 font-heading text-[41px] leading-[1.15] text-navy sm:text-[50px] lg:text-[55px]">
              Condomínios que administramos no litoral sul de Pernambuco
            </h1>
            <p className="mx-auto max-w-[680px] text-[24px] leading-relaxed text-ink-soft">
              Se o seu flat está em um destes empreendimentos, nossa equipe
              local já conhece o prédio e o destino. Escolha o condomínio
              para ver como funciona a administração.
            </p>
          </Reveal>
        </section>

        <div className="mx-auto max-w-brand space-y-14 px-6 pb-24">
          {grupos.map(({ destino, itens }) => (
            <section key={destino.id}>
              <h2 className="mb-6 border-b border-border pb-3 font-heading text-[30px] text-navy">
                {destino.nome}
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {itens.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/condominios/${c.slug}`}
                      className="block border border-border p-6 text-[23px] text-navy hover:border-orange hover:text-orange"
                    >
                      {c.nome}
                      <span className="mt-1 block text-[19px] text-ink-soft">
                        Administração de flat
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[34px] text-white sm:text-[41px]">
              Seu condomínio não está na lista?
            </h2>
            <p className="mx-auto mb-6 max-w-[640px] text-[22px] text-white/70">
              Também avaliamos flats em outros empreendimentos de Porto de
              Galinhas, Tamandaré e Carneiros.
            </p>
            <Link
              href="/para-proprietarios#lead-form"
              className="inline-block bg-orange px-8 py-4 text-[23px] text-white hover:bg-orange/90"
            >
              Quero uma avaliação do meu imóvel
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
