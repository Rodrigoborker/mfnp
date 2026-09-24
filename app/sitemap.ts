import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// lastModified reflects the date each page's content last actually changed.
// Update the entry when you edit a route's page.tsx.
const ROUTES: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-24" },
  { path: "/gestao-de-imoveis", lastModified: "2026-09-23" },
  { path: "/montagem-de-flats", lastModified: "2026-09-23" },
  { path: "/para-proprietarios", lastModified: "2026-09-23" },
  { path: "/porto-de-galinhas", lastModified: "2026-09-24" },
  { path: "/tamandare-e-carneiros", lastModified: "2026-09-24" },
  { path: "/perguntas-frequentes", lastModified: "2026-09-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
