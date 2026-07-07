import { z } from "zod";

/**
 * Contact form schema (Chapter 8 · Chapter 12 §12). Shared between the client
 * (React Hook Form resolver) and the server action so validation is defined
 * exactly once.
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(80),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().max(120).optional(),
  message: z
    .string()
    .min(10, "Please add a little more detail (10+ characters).")
    .max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
