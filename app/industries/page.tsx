import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries — Aiminent AI",
  description:
    "AI automation solutions for real estate and beyond. See how we help businesses across industries.",
});

const industries = [
  {
    name: "Real Estate",
    tagline: "Fully available and production-ready.",
    description:
      "Automate lead capture, follow-ups, property matching, and transaction workflows.",
    features: [
      "Lead qualification",
      "Appointment scheduling",
      "CRM integration",
      "Follow-up automation",
    ],
    status: "live",
    href: "/industries/real-estate",
  },
  {
    name: "Healthcare",
    tagline: "Coming soon.",
    description:
      "Patient intake automation, appointment reminders, and insurance verification.",
    features: [
      "Patient intake",
      "Appointment reminders",
      "Compliance automation",
    ],
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Finance",
    tagline: "Coming soon.",
    description:
      "Compliance automation, client onboarding, and document processing.",
    features: ["KYC automation", "Document processing", "Client onboarding"],
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Education",
    tagline: "Coming soon.",
    description:
      "Student enrollment, course recommendations, and administrative automation.",
    features: [
      "Enrollment automation",
      "Course recommendations",
      "Admin workflows",
    ],
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Legal",
    tagline: "Coming soon.",
    description:
      "Document drafting automation, client intake, and case management.",
    features: ["Document drafting", "Client intake", "Case management"],
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Manufacturing",
    tagline: "Coming soon.",
    description:
      "Supply chain automation, quality control, and inventory management.",
    features: ["Supply chain", "Quality control", "Inventory management"],
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Hospitality",
    tagline: "Coming soon.",
    description:
      "Guest communication automation, booking management, and feedback collection.",
    features: [
      "Guest communication",
      "Booking management",
      "Feedback collection",
    ],
    status: "coming-soon",
    href: "#",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Section id="industries-hero" spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>Industries</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              Automation Built for Your Industry
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              We help businesses across industries automate repetitive work and
              focus on growth.
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
            {industries.map((ind) => (
              <Card
                key={ind.name}
                variant={ind.status === "live" ? "package" : "feature"}
                hoverLift
                className={cn(
                  ind.status === "live" && "border-primary/30",
                  "relative",
                )}
              >
                {ind.status === "live" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Available</Badge>
                  </div>
                )}
                {ind.status === "coming-soon" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                )}

                <h3 className="text-heading-3 font-semibold text-foreground">
                  {ind.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {ind.tagline}
                </p>
                <p className="mt-3 text-sm text-text-secondary">
                  {ind.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {ind.features.map((f) => (
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

                <div className="mt-6">
                  <Button
                    variant={ind.status === "live" ? "primary" : "outline"}
                    size="sm"
                    href={ind.href}
                    disabled={ind.status === "coming-soon"}
                  >
                    {ind.status === "live" ? "Learn more" : "Notify me"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        heading="Not Listed? We Can Build It."
        description="Custom automation solutions for any industry."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Custom Solutions"
      />
    </>
  );
}
