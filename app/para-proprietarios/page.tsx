import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Banknote,
  Eye,
  Sofa,
  Globe,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title: "Para proprietários",
  description:
    "Transforme seu imóvel em renda por temporada, sem abrir mão do controle. Pagamento direto ao proprietário e área exclusiva de acompanhamento.",
};

const BENEFITS = [
  {
    icon: Banknote,
    title: "Pagamento direto ao proprietário",
    desc: "O valor de cada reserva cai na sua conta, sem intermediação financeira nossa.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    desc: "Ocupação, receitas e avaliações acompanhadas em tempo real.",
  },
  {
    icon: Sofa,
    title: "Imóvel pronto para hospedar",
    desc: "Montagem, decoração e fotografia profissional inclusas.",
  },
  {
    icon: Globe,
    title: "Presença nos maiores canais",
    desc: "Airbnb, Booking, Decolar, Google Vacation Rentals e site próprio.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Você fala com a gente",
    desc: "Preenche o formulário ou chama no WhatsApp.",
  },
  {
    n: "02",
    title: "Avaliamos seu imóvel",
    desc: "Analisamos localização, potencial e mercado local.",
  },
  {
    n: "03",
    title: "Preparamos o imóvel",
    desc: "Decoração, fotos e anúncios prontos para publicar.",
  },
  {
    n: "04",
    title: "Começamos a operar",
    desc: "Reservas, hóspedes e repasses sob nossa gestão.",
  },
];

export default function ParaProprietariosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="px-6 pb-14 pt-16 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
              Para proprietários
            </p>
            <h1 className="font-heading text-[32px] leading-[1.15] text-navy sm:text-[40px] lg:text-[46px]">
              Transforme seu imóvel em renda, sem abrir mão do controle.
            </h1>
          </Reveal>
        </section>
        <section className="relative h-[100vh] min-h-[750px]">
          <div className="sticky top-0 h-[70vh] min-h-[500px] overflow-hidden">
            <ImageSlot
              src="/photos/para-proprietarios-hero.jpg"
              placeholder="Flat decorado e pronto para hospedar"
              objectPosition="center 45%"
              priority
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Cuidamos de todo o processo, da preparação às reservas,
                  enquanto você acompanha tudo em tempo real e recebe os
                  pagamentos direto na sua conta.
                </p>
                <Link
                  href="#lead-form"
                  className="inline-block bg-orange px-7 py-4 text-base text-white hover:bg-orange/90"
                >
                  Quero uma avaliação do meu imóvel
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pagamento direto */}
        <section className="border-y border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-[960px] px-6 py-16 text-center">
            <ShieldCheck className="mx-auto mb-4 h-9 w-9 text-orange-light" aria-hidden />
            <h2 className="mb-4 font-heading text-[26px] text-white sm:text-[30px]">
              Os pagamentos das reservas caem direto na sua conta.
            </h2>
            <p className="mx-auto max-w-[640px] text-base leading-relaxed text-white/70">
              A Meu Flat na Praia não recebe nem retém nenhum valor de
              hospedagem. Cada reserva é paga diretamente ao proprietário,
              com relatórios claros de ocupação, receita e repasses na sua
              área exclusiva.
            </p>
          </Reveal>
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
              src="/photos/montagem-projeto.jpg"
              placeholder="Projeto de arquitetura, plantas e amostras de acabamento"
            />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/65 via-navy/20 to-transparent" />
            <Reveal className="relative mx-auto flex h-full max-w-brand items-center px-6">
              <div className="max-w-xl text-white">
                <p className="mb-5 text-base leading-relaxed text-white/85">
                  Cuidamos do projeto de arquitetura, marcenaria sob medida,
                  instalação elétrica e pintura, com equipe própria. Você
                  entrega as chaves, recebe o flat decorado e pronto para
                  receber hóspedes.
                </p>
                <Link
                  href="/montagem-de-flats"
                  className="border-b border-white/70 pb-0.5 text-[16px] text-white hover:border-orange-light hover:text-orange-light"
                >
                  Ver detalhes da montagem →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Benefícios */}
        <section className="border-y border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal>
              <h2 className="mb-12 text-center font-heading text-[26px] text-white sm:text-[32px]">
                O que você ganha ao colocar seu imóvel sob nossa gestão
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
              {BENEFITS.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 0.08}>
                  <benefit.icon className="mb-3.5 h-6 w-6 text-orange-light" aria-hidden />
                  <h3 className="mb-2 font-heading text-[18px] text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/70">
                    {benefit.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Como começamos */}
        <section className="border-b border-border bg-surface-alt">
          <div className="mx-auto max-w-brand px-6 py-24">
            <Reveal>
              <h2 className="mb-12 text-center font-heading text-[26px] text-white sm:text-[32px]">
                Como começamos a trabalhar juntos
              </h2>
            </Reveal>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="mb-3 font-heading text-[17px] text-white">
                    {step.n}
                  </div>
                  <h3 className="mb-2 font-heading text-[18px] text-white">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="lead-form" className="mx-auto max-w-brand px-6 py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_420px]">
            <Reveal>
              <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-orange">
                Fale com a gente
              </p>
              <h2 className="mb-5 font-heading text-[26px] text-navy sm:text-[32px]">
                Receba uma avaliação sem compromisso
              </h2>
              <p className="mb-6 max-w-[420px] text-base leading-relaxed text-ink-soft">
                Conte um pouco sobre o seu imóvel. Nossa equipe retorna por
                WhatsApp para entender seu objetivo e propor os próximos
                passos.
              </p>
              <div className="flex items-center gap-3 text-[15px] font-medium text-navy">
                <MessageCircle className="h-5 w-5 text-orange" aria-hidden />
                <a
                  href="https://wa.me/5581994869792"
                  className="text-navy hover:text-orange"
                >
                  Ou fale direto pelo WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Suspense fallback={<div className="h-[520px]" />}>
                <LeadForm />
              </Suspense>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
