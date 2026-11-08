import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  TrendingUp,
  Share2,
  ClipboardCheck,
  Wallet,
  CalendarCheck,
  Sofa,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import { SITE_URL } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  CONDOMINIOS,
  DESTINOS,
  getCondominio,
} from "@/lib/condominios";

export function generateStaticParams() {
  return CONDOMINIOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/condominios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const condo = getCondominio(slug);
  if (!condo) return {};
  const destino = DESTINOS[condo.destino];
  return {
    title: `Administração de flat no ${condo.nome}`,
    description: `Administradora de flats e Airbnb no ${condo.nome}, ${destino.em}: precificação dinâmica, repasse direto ao proprietário e vistoria em toda estadia.`,
    alternates: { canonical: `/condominios/${condo.slug}` },
  };
}

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Precificação dinâmica",
    desc: "Tarifa ajustada diariamente por demanda, feriados, eventos e concorrência direta.",
  },
  {
    icon: Share2,
    title: "Distribuição multicanal",
    desc: "Anúncio em Airbnb, Booking, Decolar e Google Vacation Rentals com calendário unificado.",
  },
  {
    icon: ClipboardCheck,
    title: "Vistoria em toda estadia",
    desc: "Checklist fotográfico na entrada e na saída, com avarias registradas e cobradas do responsável.",
  },
  {
    icon: Wallet,
    title: "Repasse direto",
    desc: "O valor de cada reserva é pago na conta cadastrada pelo proprietário. Não retemos o dinheiro das hospedagens.",
  },
  {
    icon: CalendarCheck,
    title: "Uso próprio sem burocracia",
    desc: "Você bloqueia as datas pela área exclusiva, sem multa e sem negociar caso a caso.",
  },
  {
    icon: Sofa,
    title: "Montagem e decoração",
    desc: "Projeto, marcenaria, elétrica, pintura e decoração para o flat entrar no mercado pronto para hospedar.",
  },
];

export default async function CondominioPage({
  params,
}: PageProps<"/condominios/[slug]">) {
  const { slug } = await params;
  const condo = getCondominio(slug);
  if (!condo) notFound();

  const destino = DESTINOS[condo.destino];
  const path = `/condominios/${condo.slug}`;
  const outros = CONDOMINIOS.filter(
    (c) => c.slug !== condo.slug && c.destino === condo.destino,
  );

  const faqs = [
    {
      id: "administram",
      question: `A Meu Flat na Praia administra flats no ${condo.nome}?`,
      answer: `Sim. O ${condo.nome} está entre os condomínios que administramos ${destino.em}. Cuidamos da operação completa do flat: anúncios, precificação, atendimento ao hóspede, limpeza, vistoria e prestação de contas ao proprietário.`,
    },
    {
      id: "taxa",
      question: `Quanto custa administrar um flat no ${condo.nome}?`,
      answer:
        "A taxa de administração é de 20% sobre o valor líquido da reserva, depois de descontada a taxa do canal (Airbnb, Booking e similares), e cobre toda a gestão comercial e operacional. A limpeza é paga pelo hóspede. Montagem, decoração e reformas pontuais entram à parte, sempre com orçamento aprovado antes.",
    },
    {
      id: "repasse",
      question: "Como recebo o dinheiro das reservas?",
      answer:
        "O valor de cada reserva é pago direto ao proprietário, na conta que ele cadastrou. A Meu Flat na Praia não fica com esse dinheiro em nenhum momento. Reservas, ocupação, receita e taxas aparecem na área exclusiva do proprietário.",
    },
    {
      id: "uso-proprio",
      question: `Posso usar meu flat no ${condo.nome} quando eu quiser?`,
      answer:
        "Sim. Você define os períodos de uso próprio com antecedência pela área exclusiva e o calendário bloqueia as datas para hóspedes, sem multa. O ponto de atenção é o custo de oportunidade em datas de alta demanda, como Réveillon, Carnaval e feriados prolongados.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Administração de flat no ${condo.nome}`,
      serviceType: "Administração de imóveis por temporada",
      url: `${SITE_URL}${path}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Meu Flat na Praia",
        url: SITE_URL,
        telephone: "+5581994869792",
      },
      areaServed: { "@type": "Place", name: destino.nome },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  const zap = whatsappUrl(
    `Olá! Tenho um flat no ${condo.nome} e quero uma avaliação para administração por temporada.`,
  );

  return (
    <>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <Header />
      <main>
        <Breadcrumb
          current={condo.nome}
          href={path}
          parent={{ name: "Condomínios", href: "/condominios" }}
        />

        <section className="px-6 pb-14 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              {condo.nome}
            </p>
            <h1 className="mb-5 font-heading text-[41px] leading-[1.15] text-navy sm:text-[50px] lg:text-[55px]">
              Administração de flat no {condo.nome}
            </h1>
            <p className="mx-auto max-w-[680px] text-[24px] leading-relaxed text-ink-soft">
              Tem um flat no {condo.nome}? A Meu Flat na Praia administra o
              seu aluguel por temporada {destino.em}: do anúncio ao
              repasse, com a equipe local cuidando de cada estadia.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/para-proprietarios#lead-form"
                className="inline-block bg-orange px-7 py-4 text-[23px] text-white hover:bg-orange/90"
              >
                Quero uma avaliação do meu flat
              </Link>
              <a
                href={zap}
                className="inline-block border border-navy px-7 py-4 text-[23px] text-navy hover:bg-navy hover:text-surface"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-12 px-6 pb-16 lg:grid-cols-2">
          <RevealImage className="relative h-[300px] overflow-hidden lg:h-[400px]">
            <ImageSlot src={destino.foto} placeholder={destino.fotoAlt} />
          </RevealImage>
          <Reveal>
            <p className="mb-3 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              Quem somos neste condomínio
            </p>
            <h2 className="mb-4 font-heading text-[34px] text-navy sm:text-[41px]">
              Operação local para o seu flat no {condo.nome}
            </h2>
            <p className="mb-4 text-[22px] leading-relaxed text-ink-soft">
              O {condo.nome} faz parte da carteira que administramos. Isso
              significa equipe de limpeza, manutenção e atendimento já
              presente na região, que conhece o condomínio e resolve
              imprevistos no mesmo dia.
            </p>
            {condo.detalhes && condo.detalhes.length > 0 && (
              <ul className="mb-4 list-disc space-y-1 pl-6 text-[22px] text-ink-soft">
                {condo.detalhes.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            <p className="mb-4 text-[22px] leading-relaxed text-ink-soft">
              O público que se hospeda aqui é formado principalmente por
              casais e famílias.
            </p>
            <p className="mb-4 text-[22px] leading-relaxed text-ink-soft">
              Como em todos os condomínios da nossa carteira, o prédio conta
              com rooftop, piscina, garagem e elevadores.
            </p>
            <p className="text-[22px] leading-relaxed text-ink-soft">
              Os anúncios são publicados em vários canais ao mesmo tempo e a
              tarifa é revisada continuamente contra a concorrência direta
              do destino.
            </p>
          </Reveal>
        </section>

        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-20">
            <Reveal className="mx-auto mb-12 max-w-[720px] text-center">
              <p className="mb-3 text-[19px] font-medium uppercase tracking-[0.14em] text-white">
                O que muda {destino.em}
              </p>
              <h2 className="font-heading text-[34px] text-white sm:text-[41px]">
                Por que a gestão profissional faz diferença
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {destino.pontos.map((p, i) => (
                <Reveal
                  key={p.titulo}
                  delay={i * 0.08}
                  className="border-t border-orange pt-6"
                >
                  <h3 className="mb-2 font-heading text-[24px] text-white">
                    {p.titulo}
                  </h3>
                  <p className="text-[21px] leading-relaxed text-white/70">
                    {p.texto}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-brand px-6 py-20">
          <Reveal className="mx-auto mb-14 max-w-[720px] text-center">
            <p className="mb-3 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              O que está incluso
            </p>
            <h2 className="font-heading text-[37px] text-navy sm:text-[48px]">
              Gestão completa do seu flat
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.08}
                className="border-t border-orange pt-6"
              >
                <s.icon className="mb-3.5 h-6 w-6 text-orange" aria-hidden />
                <h3 className="mb-2 font-heading text-[24px] text-navy">
                  {s.title}
                </h3>
                <p className="text-[21px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[820px] px-6 pb-20">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-[34px] text-navy sm:text-[41px]">
              Perguntas sobre o {condo.nome}
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faqs} defaultOpenIds={["administram"]} />
          </Reveal>
          <p className="mt-6 text-center text-[20px] text-ink-soft">
            Mais respostas na página de{" "}
            <Link
              href="/perguntas-frequentes"
              className="text-navy underline hover:text-orange"
            >
              perguntas frequentes
            </Link>
            .
          </p>
        </section>

        {outros.length > 0 && (
          <section className="mx-auto max-w-brand px-6 pb-20">
            <h2 className="mb-5 text-center font-heading text-[28px] text-navy">
              Outros condomínios que administramos {destino.em}
            </h2>
            <ul className="flex flex-wrap justify-center gap-3 text-[21px]">
              {outros.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/condominios/${o.slug}`}
                    className="inline-block border border-border px-5 py-2.5 text-navy hover:border-orange hover:text-orange"
                  >
                    {o.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[34px] text-white sm:text-[41px]">
              Quer rentabilizar seu flat no {condo.nome}?
            </h2>
            <p className="mx-auto mb-6 max-w-[640px] text-[22px] text-white/70">
              Fazemos uma avaliação do imóvel antes de qualquer proposta.
              Quer apenas se hospedar? Veja as opções no{" "}
              <a
                href="https://reservas.meuflatnapraia.com.br"
                className="text-white underline"
              >
                site de reservas
              </a>
              .
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
