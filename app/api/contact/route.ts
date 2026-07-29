import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { emailLeadSink } from "@/lib/integrations/lead-sink";

const bodySchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  company: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().optional(),
  industry: z.string().min(1),
  teamSize: z.string().optional(),
  challenge: z.string().min(10).max(2000),
  wantsCallback: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bodySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, wantsCallback, ...rest } = parsed.data;

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
        wantsCallback: wantsCallback ? "true" : "false",
      },
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: "Failed to process submission" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: result.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
