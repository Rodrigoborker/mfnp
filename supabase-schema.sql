-- MFNP: schema mínimo para o formulário de leads

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
