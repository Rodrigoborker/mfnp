import type { MetadataRoute } from "next";

const BASE_URL = "https://www.meuflatnapraia.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gestao-de-imoveis",
    "/montagem-de-flats",
    "/para-proprietarios",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  return staticRoutes;
}
