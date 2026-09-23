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

const SERVICES = [
  {
    icon: Hammer,
    title: "Montagem e decoração",
    desc: "Projeto de arquitetura, marcenaria, elétrica e pintura com equipe própria. Você entrega as chaves, recebe o flat pronto para hospedar.",
  },
  {
    icon: CalendarCheck,
    title: "Gestão de reservas e canais",
    desc: "Anúncios e calendário unificado em Airbnb, Booking, Decolar e Google Vacation Rentals.",
  },
  {
    icon: TrendingUp,
    title: "Precificação dinâmica",
    desc: "Tarifas ajustadas por sazonalidade, demanda e concorrência, sem achismo.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    desc: "Tráfego pago, SEO local e redes sociais para manter a ocupação alta.",
  },
  {
    icon: Headphones,
    title: "Atendimento 24h",
    desc: "Check-in, suporte ao hóspede, limpeza e enxoval sob nosso controle.",
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
  { slug: "dest-porto", name: "Porto de Galinhas" },
  { slug: "dest-tamandare", name: "Tamandaré" },
  { slug: "dest-carneiros", name: "Praia dos Carneiros" },
  { slug: "dest-smm", name: "São Miguel dos Milagres" },
];

const CHANNELS = ["Airbnb", "Booking.com", "Decolar/Despegar", "Google Vacation Rentals"];

const ARTICLES = [
  {
    slug: "como-funciona-a-gestao-profissional-de-um-airbnb",
    title: "Como funciona a gestão profissional de um Airbnb",
    category: "Gestão",
  },
  {
    slug: "quanto-custa-administrar-um-imovel-por-temporada",
    title: "Quanto custa administrar um imóvel por temporada",
    category: "Gestão",
  },
  {
    slug: "como-aumentar-a-ocupacao-do-seu-flat-em-porto-de-galinhas",
    title: "Como aumentar a ocupação do seu flat em Porto de Galinhas",
    category: "Destinos",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-16 pb-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
              Gestão de imóveis por temporada
            </p>
            <h1 className="mb-5 font-heading text-[32px] font-extrabold leading-[1.12] text-navy sm:text-[40px] lg:text-[48px]">
              Seu imóvel de temporada gerando mais, sem dar mais trabalho.
            </h1>
            <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-ink-soft">
              Gestão profissional de imóveis por temporada, da preparação do
              imóvel às reservas, precificação e distribuição nos principais
              canais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/para-proprietarios#lead-form"
                className="rounded-brand bg-orange px-7 py-4 text-base font-semibold text-white hover:bg-orange/90"
              >
                Quero rentabilizar meu imóvel
              </Link>
              <Link
                href="/gestao-de-imoveis"
                className="rounded-brand border border-border px-7 py-4 text-base font-semibold text-navy hover:bg-surface-alt"
              >
                Conhecer nossa gestão
              </Link>
            </div>
          </div>
          <div className="h-[320px] overflow-hidden rounded-sm lg:h-[480px]">
            <ImageSlot placeholder="Foto real: flat decorado frente-mar, Porto de Galinhas" />
          </div>
        </section>

        {/* Autoridade */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto flex max-w-brand flex-wrap items-center justify-between gap-8 px-6 py-12">
            <p className="max-w-[640px] text-[17px] leading-relaxed">
              <strong className="text-navy">
                25 anos de experiência em hotelaria
              </strong>{" "}
              no litoral de Pernambuco, à frente da gestão de propriedades por
              temporada em Porto de Galinhas e região.
            </p>
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="font-heading text-[28px] font-extrabold text-navy">
                  25 anos
                </div>
                <div className="text-[13px] text-ink-soft">
                  de experiência em hotelaria
                </div>
              </div>
              <div>
                <div className="font-heading text-[28px] font-extrabold text-navy">
                  6
                </div>
                <div className="text-[13px] text-ink-soft">
                  destinos atendidos no litoral
                </div>
              </div>
              <div>
                <div className="font-heading text-[28px] font-extrabold text-navy">
                  4
                </div>
                <div className="text-[13px] text-ink-soft">
                  canais de distribuição integrados
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso */}
        <section className="mx-auto max-w-[840px] px-6 pt-24 text-center">
          <h2 className="mb-6 font-heading text-[24px] font-extrabold text-navy sm:text-[32px]">
            Mais que uma simples administradora
          </h2>
          <p className="mb-5 text-[17px] leading-[1.7] text-ink-soft">
            Nosso compromisso é simples: transformar seu imóvel em uma fonte
            de renda segura, constante e sem preocupações.
          </p>
          <p className="mb-5 text-[17px] leading-[1.7] text-ink-soft">
            Cuidamos de todo o processo para você: divulgação profissional
            nas principais plataformas, seleção criteriosa de hóspedes,
            check-in e check-out, limpeza e suporte 24 horas.
          </p>
          <p className="mb-5 text-[17px] leading-[1.7] text-ink-soft">
            Nosso objetivo é maximizar seus lucros enquanto preservamos e
            valorizamos seu patrimônio.
          </p>
          <p className="text-[17px] leading-[1.7] text-ink-soft">
            <strong className="text-navy">
              Somos a solução completa para locação de curta temporada no
              litoral.
            </strong>
            <br />
            Na Meu Flat na Praia, vamos além da gestão de reservas. Atuamos
            como uma parceira estratégica para transformar seu imóvel em uma
            fonte sólida de renda com zero preocupação.
          </p>
        </section>

        {/* Soluções */}
        <section className="mx-auto max-w-brand px-6 py-16 pb-24">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
              Soluções completas
            </p>
            <h2 className="font-heading text-[26px] font-extrabold text-navy sm:text-[34px]">
              Da preparação do imóvel à reserva confirmada
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px border border-border bg-border">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <service.icon
                  className="mb-4 h-7 w-7 text-orange"
                  aria-hidden
                />
                <h3 className="mb-2 font-heading text-[17px] font-bold text-navy">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
                Como funciona
              </p>
              <h2 className="font-heading text-[26px] font-extrabold text-navy sm:text-[34px]">
                Você entrega as chaves. A gente entrega resultado.
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {STEPS.map((step) => (
                <div key={step.n}>
                  <div className="mb-3 font-heading text-[15px] font-extrabold text-orange">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-[17px] font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Montagem de Flats */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
                Montagem e decoração completa
              </p>
              <h2 className="mb-5 font-heading text-[26px] font-extrabold text-navy sm:text-[32px]">
                Do projeto de arquitetura ao flat pronto para hospedar.
              </h2>
              <p className="mb-4 text-base leading-relaxed text-ink-soft">
                Cuidamos de todo o processo de montagem: projeto de
                arquitetura e ambientação, marcenaria sob medida, instalação
                elétrica e pintura, executados por equipe própria.
              </p>
              <p className="mb-7 text-base leading-relaxed text-ink-soft">
                Você entrega as chaves. Nós entregamos o flat decorado,
                fotografado e pronto para receber hóspedes.
              </p>
              <Link
                href="/montagem-de-flats"
                className="text-[15px] font-semibold text-navy hover:text-orange"
              >
                Conhecer o serviço de montagem →
              </Link>
            </div>
            <div className="h-[300px] overflow-hidden rounded-sm lg:h-[380px]">
              <ImageSlot placeholder="Foto real: flat decorado e mobiliado após a montagem" />
            </div>
          </div>
        </section>

        {/* Pagamento direto */}
        <section className="mx-auto grid max-w-brand grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">
          <div className="order-2 h-[300px] overflow-hidden rounded-sm lg:order-1 lg:h-[380px]">
            <ImageSlot placeholder="Foto real: proprietário e equipe, ou detalhe do imóvel" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
              Transparência financeira
            </p>
            <h2 className="mb-5 font-heading text-[26px] font-extrabold text-navy sm:text-[32px]">
              Os pagamentos das reservas são feitos diretamente ao
              proprietário.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-ink-soft">
              O valor de cada reserva cai diretamente na conta cadastrada
              pelo proprietário. A Meu Flat na Praia não recebe nem retém
              nenhum valor das hospedagens.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              Você acompanha reservas, ocupação e repasses em tempo real pela
              área exclusiva do proprietário.
            </p>
          </div>
        </section>

        {/* Destinos */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
                Onde atuamos
              </p>
              <h2 className="font-heading text-[26px] font-extrabold text-navy sm:text-[34px]">
                Destinos atendidos no litoral de PE e AL
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
              {DESTINATIONS.map((dest) => (
                <Link
                  key={dest.slug}
                  href="#"
                  className="block border border-border bg-white"
                >
                  <div className="h-[140px]">
                    <ImageSlot placeholder={dest.name} />
                  </div>
                  <div className="px-4.5 py-4 font-heading text-[15px] font-bold text-navy">
                    {dest.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Canais */}
        <section className="mx-auto max-w-brand px-6 py-20 text-center">
          <p className="mb-6 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
            Distribuição multicanal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CHANNELS.map((channel) => (
              <span
                key={channel}
                className="rounded-brand border border-border px-6 py-3 font-heading text-[15px] font-bold text-navy"
              >
                {channel}
              </span>
            ))}
          </div>
        </section>

        {/* Equipe */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <p className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-orange">
                Quem administra
              </p>
              <h2 className="font-heading text-[26px] font-extrabold text-navy sm:text-[34px]">
                Uma operação conduzida por quem entende o mercado
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
              <div className="flex items-start gap-5">
                <div className="h-22 w-22 shrink-0 overflow-hidden rounded-full">
                  <ImageSlot placeholder="Rodrigo Montenegro" shape="circle" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-heading text-[17px] font-bold text-navy">
                    Rodrigo Montenegro
                  </h3>
                  <p className="mb-2 text-[13px] font-semibold text-orange">
                    Corretor de imóveis · CRECI-PE 16191
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    25 anos de experiência em hotelaria, ex-gerente de
                    resorts em Porto de Galinhas (Enotel, Solar, Village).
                    Especialista em investimento imobiliário no litoral.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="h-22 w-22 shrink-0 overflow-hidden rounded-full">
                  <ImageSlot placeholder="Rosana Costa" shape="circle" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-heading text-[17px] font-bold text-navy">
                    Rosana Costa
                  </h3>
                  <p className="mb-2 text-[13px] font-semibold text-orange">
                    Administradora
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Mais de 20 anos em gestão de equipes na indústria
                    farmacêutica no Nordeste. Responsável pelos projetos de
                    decoração dos imóveis administrados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdos */}
        <section className="mx-auto max-w-brand px-6 py-24">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-heading text-[26px] font-extrabold text-navy sm:text-[32px]">
              Conteúdos sobre gestão por temporada
            </h2>
            <Link
              href="/conteudos"
              className="text-[15px] font-semibold text-navy hover:text-orange"
            >
              Ver todos os conteúdos →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/conteudos/${article.slug}`}
                className="block"
              >
                <div className="mb-4 h-[170px]">
                  <ImageSlot placeholder={article.title} />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-orange">
                  {article.category}
                </p>
                <h3 className="font-heading text-[17px] font-bold leading-snug text-navy">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-navy">
          <div className="mx-auto max-w-brand px-6 py-20 text-center">
            <h2 className="mb-4 font-heading text-[26px] font-extrabold text-white sm:text-[36px]">
              Quer saber quanto seu imóvel pode gerar?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[17px] text-footer-text">
              Fale com nossa equipe e receba uma avaliação sem compromisso.
            </p>
            <Link
              href="/para-proprietarios#lead-form"
              className="inline-block rounded-brand bg-orange px-8 py-4 text-base font-semibold text-white hover:bg-orange/90"
            >
              Quero rentabilizar meu imóvel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
