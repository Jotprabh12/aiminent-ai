/**
 * Route path constants — the single source of truth for internal paths.
 * Reference `ROUTES.x` instead of hard-coding strings so a path change is a
 * one-line edit and typos become type errors.
 */

export const ROUTES = {
  home: "/",
  about: "/about",
  solutions: "/solutions",
  packages: "/packages",
  industries: "/industries",
  contact: "/contact",
  bookConsultation: "/book-consultation",
  thankYou: "/thank-you",
  resources: "/resources",
  blog: "/blog",
  caseStudies: "/case-studies",
  privacy: "/privacy",
  terms: "/terms",
} as const satisfies Record<string, string>;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

/** Build a solution detail path from its slug: /solutions/ai-lead-engine. */
export function solutionPath(slug: string): string {
  return `${ROUTES.solutions}/${slug}`;
}

/** Build an industry detail path from its slug: /industries/real-estate. */
export function industryPath(slug: string): string {
  return `${ROUTES.industries}/${slug}`;
}
