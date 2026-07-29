/** Third-party integrations — barrel + shared contracts. */

/** Normalised lead payload handed to any CRM / automation provider. */
export interface LeadPayload {
  source: "contact" | "consultation" | "newsletter";
  fullName?: string;
  companyName?: string;
  email: string;
  phone?: string;
  industry?: string;
  message?: string;
  metadata?: Record<string, string | number | boolean>;
}

/** The single method every lead destination (CRM, n8n, email) implements. */
export interface LeadSink {
  readonly name: string;
  send(
    payload: LeadPayload,
  ): Promise<{ ok: boolean; id?: string; error?: string }>;
}

export { sendEmail, type EmailPayload, type EmailResult } from "./email";
export { emailLeadSink, logLeadSink } from "./lead-sink";
