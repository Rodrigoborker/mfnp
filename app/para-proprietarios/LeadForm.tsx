"use client";

import { useActionState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { submitLead, type LeadFormState } from "./actions";

const initialState: LeadFormState = { status: "idle" };

export default function LeadForm() {
  const [state, formAction, isPending] = useActionState(
    submitLead,
    initialState,
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (state.status === "success") {
    return (
      <div className="border border-border bg-surface-alt p-10 text-center">
        <CheckCircle2
          className="mx-auto mb-4 h-10 w-10 text-orange-light"
          aria-hidden
        />
        <h3 className="mb-2 font-heading text-lg font-bold text-white">
          Recebemos seus dados
        </h3>
        <p className="text-[15px] text-white/70">
          Nossa equipe entra em contato em breve pelo WhatsApp informado.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
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
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[15px] focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(81) 90000-0000"
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[15px] placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          Localização do imóvel
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="Ex: Porto de Galinhas"
          className="w-full rounded-brand border border-border px-3.5 py-3 text-[15px] placeholder:text-ink-soft/60 focus:border-navy focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          Tipo do imóvel
        </label>
        <select
          id="propertyType"
          name="propertyType"
          defaultValue=""
          className="w-full rounded-brand border border-border bg-white px-3.5 py-3 text-[15px] focus:border-navy focus:outline-none"
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
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          Já trabalha com temporada?
        </label>
        <select
          id="rentalStatus"
          name="rentalStatus"
          defaultValue=""
          className="w-full rounded-brand border border-border bg-white px-3.5 py-3 text-[15px] focus:border-navy focus:outline-none"
        >
          <option value="">Selecione...</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-[13px] font-semibold text-white"
        >
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full resize-y rounded-brand border border-border px-3.5 py-3 text-[15px] focus:border-navy focus:outline-none"
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 rounded-brand bg-orange px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-orange/90 disabled:opacity-60"
      >
        {isPending ? "Enviando..." : "Enviar e receber avaliação"}
      </button>
      <p className="text-center text-xs text-white/60">
        Seus dados são usados apenas para contato.
      </p>
    </form>
  );
}
