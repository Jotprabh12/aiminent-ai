import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions — Aiminent AI",
  description:
    "AI-powered automation solutions for real estate and beyond. From lead engines to customer lifecycle automation.",
});

const solutions = [
  {
    name: "AI Lead Engine",
    tagline: "Intelligent lead capture and qualification.",
    description: "AI identifies, scores, and routes leads in real time.",
    features: [
      "Real-time scoring",
      "Auto qualification",
      "Smart routing",
      "Lead nurturing",
    ],
    href: "/solutions/ai-lead-engine",
  },
  {
    name: "AI Sales Assistant",
    tagline: "Conversational AI that books appointments.",
    description:
      "An always-on assistant that handles inquiries and books consultations.",
    features: [
      "24/7 availability",
      "Natural conversations",
      "Calendar sync",
      "Multi-language",
    ],
    href: "/solutions/ai-sales-assistant",
  },
  {
    name: "AI Property Consultant",
    tagline: "Personalized property recommendations.",
    description:
      "AI matches buyers with properties and guides them through decisions.",
    features: [
      "Preference matching",
      "Market analysis",
      "Virtual tours",
      "Offer guidance",
    ],
    href: "/solutions/ai-property-consultant",
  },
  {
    name: "Customer Lifecycle Automation",
    tagline: "End-to-end customer journey automation.",
    description:
      "Automate every touchpoint from first inquiry to post-sale follow-up.",
    features: ["Onboarding flows", "Re-engagement campaigns", "Feedback loops"],
    href: "/solutions/customer-lifecycle",
  },
  {
    name: "Marketing Automation Suite",
    tagline: "Omnichannel marketing that converts.",
    description:
      "Email, SMS, WhatsApp — all automated with AI-driven personalization.",
    features: [
      "Multi-channel",
      "AI personalization",
      "Analytics",
      "A/B testing",
    ],
    href: "/solutions/marketing-automation",
  },
  {
    name: "Custom AI Solutions",
    tagline: "Bespoke automation for unique challenges.",
    description:
      "When out-of-the-box isn't enough, we build custom AI workflows.",
    features: [
      "Custom models",
      "API integration",
      "Dedicated team",
      "Scalable architecture",
    ],
    href: "/solutions/custom-ai",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section id="solutions-hero" spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>Solutions</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              AI-Powered Solutions for Your Business
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              Choose from our suite of automation solutions or build something
              custom with our team.
            </p>
            <Button href={ROUTES.bookConsultation}>
              Book Free Consultation
            </Button>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="surface">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Card key={s.name} variant="feature" hoverLift>
                <h3 className="text-heading-3 font-semibold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{s.tagline}</p>
                <p className="mt-3 text-sm text-text-secondary">
                  {s.description}
                </p>
                {s.features.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6">
                  <Button variant="outline" size="sm" href={s.href}>
                    Learn more
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        heading="Not Sure Which Solution Fits?"
        description="Let our team build a custom automation plan for your business."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Free Consultation"
      />
    </>
  );
}
