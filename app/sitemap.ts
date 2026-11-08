import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CONDOMINIOS } from "@/lib/condominios";
import { GUIAS } from "@/lib/guias";

// lastModified reflects the date each page's content last actually changed.
// Update the entry when you edit a route's page.tsx.
const ROUTES: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-11-07" },
  { path: "/gestao-de-imoveis", lastModified: "2026-11-07" },
  { path: "/montagem-de-flats", lastModified: "2026-11-07" },
  { path: "/para-proprietarios", lastModified: "2026-11-07" },
  { path: "/porto-de-galinhas", lastModified: "2026-11-07" },
  { path: "/tamandare-e-carneiros", lastModified: "2026-11-07" },
  { path: "/perguntas-frequentes", lastModified: "2026-11-07" },
  { path: "/condominios", lastModified: "2026-11-07" },
  { path: "/guias", lastModified: "2026-11-07" },
  ...GUIAS.map((g) => ({ path: g.path, lastModified: g.published })),
  ...CONDOMINIOS.map((c) => ({
    path: `/condominios/${c.slug}`,
    lastModified: "2026-11-07",
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
