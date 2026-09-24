import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Perguntas frequentes sobre gestão de flats",
  description:
    "Taxa de administração, repasses, proteção do imóvel, uso próprio, ocupação na baixa temporada e contrato: respostas diretas para proprietários do litoral sul de PE.",
};

const FAQS = [
  {
    id: "taxa-administracao",
    question:
      "Qual a taxa de administração cobrada para gerenciar meu flat e o que está incluso?",
    answer:
      "A taxa varia conforme o tipo de imóvel, o destino (Porto de Galinhas, Tamandaré ou Carneiros) e o escopo contratado, por isso fazemos uma avaliação personalizada antes de qualquer proposta. O que não varia é a transparência: o percentual acordado é fixo em contrato, incide apenas sobre o que efetivamente é reservado e cobre toda a operação comercial, sem custos escondidos por fora. Estão incluídos anúncios profissionais multicanal, precificação dinâmica, atendimento ao hóspede do check-in ao check-out, vistoria de entrada e saída e a área exclusiva de acompanhamento financeiro. Serviços de montagem, decoração ou reformas pontuais são tratados à parte, sempre com orçamento aprovado antes da execução.",
  },
  {
    id: "repasse-prestacao-contas",
    question: "Como funciona o repasse dos valores e a prestação de contas?",
    answer:
      "O valor de cada reserva é pago diretamente ao proprietário, na conta cadastrada por ele. A Meu Flat na Praia não recebe nem retém nenhum valor de hospedagem: não existe caixa intermediário nosso entre o hóspede e o proprietário. A prestação de contas acontece em tempo real, pela área exclusiva do proprietário, onde ficam visíveis reservas confirmadas, ocupação do período, receita bruta, a taxa de administração descontada por reserva e o histórico completo de repasses. Isso elimina o principal ponto de desconfiança do setor, que é a opacidade das comissões e o atraso na conciliação entre canais como Airbnb e Booking.",
  },
  {
    id: "protecao-imovel-enxoval",
    question:
      "Como a Meu Flat na Praia protege meu imóvel e meu enxoval contra danos?",
    answer:
      "A proteção patrimonial começa antes da reserva, com regras claras de uso e seleção de hóspede pelo histórico e pelas políticas de cada canal. Em toda estadia, aplicamos um checklist fotográfico de vistoria na entrada e na saída do hóspede, cobrindo mobiliário, eletrodomésticos, enxoval e itens de decoração. Qualquer avaria identificada é registrada, comunicada ao proprietário e cobrada do responsável pelo canal de reserva ou pela caução aplicável, e não é um custo absorvido silenciosamente pelo proprietário. Também fazemos manutenção preventiva contra os efeitos da maresia, comuns em imóveis de praia, e reposição controlada de enxoval, para que o padrão do imóvel se mantenha ao longo do tempo, não apenas nas primeiras fotos do anúncio.",
  },
  {
    id: "uso-proprio",
    question: "Posso utilizar meu flat para uso próprio durante o ano?",
    answer:
      "Sim. O proprietário define, pela área exclusiva, os períodos de uso próprio com antecedência, e o calendário do imóvel é bloqueado automaticamente para hóspedes nesses dias, sem multa e sem negociação caso a caso. O único ponto de atenção, que tratamos com transparência desde a primeira conversa, é o impacto de datas de altíssima demanda (Réveillon, Carnaval, feriados prolongados) na receita do período: nesses casos, orientamos o proprietário sobre o custo de oportunidade da vacância, mas a decisão final sobre usar o imóvel é sempre dele.",
  },
  {
    id: "ocupacao-baixa-temporada",
    question:
      "Como vocês mantêm a taxa de ocupação alta na baixa temporada em Porto de Galinhas e Carneiros?",
    answer:
      "A baixa temporada é onde a diferença entre administrar sozinho e ter uma gestão profissional mais aparece no resultado. Usamos precificação dinâmica com ajuste diário de tarifa, considerando calendário de eventos, ocupação da concorrência direta e comportamento de busca em cada canal, em vez de manter uma diária fixa o ano inteiro. Combinamos isso com distribuição simultânea em Airbnb, Booking, Decolar/Despegar e Google Vacation Rentals, ampliando a exposição do imóvel, e com campanhas de marketing digital e SEO local direcionadas a quem busca Porto de Galinhas, Tamandaré e Carneiros fora da alta temporada. O objetivo não é prometer ocupação garantida, isso nenhuma administradora séria faz, e sim reduzir a vacância evitável por falta de estratégia de preço e distribuição.",
  },
  {
    id: "contrato-fidelidade",
    question:
      "Qual o formato do contrato de gestão? Existe fidelidade engessada?",
    answer:
      "O contrato de gestão é formalizado por escrito, com o percentual da taxa de administração, os serviços incluídos e as regras de repasse definidos com clareza desde o início, sem cláusulas ocultas. Não trabalhamos com fidelidade que prenda o proprietário a um vínculo indefinido: o contrato prevê prazo de aviso prévio para encerramento da gestão, para que a transição, se um dia acontecer, seja organizada e sem prejuízo à operação do imóvel. Essa flexibilidade é intencional: entendemos que a confiança do proprietário se renova pelo resultado entregue mês a mês, não por uma cláusula que o impeça de sair.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PerguntasFrequentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Breadcrumb current="Perguntas frequentes" />

        <section className="px-6 pb-14 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[18px] font-medium uppercase tracking-[0.14em] text-orange">
              Perguntas frequentes
            </p>
            <h1 className="mb-5 font-heading text-[38px] leading-[1.15] text-navy sm:text-[47px] lg:text-[52px]">
              O que proprietários mais perguntam antes de contratar uma
              gestão de temporada
            </h1>
            <p className="mx-auto max-w-[680px] text-[22px] leading-relaxed text-ink-soft">
              Taxa de administração, repasse, proteção do imóvel, uso
              próprio, ocupação na baixa temporada e contrato: respostas
              diretas, sem promessa de faturamento garantido.
            </p>
          </Reveal>
        </section>

        <Reveal className="mx-auto max-w-[820px] px-6 pb-24">
          <FaqAccordion items={FAQS} defaultOpenIds={["taxa-administracao"]} />
        </Reveal>

        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[31px] text-white sm:text-[38px]">
              Ainda tem dúvidas sobre a gestão do seu flat?
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
