import { Container } from "@/components/layout/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About — Aiminent AI",
  description:
    "We help businesses automate repetitive work, improve customer experiences, and scale operations with AI-powered workflows and custom software.",
});

const values = [
  {
    title: "Customer First",
    description:
      "Every decision starts with the customer. We build what actually works.",
  },
  {
    title: "Practical Innovation",
    description:
      "We prefer proven solutions over flashy experiments. Results over hype.",
  },
  {
    title: "Security",
    description:
      "Enterprise-grade security built into every automation we deliver.",
  },
  {
    title: "Transparency",
    description: "Clear pricing, honest timelines, and upfront communication.",
  },
  {
    title: "Continuous Improvement",
    description: "We measure, optimize, and iterate long after deployment.",
  },
  {
    title: "Long-Term Partnership",
    description: "We are not a vendor. We're invested in your success.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section id="about-hero" spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>About Us</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              Building Practical AI Automation for Growing Businesses
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              We help businesses automate repetitive work, improve customer
              experiences, and scale operations with AI-powered workflows and
              custom software.
            </p>
            <Button href={ROUTES.bookConsultation}>
              Book Free Consultation
            </Button>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section id="story" spacing="lg" background="surface">
        <Container>
          <h2 className="text-center text-h2 font-semibold text-foreground">
            Our Story
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card variant="feature">
              <h3 className="text-body-lg font-semibold text-foreground">
                Why We Founded
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                We saw businesses losing deals to slow, manual processes.
                Automation should not be a luxury — it should be the standard.
              </p>
            </Card>
            <Card variant="feature">
              <h3 className="text-body-lg font-semibold text-foreground">
                Why Manual Processes Fail
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Repetitive work drains teams of their best talent. AI handles
                the routine so your people focus on what matters.
              </p>
            </Card>
            <Card variant="feature">
              <h3 className="text-body-lg font-semibold text-foreground">
                Why Practical Automation Wins
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Measurable ROI starts with solving real problems. We build what
                works, not what&apos;s trendy.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section spacing="lg" background="base">
        <Container>
          <h2 className="text-center text-h2 font-semibold text-foreground">
            Our Values
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} variant="feature" hoverLift>
                <h3 className="text-body-lg font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {v.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section id="process" spacing="lg" background="surface">
        <Container>
          <h2 className="text-center text-h2 font-semibold text-foreground">
            Our Process
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {[
              { step: "1", label: "Discover" },
              { step: "2", label: "Design" },
              { step: "3", label: "Build" },
              { step: "4", label: "Test" },
              { step: "5", label: "Deploy" },
              { step: "6", label: "Support" },
            ].map((s) => (
              <div
                key={s.label}
                className={cn(
                  "flex items-center gap-3",
                  s.step !== "6" &&
                    "sm:after:h-px sm:after:flex-1 sm:after:bg-divider",
                )}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {s.step}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technology Stack */}
      <Section spacing="lg" background="base">
        <Container>
          <h2 className="text-center text-h2 font-semibold text-foreground">
            Our Technology Stack
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {[
              "OpenAI",
              "Anthropic",
              "Google Gemini",
              "n8n",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "WhatsApp Business API",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-divider bg-surface px-4 py-2 text-sm text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABanner
        heading="Ready to Automate Your Business?"
        description="No obligation. We'll identify automation opportunities tailored to your business."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Free Consultation"
      />
    </>
  );
}
