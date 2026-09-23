import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-footer-text">
      <div className="mx-auto grid max-w-brand grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10 px-6 py-16 pb-8">
        <div>
          <Image
            src="/brand/logo-branco.png"
            alt="Meu Flat na Praia"
            width={676}
            height={316}
            className="h-16 w-auto"
          />
        </div>

        <div>
          <div className="mb-3.5 text-[19px] font-bold text-white">Empresa</div>
          <div className="flex flex-col gap-2.5 text-[19px]">
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
          <div className="mb-3.5 text-[19px] font-bold text-white">Explorar</div>
          <div className="flex flex-col gap-2.5 text-[19px]">
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
              Gestão por temporada
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
          <div className="mb-3.5 text-[19px] font-bold text-white">Contato</div>
          <div className="flex flex-col gap-2.5 text-[19px]">
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

      <div className="mx-auto flex max-w-brand flex-wrap justify-between gap-3 border-t border-white/10 px-6 py-5 text-[18px] text-footer-text-dim">
        <span>
          © {new Date().getFullYear()} Meu Flat na Praia Locações por Temporada.
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
