// Contrato interno do motor de reservas. O site só conhece estes tipos;
// quem fala com a Ayrton (ou com o mock) é um "provider" que os devolve.

export type Destination = "porto-de-galinhas" | "tamandare";

export type Flat = {
  id: string; // id do roomType na Ayrton
  slug: string;
  name: string;
  tagline: string;
  description: string;
  destination: Destination;
  maxGuests: number;
  bedrooms: number;
  amenities: string[];
  photos: { src: string; alt: string }[];
  fromPrice: number | null; // menor diária conhecida; null = sob consulta
};

export type SearchParams = {
  checkIn: string; // YYYY-MM-DD
  checkOut: string;
  guests: number;
};

export type Quote = {
  flatId: string;
  available: boolean;
  nights: number;
  nightly: number | null;
  total: number | null;
  currency: "BRL";
  reason?: "min_stay" | "unavailable" | "capacity" | "invalid_dates";
  minNights?: number;
  // Link do checkout hospedado na Ayrton (ou da reserva criada via API).
  checkoutUrl?: string;
};

export interface BookingProvider {
  listFlats(): Promise<Flat[]>;
  getFlat(slug: string): Promise<Flat | null>;
  getQuote(flatId: string, search: SearchParams): Promise<Quote>;
}
