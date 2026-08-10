import type { CTA } from "@/types/cta";
import type { Slug } from "@/types/common";

/**
 * Package (productised offering) model — the premium solution cards on the
 * homepage and packages page (Spec §11). Pricing is deliberately coarse —
 * only a starting point or "Contact us" — never detailed line items.
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
  /**
   * Pricing line shown on the card.
   * Allowed: "Starting from $X/month" | "Contact Us". No detailed pricing.
   */
  price: string;
  /** Lucide icon key (optional, not rendered in card). */
  icon?: string;
  cta?: CTA;
  /** Highlight as the most popular / featured package. */
  featured?: boolean;
}
