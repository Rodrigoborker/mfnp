import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuiaPage from "@/components/GuiaPage";
import { GUIAS_ARTIGOS, getGuia } from "@/lib/guias";

export function generateStaticParams() {
  return GUIAS_ARTIGOS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guia = getGuia(slug);
  if (!guia || guia.kind !== "article") return {};
  return {
    title: guia.metaTitle,
    description: guia.metaDescription,
    alternates: { canonical: guia.path },
  };
}

export default async function GuiaRoute({
  params,
}: PageProps<"/guias/[slug]">) {
  const { slug } = await params;
  const guia = getGuia(slug);
  if (!guia || guia.kind !== "article") notFound();
  return <GuiaPage guia={guia} />;
}
