"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ROUTES } from "@/lib/constants/routes";
import { emailLeadSink } from "@/lib/integrations/lead-sink";
import { track } from "@vercel/analytics/server";

const contactSchema = z.object({
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
  wantsCallback: z.string().optional(),
});

export type ContactFormState = {
  errors?: z.inferFlattenedErrors<typeof contactSchema>["fieldErrors"];
  message?: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, ...rest } = parsed.data;

  const result = await emailLeadSink.send({
    source: "contact",
    fullName: `${firstName} ${lastName}`.trim(),
    companyName: rest.company,
    email: rest.email,
    phone: rest.phone,
    industry: rest.industry,
    message: rest.challenge,
    metadata: {
      teamSize: rest.teamSize ?? "",
      wantsCallback: rest.wantsCallback === "on" ? "true" : "false",
    },
  });

  if (!result.ok) {
    console.error("[contact] Failed to send lead:", result.error);
    return { message: "Something went wrong. Please try again later." };
  }

  await track("contact_submitted", {
    email: rest.email,
    company: rest.company,
  });

  revalidatePath(ROUTES.contact);
  redirect(`${ROUTES.thankYou}?source=contact`);
}
