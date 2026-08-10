import { type ReactNode } from "react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  /** Small eyebrow badge above the title. */
  badge?: string;
  /** Page title. */
  title: string;
  /** Supporting description. */
  description?: string;
  /** Path to the hero background image (public/…). */
  image: string;
  /** Alt text for the background image. */
  imageAlt: string;
  /** Object-position for the image. Default: "center". */
  imagePosition?: string;
  /** Extra content below the description (CTAs, links). */
  children?: ReactNode;
  className?: string;
}

/**
 * Page hero — full-width intro block with a premium background image.
 *
 * The image sits behind a layered dark overlay (bottom-weighted gradient) so
 * typography stays perfectly readable while the photo adds atmosphere and
 * storytelling context. Server Component; reveal handled per-block.
 */
export function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-background",
        "py-24 sm:py-32",
        className,
      )}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: imagePosition }}
        className="-z-20 object-cover"
      />

      {/* Overlay layers: readability + blend into the page */}
      <div
        className="absolute inset-0 -z-10 bg-background/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/60 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-primary/5 mix-blend-multiply"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {badge && (
            <Reveal>
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-caption font-medium tracking-wider text-primary uppercase">
                {badge}
              </span>
            </Reveal>
          )}
          <Reveal>
            <h1 className="text-h1 font-semibold tracking-tight text-foreground">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="text-body-lg text-text-secondary">{description}</p>
            </Reveal>
          )}
          {children && <Reveal delay={0.2}>{children}</Reveal>}
        </div>
      </Container>
    </section>
  );
}
