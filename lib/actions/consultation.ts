"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ROUTES } from "@/lib/constants/routes";
import { emailLeadSink } from "@/lib/integrations/lead-sink";
import { track } from "@vercel/analytics/server";

const consultationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name.").max(80),
  companyName: z.string().min(2, "Please enter your company name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[+\d][\d\s()-]*$/, "Please enter a valid phone number."),
  industry: z.string().min(1, "Please select your industry."),
  teamSize: z.string().min(1, "Please select your team size."),
  challenge: z
    .string()
    .min(10, "Tell us about your biggest challenge.")
    .max(1000),
  preferredTime: z.string().optional(),
});

export type ConsultationFormState = {
  errors?: z.inferFlattenedErrors<typeof consultationSchema>["fieldErrors"];
  message?: string;
};

export async function submitConsultation(
  _prevState: ConsultationFormState,
  formData: FormData,
): Promise<ConsultationFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = consultationSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const result = await emailLeadSink.send({
    source: "consultation",
    fullName: parsed.data.fullName,
    companyName: parsed.data.companyName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    industry: parsed.data.industry,
    message: parsed.data.challenge,
    metadata: {
      teamSize: parsed.data.teamSize,
      preferredTime: parsed.data.preferredTime ?? "",
    },
  });

  if (!result.ok) {
    console.error("[consultation] Failed to send lead:", result.error);
    return { message: "Something went wrong. Please try again later." };
  }

  await track("consultation_booked", {
    email: parsed.data.email,
    company: parsed.data.companyName,
  });

  revalidatePath(ROUTES.bookConsultation);
  redirect(`${ROUTES.thankYou}?source=consultation`);
}
