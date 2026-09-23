import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-surface-alt">
      <div className="mx-auto grid max-w-brand grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10 px-6 py-16 pb-8">
        <div>
          <div className="mb-3 font-heading text-lg font-extrabold text-white">
            Meu Flat na Praia
          </div>
          <p className="max-w-60 text-sm leading-6 text-footer-text">
            Administração profissional de imóveis por temporada no litoral de
            Pernambuco e Alagoas.
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-bold text-white">Empresa</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="#" className="text-footer-text hover:text-white">
              Sobre
            </Link>
            <Link
              href="/gestao-de-imoveis"
              className="text-footer-text hover:text-white"
            >
              Como funciona
            </Link>
            <Link
              href="/para-proprietarios"
              className="text-footer-text hover:text-white"
            >
              Para proprietários
            </Link>
            <Link href="#" className="text-footer-text hover:text-white">
              Contato
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-bold text-white">Destinos</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="#" className="text-footer-text hover:text-white">
              Porto de Galinhas
            </Link>
            <Link href="#" className="text-footer-text hover:text-white">
              Praia dos Carneiros
            </Link>
            <Link href="#" className="text-footer-text hover:text-white">
              Tamandaré
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-bold text-white">Explorar</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="#" className="text-footer-text hover:text-white">
              Imóveis
            </Link>
            <Link
              href="/conteudos"
              className="text-footer-text hover:text-white"
            >
              Conteúdos
            </Link>
            <Link
              href="/gestao-de-imoveis"
              className="text-footer-text hover:text-white"
            >
              Gestão de Airbnb
            </Link>
            <Link
              href="/montagem-de-flats"
              className="text-footer-text hover:text-white"
            >
              Montagem de flats
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-sm font-bold text-white">Contato</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href="https://wa.me/5581994869792"
              className="text-footer-text hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/meuflatnapraia/"
              className="text-footer-text hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-brand flex-wrap justify-between gap-3 border-t border-white/10 px-6 py-5 text-[13px] text-footer-text-dim">
        <span>
          © {new Date().getFullYear()} Meu Flat na Praia. Rodrigo Montenegro,
          CRECI-PE 16191.
        </span>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-white">
            Política de privacidade
          </Link>
          <Link href="#" className="hover:text-white">
            Termos de uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
