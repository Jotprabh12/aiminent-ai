import type { SEOMetadata } from "@/types";
import type { RouteKey } from "@/lib/constants/routes";

/**
 * Per-route SEO metadata inputs, consumed by `buildMetadata` in each route.
 * Centralising titles/descriptions here keeps them out of JSX and eases a
 * future CMS swap. Populated as routes are built; empty (typed) for now.
 */
export const pageMetadata: Partial<Record<RouteKey, SEOMetadata>> = {};
