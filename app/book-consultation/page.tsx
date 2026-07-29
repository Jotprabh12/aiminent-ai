import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConsultationForm } from "@/components/forms";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book Free Consultation — Aiminent AI",
  description:
    "Schedule a free 30-minute consultation to discuss your automation needs.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <>
      <Section spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>Consultation</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              Book a Free Consultation
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              Get a personalized automation assessment with our team. We&apos;ll
              identify opportunities and build a roadmap tailored to your
              business.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="surface" reveal>
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="mb-4 text-h3 font-semibold text-foreground">
                What to Expect
              </h2>
              <ul className="space-y-3">
                {[
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
                ].map((item) => (
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

            {/* Form */}
            <Card variant="package">
              <h2 className="mb-4 text-h3 font-semibold text-foreground">
                Schedule Your Call
              </h2>
              <ConsultationForm />
            </Card>
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
                href="mailto:hello@aiminent.ai"
                className="text-primary underline-offset-4 hover:underline"
              >
                hello@aiminent.ai
              </a>{" "}
              or call{" "}
              <a
                href="tel:+15551234567"
                className="text-primary underline-offset-4 hover:underline"
              >
                +1 (555) 123-4567
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
