import type { Metadata } from "next";
import Link from "next/link";
import { Repeat, Users, LineChart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

export const metadata: Metadata = {
  title: "Administradora de aluguel por temporada em Porto de Galinhas",
  description:
    "Gestão de flats e empresa de gestão Airbnb em Porto de Galinhas: giro de limpeza rápido, alta ocupação e precificação para o destino mais movimentado do litoral sul de PE.",
};

const DYNAMICS = [
  {
    icon: Repeat,
    title: "Giro de limpeza acelerado",
    desc: "Fluxo turístico intenso o ano inteiro significa estadias mais curtas e check-in/check-out no mesmo dia com frequência. A limpeza e a vistoria precisam de uma equipe local dimensionada para esse ritmo, não para o volume de um destino de baixa rotatividade.",
  },
  {
    icon: Users,
    title: "Concorrência direta por hóspede",
    desc: "Porto de Galinhas concentra o maior volume de flats e pousadas anunciados do litoral sul. Destacar seu imóvel exige fotografia, texto de anúncio e posicionamento de preço competitivos em Airbnb, Booking, Decolar e Google VR ao mesmo tempo.",
  },
  {
    icon: LineChart,
    title: "Sazonalidade de curtíssimo prazo",
    desc: "A demanda oscila por feriado, evento e até por dia da semana. Tarifa fixa deixa dinheiro na mesa em fins de semana de pico e afasta reserva em dias de menor procura.",
  },
];

export default function PortoDeGalinhasPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb current="Porto de Galinhas" />

        {/* Hero */}
        <section className="px-6 pb-14 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Gestão em Porto de Galinhas
            </p>
            <h1 className="mb-5 font-heading text-[38px] leading-[1.15] text-navy sm:text-[47px] lg:text-[52px]">
              Administradora de aluguel por temporada feita para o ritmo de
              Porto de Galinhas
            </h1>
            <p className="mx-auto max-w-[680px] text-[22px] leading-relaxed text-ink-soft">
              O destino mais visitado do litoral sul de Pernambuco exige giro
              de limpeza rápido, presença simultânea nos principais canais e
              precificação ajustada quase diariamente. É para esse volume
              que nossa operação local foi montada.
            </p>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/destino-porto-de-galinhas.jpg"
              placeholder="Praia de Porto de Galinhas"
              priority
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-8 text-[23px] leading-relaxed text-white/90">
                  Equipe local de limpeza e suporte, precificação dinâmica e
                  distribuição multicanal para manter seu flat ocupado nos
                  picos de alta temporada e competitivo nos períodos de menor
                  fluxo.
                </p>
                <Link
                  href="/para-proprietarios#lead-form"
                  className="inline-block bg-orange px-7 py-4 text-[21px] text-white hover:bg-orange/90"
                >
                  Quero rentabilizar meu flat em Porto de Galinhas
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Por que a dinâmica local exige expertise */}
        <section className="mx-auto max-w-brand px-6 py-20">
          <Reveal className="mx-auto mb-14 max-w-[720px] text-center">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Por que a gestão local importa
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              A dinâmica de Porto de Galinhas não perdoa gestão à distância
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {DYNAMICS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-t border-orange pt-6">
                <item.icon className="mb-3.5 h-6 w-6 text-orange" aria-hidden />
                <h3 className="mb-2 font-heading text-[22px] text-navy">
                  {item.title}
                </h3>
                <p className="text-[19px] leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Como operamos localmente */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-[17px] font-medium uppercase tracking-[0.14em] text-white">
                Operação local
              </p>
              <h2 className="mb-4 font-heading text-[31px] text-white sm:text-[36px]">
                Presença física em Porto de Galinhas, não apenas anúncio
                publicado
              </h2>
              <p className="mb-4 text-[21px] leading-relaxed text-white/70">
                Nossa equipe de limpeza, manutenção e atendimento ao hóspede
                está fisicamente na região, o que reduz o tempo entre um
                check-out e a próxima reserva confirmada e permite resolver
                imprevistos, como um problema de ar-condicionado no meio de
                uma estadia, no mesmo dia.
              </p>
              <p className="text-[21px] leading-relaxed text-white/70">
                A precificação é revisada continuamente contra a
                concorrência direta do destino, considerando eventos locais,
                feriados e o comportamento de busca em cada canal de
                reserva.
              </p>
            </Reveal>
            <RevealImage className="relative h-[300px] overflow-hidden lg:h-[380px]">
              <ImageSlot placeholder="Equipe local de limpeza e manutenção em Porto de Galinhas" />
            </RevealImage>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[31px] text-white sm:text-[38px]">
              Tem um flat em Porto de Galinhas parado ou mal aproveitado?
            </h2>
            <Link
              href="/para-proprietarios#lead-form"
              className="inline-block bg-orange px-8 py-4 text-[21px] text-white hover:bg-orange/90"
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
