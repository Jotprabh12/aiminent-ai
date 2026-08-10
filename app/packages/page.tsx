import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Packages — Aiminent AI",
  description:
    "Flexible AI automation packages for growing businesses. From Starter to Enterprise.",
  path: "/packages",
});

const packages = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Perfect for small teams getting started with automation.",
    problem: "Lose leads to slow follow-ups and manual processes.",
    outcome: "3× faster response times and 40% more qualified leads.",
    automations: [
      "Lead capture",
      "Auto-responder",
      "Basic CRM sync",
      "WhatsApp integration",
    ],
    price: "Starting from $999/month",
    featured: false,
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "The most popular choice for scaling businesses.",
    problem: "Scaling operations without scaling your team.",
    outcome: "60% reduction in manual tasks and 25% higher conversion rates.",
    automations: [
      "Everything in Starter",
      "AI lead scoring",
      "Sales pipeline automation",
      "Analytics dashboard",
    ],
    price: "Starting from $3,999/month",
    featured: true,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    tagline: "Full-suite automation for organizations of any size.",
    problem: "Complex workflows across departments and systems.",
    outcome: "End-to-end automation with dedicated support and SLAs.",
    automations: [
      "Everything in Growth",
      "Custom AI models",
      "Multi-department workflows",
      "Dedicated account manager",
    ],
    price: "Contact Us",
    featured: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        badge="Packages"
        title="Automation That Grows With You"
        description="Choose the automation level that fits your business. All packages include ongoing support and optimization."
        image="/images/hero-packages.jpg"
        imageAlt="Business leaders reviewing their automation strategy"
        imagePosition="center 60%"
      >
        <Button href={ROUTES.bookConsultation}>Book Free Consultation</Button>
      </PageHero>

      <Section spacing="lg" background="surface" reveal>
        <Container>
          <h2 className="mb-8 text-center text-h2 font-semibold text-foreground">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.slug}
                variant={pkg.featured ? "package" : "feature"}
                hoverLift
                className={cn(pkg.featured && "border-primary/30", "relative")}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}

                <h3 className="text-heading-3 font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {pkg.tagline}
                </p>
                <p className="mt-3 text-sm text-text-secondary">
                  {pkg.problem}
                </p>

                <div className="mt-4 rounded-lg bg-primary/5 px-4 py-3">
                  <p className="text-sm font-semibold text-primary">
                    {pkg.price}
                  </p>
                </div>

                <p className="mt-4 text-sm font-medium text-foreground">
                  Expected outcome:
                </p>
                <p className="text-sm text-text-secondary">{pkg.outcome}</p>

                <ul className="mt-4 space-y-2">
                  {pkg.automations.map((a) => (
                    <li
                      key={a}
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
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    href={ROUTES.bookConsultation}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        heading="Need a Custom Package?"
        description="We can tailor an automation plan around your specific needs."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Custom Solutions"
      />
    </>
  );
}
