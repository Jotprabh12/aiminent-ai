import type { CTA } from "@/types/cta";
import type { Slug } from "@/types/common";

/**
 * Solution model — an individual capability with its own detail route
 * (e.g. /solutions/ai-lead-engine, Chapter 7 §6).
 */

export interface SolutionFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface Solution {
  slug: Slug;
  name: string;
  tagline: string;
  /** Longer overview paragraph for the detail page. */
  overview: string;
  problem: string;
  outcome: string;
  features: SolutionFeature[];
  /** Industries this solution is most relevant to (industry slugs). */
  industries: Slug[];
  icon: string;
  cta?: CTA;
}
