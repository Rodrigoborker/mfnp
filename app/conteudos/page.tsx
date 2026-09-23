import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { getArticles, readingTime } from "@/lib/articles";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Guias sobre gestão de imóveis por temporada, precificação e os destinos onde atuamos no litoral de Pernambuco.",
};

const CATEGORIES = ["Todos", "Gestão", "Destinos"];

export default async function ConteudosPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? "Todos";
  const articles = await getArticles(activeCategory);

  return (
    <>
      <Header />
      <main>
        <Reveal className="mx-auto max-w-brand px-6 pt-14 pb-6">
          <p className="mb-3 text-[15px] font-medium uppercase tracking-[0.14em] text-orange">
            Conteúdos
          </p>
          <h1 className="mb-2 font-heading text-[32px] text-navy sm:text-[42px]">
            Guias sobre gestão de imóveis por temporada
          </h1>
          <p className="max-w-[600px] text-lg text-ink-soft">
            Conteúdo prático sobre Airbnb, precificação e os destinos onde
            atuamos no litoral de Pernambuco.
          </p>
        </Reveal>

        <section className="mx-auto max-w-brand px-6 pt-6">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <Link
                  key={cat}
                  href={cat === "Todos" ? "/conteudos" : `/conteudos?category=${encodeURIComponent(cat)}`}
                  className={`border px-4.5 py-2 text-[15px] font-medium ${
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-surface text-navy"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-brand px-6 py-10 pb-24">
          {articles.length === 0 ? (
            <p className="text-ink-soft">
              Nenhum conteúdo encontrado nessa categoria ainda.
            </p>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.06}>
                  <Link href={`/conteudos/${article.slug}`} className="block">
                    <div className="mb-4 h-[190px] overflow-hidden">
                      <ImageSlot placeholder={article.title} />
                    </div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.08em] text-orange">
                      {article.category} · {readingTime(article.content)} min
                    </p>
                    <h3 className="mb-2 font-heading text-xl leading-snug text-navy">
                      {article.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-soft">
                      {article.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
