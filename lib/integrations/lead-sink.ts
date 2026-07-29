import type { LeadPayload, LeadSink } from "./index";
import { sendEmail } from "./email";
import { SITE } from "@/lib/constants/site";

function formatLeadEmail(payload: LeadPayload): {
  subject: string;
  text: string;
} {
  const lines = [
    `Source: ${payload.source}`,
    `Name: ${payload.fullName ?? "N/A"}`,
    `Company: ${payload.companyName ?? "N/A"}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? "N/A"}`,
    `Industry: ${payload.industry ?? "N/A"}`,
    ``,
    `Message:`,
    payload.message ?? "N/A",
  ];

  if (payload.metadata) {
    lines.push(``, `Metadata:`);
    for (const [key, value] of Object.entries(payload.metadata)) {
      lines.push(`  ${key}: ${value}`);
    }
  }

  const subject = `[${payload.source}] Lead from ${payload.fullName ?? payload.email}`;
  return { subject, text: lines.join("\n") };
}

export const emailLeadSink: LeadSink = {
  name: "Email (Resend)",
  async send(payload: LeadPayload) {
    const { subject, text } = formatLeadEmail(payload);
    const result = await sendEmail({
      to: SITE.contactEmail,
      subject,
      text,
    });
    return result;
  },
};

export const logLeadSink: LeadSink = {
  name: "Console Log",
  async send(payload: LeadPayload) {
    console.log("[lead] Received payload:", JSON.stringify(payload, null, 2));
    return { ok: true, id: "logged" };
  },
};
