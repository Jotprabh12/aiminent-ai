import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name.").max(50),
  lastName: z.string().min(1, "Please enter your last name.").max(50),
  company: z.string().min(1, "Please enter your company name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  industry: z.string().min(1, "Please select your industry."),
  teamSize: z.string().optional(),
  challenge: z
    .string()
    .min(10, "Please describe your challenge (10+ characters).")
    .max(2000),
  wantsCallback: z.boolean().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
