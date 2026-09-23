import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, Hammer, Zap, Paintbrush } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

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
    tag: "Projeto de iluminação",
    title: "Iluminação pensada para cada ambiente",
    desc: "Planejamos a iluminação junto com o projeto de ambientação: pontos de luz embutidos, luz indireta e pendentes que valorizam a decoração e deixam o flat aconchegante. A parte elétrica é executada por equipe própria, com segurança e infraestrutura adequada para eletrodomésticos e climatização.",
    imgPlaceholder: "Projeto de iluminação com spots embutidos e parede de pedra",
    imgSrc: "/photos/projeto-iluminacao.jpg",
    imgPosition: "center 55%",
    alt: true,
  },
  {
    tag: "Marcenaria",
    title: "Equipe própria de marcenaria",
    desc: "Você não precisa correr atrás de prestadores terceirizados. Nossa equipe executa a marcenaria com agilidade, qualidade e padronização entre os imóveis administrados.",
    imgPlaceholder: "Marcenaria própria cortando madeira sob medida",
    imgSrc: "/photos/marcenaria.jpg",
    imgPosition: "center 60%",
    parallax: true,
    alt: false,
  },
  {
    tag: "Pintura e decoração",
    title: "Pintura e decoração pensadas para os anúncios",
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
      "Não necessariamente. Avaliamos o imóvel na visita técnica e definimos junto com você o escopo real de intervenção, da decoração simples a uma montagem completa.",
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
          className="mx-auto max-w-brand px-6 pt-5 text-[15px] text-ink-soft"
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
        <section className="px-6 pb-14 pt-16 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[15px] font-medium uppercase tracking-[0.14em] text-orange">
              Montagem e decoração de flats
            </p>
            <h1 className="font-heading text-[34px] leading-[1.15] text-navy sm:text-[42px] lg:text-[46px]">
              Do projeto de arquitetura ao flat pronto para hospedar.
            </h1>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/montagem-flats-hero.png"
              placeholder="Flat decorado e mobiliado após a montagem"
              objectPosition="center 55%"
              priority
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-8 text-xl leading-relaxed text-white/90">
                  Projetamos, executamos e decoramos o seu imóvel para locação
                  por temporada: arquitetura, marcenaria, elétrica e pintura,
                  com equipe própria e padrão profissional.
                </p>
                <Link
                  href="/para-proprietarios"
                  className="inline-block bg-orange px-7 py-4 text-lg text-white hover:bg-orange/90"
                >
                  Quero montar e decorar meu flat
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4 frentes */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-20">
            <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
              <h2 className="font-heading text-[30px] text-white sm:text-[36px]">
                Um único time cuida de todas as frentes
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {FRONTS.map((front, i) => (
                <Reveal key={front.title} delay={i * 0.08} className="border-t border-orange-light pt-6">
                  <front.icon className="mb-3.5 h-6 w-6 text-orange-light" aria-hidden />
                  <h3 className="mb-2 font-heading text-[19px] text-white">
                    {front.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70">
                    {front.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detalhe arquitetura */}
        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <RevealImage className="relative h-[280px] overflow-hidden lg:h-[360px]">
            <ImageSlot
              src="/photos/projeto-arquitetura.jpg"
              placeholder="Studio decorado a partir do projeto de ambientação"
            />
          </RevealImage>
          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-orange">
              Projeto de arquitetura
            </p>
            <h2 className="mb-4 font-heading text-[28px] text-navy sm:text-[32px]">
              Cada metro pensado para hospedar mais e melhor
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-ink-soft">
              Antes da execução, desenvolvemos um projeto de ambientação que
              aproveita a metragem do imóvel para maximizar conforto,
              capacidade e apelo visual nos anúncios.
            </p>
            <p className="text-lg leading-relaxed text-ink-soft">
              O layout considera fluxo de circulação, iluminação natural e
              os pontos que mais influenciam a decisão de reserva de um
              hóspede de temporada.
            </p>
          </Reveal>
        </section>

        {/* Marcenaria / Elétrica / Pintura */}
        {TRADES.map((trade) =>
          trade.parallax ? (
            <div key={trade.tag}>
              <section className="px-6 pb-14 pt-24 text-center">
                <Reveal className="mx-auto max-w-[760px]">
                  <p className="mb-3 text-[15px] font-medium uppercase tracking-[0.14em] text-orange">
                    {trade.tag}
                  </p>
                  <h2 className="font-heading text-[30px] text-navy sm:text-[40px]">
                    {trade.title}
                  </h2>
                </Reveal>
              </section>
              <section className="relative h-[100vh] min-h-[750px]">
                <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
                  <ImageSlot
                    src={trade.imgSrc}
                    placeholder={trade.imgPlaceholder}
                    objectPosition={trade.imgPosition}
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
                  <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
                    <div className="max-w-xl text-white">
                      <p className="text-[22px] leading-relaxed text-white/90">
                        {trade.desc}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </section>
            </div>
          ) : (
          <section
            key={trade.tag}
            className={trade.alt ? "border-y border-border bg-surface-alt" : ""}
          >
            <div className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
              <Reveal className={trade.alt ? "lg:order-2" : ""}>
                <p className={`mb-3 text-sm font-medium uppercase tracking-[0.14em] ${trade.alt ? "text-white" : "text-orange"}`}>
                  {trade.tag}
                </p>
                <h2 className={`mb-4 font-heading text-[28px] sm:text-[32px] ${trade.alt ? "text-white" : "text-navy"}`}>
                  {trade.title}
                </h2>
                <p className={`text-lg leading-relaxed ${trade.alt ? "text-white/70" : "text-ink-soft"}`}>
                  {trade.desc}
                </p>
              </Reveal>
              <RevealImage
                className={`relative h-[280px] overflow-hidden lg:h-[320px] ${
                  trade.alt ? "lg:order-1" : ""
                }`}
              >
                <ImageSlot
                  src={trade.imgSrc}
                  placeholder={trade.imgPlaceholder}
                  objectPosition={trade.imgPosition}
                />
              </RevealImage>
            </div>
          </section>
          ),
        )}

        {/* Processo */}
        <section className="bg-navy">
          <div className="mx-auto max-w-brand px-6 py-20">
            <Reveal>
              <h2 className="mb-12 text-center font-heading text-[28px] text-white sm:text-[34px]">
                Como funciona a montagem do seu flat
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <div className="mb-3 font-heading text-[19px] text-white">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-lg text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-footer-text">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <Reveal className="mx-auto max-w-[820px] px-6 py-24">
          <h2 className="mb-10 text-center font-heading text-[28px] text-navy sm:text-[32px]">
            Perguntas frequentes
          </h2>
          <FaqAccordion items={FAQS} />
        </Reveal>

        {/* CTA */}
        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[28px] text-white sm:text-[34px]">
              Quer um flat pronto para hospedar desde o primeiro dia?
            </h2>
            <Link
              href="/para-proprietarios"
              className="inline-block bg-orange px-8 py-4 text-lg text-white hover:bg-orange/90"
            >
              Quero montar e decorar meu flat
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
