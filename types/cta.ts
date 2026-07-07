/**
 * Call-to-action types. CTAs are the conversion primitive of the site
 * (Chapter 12 §2) and appear in the hero, sections, and CTA banners.
 */

export type CTAVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

export interface CTA {
  /** Button / link label, e.g. "Book Free Consultation". */
  label: string;
  /** Destination path or URL. */
  href: string;
  variant?: CTAVariant;
  external?: boolean;
  /** Optional Lucide icon key resolved by the consuming component. */
  icon?: string;
  /** Analytics event name fired on click (see lib/analytics). */
  analyticsId?: string;
}
