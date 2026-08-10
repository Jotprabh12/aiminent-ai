import type { NavItem, FooterConfig } from "@/types/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { SOCIALS } from "@/lib/constants/site";

/**
 * Navigation configuration (structure from Chapter 2).
 * Labels here are UI wayfinding strings, not marketing copy. Destinations use
 * ROUTES so paths stay consistent site-wide.
 */

/** Primary (desktop + mobile) navigation. */
export const MAIN_NAV: NavItem[] = [
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Industries", href: ROUTES.industries },
  { label: "Packages", href: ROUTES.packages },
  { label: "About", href: ROUTES.about },
  { label: "Resources", href: ROUTES.resources, comingSoon: true },
  { label: "Contact", href: ROUTES.contact },
];

/** Primary conversion CTA shown in the navbar (Spec §5). */
export const PRIMARY_CTA: NavItem = {
  label: "Book Free Consultation",
  href: ROUTES.bookConsultation,
};

/**
 * Footer — a single compact navigation row (Company · Solutions · Industries ·
 * Resources) plus social and legal links (Chapter 2 §8).
 */
export const FOOTER: FooterConfig = {
  columns: [
    {
      id: "company",
      title: "Company",
      items: [
        { label: "About", href: ROUTES.about },
        { label: "Contact", href: ROUTES.contact },
      ],
    },
    {
      id: "solutions",
      title: "Solutions",
      items: [{ label: "All Solutions", href: ROUTES.solutions }],
    },
    {
      id: "industries",
      title: "Industries",
      items: [{ label: "All Industries", href: ROUTES.industries }],
    },
    {
      id: "resources",
      title: "Resources",
      items: [
        { label: "Blog", href: ROUTES.blog, comingSoon: true },
        { label: "Case Studies", href: ROUTES.caseStudies, comingSoon: true },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: SOCIALS.linkedin, external: true },
    { label: "X", href: SOCIALS.x, external: true },
    { label: "GitHub", href: SOCIALS.github, external: true },
    { label: "Instagram", href: SOCIALS.instagram, external: true },
  ],
  legal: [
    { label: "Privacy", href: ROUTES.privacy },
    { label: "Terms", href: ROUTES.terms },
  ],
};
