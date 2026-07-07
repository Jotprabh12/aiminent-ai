/**
 * Third-party integrations — barrel + shared contracts.
 * ---------------------------------------------------------------------------
 * This layer isolates external services (Calendly, Resend, CRM, n8n, WhatsApp)
 * behind stable interfaces so the rest of the app never imports a vendor SDK
 * directly (Chapter 7 §18 — integrate without architectural change).
 *
 * Concrete clients are added in the integration session (M6). For now this
 * defines the contracts they will implement.
 */

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
  send(payload: LeadPayload): Promise<{ ok: boolean; id?: string }>;
}
