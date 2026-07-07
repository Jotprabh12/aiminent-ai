import { z } from "zod";

/**
 * Newsletter subscription schema (feature-flagged; see lib/config/features).
 */
export const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  // Anti-spam honeypot — must stay empty.
  website: z.string().max(0).optional(),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
