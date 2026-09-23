import Link from "next/link";

const NAV_LINKS = [
  { href: "/gestao-de-imoveis", label: "Gestão" },
  { href: "/para-proprietarios", label: "Para proprietários" },
  { href: "#", label: "Destinos" },
  { href: "#", label: "Sobre" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-brand flex-wrap items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-extrabold tracking-tight text-white"
        >
          Meu Flat <span className="text-orange">na Praia</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/para-proprietarios#lead-form"
            className="rounded-brand bg-orange px-5 py-2.5 font-semibold text-white hover:bg-orange/90"
          >
            Quero rentabilizar meu imóvel
          </Link>
        </nav>
      </div>
    </header>
  );
}
