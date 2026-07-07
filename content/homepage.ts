/**
 * Homepage composition.
 * Defines the ORDER of homepage sections (Spec §9) as structure — not copy.
 * Each section's content is authored in its section component / content file in
 * a later session. Reordering the page is a one-line change here.
 */
export const HOMEPAGE_SECTIONS = [
  "hero",
  "trusted-technologies",
  "problems",
  "featured-solutions",
  "packages",
  "workflow-demo",
  "why-aiminent",
  "process",
  "industries",
  "faq",
  "final-cta",
] as const;

export type HomepageSection = (typeof HOMEPAGE_SECTIONS)[number];
