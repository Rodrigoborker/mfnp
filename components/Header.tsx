import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/gestao-de-imoveis", label: "Gestão" },
  { href: "/condominios", label: "Condomínios" },
  { href: "/para-proprietarios", label: "Para proprietários" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-brand justify-end px-6 py-1">
          <a
            href="https://reservas.meuflatnapraia.com.br"
            className="text-[14px] tracking-[0.03em] text-white/85 hover:text-white hover:underline"
          >
            Sou hóspede e quero reservar →
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-brand flex-wrap items-center justify-between gap-2 px-6 py-2 sm:gap-6 sm:py-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo-cor.png"
            alt="Meu Flat na Praia"
            width={676}
            height={316}
            priority
            sizes="(min-width: 640px) 172px, 120px"
            className="h-14 w-auto sm:h-20"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-[17px] font-medium tracking-[0.04em] uppercase sm:gap-7 sm:text-[20px]">
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
            className="hidden border border-navy px-5 py-2.5 text-navy hover:bg-navy hover:text-surface sm:inline-block"
          >
            Quero rentabilizar meu imóvel
          </Link>
        </nav>
      </div>
    </header>
  );
}
