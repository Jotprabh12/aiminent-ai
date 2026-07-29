import { type ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export interface ProblemCardProps {
  title: string;
  description: string;
  solution: string;
  icon: ReactNode;
}

export interface ProblemGridProps {
  title: string;
  subtitle?: string;
  problems: ProblemCardProps[];
}

export function ProblemCard({
  title,
  description,
  solution,
  icon,
}: ProblemCardProps) {
  return (
    <Card variant="feature" hoverLift>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-body-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
      <p className="mt-3 text-sm font-medium text-primary">{solution}</p>
    </Card>
  );
}

export function ProblemGrid({ title, subtitle, problems }: ProblemGridProps) {
  return (
    <Section id="problems" spacing="lg" background="surface">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-body text-text-secondary">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <ProblemCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
