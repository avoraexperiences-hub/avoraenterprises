// Google Sheets / Apps Script webhook integration.
// Set VITE_SHEETS_WEBHOOK_URL in your .env after deploying the Apps Script.
// Setup guide: https://developers.google.com/apps-script/guides/web

export type FormPayload = Record<string, string | number | undefined>;

export async function submitToSheets(formType: string, data: FormPayload): Promise<boolean> {
  const url = import.meta.env.VITE_SHEETS_WEBHOOK_URL as string | undefined;

  const payload = { formType, timestamp: new Date().toISOString(), ...data };

  if (!url) {
    // Dev fallback: log so you can see submissions while configuring webhook.
    console.info("[forms] No VITE_SHEETS_WEBHOOK_URL set. Payload:", payload);
    await new Promise((r) => setTimeout(r, 600));
    return true;
  }

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors", // Apps Script web apps require this
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (e) {
    console.error("[forms] Submit failed:", e);
    return false;
  }
}

export const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with real number
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
