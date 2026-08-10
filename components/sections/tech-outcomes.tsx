import {
  BarChart3,
  BrainCircuit,
  Database,
  MessageCircle,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";
import { BrandLogo, type BrandLogoKey } from "@/components/ui/brand-logos";
import { cn } from "@/lib/utils";

export interface TechOutcome {
  id: string;
  /** Outcome label, e.g. "AI Models". */
  title: string;
  /** Customer-facing explanation of what this layer delivers. */
  description: string;
  /** Logos shown for this outcome. */
  brands: BrandLogoKey[];
}

export interface TechOutcomesProps {
  title: string;
  subtitle?: string;
  /** Ordered outcome groups. */
  outcomes: TechOutcome[];
  className?: string;
}

const GROUP_ICONS = {
  "ai-models": BrainCircuit,
  automation: Workflow,
  "business-systems": Database,
  communication: MessageCircle,
  reporting: BarChart3,
} as const;

/**
 * Technology — grouped by the outcomes a customer cares about, not by
 * engineering stack. Each layer flows into the next (models → automation →
 * systems → communication → reporting) with logos and a plain-language
 * explanation of the benefit.
 */
export function TechOutcomes({
  title,
  subtitle,
  outcomes,
  className,
}: TechOutcomesProps) {
  return (
    <Section
      id="technology"
      spacing="lg"
      background="base"
      className={className}
    >
      <Container>
        <div className="mb-14 text-center">
          <p className="text-caption font-medium tracking-widest text-primary uppercase">
            Technology
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

        <div className="mx-auto max-w-3xl">
          {outcomes.map((outcome, index) => {
            const Icon = GROUP_ICONS[outcome.id as keyof typeof GROUP_ICONS];
            return (
              <Reveal key={outcome.id} delay={Math.min(index * 0.08, 0.3)}>
                <div className="relative">
                  <div
                    className={cn(
                      "flex flex-col items-center gap-4 rounded-xl border border-divider bg-surface p-6 text-center sm:flex-row sm:gap-6 sm:text-left",
                    )}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body-lg font-semibold text-foreground">
                        {outcome.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {outcome.description}
                      </p>
                      <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                        {outcome.brands.map((brand) => (
                          <li
                            key={brand}
                            className="flex items-center gap-1.5 text-text-muted"
                          >
                            <BrandLogo name={brand} className="h-4 w-auto" />
                            <span className="text-xs font-medium">
                              {
                                {
                                  openai: "OpenAI",
                                  anthropic: "Anthropic",
                                  gemini: "Google Gemini",
                                  whatsapp: "WhatsApp",
                                  hubspot: "HubSpot",
                                  salesforce: "Salesforce",
                                  zapier: "Zapier",
                                  n8n: "n8n",
                                }[brand]
                              }
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Downward connector between layers */}
                  {index < outcomes.length - 1 && (
                    <div
                      className="flex justify-center py-2 text-primary/50"
                      aria-hidden="true"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
