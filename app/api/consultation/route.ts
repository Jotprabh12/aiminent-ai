import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { emailLeadSink } from "@/lib/integrations/lead-sink";

const bodySchema = z.object({
  fullName: z.string().min(2).max(80),
  companyName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  industry: z.string().min(1),
  teamSize: z.string().min(1),
  challenge: z.string().min(10).max(1000),
  preferredTime: z.string().optional(),
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
