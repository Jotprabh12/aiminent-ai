import { type ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger } from "@/components/animations";
import { cn } from "@/lib/utils";

export interface SolutionCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

export function SolutionCard({
  name,
  tagline,
  description,
  features,
  icon,
  ctaLabel,
  ctaHref,
  featured = false,
}: SolutionCardProps) {
  return (
    <Card
      variant={featured ? "package" : "feature"}
      hoverLift
      className={cn(featured && "border-primary/30")}
    >
      {featured && <Badge variant="default">Featured</Badge>}
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary",
          featured && "bg-primary/20",
        )}
      >
        {icon}
      </div>
      <h3 className="text-heading-3 font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{tagline}</p>
      <p className="mt-3 text-sm text-text-secondary">{description}</p>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
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
        <Button variant="outline" size="sm" href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
}

export interface SolutionsGridProps {
  title: string;
  subtitle?: string;
  solutions: SolutionCardProps[];
}

export function SolutionsGrid({
  title,
  subtitle,
  solutions,
}: SolutionsGridProps) {
  return (
    <Section id="solutions" spacing="lg" background="base">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-body text-text-secondary">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Reveal key={s.name}>
              <SolutionCard {...s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
