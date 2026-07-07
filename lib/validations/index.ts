/**
 * Validation schemas — barrel export. Import from "@/lib/validations".
 * These Zod schemas are the single source of truth for form data shapes; the
 * inferred `*Values` types are re-exported for use across client and server.
 */
export {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
export {
  consultationFormSchema,
  type ConsultationFormValues,
} from "@/lib/validations/consultation";
export {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/validations/newsletter";
