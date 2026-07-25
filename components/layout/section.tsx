import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations";
import { Container, type ContainerSize } from "@/components/layout/container";

/** Vertical padding presets (token spacing scale). */
const SPACING = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32",
} as const;

/** Background surface presets (theme tokens). */
const BACKGROUND = {
  transparent: "",
  base: "bg-background",
  surface: "bg-surface",
  muted: "bg-surface-muted",
} as const;

export type SectionSpacing = keyof typeof SPACING;
export type SectionBackground = keyof typeof BACKGROUND;

export interface SectionProps {
  children: ReactNode;
  /** Anchor id — enables in-page linking and aria labelling. */
  id?: string;
  /** Vertical padding. Default: "lg". */
  spacing?: SectionSpacing;
  /** Background surface. Default: "transparent". */
  background?: SectionBackground;
  /** Wrap children in a Container. Default: true. Set false for full-bleed. */
  container?: boolean;
  /** Container max-width when `container` is true. Default: "page". */
  containerSize?: ContainerSize;
  /** Reveal the section on scroll (Chapter 9 §7). Default: false. */
  reveal?: boolean;
  /** id of the element labelling this section (for aria-labelledby). */
  "aria-labelledby"?: string;
  className?: string;
  /** Extra classes for the inner Container. */
  containerClassName?: string;
}

/**
 * Section — the vertical layout primitive. Standardises section spacing,
 * background surface, anchor id, and content width so pages compose from
 * consistent blocks instead of bespoke wrappers (Chapter 8 §5 — configurable
 * sections). Server Component; opts into client motion only when `reveal`.
 *
 * @example
 * <Section id="process" background="surface" reveal>
 *   …content…
 * </Section>
 */
export function Section({
  children,
  id,
  spacing = "lg",
  background = "transparent",
  container = true,
  containerSize = "page",
  reveal = false,
  className,
  containerClassName,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  const inner = container ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(SPACING[spacing], BACKGROUND[background], className)}
    >
      {reveal ? <Reveal as="div">{inner}</Reveal> : inner}
    </section>
  );
}
