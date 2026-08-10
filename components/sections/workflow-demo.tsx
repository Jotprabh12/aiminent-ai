"use client";

import { type ReactNode } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib/utils";

/** One phase of the implementation timeline. */
export interface ImplementationPhase {
  id: string;
  /** Week marker, e.g. "Week 1" or "Week 3–4". */
  week: string;
  /** Phase title, e.g. "Discovery". */
  title: string;
  /** Key activities within the phase. */
  items: string[];
  /** Icon rendered in the timeline node. */
  icon: ReactNode;
  /** Estimated duration, e.g. "1 week". */
  duration: string;
}

export interface WorkflowDemoProps {
  title: string;
  subtitle?: string;
  /** Ordered implementation phases. */
  phases: ImplementationPhase[];
  /** Overall estimate, e.g. "~8 weeks from kickoff to launch". */
  totalDuration?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Progress line — the animated connector that "draws" itself down the
 * timeline as the section enters the viewport. No-op under reduced motion.
 */
function TimelineProgress({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn("bg-primary/40", className)} />;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={cn("bg-gradient-to-b from-primary to-primary/20", className)}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />
    </LazyMotion>
  );
}

export function WorkflowDemo({
  title,
  subtitle,
  phases,
  totalDuration,
  ctaLabel,
  ctaHref,
}: WorkflowDemoProps) {
  return (
    <Section id="how-it-works" spacing="lg" background="muted">
      <Container>
        <div className="mb-14 text-center">
          <p className="text-caption font-medium tracking-widest text-primary uppercase">
            How It Works
          </p>
          <h2 className="mt-2 text-h2 font-semibold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-prose-w text-body text-text-secondary">
              {subtitle}
            </p>
          )}
          {totalDuration && (
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-caption font-medium text-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {totalDuration}
            </span>
          )}
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Static track */}
          <div
            className="absolute top-0 bottom-0 left-7 w-px bg-divider md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          {/* Animated progress indicator */}
          <TimelineProgress className="absolute top-0 bottom-0 left-7 w-px md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {phases.map((phase, index) => {
              const alignRight = index % 2 === 1;
              return (
                <Reveal
                  key={phase.id}
                  delay={Math.min(index * 0.08, 0.3)}
                  amount={0.4}
                >
                  <div className="relative flex items-start md:items-center">
                    {/* Node */}
                    <div className="absolute left-7 z-10 -translate-x-1/2 md:left-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-background text-primary shadow-soft">
                        {phase.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "ml-16 w-full md:ml-0 md:w-[calc(50%-3.5rem)]",
                        alignRight
                          ? "md:order-2 md:ml-auto"
                          : "md:order-1 md:mr-auto",
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-xl border border-divider bg-surface p-6 transition-shadow hover:shadow-medium",
                        )}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-caption font-semibold tracking-wider text-primary uppercase">
                            {phase.week}
                          </span>
                          <span className="text-caption text-text-muted">
                            {phase.duration}
                          </span>
                        </div>
                        <h3 className="mt-3 text-body-lg font-semibold text-foreground">
                          {phase.title}
                        </h3>
                        <ul className="mt-3 space-y-1.5">
                          {phase.items.map((item) => (
                            <li
                              key={item}
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
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {ctaLabel && ctaHref && (
          <div className="mt-14 text-center">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
