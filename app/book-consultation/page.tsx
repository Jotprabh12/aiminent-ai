import { CalendarCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendlyInline } from "@/components/ui/calendly-inline";
import { ConsultationForm } from "@/components/forms";
import { ROUTES } from "@/lib/constants";
import { getActiveBookingProvider } from "@/lib/integrations/booking";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book Free Consultation — Aiminent AI",
  description:
    "Schedule a free 30-minute consultation to discuss your automation needs.",
  path: "/book-consultation",
});

const benefits = [
  {
    title: "30-Minute Assessment",
    desc: "We review your current workflows and identify automation opportunities.",
  },
  {
    title: "Custom Roadmap",
    desc: "Get a tailored plan with timeline, scope, and expected ROI.",
  },
  {
    title: "No Obligation",
    desc: "Free consultation with no commitment to proceed.",
  },
  {
    title: "Expert Guidance",
    desc: "Learn from a team with years of automation experience.",
  },
];

export default function BookConsultationPage() {
  // Calendly handles scheduling in V1 (see lib/integrations/booking.ts);
  // the built-in form remains only as a defensive fallback path.
  const booking = getActiveBookingProvider();
  const usesCalendly = booking.handlesScheduling();
  const calendlyUrl = booking.getBookingUrl();

  return (
    <>
      <PageHero
        badge="Consultation"
        title="Book a Free Consultation"
        description="Get a personalized automation assessment with our team. We'll identify opportunities and build a roadmap tailored to your business."
        image="/images/hero-consultation.jpg"
        imageAlt="Business planning a consultation in a modern workspace"
        imagePosition="center 50%"
      />

      <Section spacing="lg" background="surface" reveal>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="mb-4 text-h3 font-semibold text-foreground">
                What to Expect
              </h2>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="text-body-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking panel — Calendly embed, form kept as fallback */}
            {usesCalendly && calendlyUrl ? (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarCheck size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-h3 font-semibold text-foreground">
                      Pick a Time That Works
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary">
                      Choose a slot that suits your schedule — it takes less
                      than a minute.
                    </p>
                  </div>
                </div>
                <CalendlyInline />
              </div>
            ) : (
              <Card variant="package">
                <h2 className="mb-4 text-h3 font-semibold text-foreground">
                  Schedule Your Call
                </h2>
                <ConsultationForm />
              </Card>
            )}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-h3 font-semibold text-foreground">
              Questions?
            </h2>
            <p className="text-sm text-text-secondary">
              Email us at{" "}
              <a
                href="mailto:team@aiminentai.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                team@aiminentai.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+917888876239"
                className="text-primary underline-offset-4 hover:underline"
              >
                +91 7888876239
              </a>
              .
            </p>
            <Button href={ROUTES.contact}>Go to Contact Page</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
