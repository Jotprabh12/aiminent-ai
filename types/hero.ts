import type { CTA } from "@/types/cta";

/**
 * Hero section content model. Kept generic so every page (home, solutions,
 * industries) can reuse the same Hero section component with different content.
 */

export interface HeroContent {
  /** Small eyebrow / kicker above the headline. */
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  /** Optional supporting bullets or trust points. */
  highlights?: string[];
}
