import { supabase } from "@/integrations/supabase/client";

export type FormPayload = Record<string, string | number | undefined>;

/**
 * Submit a form to Lovable Cloud (Supabase).
 * Stores into the `form_submissions` table. View leads in Cloud → Database → form_submissions.
 */
export async function submitToSheets(
  formType: "avora_inquiry" | "crazy_ambassador" | "crazy_partner_college" | "crazy_ticket_inquiry",
  data: FormPayload
): Promise<boolean> {
  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = data.email ? String(data.email).trim() : null;

  if (!name || !phone) {
    console.error("[forms] Missing required fields name/phone");
    return false;
  }

  // Strip name/phone/email from payload to avoid duplication
  const { name: _n, phone: _p, email: _e, ...rest } = data;

  const { error } = await supabase.from("form_submissions").insert([{
    form_type: formType,
    name,
    phone,
    email: email ?? undefined,
    payload: rest as never,
  }]);

  if (error) {
    console.error("[forms] Submit failed:", error);
    return false;
  }
  return true;
}

// Brand contact details
export const WHATSAPP_NUMBER = "918419979918";
export const CONTACT_EMAIL = "avoraexperiences@gmail.com";
export const CONTACT_PHONE = "+91 84199 79918";
export const INSTAGRAM_AVORA = "https://instagram.com/avora.experiences";
export const INSTAGRAM_CRAZY = "https://instagram.com/crazyhedz";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
