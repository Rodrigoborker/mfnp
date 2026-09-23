"use server";

import { createClient } from "@/lib/supabase/server";

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const propertyType = String(formData.get("propertyType") ?? "").trim();
  const rentalStatus = String(formData.get("rentalStatus") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !location) {
    return {
      status: "error",
      message: "Preencha nome, WhatsApp e localização do imóvel.",
    };
  }

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

  if (error) {
    return {
      status: "error",
      message: "Não foi possível enviar agora. Tente novamente em instantes.",
    };
  }

  return { status: "success" };
}
