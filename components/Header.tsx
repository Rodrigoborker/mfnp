import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/gestao-de-imoveis", label: "Gestão" },
  { href: "/para-proprietarios", label: "Para proprietários" },
  { href: "#", label: "Destinos" },
  { href: "#", label: "Sobre" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-brand flex-wrap items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo-cor.png"
            alt="Meu Flat na Praia"
            width={676}
            height={316}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-7 text-[13px] font-medium tracking-[0.04em] uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-ink hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/para-proprietarios#lead-form"
            className="border border-navy px-5 py-2.5 text-navy hover:bg-navy hover:text-surface"
          >
            Quero rentabilizar meu imóvel
          </Link>
        </nav>
      </div>
    </header>
  );
}
