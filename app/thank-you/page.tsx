import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { env } from "@/lib/config/env";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Thank You — Aiminent AI",
  description: "Thank you for your inquiry. We'll be in touch soon.",
  noindex: true,
  path: "/thank-you",
});

export default async function ThankYouPage(props: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source } = await props.searchParams;
  const isConsultation = source === "consultation";

  return (
    <Section spacing="lg" background="base">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="success">Thank You!</Badge>
          <h1 className="text-h1 font-semibold text-foreground">Thank You!</h1>
          <p className="max-w-prose-w text-body text-text-secondary">
            {isConsultation
              ? "Your consultation request has been received. We will contact you within 24 hours to confirm your slot."
              : "We have received your request and will get back to you shortly."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {isConsultation && env.NEXT_PUBLIC_CALENDLY_URL ? (
              <Button href={env.NEXT_PUBLIC_CALENDLY_URL}>
                Schedule with Calendly
              </Button>
            ) : (
              <Button href={ROUTES.bookConsultation}>
                Schedule a Consultation
              </Button>
            )}
            <Button variant="outline" href={ROUTES.home}>
              Return Home
            </Button>
            <Button variant="outline" href={ROUTES.solutions}>
              Explore Solutions
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
