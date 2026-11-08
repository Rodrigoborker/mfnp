import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// "/admin$" + "/admin/": bloqueia só o painel. "/admin" puro bloquearia também
// /administradora-de-airbnb-em-porto-de-galinhas (prefixo).
const ADMIN_BLOCK = ["/admin$", "/admin/"];

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ADMIN_BLOCK,
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ADMIN_BLOCK,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
