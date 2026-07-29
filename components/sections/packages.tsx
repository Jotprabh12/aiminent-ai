import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Stagger } from "@/components/animations";
import { type Package } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface PackagesSectionProps {
  title: string;
  subtitle?: string;
  packages: Package[];
}

export function PackagesSection({
  title,
  subtitle,
  packages,
}: PackagesSectionProps) {
  return (
    <Section id="packages" spacing="lg" background="base">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-body text-text-secondary">{subtitle}</p>
          )}
        </div>

        <Stagger>
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
                    <Badge>Recommended</Badge>
                  </div>
                )}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">
                    {pkg.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-heading-3 font-semibold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {pkg.tagline}
                </p>
                <p className="mt-3 text-sm text-text-secondary">
                  {pkg.problem}
                </p>

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

                {pkg.cta && (
                  <Button variant="outline" size="sm" href={pkg.cta.href}>
                    {pkg.cta.label}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </Stagger>
      </Container>
    </Section>
  );
}
