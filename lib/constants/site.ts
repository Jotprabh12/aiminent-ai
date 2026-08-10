import { env } from "@/lib/config/env";

/**
 * Site-wide configuration — company facts, canonical URL, and SEO defaults.
 * This is CONFIG, not marketing copy: names, URLs, and metadata seeds only.
 *
 * Some values are provisional (contact email, social URLs) pending brand sign-
 * off — see docs/decision-log.md. They are centralised here so finalising them
 * is a single edit.
 */

export const SITE = {
  name: "Aiminent AI",
  shortName: "Aiminent",

  /** Positioning statement (Spec §2). Avoid hype like "AI Operating System". */
  tagline: "AI Automation Agency for Growing Businesses",

  /** Default meta description (Appendix B §16). */
  description:
    "Aiminent AI helps businesses automate CRM, WhatsApp, lead management, and repetitive workflows using practical, ROI-focused AI solutions.",

  /** Canonical base URL, from validated env (defaults to localhost in dev). */
  url: env.NEXT_PUBLIC_SITE_URL,

  /** BCP-47 locale — initial market is India (Spec §1). */
  locale: "en_IN",

  /** Default social / Open Graph share image (add asset in a later session). */
  ogImage: "/images/og-default.png",

  /** Provisional contact address — confirm before launch. */
  contactEmail: "team@aiminentai.com",
  contactPhone: "+91 7888876239",

  /** Default SEO keywords (Chapter 10). Pages may extend these. */
  keywords: [
    "AI Automation Agency",
    "Real Estate Automation",
    "AI Business Automation",
    "CRM Automation",
    "WhatsApp Automation",
    "Lead Management Automation",
    "Workflow Automation",
  ],
} as const;

/** Social profiles — provisional URLs, confirm before launch. */
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/aiminent-ai",
  github: "https://github.com/aiminent-ai",
  x: "https://x.com/aiminentai",
  instagram: "https://www.instagram.com/aiminentai",
} as const;

export type Site = typeof SITE;
