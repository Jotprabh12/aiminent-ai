import type { RequestStatus } from "@/types/common";

/**
 * Form primitives shared by every form.
 *
 * NOTE: The concrete field SHAPES (ContactFormValues, ConsultationFormValues,
 * NewsletterFormValues) are inferred from their Zod schemas in
 * lib/validations — that is their single source of truth. Import them from
 * "@/lib/validations". This file holds only the form-agnostic primitives so
 * there is no duplication and no types → lib circular dependency.
 */

/** A `<select>` / radio option. */
export interface FieldOption {
  label: string;
  value: string;
}

/** Result returned by a form submit handler / server action. */
export interface SubmitResult {
  status: Extract<RequestStatus, "success" | "error">;
  message: string;
  /** Field-level errors keyed by field name. */
  fieldErrors?: Record<string, string>;
}

/** UI state a form component tracks while submitting. */
export interface FormState {
  status: RequestStatus;
  message?: string;
}
