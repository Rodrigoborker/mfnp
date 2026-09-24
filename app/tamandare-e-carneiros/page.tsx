import type { Metadata } from "next";
import Link from "next/link";
import { Gem, CalendarRange, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

export const metadata: Metadata = {
  title: "Gestão de flats em Tamandaré e Praia dos Carneiros",
  description:
    "Gestora de short stay em Tamandaré e Carneiros: posicionamento para diária média mais alta, turismo de experiência e rendimento de aluguel por temporada sustentável.",
};

const DYNAMICS = [
  {
    icon: Gem,
    title: "Ticket médio mais alto",
    desc: "Tamandaré e Praia dos Carneiros atraem um hóspede disposto a pagar mais por privacidade, paisagem e tranquilidade. Isso muda a estratégia de precificação: o foco vai para captar o valor real que o destino sustenta, mais do que empilhar reservas a qualquer preço.",
  },
  {
    icon: CalendarRange,
    title: "Estadias mais longas",
    desc: "O perfil de turismo de experiência favorece estadias de vários dias em vez de passagens rápidas de fim de semana. A operação de limpeza e suporte é dimensionada para esse ritmo, com menos giro e mais atenção ao detalhe em cada estadia.",
  },
  {
    icon: Leaf,
    title: "Posicionamento de tranquilidade",
    desc: "Anúncio, fotografia e comunicação precisam refletir o que o hóspede busca nesses destinos: sossego, natureza preservada e exclusividade. É um discurso bem diferente do que funciona num destino de alto fluxo.",
  },
];

export default function TamandareCarneirosPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          current="Tamandaré e Praia dos Carneiros"
          href="/tamandare-e-carneiros"
        />

        {/* Hero */}
        <section className="px-6 pb-14 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Gestão em Tamandaré e Carneiros
            </p>
            <h1 className="mb-5 font-heading text-[38px] leading-[1.15] text-navy sm:text-[47px] lg:text-[52px]">
              Gestora de short stay para quem investiu em Tamandaré e Praia
              dos Carneiros
            </h1>
            <p className="mx-auto max-w-[680px] text-[22px] leading-relaxed text-ink-soft">
              Um destino de ticket médio mais alto e turismo de experiência
              exige posicionamento diferente de Porto de Galinhas: menos
              volume, mais valor por estadia, e uma operação pensada para
              preservar a exclusividade que atrai esse hóspede.
            </p>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/destino-carneiros.webp"
              placeholder="Praia dos Carneiros"
              priority
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-8 text-[23px] leading-relaxed text-white/90">
                  Precificação orientada a valor, curadoria de hóspede e
                  comunicação alinhada ao perfil de quem busca Tamandaré e
                  Carneiros. O objetivo é transformar rendimento de aluguel
                  por temporada em receita consistente, mesmo com um volume
                  de reservas menor.
                </p>
                <Link
                  href="/para-proprietarios#lead-form"
                  className="inline-block bg-orange px-7 py-4 text-[21px] text-white hover:bg-orange/90"
                >
                  Quero rentabilizar meu flat em Tamandaré ou Carneiros
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
              Valorização do ticket médio exige uma estratégia própria
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
                Curadoria de hóspede e padrão de experiência acima da
                simples ocupação
              </h2>
              <p className="mb-4 text-[21px] leading-relaxed text-white/70">
                Em Tamandaré e Praia dos Carneiros, o resultado financeiro
                está mais ligado à diária média e à reputação do imóvel do
                que ao volume de reservas. Selecionamos hóspede, cuidamos do
                padrão de decoração e enxoval e mantemos a comunicação do
                anúncio alinhada ao posicionamento de tranquilidade que o
                destino vende.
              </p>
              <p className="text-[21px] leading-relaxed text-white/70">
                A precificação dinâmica considera a sazonalidade específica
                da região e a concorrência direta de pousadas e casas de
                temporada, com uma lógica própria, diferente do modelo de
                giro rápido usado em destinos de alto fluxo.
              </p>
            </Reveal>
            <RevealImage className="relative h-[300px] overflow-hidden lg:h-[380px]">
              <ImageSlot
                src="/photos/destino-tamandare.webp"
                placeholder="Tamandaré"
              />
            </RevealImage>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[31px] text-white sm:text-[38px]">
              Quer saber o potencial de rendimento do seu flat em Tamandaré
              ou Carneiros?
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
