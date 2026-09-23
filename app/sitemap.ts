import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://www.meuflatnapraia.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/gestao-de-imoveis",
    "/montagem-de-flats",
    "/para-proprietarios",
    "/conteudos",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const articles = await getArticles();
  const articleRoutes = articles.map((article) => ({
    url: `${BASE_URL}/conteudos/${article.slug}`,
    lastModified: article.published_at
      ? new Date(article.published_at)
      : new Date(),
  }));

  return [...staticRoutes, ...articleRoutes];
}
