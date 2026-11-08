import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { GUIAS, getGuia, type Guia } from "@/lib/guias";

export default function GuiaPage({ guia }: { guia: Guia }) {
  const isArticle = guia.kind === "article";
  const url = `${SITE_URL}${guia.path}`;

  const main =
    guia.kind === "service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: guia.h1,
          serviceType: "Administração de imóveis por temporada",
          url,
          provider: {
            "@type": "LocalBusiness",
            name: "Meu Flat na Praia",
            url: SITE_URL,
            telephone: "+5581994869792",
          },
          areaServed: [
            "Porto de Galinhas",
            "Muro Alto",
            "Tamandaré",
            "Praia dos Carneiros",
          ].map((name) => ({ "@type": "Place", name })),
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guia.h1,
          description: guia.metaDescription,
          mainEntityOfPage: url,
          datePublished: guia.published,
          dateModified: guia.published,
          inLanguage: "pt-BR",
          author: {
            "@type": "Person",
            name: "Rodrigo Montenegro",
            jobTitle: "Corretor de imóveis (CRECI-PE 16191)",
            url: "https://rodrigomontenegro.com.br",
          },
          publisher: {
            "@type": "Organization",
            name: "Meu Flat na Praia",
            url: SITE_URL,
          },
        };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guia.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const related = guia.related
    .map((slug) => getGuia(slug))
    .filter((g): g is Guia => Boolean(g));

  return (
    <>
      {[main, faqJsonLd].map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <Header />
      <main>
        <Breadcrumb
          current={guia.metaTitle.split(":")[0]}
          href={guia.path}
          parent={isArticle ? { name: "Guias", href: "/guias" } : undefined}
        />

        <section className="px-6 pb-12 pt-10 text-center">
          <Reveal className="mx-auto max-w-[860px]">
            <p className="mb-4 text-[20px] font-medium uppercase tracking-[0.14em] text-orange">
              {guia.eyebrow}
            </p>
            <h1 className="mb-5 font-heading text-[41px] leading-[1.15] text-navy sm:text-[50px] lg:text-[55px]">
              {guia.h1}
            </h1>
            <p className="mx-auto max-w-[720px] text-[24px] leading-relaxed text-ink-soft">
              {guia.intro}
            </p>
            {isArticle && (
              <p className="mt-5 text-[19px] text-ink-soft">
                Por Rodrigo Montenegro, corretor de imóveis (CRECI-PE 16191),
                com 25 anos de experiência em hotelaria no litoral de
                Pernambuco.
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/para-proprietarios#lead-form"
                className="inline-block bg-orange px-7 py-4 text-[23px] text-white hover:bg-orange/90"
              >
                Quero uma avaliação do meu imóvel
              </Link>
              <a
                href={whatsappUrl(guia.whatsappText)}
                className="inline-block border border-navy px-7 py-4 text-[23px] text-navy hover:bg-navy hover:text-surface"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </section>

        <article className="mx-auto max-w-[820px] px-6 pb-16">
          {guia.sections.map((s) => (
            <Reveal key={s.id} className="mb-12">
              <h2
                id={s.id}
                className="mb-4 scroll-mt-24 font-heading text-[32px] leading-tight text-navy sm:text-[38px]"
              >
                {s.title}
              </h2>
              {s.paragraphs?.map((p) => (
                <p
                  key={p}
                  className="mb-4 text-[22px] leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mb-4 list-disc space-y-2 pl-6 text-[22px] leading-relaxed text-ink-soft">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {s.steps && (
                <ol className="mb-4 space-y-5">
                  {s.steps.map((st, i) => (
                    <li
                      key={st.title}
                      className="border-l-2 border-orange pl-5"
                    >
                      <h3 className="mb-1 font-heading text-[25px] text-navy">
                        {i + 1}. {st.title}
                      </h3>
                      <p className="text-[21px] leading-relaxed text-ink-soft">
                        {st.text}
                      </p>
                    </li>
                  ))}
                </ol>
              )}
              {s.after?.map((p) => (
                <p
                  key={p}
                  className="mb-4 text-[22px] leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </article>

        <section className="mx-auto max-w-[820px] px-6 pb-20">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-[34px] text-navy sm:text-[41px]">
              Perguntas frequentes
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion
              items={guia.faqs}
              defaultOpenIds={[guia.faqs[0].id]}
            />
          </Reveal>
        </section>

        <section className="mx-auto max-w-brand px-6 pb-20">
          <h2 className="mb-5 text-center font-heading text-[28px] text-navy">
            Continue lendo
          </h2>
          <ul className="flex flex-wrap justify-center gap-3 text-[21px]">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.path}
                  className="inline-block border border-border px-5 py-2.5 text-navy hover:border-orange hover:text-orange"
                >
                  {g.metaTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/condominios"
                className="inline-block border border-border px-5 py-2.5 text-navy hover:border-orange hover:text-orange"
              >
                Condomínios que administramos
              </Link>
            </li>
            <li>
              <Link
                href="/perguntas-frequentes"
                className="inline-block border border-border px-5 py-2.5 text-navy hover:border-orange hover:text-orange"
              >
                Perguntas frequentes
              </Link>
            </li>
          </ul>
        </section>

        <section className="border-t border-border bg-surface-alt">
          <Reveal className="mx-auto max-w-brand px-6 py-18 text-center">
            <h2 className="mb-4 font-heading text-[34px] text-white sm:text-[41px]">
              {guia.ctaTitle}
            </h2>
            <p className="mx-auto mb-6 max-w-[640px] text-[22px] text-white/70">
              {guia.ctaText}
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

export { GUIAS };
