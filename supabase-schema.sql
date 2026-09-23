-- MFNP: schema mínimo para o formulário de leads e o blog (Conteúdos)

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  property_location text not null,
  property_type text,
  rental_status text,
  message text,
  source text,
  landing_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "public can insert leads"
  on public.leads for insert
  to anon
  with check (true);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content jsonb not null default '[]'::jsonb,
  category text,
  author text,
  status text not null default 'draft',
  published_at timestamptz,
  seo_title text,
  seo_description text,
  canonical_url text,
  og_image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.articles enable row level security;

create policy "public can read published articles"
  on public.articles for select
  to anon
  using (status = 'published');
