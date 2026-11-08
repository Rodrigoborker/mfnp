import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { GUIAS } from "@/lib/guias";

export const metadata: Metadata = {
  title: "Guias para donos e investidores de flat",
  description:
    "Administração de Airbnb, flat ou pousada, como comprar um flat e como funciona o turnkey em Porto de Galinhas, Tamandaré e Carneiros.",
  alternates: { canonical: "/guias" },
};

export default function GuiasIndex() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb current="Guias" href="/guias" />
        <section className="px-6 pb-12 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              Guias
            </p>
            <h1 className="mb-5 font-heading text-[41px] leading-[1.15] text-navy sm:text-[50px] lg:text-[55px]">
              Guias para quem tem ou quer ter um flat no litoral sul de
              Pernambuco
            </h1>
          </Reveal>
        </section>
        <section className="mx-auto grid max-w-brand grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-2">
          {GUIAS.map((g, i) => (
            <Reveal
              key={g.slug}
              delay={(i % 2) * 0.08}
              className="border-t border-orange pt-6"
            >
              <p className="mb-2 text-[18px] uppercase tracking-[0.12em] text-orange">
                {g.eyebrow}
              </p>
              <h2 className="mb-3 font-heading text-[28px] leading-snug text-navy">
                <Link href={g.path} className="hover:text-orange">
                  {g.metaTitle}
                </Link>
              </h2>
              <p className="text-[21px] leading-relaxed text-ink-soft">
                {g.metaDescription}
              </p>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
