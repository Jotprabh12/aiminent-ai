import { env } from "@/lib/config/env";

export interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export interface EmailResult {
  ok: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const { RESEND_API_KEY, RESEND_FROM_EMAIL } = env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL) {
    console.log("[email] Resend not configured. Logging payload:", payload);
    return { ok: true, id: "logged" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[email] Resend error:", res.status, body);
      return { ok: false, error: `Resend responded with ${res.status}` };
    }

    const data = await res.json();
    return { ok: true, id: data.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[email] Failed to send email:", message);
    return { ok: false, error: message };
  }
}
