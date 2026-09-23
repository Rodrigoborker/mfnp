import Link from "next/link";
import {
  Hammer,
  CalendarCheck,
  TrendingUp,
  Megaphone,
  Headphones,
  BarChart3,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";
import ParallaxHero from "@/components/ParallaxHero";

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
    desc: "Tarifas ajustadas por sazonalidade, demanda e concorrência, sem achismo.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital que vende",
    desc: "Tráfego pago, SEO local e redes sociais para manter seu imóvel sempre reservado.",
  },
  {
    icon: Headphones,
    title: "Atendimento de ponta a ponta",
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

const DESTINATIONS = [
  { slug: "dest-muro-alto", name: "Muro Alto", photo: "/photos/destino-muro-alto.jpg" },
  { slug: "dest-porto", name: "Porto de Galinhas", photo: "/photos/destino-porto-de-galinhas.jpg" },
  { slug: "dest-tamandare", name: "Tamandaré", photo: "/photos/destino-tamandare.webp" },
  { slug: "dest-carneiros", name: "Praia dos Carneiros", photo: "/photos/destino-carneiros.webp" },
];

const CHANNELS = ["Airbnb", "Booking.com", "Decolar/Despegar", "Google Vacation Rentals"];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — full-bleed, vídeo fixo na tela */}
        <ParallaxHero
          video={<HeroVideo src="/videos/hero.mp4" poster="/photos/hero-jangada.jpg" />}
        >
          <Reveal className="relative mx-auto w-full max-w-brand px-6 pb-16 text-white" delay={0.15}>
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-white">
              Gestão de imóveis por temporada
            </p>
            <h1 className="mb-6 max-w-3xl font-heading text-[34px] leading-[1.15] sm:text-[46px] lg:text-[56px]">
              A solução{" "}
              <span className="font-script text-[1.3em] leading-none text-white">
                definitiva
              </span>{" "}
              para gestão de locações por temporada.
            </h1>
            <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-white/85 sm:text-lg">
              25 anos de experiência a serviço de sua propriedade. Maximize
              seus ganhos com uma administração profissional, locações
              seguras e alta ocupação, sem se preocupar com a rotina do dia
              a dia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/para-proprietarios#lead-form"
                className="bg-orange px-7 py-4 text-base text-white hover:bg-orange/90"
              >
                Quero rentabilizar meu imóvel
              </Link>
              <Link
                href="/gestao-de-imoveis"
                className="border border-white/70 px-7 py-4 text-base text-white hover:bg-white/10"
              >
                Conhecer nossa gestão
              </Link>
            </div>
          </Reveal>
        </ParallaxHero>

        {/* Locação eficiente + Cuidamos de todo o processo */}
        <section className="mx-auto grid max-w-brand grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-2">
          <Reveal>
            <h2 className="mb-4 font-heading text-[24px] text-navy sm:text-[28px]">
              Locação eficiente e segura para o seu imóvel.
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-soft">
              Cuidamos de tudo pra você: reservas em tempo real, atendimento
              24h aos hóspedes e um controle de qualidade que garante sua
              tranquilidade.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mb-4 font-heading text-[24px] text-navy sm:text-[28px]">
              Cuidamos de todo o processo.
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-soft">
              Vendemos, acompanhamos a obra, ajudamos com o registro no
              cartório, montamos o projeto de decoração e administramos seu
              imóvel.
            </p>
          </Reveal>
        </section>

        {/* Autoridade */}
        <section className="border-b border-border bg-surface-alt">
          <Reveal className="mx-auto flex max-w-brand flex-wrap items-center justify-between gap-8 px-6 py-12">
            <p className="max-w-[640px] text-[19px] leading-relaxed text-white/70">
              <strong className="font-normal text-white">
                25 anos de experiência em hotelaria
              </strong>{" "}
              no litoral de Pernambuco, à frente da gestão de propriedades por
              temporada em Porto de Galinhas e região.
            </p>
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="font-heading text-[30px] text-white">25 anos</div>
                <div className="text-[13px] text-white/70">
                  de experiência em hotelaria
                </div>
              </div>
              <div>
                <div className="font-heading text-[30px] text-white">4</div>
                <div className="text-[13px] text-white/70">
                  destinos atendidos no litoral
                </div>
              </div>
              <div>
                <div className="font-heading text-[30px] text-white">4</div>
                <div className="text-[13px] text-white/70">
                  canais de distribuição integrados
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Compromisso */}
        <Reveal className="mx-auto max-w-[780px] px-6 pt-28 pb-4 text-center">
          <h2 className="mb-8 font-heading text-[30px] leading-tight text-navy sm:text-[40px]">
            Mais que uma simples{" "}
            <span className="font-script text-[1.3em] text-orange">
              administradora
            </span>
          </h2>
          <p className="mb-5 text-[19px] leading-[1.75] text-ink-soft">
            Nosso compromisso é simples: transformar seu imóvel em uma fonte
            de renda segura, constante e sem preocupações.
          </p>
          <p className="mb-5 text-[19px] leading-[1.75] text-ink-soft">
            Cuidamos de todo o processo para você: divulgação profissional
            nas principais plataformas, seleção criteriosa de hóspedes,
            check-in e check-out, limpeza e suporte 24 horas.
          </p>
          <p className="mb-5 text-[19px] leading-[1.75] text-ink-soft">
            Nosso objetivo é maximizar seus lucros enquanto preservamos e
            valorizamos seu patrimônio.
          </p>
          <p className="text-[19px] leading-[1.75] text-ink-soft">
            <strong className="font-normal text-navy">
              Somos a solução completa para locação de curta temporada no
              litoral.
            </strong>
            <br />
            Na Meu Flat na Praia, vamos além da gestão de reservas. Atuamos
            como uma parceira estratégica para transformar seu imóvel em uma
            fonte sólida de renda com zero preocupação.
          </p>
        </Reveal>

        {/* Soluções */}
        <section className="mx-auto max-w-brand px-6 py-16 pb-24">
          <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
              Soluções completas
            </p>
            <h2 className="font-heading text-[28px] text-navy sm:text-[38px]">
              Da preparação do imóvel à reserva confirmada
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08} className="border-t border-orange pt-6">
                <service.icon className="mb-4 h-6 w-6 text-orange" aria-hidden />
                <h3 className="mb-2 font-heading text-[19px] text-navy">
                  {service.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {service.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white">
                Como funciona
              </p>
              <h2 className="font-heading text-[28px] text-white sm:text-[38px]">
                Você entrega as chaves. A gente entrega resultado.
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="mb-3 font-heading text-[18px] text-white">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-[19px] text-white">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-14 pt-24 text-center">
          <Reveal className="mx-auto max-w-[760px]">
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
              Montagem e decoração completa
            </p>
            <h2 className="font-heading text-[28px] text-navy sm:text-[38px]">
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
            <div className="absolute inset-0 bg-navy/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/35 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-4 text-[17px] leading-relaxed text-white/85">
                  Cuidamos de todo o processo de montagem: projeto de
                  arquitetura e ambientação, marcenaria sob medida, instalação
                  elétrica e pintura, executados por equipe própria.
                </p>
                <p className="mb-7 text-[17px] leading-relaxed text-white/85">
                  Você entrega as chaves. Nós entregamos o flat decorado,
                  fotografado e pronto para receber hóspedes.
                </p>
                <Link
                  href="/montagem-de-flats"
                  className="border-b border-white/70 pb-0.5 text-[16px] text-white hover:border-orange-light hover:text-orange-light"
                >
                  Conhecer o serviço de montagem →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-14 pt-24 text-center">
          <Reveal className="mx-auto max-w-[760px]">
            <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
              Transparência financeira
            </p>
            <h2 className="font-heading text-[28px] text-navy sm:text-[38px]">
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
                <p className="mb-4 text-[17px] leading-relaxed text-white/85">
                  O valor de cada reserva cai diretamente na conta cadastrada
                  pelo proprietário. A Meu Flat na Praia não recebe nem retém
                  nenhum valor das hospedagens.
                </p>
                <p className="text-[17px] leading-relaxed text-white/85">
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
            <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white">
                Onde atuamos
              </p>
              <h2 className="font-heading text-[28px] text-white sm:text-[38px]">
                Destinos atendidos no litoral de Pernambuco
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
              {DESTINATIONS.map((dest, i) => (
                <Reveal key={dest.slug} delay={i * 0.08}>
                  <Link href="#" className="group relative block h-[280px] overflow-hidden">
                    <ImageSlot src={dest.photo} placeholder={dest.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/0 to-transparent transition-opacity group-hover:from-navy/85" />
                    <div className="absolute bottom-0 left-0 p-5 font-heading text-[19px] text-white">
                      {dest.name}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Canais */}
        <Reveal className="mx-auto max-w-brand px-6 py-20 text-center">
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
            Distribuição multicanal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CHANNELS.map((channel) => (
              <span
                key={channel}
                className="border border-border px-6 py-3 font-heading text-[16px] text-navy"
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
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white">
                Quem administra
              </p>
              <h2 className="font-heading text-[28px] text-white sm:text-[38px]">
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
                  <h3 className="mb-0.5 font-heading text-[19px] text-white">
                    Rodrigo Montenegro
                  </h3>
                  <p className="mb-2 text-[13px] font-medium text-white">
                    Corretor de imóveis · CRECI-PE 16191
                  </p>
                  <p className="text-[15px] leading-relaxed text-white/70">
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
                  <h3 className="mb-0.5 font-heading text-[19px] text-white">
                    Rosana Costa
                  </h3>
                  <p className="mb-2 text-[13px] font-medium text-white">
                    Administradora
                  </p>
                  <p className="text-[15px] leading-relaxed text-white/70">
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
            <h2 className="mb-4 font-heading text-[30px] text-white sm:text-[42px]">
              Quer saber quanto seu{" "}
              <span className="font-script text-[1.3em] text-white">
                imóvel
              </span>{" "}
              pode gerar?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[18px] text-footer-text">
              Fale com nossa equipe e receba uma avaliação sem compromisso.
            </p>
            <Link
              href="/para-proprietarios#lead-form"
              className="inline-block bg-orange px-8 py-4 text-base text-white hover:bg-orange/90"
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
