import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, Hammer, Zap, Paintbrush } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Montagem e decoração de flats",
  description:
    "Projeto de arquitetura, marcenaria, elétrica e pintura com equipe própria: do imóvel vazio ao flat decorado e pronto para hospedar.",
};

const FRONTS = [
  {
    icon: Ruler,
    title: "Projeto de arquitetura",
    desc: "Layout de ambientação pensado para conforto e conversão.",
  },
  {
    icon: Hammer,
    title: "Marcenaria sob medida",
    desc: "Mobiliário planejado, executado por equipe própria.",
  },
  {
    icon: Zap,
    title: "Elétrica",
    desc: "Instalação completa, com padronização e segurança.",
  },
  {
    icon: Paintbrush,
    title: "Pintura e acabamento",
    desc: "Acabamento com padrão profissional de hotelaria.",
  },
];

const TRADES = [
  {
    tag: "Marcenaria",
    title: "Equipe própria de marcenaria",
    desc: "Nada de correr atrás de prestadores terceirizados. Nossa equipe executa a marcenaria com agilidade, qualidade e padronização entre os imóveis administrados.",
    imgPlaceholder: "Foto real: móveis planejados sob medida",
    alt: false,
  },
  {
    tag: "Elétrica",
    title: "Instalação elétrica completa",
    desc: "Revisamos e executamos a parte elétrica do imóvel, com segurança e infraestrutura adequada para eletrodomésticos e climatização.",
    imgPlaceholder: "Foto real: instalação elétrica ou quadro de distribuição",
    alt: true,
  },
  {
    tag: "Pintura e decoração",
    title: "Pintura e decoração estratégica",
    desc: "Layouts modernos e enxutos, com paleta de cores e acabamento pensados para ficarem fotogênicos nos anúncios e agradáveis na estadia.",
    imgPlaceholder: "Foto real: ambiente pintado e decorado, pronto para fotos",
    alt: false,
  },
];

const STEPS = [
  { n: "01", title: "Visita técnica", desc: "Avaliamos o imóvel e o escopo necessário." },
  { n: "02", title: "Projeto", desc: "Desenvolvemos a ambientação e o orçamento." },
  { n: "03", title: "Execução", desc: "Marcenaria, elétrica e pintura em campo." },
  { n: "04", title: "Decoração", desc: "Mobília, itens de decoração e enxoval." },
  {
    n: "05",
    title: "Fotografia e publicação",
    desc: "Imóvel fotografado e pronto para anunciar.",
  },
];

const FAQS = [
  {
    id: "f1",
    question: "Preciso reformar o imóvel antes de contratar a gestão?",
    answer:
      "Não necessariamente. Avaliamos o imóvel na visita técnica e definimos junto com você o escopo real de intervenção — da decoração simples a uma montagem completa.",
  },
  {
    id: "f2",
    question: "A equipe de marcenaria e elétrica é própria ou terceirizada?",
    answer:
      "Temos equipe própria de marcenaria, elétrica e pintura, o que garante padronização e agilidade na execução.",
  },
  {
    id: "f3",
    question: "O projeto de arquitetura é personalizado para cada imóvel?",
    answer:
      "Sim. Cada projeto de ambientação é desenvolvido considerando a metragem, o layout original e o perfil de hóspede do destino.",
  },
  {
    id: "f4",
    question: "Depois da montagem, o imóvel já entra em operação?",
    answer:
      "Sim. Ao final da montagem e decoração, o imóvel é fotografado e publicado nos canais de reserva, iniciando a gestão comercial.",
  },
];

export default function MontagemDeFlatsPage() {
  return (
    <>
      <Header />
      <main>
        <nav
          aria-label="breadcrumb"
          className="mx-auto max-w-brand px-6 pt-5 text-[13px] text-ink-soft"
        >
          <Link href="/" className="text-ink-soft hover:text-navy">
            Home
          </Link>{" "}
          <span className="mx-1.5">›</span>{" "}
          <Link
            href="/gestao-de-imoveis"
            className="text-ink-soft hover:text-navy"
          >
            Gestão
          </Link>{" "}
          <span className="mx-1.5">›</span> Montagem de flats
        </nav>

        {/* Hero */}
        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
              Montagem e decoração de flats
            </p>
            <h1 className="mb-5 font-heading text-[30px] font-extrabold leading-[1.15] text-navy sm:text-[38px] lg:text-[44px]">
              Do projeto de arquitetura ao flat pronto para hospedar.
            </h1>
            <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-ink-soft">
              Projetamos, executamos e decoramos o seu imóvel para locação
              por temporada: arquitetura, marcenaria, elétrica e pintura,
              com equipe própria e padrão profissional.
            </p>
            <Link
              href="/para-proprietarios"
              className="inline-block rounded-brand bg-orange px-7 py-4 text-base font-semibold text-white hover:bg-orange/90"
            >
              Quero montar e decorar meu flat
            </Link>
          </div>
          <div className="h-[320px] overflow-hidden rounded-sm lg:h-[440px]">
            <ImageSlot placeholder="Foto real: flat decorado e mobiliado, antes/depois da montagem" />
          </div>
        </section>

        {/* 4 frentes */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-20">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <h2 className="font-heading text-[24px] font-extrabold text-navy sm:text-[32px]">
                Um único time cuida de todas as frentes
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px border border-border bg-border">
              {FRONTS.map((front) => (
                <div key={front.title} className="bg-white p-8">
                  <front.icon
                    className="mb-3.5 h-6.5 w-6.5 text-orange"
                    aria-hidden
                  />
                  <h3 className="mb-2 font-heading text-base font-bold text-navy">
                    {front.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {front.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detalhe arquitetura */}
        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div className="h-[280px] overflow-hidden rounded-sm lg:h-[360px]">
            <ImageSlot placeholder="Foto real: planta baixa ou render do projeto de ambientação" />
          </div>
          <div>
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.08em] text-orange">
              Projeto de arquitetura
            </p>
            <h2 className="mb-4 font-heading text-[24px] font-extrabold text-navy sm:text-[30px]">
              Cada metro pensado para hospedar mais e melhor
            </h2>
            <p className="mb-4 text-base leading-relaxed text-ink-soft">
              Antes da execução, desenvolvemos um projeto de ambientação que
              aproveita a metragem do imóvel para maximizar conforto,
              capacidade e apelo visual nos anúncios.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              O layout considera fluxo de circulação, iluminação natural e
              os pontos que mais influenciam a decisão de reserva de um
              hóspede de temporada.
            </p>
          </div>
        </section>

        {/* Marcenaria / Elétrica / Pintura */}
        {TRADES.map((trade) => (
          <section
            key={trade.tag}
            className={trade.alt ? "border-y border-border bg-surface-alt" : ""}
          >
            <div className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
              <div className={trade.alt ? "lg:order-2" : ""}>
                <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.08em] text-orange">
                  {trade.tag}
                </p>
                <h2 className="mb-4 font-heading text-[24px] font-extrabold text-navy sm:text-[30px]">
                  {trade.title}
                </h2>
                <p className="text-base leading-relaxed text-ink-soft">
                  {trade.desc}
                </p>
              </div>
              <div
                className={`h-[280px] overflow-hidden rounded-sm lg:h-[320px] ${
                  trade.alt ? "lg:order-1" : ""
                }`}
              >
                <ImageSlot placeholder={trade.imgPlaceholder} />
              </div>
            </div>
          </section>
        ))}

        {/* Processo */}
        <section className="bg-navy">
          <div className="mx-auto max-w-brand px-6 py-20">
            <h2 className="mb-12 text-center font-heading text-[24px] font-extrabold text-white sm:text-[32px]">
              Como funciona a montagem do seu flat
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <div className="mb-3 font-heading text-[15px] font-extrabold text-orange-light">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-footer-text">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[820px] px-6 py-24">
          <h2 className="mb-10 text-center font-heading text-[24px] font-extrabold text-navy sm:text-[30px]">
            Perguntas frequentes
          </h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[24px] font-extrabold text-navy sm:text-[32px]">
              Quer um flat pronto para hospedar desde o primeiro dia?
            </h2>
            <Link
              href="/para-proprietarios"
              className="inline-block rounded-brand bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange/90"
            >
              Quero montar e decorar meu flat
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
