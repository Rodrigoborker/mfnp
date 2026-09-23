import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ImageSlot from "@/components/ImageSlot";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";

export const metadata: Metadata = {
  title: "Gestão de imóveis por temporada",
  description:
    "Gestão profissional de Airbnb: preparação do imóvel, anúncios multicanal, precificação dinâmica e repasses diretos ao proprietário.",
};

type Pillar = {
  id: string;
  tag: string;
  title: string;
  imgPlaceholder: string;
  imgSrc?: string;
  intro: string;
  points: { title: string; desc: string }[];
  link?: string;
  linkLabel?: string;
  parallax?: {
    src: string;
    alt: string;
    position: string;
    overlay: boolean;
  };
};

const PILLARS: Pillar[] = [
  {
    id: "p1",
    tag: "Preparação",
    title: "Equipamos e decoramos",
    imgPlaceholder: "Foto real: flat decorado pronto para locação",
    intro:
      "Seu flat pronto para rentabilizar desde o primeiro dia. Cuidamos do projeto de arquitetura, marcenaria, elétrica e pintura completos, com equipe própria.",
    points: [
      {
        title: "Projeto de arquitetura",
        desc: "Ambientação planejada para conforto, capacidade e conversão em anúncios.",
      },
      {
        title: "Marcenaria e elétrica próprias",
        desc: "Mobiliário sob medida e instalação elétrica com padronização e agilidade.",
      },
      {
        title: "Pintura e decoração",
        desc: "Acabamento com padrão profissional, pronto para fotografia.",
      },
    ],
    link: "/montagem-de-flats",
    linkLabel: "Ver detalhes da montagem →",
    parallax: {
      src: "/photos/preparacao-mare-alta.jpg",
      alt: "Flat decorado e equipado após a preparação",
      position: "center 60%",
      overlay: true,
    },
  },
  {
    id: "p2",
    tag: "Operação",
    title: "Gestão comercial completa",
    imgPlaceholder: "Foto real: check-in ou atendimento ao hóspede",
    intro:
      "Da reserva ao check-out, com performance profissional. Você entrega as chaves, a gente entrega resultado.",
    points: [
      {
        title: "Anúncios profissionais",
        desc: "Fotos, textos e regras claras nas principais plataformas.",
      },
      {
        title: "Calendário unificado",
        desc: "Controle de ocupação, bloqueios e tarifas em tempo real.",
      },
      {
        title: "Atendimento 24h",
        desc: "Suporte ao hóspede do check-in ao check-out.",
      },
    ],
  },
  {
    id: "p3",
    tag: "Receita",
    title: "Precificação baseada em dados",
    imgPlaceholder: "Gráfico de desempenho de preços e ocupação",
    imgSrc: "/photos/precificacao-dados.jpg",
    intro:
      "Preços ajustados com base em mercado, sazonalidade e nas particularidades do seu imóvel, não no valor do vizinho.",
    points: [
      {
        title: "Leitura de demanda",
        desc: "Identificamos alta e baixa procura ao longo do ano.",
      },
      {
        title: "Eventos e feriados mapeados",
        desc: "Tarifas diferenciadas em datas de pico.",
      },
      {
        title: "Ferramentas dinâmicas",
        desc: "Atualização automática de preços 24h por dia.",
      },
    ],
  },
  {
    id: "p4",
    tag: "Transparência",
    title: "Área exclusiva do proprietário",
    imgPlaceholder: "Foto real: proprietário usando o painel em um tablet",
    intro:
      "Acesso total aos dados do seu imóvel. A gestão é nossa, o controle continua com você.",
    points: [
      {
        title: "Reservas e calendário",
        desc: "Check-ins, check-outs e bloqueios sempre atualizados.",
      },
      {
        title: "Relatórios financeiros",
        desc: "Receita, saldo e repasses com transparência total.",
      },
      {
        title: "Pagamento direto",
        desc: "O valor da reserva cai direto na conta do proprietário.",
      },
    ],
    parallax: {
      src: "/photos/area-do-proprietario.jpg",
      alt: "Calendário geral da área do proprietário com reservas por unidade",
      position: "center top",
      overlay: false,
    },
  },
  {
    id: "p5",
    tag: "Alcance",
    title: "Site próprio para reservas diretas",
    imgPlaceholder: "Site próprio de reservas diretas do Meu Flat na Praia",
    imgSrc: "/photos/site-reservas-diretas.jpg",
    intro:
      "Além das grandes plataformas, seu flat ganha uma vitrine própria: reservas diretas, sem comissão de terceiros.",
    points: [
      {
        title: "Mais margem",
        desc: "Reservas diretas reduzem a dependência de comissões externas.",
      },
      {
        title: "SEO e performance",
        desc: "Página otimizada para conversão e carregamento rápido.",
      },
      {
        title: "Suporte desde o clique",
        desc: "Atendimento imediato para quem reserva pelo site.",
      },
    ],
  },
];

const CHANNELS = [
  {
    name: "Airbnb",
    desc: "Alta demanda entre viajantes que buscam conforto e praticidade.",
  },
  {
    name: "Booking.com",
    desc: "A maior plataforma de hospedagem do mundo.",
  },
  {
    name: "Decolar/Despegar",
    desc: "Forte presença no mercado latino-americano.",
  },
  {
    name: "Google Vacation Rentals",
    desc: "Reserva instantânea direto na busca do Google.",
  },
];

const FAQS = [
  {
    id: "faq-1",
    question: "Como funciona a gestão de Airbnb da Meu Flat na Praia?",
    answer:
      "Cuidamos de toda a operação: preparação do imóvel, anúncios, precificação, atendimento ao hóspede e repasses ao proprietário, do início ao fim.",
  },
  {
    id: "faq-2",
    question: "Quanto custa administrar um imóvel por temporada?",
    answer:
      "O custo varia conforme o tipo de imóvel e os serviços contratados. Fale com nossa equipe para uma avaliação personalizada.",
  },
  {
    id: "faq-3",
    question: "Os pagamentos das reservas ficam com a administradora?",
    answer:
      "Não. Todo pagamento de reserva cai diretamente na conta cadastrada pelo proprietário. Não recebemos nem retemos valores.",
  },
  {
    id: "faq-4",
    question: "Em quais plataformas meu imóvel é anunciado?",
    answer:
      "Airbnb, Booking.com, Decolar/Despegar e Google Vacation Rentals, além do nosso site próprio de reservas diretas.",
  },
  {
    id: "faq-5",
    question: "Preciso decorar o imóvel antes de contratar a gestão?",
    answer:
      "Não. Cuidamos da montagem e decoração completas, caso o imóvel ainda não esteja preparado para locação por temporada.",
  },
];

export default function GestaoDeImoveisPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb current="Gestão de imóveis por temporada" />

        {/* Hero */}
        <Reveal className="mx-auto max-w-[840px] px-6 pt-10 pb-16 text-center">
          <p className="mb-4 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
            Gestão de imóveis por temporada
          </p>
          <h1 className="mb-5 font-heading text-[38px] leading-[1.15] text-navy sm:text-[47px] lg:text-[52px]">
            Gestão profissional de temporada, do imóvel vazio à reserva
            confirmada.
          </h1>
          <p className="mx-auto mb-8 max-w-[620px] text-[23px] leading-relaxed text-ink">
            Cuidamos de todo o processo de locação por temporada com
            tecnologia e foco em rentabilidade: você entrega as chaves, a
            gente entrega resultado.
          </p>
          <Link
            href="/para-proprietarios"
            className="inline-block bg-orange px-7 py-4 text-[21px] text-white hover:bg-orange/90"
          >
            Quero rentabilizar meu imóvel
          </Link>
        </Reveal>

        <RevealImage className="mx-auto max-w-brand px-6 pb-20">
          <div className="relative h-[420px] overflow-hidden">
            <ImageSlot
              src="/photos/rodrigo-rosana-013.jpg"
              placeholder="Rodrigo e Rosana em reunião de gestão"
              objectPosition="center 45%"
            />
          </div>
        </RevealImage>

        {/* Pilares */}
        {PILLARS.map((pillar, i) => {
          const isAlt = i % 2 === 1;
          if (pillar.parallax) {
            const { parallax } = pillar;
            const body = (
              <>
                <p className="mb-5 text-[21px] leading-relaxed text-white/85">
                  {pillar.intro}
                </p>
                <div className="flex flex-col gap-3.5">
                  {pillar.points.map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-light" aria-hidden />
                      <div>
                        <div className="mb-0.5 text-[20px] font-semibold text-white">
                          {point.title}
                        </div>
                        <div className="text-[19px] leading-relaxed text-white/80">
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {pillar.link && (
                  <Link
                    href={pillar.link}
                    className="mt-5 inline-block border-b border-white/70 pb-0.5 text-[19px] text-white hover:border-orange-light hover:text-orange-light"
                  >
                    {pillar.linkLabel}
                  </Link>
                )}
              </>
            );
            return (
              <div key={pillar.id}>
              <section
                className={`px-6 pb-14 text-center ${i === 0 ? "pt-8" : "pt-20"}`}
              >
                <Reveal className="mx-auto max-w-[760px]">
                  <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
                    {pillar.tag}
                  </p>
                  <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
                    {pillar.title}
                  </h2>
                </Reveal>
              </section>
              {parallax.overlay ? (
                <section className="relative h-[120vh] min-h-[860px]">
                  <div className="sticky top-0 h-[85vh] min-h-[620px] overflow-hidden">
                    <ImageSlot
                      src={parallax.src}
                      placeholder={parallax.alt}
                      objectPosition={parallax.position}
                    />
                    <div className="absolute inset-0 bg-navy/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
                    <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
                      <div className="max-w-xl text-white">{body}</div>
                    </Reveal>
                  </div>
                </section>
              ) : (
                <>
                  {/* Foto sem escurecer: no desktop o texto vai num cartão sólido
                      sobre a imagem; no celular ele vem logo abaixo dela. */}
                  <section className="relative h-[95vh] lg:h-[120vh] lg:min-h-[860px]">
                    <div className="sticky top-0 h-[55vh] min-h-[360px] overflow-hidden lg:h-[85vh] lg:min-h-[620px]">
                      <ImageSlot
                        src={parallax.src}
                        placeholder={parallax.alt}
                        objectPosition={parallax.position}
                      />
                      <Reveal className="relative mx-auto hidden h-full max-w-brand items-center px-6 lg:flex">
                        <div className="max-w-xl bg-navy p-10 text-white shadow-2xl">
                          {body}
                        </div>
                      </Reveal>
                    </div>
                  </section>
                  <div className="bg-navy px-6 py-10 text-white lg:hidden">
                    <div className="mx-auto max-w-xl">{body}</div>
                  </div>
                </>
              )}
              </div>
            );
          }
          return (
          <section
            key={pillar.id}
            className={isAlt ? "border-y border-border bg-surface-alt" : ""}
          >
            <div className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2">
              <Reveal className={pillar.link ? "" : ""} delay={0.05}>
                <div className={isAlt ? "lg:order-2" : ""}>
                <p className={`mb-3 text-[17px] font-medium uppercase tracking-[0.14em] ${isAlt ? "text-white" : "text-orange"}`}>
                  {pillar.tag}
                </p>
                <h2 className={`mb-4 font-heading text-[31px] sm:text-[36px] ${isAlt ? "text-white" : "text-navy"}`}>
                  {pillar.title}
                </h2>
                <p className={`mb-5 text-[21px] leading-relaxed ${isAlt ? "text-white/70" : "text-ink-soft"}`}>
                  {pillar.intro}
                </p>
                <div className="flex flex-col gap-3.5">
                  {pillar.points.map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${isAlt ? "text-orange-light" : "text-orange"}`}
                        aria-hidden
                      />
                      <div>
                        <div className={`mb-0.5 text-[20px] font-semibold ${isAlt ? "text-white" : "text-navy"}`}>
                          {point.title}
                        </div>
                        <div className={`text-[19px] leading-relaxed ${isAlt ? "text-white/70" : "text-ink-soft"}`}>
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {pillar.link && (
                  <Link
                    href={pillar.link}
                    className={
                      isAlt
                        ? "mt-5 inline-block border-b border-white/70 pb-0.5 text-[19px] text-white hover:border-orange-light hover:text-orange-light"
                        : "mt-5 inline-block border-b border-navy pb-0.5 text-[19px] text-navy hover:border-orange hover:text-orange"
                    }
                  >
                    {pillar.linkLabel}
                  </Link>
                )}
                </div>
              </Reveal>
              <RevealImage
                className={`relative h-[340px] overflow-hidden ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <ImageSlot
                  src={pillar.imgSrc}
                  placeholder={pillar.imgPlaceholder}
                />
              </RevealImage>
            </div>
          </section>
          );
        })}

        {/* Canais */}
        <section className="bg-navy">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <p className="mb-4 text-[17px] font-medium uppercase tracking-[0.14em] text-white">
              Distribuição multicanal
            </p>
            <h2 className="mb-8 font-heading text-[31px] text-white sm:text-[38px]">
              Seu flat nas maiores plataformas de reservas do mundo
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {CHANNELS.map((channel) => (
                <div
                  key={channel.name}
                  className="min-w-[180px] border border-white/20 px-7 py-5"
                >
                  <div className="mb-1.5 font-heading text-[21px] text-white">
                    {channel.name}
                  </div>
                  <div className="text-[18px] text-footer-text">
                    {channel.desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <Reveal className="mx-auto max-w-[820px] px-6 py-24">
          <h2 className="mb-10 text-center font-heading text-[31px] text-navy sm:text-[36px]">
            Perguntas frequentes
          </h2>
          <FaqAccordion items={FAQS} defaultOpenIds={["faq-1"]} />
        </Reveal>

        {/* CTA */}
        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[31px] text-white sm:text-[38px]">
              Pronto para rentabilizar seu imóvel?
            </h2>
            <Link
              href="/para-proprietarios"
              className="inline-block bg-orange px-8 py-4 text-[21px] text-white hover:bg-orange/90"
            >
              Quero rentabilizar meu imóvel
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
