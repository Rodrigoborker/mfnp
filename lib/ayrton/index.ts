import { mockProvider } from "./mock";
import type { BookingProvider } from "./types";

export type { Flat, Quote, SearchParams, Destination } from "./types";

// Hoje só existe o provider simulado. Quando a Ayrton liberar documentação e
// credenciais, criar lib/ayrton/api.ts (implementa BookingProvider, lendo
// AYRTON_API_URL, AYRTON_TENANT e AYRTON_API_KEY) e trocar aqui.
// Não chutamos endpoints: a API pública responde "Invalid or empty tenant"
// e a documentação não é pública.
export const booking: BookingProvider = mockProvider;
export const IS_MOCK = true;
