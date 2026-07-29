import { type ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface WorkflowDemoProps {
  title: string;
  subtitle?: string;
  steps: WorkflowStep[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function WorkflowDemo({
  title,
  subtitle,
  steps,
  ctaLabel,
  ctaHref,
}: WorkflowDemoProps) {
  return (
    <Section id="workflow" spacing="lg" background="muted">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-body text-text-secondary">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-6 w-0.5 bg-divider sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <Reveal key={step.title} delay={(step.delay ?? 0) * 0.1}>
                <div
                  className={cn(
                    "flex flex-col items-center gap-4 sm:flex-row",
                    step.number % 2 === 0 && "sm:flex-row-reverse",
                  )}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {step.icon}
                  </div>

                  <div
                    className={cn(
                      "flex-1 text-center sm:text-left",
                      step.number % 2 === 0 && "sm:text-right",
                    )}
                  >
                    <span className="text-caption font-semibold tracking-wider text-primary uppercase">
                      Step {step.number}
                    </span>
                    <h3 className="mt-1 text-body-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden w-1/2 sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {ctaLabel && ctaHref && (
          <div className="mt-12 text-center">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
