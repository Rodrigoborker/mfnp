import type { Metadata } from "next";
import Link from "next/link";
import {
  Hammer,
  CalendarCheck,
  TrendingUp,
  Megaphone,
  Headphones,
  BarChart3,
  Banknote,
  ClipboardCheck,
  KeyRound,
  Cpu,
  Users,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import ParallaxHero from "@/components/ParallaxHero";

export const metadata: Metadata = {
  title: {
    absolute: "Administradora de Flats em Porto de Galinhas e Carneiros",
  },
  description:
    "Administramos seu flat em Porto de Galinhas, Tamandaré e Carneiros com repasse direto e sem taxas ocultas. Peça uma avaliação gratuita.",
};

const TURNKEY = [
  {
    icon: Banknote,
    title: "Repasses diretos e rastreáveis",
    desc: "O valor de cada reserva cai direto na conta cadastrada pelo proprietário. Você acompanha entrada, taxa de cada canal e saldo líquido na área exclusiva, sem esperar relatório manual de fim de mês.",
  },
  {
    icon: TrendingUp,
    title: "Precificação dinâmica por dados",
    desc: "Tarifas ajustadas diariamente conforme demanda, sazonalidade, eventos e concorrência direta em Porto de Galinhas, Tamandaré e Carneiros, para reduzir vacância na baixa temporada sem sacrificar a diária média na alta.",
  },
  {
    icon: ClipboardCheck,
    title: "Vistorias em toda estadia",
    desc: "Checklist fotográfico de entrada e saída em cada hospedagem, com registro de avarias e conferência de enxoval. Dano identificado é cobrado do responsável, não absorvido pelo proprietário.",
  },
  {
    icon: KeyRound,
    title: "Uso próprio sem burocracia",
    desc: "Reserve o período de férias da sua família com antecedência pela área do proprietário. O calendário fica bloqueado para hóspedes, sem multa e sem negociação caso a caso.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Cpu,
    title: "Tecnologia de precificação e distribuição",
    desc: "Motor de precificação dinâmica integrado a Airbnb, Booking, Decolar e Google Vacation Rentals, com calendário unificado e bloqueios automáticos entre canais.",
  },
  {
    icon: Users,
    title: "Equipe local de limpeza e suporte",
    desc: "Equipe própria de limpeza, manutenção e atendimento presencial em Porto de Galinhas, Tamandaré e Carneiros: resposta rápida a hóspede e a imprevisto, sem depender de terceiros distantes.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção patrimonial ativa",
    desc: "Seleção de hóspede, vistoria fotográfica, política de cobrança por dano e manutenção preventiva contra maresia. O objetivo é a valorização do imóvel, não apenas a ocupação.",
  },
];

const COMPARISON_ROWS = [
  {
    criterio: "Distribuição em canais",
    sozinho: "Cadastro manual em 1 ou 2 plataformas",
    gestao: "Airbnb, Booking, Decolar e Google VR simultâneos",
  },
  {
    criterio: "Precificação",
    sozinho: "Tarifa fixa ou ajuste manual esporádico",
    gestao: "Precificação dinâmica diária por demanda e concorrência",
  },
  {
    criterio: "Repasse financeiro",
    sozinho: "Cobrança e conciliação manual entre canais",
    gestao: "Repasse direto à sua conta, com relatório em tempo real",
  },
  {
    criterio: "Manutenção e limpeza",
    sozinho: "Rede de terceiros a contratar e supervisionar",
    gestao: "Equipe própria local e padronizada",
  },
  {
    criterio: "Proteção contra danos",
    sozinho: "Sem checklist formal de vistoria",
    gestao: "Vistoria fotográfica de entrada e saída",
  },
  {
    criterio: "Tempo dedicado pelo proprietário",
    sozinho: "Alto: mensagens, check-in, limpeza, preço",
    gestao: "Baixo: acompanhamento pela área exclusiva",
  },
  {
    criterio: "Uso próprio do imóvel",
    sozinho: "Livre, mas sem controle da ocupação perdida",
    gestao: "Reservado sem burocracia, com calendário bloqueado",
  },
];

const SERVICES = [
  {
    icon: Hammer,
    title: "Montagem e decoração",
    desc: "Da marcenaria sob medida à instalação elétrica, pintura e decoração. Você entrega as chaves, nós entregamos o flat pronto para receber hóspedes.",
  },
  {
    icon: CalendarCheck,
    title: "Gestão de reservas e canais",
    desc: "Anúncios profissionais e fotos atrativas em Airbnb, Booking, Decolar.com e Google VR, com precificação automatizada.",
  },
  {
    icon: TrendingUp,
    title: "Precificação dinâmica",
    desc: "Tarifas ajustadas conforme a sazonalidade, a demanda e a concorrência.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital que vende",
    desc: "Tráfego pago, SEO local e redes sociais para manter seu imóvel sempre reservado.",
  },
  {
    icon: Headphones,
    title: "Atendimento completo",
    desc: "Check-in, suporte durante a estadia, limpeza e gestão do enxoval: tudo sob nosso controle para garantir nota máxima.",
  },
  {
    icon: BarChart3,
    title: "Área do proprietário",
    desc: "Reservas, receitas e repasses acompanhados em tempo real.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Avaliamos o imóvel, o mercado local e o potencial de rentabilidade.",
  },
  {
    n: "02",
    title: "Preparação",
    desc: "Equipamos, decoramos e fotografamos o imóvel para conversão.",
  },
  {
    n: "03",
    title: "Publicação",
    desc: "Anunciamos nos principais canais com precificação dinâmica.",
  },
  {
    n: "04",
    title: "Operação",
    desc: "Gerenciamos reservas, hóspedes e repasses continuamente.",
  },
];

const DESTINATIONS: { slug: string; name: string; photo: string; href?: string }[] = [
  { slug: "dest-muro-alto", name: "Muro Alto", photo: "/photos/destino-muro-alto.jpg" },
  { slug: "dest-porto", name: "Porto de Galinhas", photo: "/photos/destino-porto-de-galinhas.jpg", href: "/porto-de-galinhas" },
  { slug: "dest-tamandare", name: "Tamandaré", photo: "/photos/destino-tamandare.webp", href: "/tamandare-e-carneiros" },
  { slug: "dest-carneiros", name: "Praia dos Carneiros", photo: "/photos/destino-carneiros.webp", href: "/tamandare-e-carneiros" },
];

const CHANNELS = ["Airbnb", "Booking.com", "Decolar/Despegar", "Google Vacation Rentals"];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero, full-bleed, vídeo fixo na tela */}
        <ParallaxHero
          video={<HeroVideo src="/videos/hero.mp4" poster="/photos/hero-jangada.jpg" />}
        >
          <Reveal className="relative mx-auto w-full max-w-brand px-6 pb-10 text-white sm:pb-16" delay={0.15}>
            <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.14em] text-white">
              Gestão de imóveis por temporada
            </p>
            <h1 className="mb-6 max-w-3xl font-heading text-[30px] leading-[1.15] sm:text-[40px] lg:text-[48px]">
              A solução{" "}
              <span className="font-script text-[1.1em] leading-none text-white">
                definitiva
              </span>{" "}
              para gestão de locações por temporada.
            </h1>
            <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-white/85 sm:text-[20px]">
              25 anos de experiência a serviço de sua propriedade. Maximize
              seus ganhos com uma administração profissional, locações
              seguras e alta ocupação, sem se preocupar com a rotina do dia
              a dia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/para-proprietarios#lead-form"
                className="bg-orange px-7 py-4 text-[19px] text-white hover:bg-orange/90"
              >
                Quero rentabilizar meu imóvel
              </Link>
              <Link
                href="/gestao-de-imoveis"
                className="border border-white/70 px-7 py-4 text-[19px] text-white hover:bg-white/10"
              >
                Conhecer nossa gestão
              </Link>
            </div>
          </Reveal>
        </ParallaxHero>

        {/* Locação eficiente + Cuidamos de todo o processo */}
        <section className="mx-auto grid max-w-brand grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 font-heading text-[29px] text-navy sm:text-[34px]">
              Locação eficiente e segura para o seu imóvel.
            </h2>
            <p className="text-[22px] leading-relaxed text-ink-soft">
              Cuidamos de tudo pra você: reservas em tempo real, atendimento
              24h aos hóspedes e um controle de qualidade que garante sua
              tranquilidade.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mb-4 font-heading text-[29px] text-navy sm:text-[34px]">
              Cuidamos de todo o processo.
            </h2>
            <p className="text-[22px] leading-relaxed text-ink-soft">
              Vendemos, acompanhamos a obra, ajudamos com o registro no
              cartório, montamos o projeto de decoração e administramos seu
              imóvel.
            </p>
          </Reveal>
        </section>

        {/* Autoridade */}
        <section className="border-b border-border bg-surface-alt">
          <Reveal className="mx-auto flex max-w-brand flex-col items-center gap-10 px-6 py-14 text-center">
            <p className="max-w-[760px] text-[24px] leading-relaxed text-white/70">
              <strong className="font-normal text-white">
                25 anos de experiência em hotelaria
              </strong>{" "}
              no litoral de Pernambuco, à frente da gestão de propriedades por
              temporada em Porto de Galinhas e região.
            </p>
            <div className="flex flex-wrap justify-center gap-x-14 gap-y-8">
              <div>
                <div className="font-heading text-[36px] text-white">25 anos</div>
                <div className="text-[18px] text-white/70">
                  de experiência em hotelaria
                </div>
              </div>
              <div>
                <div className="font-heading text-[36px] text-white">4</div>
                <div className="text-[18px] text-white/70">
                  destinos atendidos no litoral
                </div>
              </div>
              <div>
                <div className="font-heading text-[36px] text-white">4</div>
                <div className="text-[18px] text-white/70">
                  canais de distribuição integrados
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Quebra de objeções: gestão turnkey */}
        <section className="mx-auto max-w-brand px-6 py-20">
          <Reveal className="mx-auto mb-14 max-w-[680px] text-center">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Gestão turnkey, sem letras miúdas
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              Como funciona a gestão turnkey, do repasse à vistoria
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TURNKEY.map((item, i) => (
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

        {/* Compromisso */}
        <Reveal className="mx-auto max-w-[780px] px-6 pt-28 pb-4 text-center">
          <h2 className="mb-8 font-heading text-[36px] leading-tight text-navy sm:text-[47px]">
            Mais que uma simples{" "}
            <span className="font-script text-[1.3em] text-orange">
              administradora
            </span>
          </h2>
          <p className="mb-5 text-[24px] leading-[1.75] text-ink-soft">
            Queremos que seu imóvel gere renda de forma segura e constante, sem
            preocupações para você.
          </p>
          <p className="mb-5 text-[24px] leading-[1.75] text-ink-soft">
            Cuidamos de todo o processo: divulgação profissional nas
            principais plataformas, seleção criteriosa de hóspedes, check-in
            e check-out, limpeza e suporte 24 horas.
          </p>
          <p className="mb-5 text-[24px] leading-[1.75] text-ink-soft">
            Nosso objetivo é aumentar seus lucros e valorizar o seu patrimônio.
          </p>
          <p className="text-[24px] leading-[1.75] text-ink-soft">
            <strong className="font-normal text-navy">
              A Meu Flat na Praia cuida da locação de curta temporada no
              litoral.
            </strong>
            <br />
            Vamos além da gestão de reservas: trabalhamos junto com você para
            transformar seu imóvel em uma fonte de renda estável, sem
            preocupação.
          </p>
        </Reveal>

        {/* Soluções */}
        <section className="mx-auto max-w-brand px-6 py-16 pb-24">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Soluções completas
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              Da preparação do imóvel à reserva confirmada
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08} className="border-t border-orange pt-6">
                <service.icon className="mb-4 h-6 w-6 text-orange" aria-hidden />
                <h3 className="mb-2 font-heading text-[24px] text-navy">
                  {service.title}
                </h3>
                <p className="text-[21px] leading-relaxed text-ink-soft">
                  {service.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Diferenciais competitivos */}
        <section className="mx-auto max-w-brand px-6 py-16 pb-4">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Por que a Meu Flat na Praia
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              Tecnologia, equipe local e proteção patrimonial em um só contrato
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-t border-orange pt-6">
                <item.icon className="mb-3.5 h-6 w-6 text-orange" aria-hidden />
                <h3 className="mb-2 font-heading text-[24px] text-navy">
                  {item.title}
                </h3>
                <p className="text-[21px] leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tabela comparativa */}
        <section className="mx-auto max-w-brand px-6 py-16 pb-24">
          <Reveal className="mx-auto mb-10 max-w-[680px] text-center">
            <h2 className="font-heading text-[28px] text-navy sm:text-[32px]">
              Gerenciar sozinho vs. gerir com a Meu Flat na Praia
            </h2>
          </Reveal>
          <Reveal className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse border border-border text-left text-[18px]">
              <thead>
                <tr className="bg-surface-alt text-white">
                  <th className="border border-border px-5 py-4 font-heading text-[19px] font-normal">
                    Critério
                  </th>
                  <th className="border border-border px-5 py-4 font-heading text-[19px] font-normal">
                    Gerenciar sozinho
                  </th>
                  <th className="border border-border px-5 py-4 font-heading text-[19px] font-normal text-orange-light">
                    Gerir com a Meu Flat na Praia
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterio}>
                    <td className="border border-border px-5 py-4 font-medium text-navy">
                      {row.criterio}
                    </td>
                    <td className="border border-border px-5 py-4 text-ink-soft">
                      {row.sozinho}
                    </td>
                    <td className="border border-border bg-surface-alt/[0.03] px-5 py-4 text-ink">
                      {row.gestao}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* Como funciona */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-white">
                Como funciona
              </p>
              <h2 className="font-heading text-[34px] text-white sm:text-[45px]">
                Você entrega as chaves. A gente entrega resultado.
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="mb-3 font-heading text-[23px] text-white">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-[24px] text-white">
                    {step.title}
                  </h3>
                  <p className="text-[21px] leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 pt-24 text-center">
          <Reveal className="mx-auto max-w-[760px]">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Montagem e decoração completa
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              Do projeto de arquitetura ao flat pronto para hospedar.
            </h2>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/flat-decorado-quarto.jpg"
              placeholder="Flat decorado e mobiliado após a montagem"
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-4 text-[22px] leading-relaxed text-white/85">
                  Cuidamos de todo o processo de montagem: projeto de
                  arquitetura e ambientação, marcenaria sob medida, instalação
                  elétrica e pintura, executados por equipe própria.
                </p>
                <p className="mb-7 text-[22px] leading-relaxed text-white/85">
                  Você entrega as chaves. Nós entregamos o flat decorado,
                  fotografado e pronto para receber hóspedes.
                </p>
                <Link
                  href="/montagem-de-flats"
                  className="border-b border-white/70 pb-0.5 text-[21px] text-white hover:border-orange-light hover:text-orange-light"
                >
                  Conhecer o serviço de montagem →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-14 pt-24 text-center">
          <Reveal className="mx-auto max-w-[760px]">
            <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Transparência financeira
            </p>
            <h2 className="font-heading text-[34px] text-navy sm:text-[45px]">
              Os pagamentos das reservas são feitos diretamente ao proprietário.
            </h2>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/transparencia-financeira.jpg"
              placeholder="Acompanhamento financeiro das reservas e repasses"
              objectPosition="center 25%"
            />
            <div className="absolute inset-0 bg-navy/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/30 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-4 text-[22px] leading-relaxed text-white/85">
                  O valor de cada reserva cai diretamente na conta cadastrada
                  pelo proprietário. A Meu Flat na Praia não recebe nem retém
                  nenhum valor das hospedagens.
                </p>
                <p className="text-[22px] leading-relaxed text-white/85">
                  Você acompanha reservas, ocupação e repasses em tempo real pela
                  área exclusiva do proprietário.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Destinos */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal className="mx-auto mb-14 max-w-[760px] text-center">
              <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-white">
                Onde atuamos
              </p>
              <h2 className="mb-5 font-heading text-[34px] text-white sm:text-[45px]">
                Destinos atendidos no litoral de Pernambuco
              </h2>
              <p className="text-[21px] leading-relaxed text-white/70">
                Porto de Galinhas, Tamandaré e Praia dos Carneiros têm
                dinâmicas de mercado, perfil de hóspede e giro operacional
                diferentes entre si. Gerir um flat nessas praias exige
                conhecimento local: da agenda de eventos à rede de
                manutenção, passando pela expectativa de diária média de
                cada destino.
              </p>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
              {DESTINATIONS.map((dest, i) => {
                const card = (
                  <div className="relative block h-[280px] overflow-hidden">
                    <ImageSlot src={dest.photo} placeholder={dest.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 font-heading text-[24px] text-white">
                      {dest.name}
                    </div>
                  </div>
                );
                return (
                  <Reveal key={dest.slug} delay={i * 0.08}>
                    {dest.href ? (
                      <Link href={dest.href} className="group">
                        {card}
                      </Link>
                    ) : (
                      card
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Canais */}
        <Reveal className="mx-auto max-w-brand px-6 py-20 text-center">
          <p className="mb-6 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
            Distribuição multicanal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CHANNELS.map((channel) => (
              <span
                key={channel}
                className="border border-border px-6 py-3 font-heading text-[21px] text-navy"
              >
                {channel}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Equipe */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 text-[18px] font-medium uppercase tracking-[0.14em] text-white">
                Quem administra
              </p>
              <h2 className="font-heading text-[34px] text-white sm:text-[45px]">
                Uma operação conduzida por quem entende o mercado
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
              <Reveal className="flex items-start gap-5">
                <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-full">
                  <ImageSlot
                    src="/photos/rodrigo-montenegro.jpg"
                    placeholder="Rodrigo Montenegro"
                    shape="circle"
                    objectPosition="center 20%"
                  />
                </div>
                <div>
                  <h3 className="mb-0.5 font-heading text-[24px] text-white">
                    Rodrigo Montenegro
                  </h3>
                  <p className="mb-2 text-[18px] font-medium text-white">
                    Corretor de imóveis · CRECI-PE 16191
                  </p>
                  <p className="text-[20px] leading-relaxed text-white/70">
                    25 anos de experiência em hotelaria, ex-gerente de
                    resorts em Porto de Galinhas (Enotel, Solar, Village).
                    Especialista em investimento imobiliário no litoral.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="flex items-start gap-5">
                <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-full">
                  <ImageSlot
                    src="/photos/rosana-costa.jpg"
                    placeholder="Rosana Costa"
                    shape="circle"
                    objectPosition="center 20%"
                  />
                </div>
                <div>
                  <h3 className="mb-0.5 font-heading text-[24px] text-white">
                    Rosana Costa
                  </h3>
                  <p className="mb-2 text-[18px] font-medium text-white">
                    Administradora
                  </p>
                  <p className="text-[20px] leading-relaxed text-white/70">
                    Mais de 20 anos em gestão de equipes na indústria
                    farmacêutica no Nordeste. Responsável pelos projetos de
                    decoração dos imóveis administrados.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-navy">
          <Reveal className="mx-auto max-w-brand px-6 py-24 text-center">
            <h2 className="mb-4 font-heading text-[36px] text-white sm:text-[49px]">
              Quer saber quanto seu{" "}
              <span className="font-script text-[1.3em] text-white">
                imóvel
              </span>{" "}
              pode gerar?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[23px] text-footer-text">
              Fale com nossa equipe e receba uma avaliação sem compromisso.
            </p>
            <Link
              href="/para-proprietarios#lead-form"
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
