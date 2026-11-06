"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

type Quote = {
  available: boolean;
  nights: number;
  nightly: number | null;
  total: number | null;
  reason?: "min_stay" | "unavailable" | "capacity" | "invalid_dates";
  minNights?: number;
  checkoutUrl?: string;
};

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const REASONS: Record<string, string> = {
  min_stay: "Estadia mínima não atingida.",
  unavailable: "Indisponível nessas datas.",
  capacity: "Acima da capacidade deste flat.",
  invalid_dates: "Confira as datas de check-in e check-out.",
};

export default function BookingWidget({
  flatId,
  flatName,
  maxGuests,
}: {
  flatId: string;
  flatName: string;
  maxGuests: number;
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setQuote(null);
    try {
      const qs = new URLSearchParams({ flatId, checkIn, checkOut, guests: String(guests) });
      const res = await fetch(`/api/disponibilidade?${qs}`);
      if (!res.ok) throw new Error();
      setQuote(await res.json());
    } catch {
      setError("Não foi possível consultar agora. Tente de novo ou fale conosco.");
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full border border-border bg-white px-3 py-2.5 text-[18px] text-ink focus:border-navy focus:outline-none";

  return (
    <form onSubmit={check} className="border border-border bg-white p-6">
      <p className="mb-4 font-heading text-[24px] text-navy">Consultar datas</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-[17px] text-ink-soft">
          Check-in
          <input type="date" required min={today} value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)} className={field} />
        </label>
        <label className="text-[17px] text-ink-soft">
          Check-out
          <input type="date" required min={checkIn || today} value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)} className={field} />
        </label>
      </div>
      <label className="mt-4 block text-[17px] text-ink-soft">
        Hóspedes
        <select value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={field}>
          {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "hóspede" : "hóspedes"}</option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={loading}
        className="mt-5 w-full bg-orange px-6 py-3.5 text-[20px] text-white hover:bg-orange/90 disabled:opacity-60">
        {loading ? "Consultando…" : "Ver disponibilidade e preço"}
      </button>

      <div aria-live="polite" className="mt-4">
        {error && <p className="text-[17px] text-red-700">{error}</p>}
        {quote && quote.available && quote.total !== null && (
          <div className="border-t border-border pt-4">
            <p className="text-[17px] text-ink-soft">
              {quote.nights} {quote.nights === 1 ? "noite" : "noites"} × {brl(quote.nightly ?? 0)}
            </p>
            <p className="font-heading text-[30px] text-navy">{brl(quote.total)}</p>
            <a
              href={quote.checkoutUrl ?? whatsappUrl(
                `Olá! Quero reservar o "${flatName}" de ${checkIn} a ${checkOut} para ${guests} hóspede(s).`)}
              className="mt-3 block bg-navy px-6 py-3.5 text-center text-[20px] text-white hover:bg-navy-dark"
            >
              {quote.checkoutUrl ? "Reservar agora" : "Reservar pelo WhatsApp"}
            </a>
          </div>
        )}
        {quote && !quote.available && (
          <p className="border-t border-border pt-4 text-[18px] text-ink">
            {REASONS[quote.reason ?? "unavailable"]}
            {quote.reason === "min_stay" && quote.minNights ? ` Mínimo de ${quote.minNights} noites.` : ""}
          </p>
        )}
      </div>
    </form>
  );
}
