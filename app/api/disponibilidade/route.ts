import { booking } from "@/lib/ayrton";

const DATE = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const flatId = q.get("flatId") ?? "";
  const checkIn = q.get("checkIn") ?? "";
  const checkOut = q.get("checkOut") ?? "";
  const guests = Number(q.get("guests") ?? "2");

  if (!flatId || !DATE.test(checkIn) || !DATE.test(checkOut) || !(guests >= 1 && guests <= 20)) {
    return Response.json({ error: "parâmetros inválidos" }, { status: 400 });
  }

  const quote = await booking.getQuote(flatId, { checkIn, checkOut, guests });
  return Response.json(quote, { headers: { "Cache-Control": "no-store" } });
}
