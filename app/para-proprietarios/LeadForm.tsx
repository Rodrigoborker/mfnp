"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { saveLead } from "./actions";

const PROPERTY_TYPES: Record<string, string> = {
  flat: "Flat",
  apartamento: "Apartamento",
  casa: "Casa",
  outro: "Outro",
};

const RENTAL_STATUS: Record<string, string> = {
  sim: "Sim",
  nao: "Não",
};

function field(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

function buildMessage(data: FormData) {
  const lines = [
    "Olá! Vim pelo site e quero uma avaliação do meu imóvel.",
    "",
    `*Nome:* ${field(data, "name")}`,
    `*WhatsApp:* ${field(data, "phone")}`,
    `*Localização do imóvel:* ${field(data, "location")}`,
  ];
  const type = PROPERTY_TYPES[field(data, "propertyType")];
  if (type) lines.push(`*Tipo do imóvel:* ${type}`);
  const rental = RENTAL_STATUS[field(data, "rentalStatus")];
  if (rental) lines.push(`*Já trabalha com temporada?* ${rental}`);
  const message = field(data, "message");
  if (message) lines.push(`*Mensagem:* ${message}`);
  return lines.join("\n");
}

const subscribe = () => () => {};

export default function LeadForm() {
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  // Só libera o envio depois da hidratação: antes disso o navegador faria um
  // envio nativo e os dados iriam parar na URL em vez do WhatsApp.
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const url = whatsappUrl(buildMessage(data));
    // Abre o WhatsApp no mesmo gesto do clique, para o navegador não bloquear.
    window.open(url, "_blank", "noopener,noreferrer");
    saveLead(data).catch(() => {});
    setSentUrl(url);
  }

  if (sentUrl) {
    return (
      <div className="border border-border bg-surface-alt p-10 text-center">
        <MessageCircle
          className="mx-auto mb-4 h-10 w-10 text-orange-light"
          aria-hidden
        />
        <h3 className="mb-2 font-heading text-[23px] font-bold text-white">
          Falta só enviar no WhatsApp
        </h3>
        <p className="mb-6 text-[20px] text-white/70">
          Abrimos o WhatsApp com seus dados já preenchidos. É só tocar em
          enviar para falar com a nossa equipe.
        </p>
        <a
          href={sentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-brand bg-orange px-6 py-3.5 text-[20px] font-semibold text-white hover:bg-orange/90"
        >
          Abrir o WhatsApp de novo
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-border bg-surface-alt p-8"
    >
      <input
        type="hidden"
        name="landing_page"
        value={pathname ?? "/para-proprietarios"}
      />
      <input
        type="hidden"
        name="utm_source"
        value={searchParams.get("utm_source") ?? ""}
      />
      <input
        type="hidden"
        name="utm_medium"
        value={searchParams.get("utm_medium") ?? ""}
      />
      <input
        type="hidden"
        name="utm_campaign"
        value={searchParams.get("utm_campaign") ?? ""}
      />
      <input
        type="hidden"
        name="utm_term"
        value={searchParams.get("utm_term") ?? ""}
      />
      <input
        type="hidden"
        name="utm_content"
        value={searchParams.get("utm_content") ?? ""}
      />

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[20px] focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(81) 90000-0000"
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[20px] placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          Localização do imóvel
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="Ex: Porto de Galinhas"
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[20px] placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          Tipo do imóvel
        </label>
        <select
          id="propertyType"
          name="propertyType"
          defaultValue=""
          className="w-full rounded-brand border border-border bg-white px-3.5 py-3 text-[20px] focus:border-navy focus:outline-none"
        >
          <option value="">Selecione...</option>
          <option value="flat">Flat</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="rentalStatus"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          Já trabalha com temporada?
        </label>
        <select
          id="rentalStatus"
          name="rentalStatus"
          defaultValue=""
          className="w-full rounded-brand border border-border bg-white px-3.5 py-3 text-[20px] focus:border-navy focus:outline-none"
        >
          <option value="">Selecione...</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-[18px] font-semibold text-white"
        >
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full resize-y rounded-brand border border-border px-3.5 py-3 text-[20px] focus:border-navy focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={!ready}
        className="mt-1 rounded-brand bg-orange px-6 py-3.5 text-[20px] font-semibold text-white hover:bg-orange/90 disabled:opacity-60"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-[17px] text-white/60">
        Ao enviar, abrimos o WhatsApp com sua mensagem pronta. Seus dados são
        usados apenas para contato.
      </p>
    </form>
  );
}
