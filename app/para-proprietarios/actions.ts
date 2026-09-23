"use server";

import { createClient } from "@/lib/supabase/server";

// Guarda uma cópia do contato no Supabase. O envio para a equipe acontece
// pelo WhatsApp (ver LeadForm), então uma falha aqui não pode travar o visitante.
export async function saveLead(formData: FormData): Promise<void> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const propertyType = String(formData.get("propertyType") ?? "").trim();
  const rentalStatus = String(formData.get("rentalStatus") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !location) return;

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      property_location: location,
      property_type: propertyType || null,
      rental_status: rentalStatus || null,
      message: message || null,
      source: "site",
      landing_page: String(formData.get("landing_page") ?? "") || null,
      utm_source: String(formData.get("utm_source") ?? "") || null,
      utm_medium: String(formData.get("utm_medium") ?? "") || null,
      utm_campaign: String(formData.get("utm_campaign") ?? "") || null,
      utm_term: String(formData.get("utm_term") ?? "") || null,
      utm_content: String(formData.get("utm_content") ?? "") || null,
    });
    if (error) console.error("saveLead:", error.message);
  } catch (error) {
    console.error("saveLead:", error);
  }
}
