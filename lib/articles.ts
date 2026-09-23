import { createPublicClient } from "@/lib/supabase/public";

export type ArticleBlock = { type: "p" | "h2"; text: string };

export type Article = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: ArticleBlock[];
  category: string | null;
  author: string | null;
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
};

function parseContent(raw: unknown): ArticleBlock[] {
  if (Array.isArray(raw)) return raw as ArticleBlock[];
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as ArticleBlock[];
    } catch {
      return [];
    }
  }
  return [];
}

export function readingTime(blocks: ArticleBlock[]): number {
  const words = blocks.reduce(
    (total, block) => total + block.text.trim().split(/\s+/).length,
    0,
  );
  return Math.max(1, Math.round(words / 200));
}

export async function getArticles(category?: string): Promise<Article[]> {
  const supabase = createPublicClient();
  let query = supabase
    .from("articles")
    .select(
      "title, slug, excerpt, content, category, author, published_at, seo_title, seo_description",
    )
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (category && category !== "Todos") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  if (error || !data) return [];

  return data.map((row) => ({
    ...row,
    content: parseContent(row.content),
  }));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("articles")
    .select(
      "title, slug, excerpt, content, category, author, published_at, seo_title, seo_description",
    )
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;

  return { ...data, content: parseContent(data.content) };
}
