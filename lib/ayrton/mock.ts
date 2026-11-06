import type { BookingProvider, Flat, Quote, SearchParams } from "./types";

// DADOS DE EXEMPLO: nomes e capacidades vêm da lista pública de flats; preços,
// descrições e fotos são placeholders até a API real ser ligada.
const FLATS: Flat[] = [
  {
    id: "1",
    slug: "flat-frente-calcadao-porto-de-galinhas",
    name: "Flat completo frente calçadão",
    tagline: "A poucos passos das piscinas naturais, em Porto de Galinhas",
    description:
      "Flat completo, de frente para o calçadão, com cozinha equipada, ar-condicionado e Wi-Fi. Ideal para famílias e grupos que querem sair do prédio direto para a praia.",
    destination: "porto-de-galinhas",
    maxGuests: 5,
    bedrooms: 1,
    amenities: ["Wi-Fi", "Ar-condicionado", "Cozinha equipada", "TV", "Estacionamento"],
    photos: [{ src: "/photos/flat-decorado-quarto.jpg", alt: "Quarto do flat frente calçadão" }],
    fromPrice: 390,
  },
  {
    id: "2",
    slug: "flat-1-quarto-centro-porto-de-galinhas",
    name: "Flat 1 quarto no centro",
    tagline: "A 50 m das piscinas naturais, no centro de Porto de Galinhas",
    description:
      "Apartamento de um quarto com cama de casal e sofá-cama na sala, perto de restaurantes, lojas e dos principais passeios do centro.",
    destination: "porto-de-galinhas",
    maxGuests: 4,
    bedrooms: 1,
    amenities: ["Wi-Fi", "Ar-condicionado", "Cozinha equipada", "TV"],
    photos: [{ src: "/photos/destino-porto-de-galinhas.jpg", alt: "Porto de Galinhas" }],
    fromPrice: 290,
  },
  {
    id: "3",
    slug: "apto-2-quartos-piscina-tamandare",
    name: "Apto 2 quartos com piscina",
    tagline: "Conforto para o grupo todo, perto das praias de Tamandaré",
    description:
      "Apartamento de dois quartos em condomínio com piscina, com espaço para até seis hóspedes e acesso fácil às praias de Tamandaré e Carneiros.",
    destination: "tamandare",
    maxGuests: 6,
    bedrooms: 2,
    amenities: ["Piscina", "Wi-Fi", "Ar-condicionado", "Cozinha equipada", "Estacionamento"],
    photos: [{ src: "/photos/destino-tamandare.webp", alt: "Praia de Tamandaré" }],
    fromPrice: 450,
  },
];

const DAY = 86_400_000;

function nightsBetween(a: string, b: string) {
  const n = Math.round((Date.parse(b) - Date.parse(a)) / DAY);
  return Number.isFinite(n) ? n : 0;
}

export const mockProvider: BookingProvider = {
  async listFlats() {
    return FLATS;
  },
  async getFlat(slug) {
    return FLATS.find((f) => f.slug === slug) ?? null;
  },
  async getQuote(flatId, s: SearchParams): Promise<Quote> {
    const flat = FLATS.find((f) => f.id === flatId);
    const nights = nightsBetween(s.checkIn, s.checkOut);
    const base = { flatId, nights, currency: "BRL" as const, nightly: null, total: null };
    if (!flat || nights <= 0) return { ...base, available: false, reason: "invalid_dates" };
    if (s.guests > flat.maxGuests) return { ...base, available: false, reason: "capacity" };
    if (nights < 2) return { ...base, available: false, reason: "min_stay", minNights: 2 };
    const nightly = flat.fromPrice ?? 0;
    return { ...base, available: true, nightly, total: nightly * nights };
  },
};
