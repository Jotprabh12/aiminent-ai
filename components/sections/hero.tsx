import { type ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  highlights?: string[];
  /** Premium background image behind the hero. */
  backgroundImage?: string;
  /** Alt text for the background image. */
  backgroundImageAlt?: string;
  /** Object-position for the background image. Default: "center". */
  backgroundImagePosition?: string;
  /** Extra content rendered below the CTAs (e.g. logo strip). */
  footer?: ReactNode;
}

export function HeroSection({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  highlights,
  backgroundImage,
  backgroundImageAlt,
  backgroundImagePosition = "center",
  footer,
}: HeroSectionProps) {
  return (
    <Section
      id="hero"
      spacing="lg"
      background="base"
      className={cn(backgroundImage && "relative isolate overflow-hidden")}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: backgroundImagePosition }}
            className="-z-20 object-cover"
          />
          {/* Dark overlay so typography stays perfectly readable */}
          <div
            className="absolute inset-0 -z-10 bg-background/75"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/55 to-background"
            aria-hidden="true"
          />
        </>
      )}

      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          {eyebrow && (
            <Reveal>
              <span className="rounded-full bg-primary/10 px-4 py-1 text-caption font-medium tracking-wider text-primary uppercase">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal>
            <h1 className="text-h1 leading-tight font-semibold text-foreground">
              {headline}
            </h1>
          </Reveal>
          {subheadline && (
            <Reveal>
              <p className="max-w-prose-w text-body-lg text-text-secondary">
                {subheadline}
              </p>
            </Reveal>
          )}
          {(primaryCta || secondaryCta) && (
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {primaryCta}
                {secondaryCta}
              </div>
            </Reveal>
          )}
          {highlights && highlights.length > 0 && (
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                {highlights.map((chip) => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 text-sm text-text-secondary"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-primary"
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
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
          {footer && <Reveal delay={0.15}>{footer}</Reveal>}
        </div>
      </Container>
    </Section>
  );
}
