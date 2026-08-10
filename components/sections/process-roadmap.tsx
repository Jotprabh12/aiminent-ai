import { type ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";

export interface RoadmapStage {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProcessRoadmapProps {
  title: string;
  subtitle?: string;
  /** Ordered stages of the engagement journey. */
  stages: RoadmapStage[];
  className?: string;
}

/**
 * Process roadmap — a connected visual journey through every stage of
 * working with Aiminent AI. On desktop, stages sit on a curved connector
 * path (like a route map); on mobile they stack with a vertical rail.
 */
export function ProcessRoadmap({
  title,
  subtitle,
  stages,
  className,
}: ProcessRoadmapProps) {
  return (
    <Section
      id="process"
      spacing="lg"
      background="surface"
      className={className}
    >
      <Container>
        <div className="mb-14 text-center">
          <p className="text-caption font-medium tracking-widest text-primary uppercase">
            Our Process
          </p>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-prose-w text-body text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>

        <div className="hidden lg:block">
          <ol className="relative grid grid-cols-6">
            {/* Connector path */}
            <svg
              className="absolute top-7 left-0 h-3 w-full text-divider"
              viewBox="0 0 1200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 2 C 100 2, 100 10, 200 10 S 300 2, 400 2 S 500 10, 600 10 S 700 2, 800 2 S 900 10, 1000 10 S 1100 2, 1200 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>

            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.1} amount={0.4}>
                <li className="flex flex-col items-center px-4 text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-background text-primary shadow-soft">
                    {stage.icon}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-caption font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-body-lg font-semibold text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-52 text-sm text-text-secondary">
                    {stage.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet rail */}
        <ol className="relative space-y-8 lg:hidden">
          <div
            className="absolute top-2 bottom-2 left-7 w-px bg-divider"
            aria-hidden="true"
          />
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 0.06} amount={0.3}>
              <li className="relative flex items-start gap-5 pl-16">
                <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-background text-primary shadow-soft">
                  {stage.icon}
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-caption font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-body-lg font-semibold text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-secondary">
                    {stage.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
