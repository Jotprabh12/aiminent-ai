import { z } from "zod";

/**
 * Consultation (lead qualification) form schema.
 * Fields mirror the qualification model in Chapter 11 §4 — the required set
 * qualifies the lead; optional fields enrich it. Kept as the single source of
 * truth for both client and server validation.
 */
export const consultationFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name.").max(80),
  companyName: z.string().min(2, "Please enter your company name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[+\d][\d\s()-]*$/, "Please enter a valid phone number."),
  industry: z.string().min(2, "Please select your industry."),
  teamSize: z.string().min(1, "Please select your team size."),
  challenge: z
    .string()
    .min(10, "Tell us a bit about your biggest challenge.")
    .max(1000),

  // Optional enrichment fields.
  existingCrm: z.string().max(80).optional(),
  monthlyLeadVolume: z.string().max(40).optional(),
  preferredTime: z.string().max(80).optional(),

  // Anti-spam honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;
