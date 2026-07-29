import type { CTA } from "@/types/cta";
import type { Slug } from "@/types/common";

/**
 * Package (productised offering) model — the premium solution cards on the
 * homepage and packages page (Spec §11). No pricing is stored (Spec §5).
 */

export interface Package {
  slug: Slug;
  name: string;
  /** One-line positioning statement. */
  tagline: string;
  /** The problem this package solves. */
  problem: string;
  /** The measurable outcome it delivers. */
  outcome: string;
  /** Key automations included. */
  automations: string[];
  /** Lucide icon key (optional, not rendered in card). */
  icon?: string;
  cta?: CTA;
  /** Highlight as the recommended / featured package. */
  featured?: boolean;
}
