const FEATURES = [
  {
    title: "Rápido",
    desc: "Next.js App Router com Server Components por padrão — HTML pronto no primeiro carregamento.",
  },
  {
    title: "Hospedagem simples",
    desc: "Deploy contínuo na Vercel: cada push na branch principal gera uma nova versão no ar.",
  },
  {
    title: "Fácil de estender",
    desc: "TypeScript + Tailwind já configurados. Adicione páginas em app/ e novos componentes em components/.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">MFNP</span>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-foreground">
              Recursos
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
            Novo projeto
          </p>
          <h1 className="mx-auto mb-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Seu site começa aqui.
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted">
            Base pronta em Next.js + TypeScript + Tailwind, já preparada para
            deploy na Vercel e versionamento no GitHub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Começar
            </a>
            <a
              href="#features"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-alt"
            >
              Ver recursos
            </a>
          </div>
        </section>

        <section id="features" className="border-y border-border bg-surface-alt">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight">
            Pronto para publicar?
          </h2>
          <p className="mx-auto max-w-md text-muted">
            Edite esta página em <code>app/page.tsx</code> e faça push — a
            Vercel implanta automaticamente a cada commit na branch
            principal.
          </p>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted">
          © {new Date().getFullYear()} MFNP.
        </div>
      </footer>
    </div>
  );
}
