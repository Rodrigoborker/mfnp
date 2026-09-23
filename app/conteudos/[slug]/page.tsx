import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlot from "@/components/ImageSlot";
import { getArticleBySlug, getArticles, readingTime } from "@/lib/articles";

export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.seo_title ?? article.title,
    description: article.seo_description ?? article.excerpt ?? undefined,
  };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = await getArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const publishedLabel = article.published_at
    ? new Date(article.published_at).toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-[720px] px-6 pt-12 pb-24">
          <nav
            aria-label="breadcrumb"
            className="mb-6 text-[13px] text-ink-soft"
          >
            <Link href="/" className="text-ink-soft hover:text-navy">
              Home
            </Link>{" "}
            <span className="mx-1.5">›</span>{" "}
            <Link href="/conteudos" className="text-ink-soft hover:text-navy">
              Conteúdos
            </Link>{" "}
            <span className="mx-1.5">›</span> {article.category}
          </nav>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.04em] text-orange">
            {article.category} · {readingTime(article.content)} min de
            leitura
          </p>
          <h1 className="mb-5 font-heading text-[28px] font-extrabold leading-tight text-navy sm:text-[38px]">
            {article.title}
          </h1>
          <div className="mb-8 flex items-center gap-3 text-sm text-ink-soft">
            <div className="h-9 w-9 overflow-hidden rounded-full">
              <ImageSlot placeholder={article.author ?? ""} shape="circle" />
            </div>
            <span>
              {article.author}
              {publishedLabel ? ` · Atualizado em ${publishedLabel}` : null}
            </span>
          </div>
          <div className="mb-10 h-[300px] sm:h-[360px]">
            <ImageSlot placeholder="Foto real: imóvel administrado, ambiente decorado" />
          </div>

          <div className="text-[17px] leading-[1.8] text-ink">
            {article.content.map((block, i) =>
              block.type === "h2" ? (
                <h2
                  key={i}
                  className="mb-4 mt-10 font-heading text-2xl font-bold text-navy"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="mb-5">
                  {block.text}
                </p>
              ),
            )}
          </div>

          <div className="mt-14 border border-border bg-surface-alt p-8 text-center">
            <h3 className="mb-3 font-heading text-lg font-bold text-navy">
              Quer saber quanto seu imóvel pode gerar?
            </h3>
            <Link
              href="/para-proprietarios#lead-form"
              className="inline-block rounded-brand bg-orange px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-orange/90"
            >
              Quero rentabilizar meu imóvel
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-surface-alt">
            <div className="mx-auto max-w-brand px-6 py-16">
              <h2 className="mb-8 font-heading text-xl font-extrabold text-navy">
                Continue lendo
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/conteudos/${a.slug}`}
                    className="block border border-border bg-white p-5"
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-orange">
                      {a.category}
                    </p>
                    <h3 className="font-heading text-[15px] font-bold leading-snug text-navy">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
