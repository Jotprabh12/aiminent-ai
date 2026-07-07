import { track } from "@vercel/analytics";

/**
 * Analytics wrapper — a thin, typed seam over Vercel Analytics.
 * ---------------------------------------------------------------------------
 * Call `trackEvent` from UI instead of the vendor SDK directly, so swapping or
 * augmenting the provider later (GA, Meta Pixel) is a one-file change.
 * The `<Analytics />` component itself is mounted in app/layout.tsx.
 */

/** Custom conversion events. Extend as funnels are built out. */
export type AnalyticsEvent =
  | "cta_click"
  | "consultation_started"
  | "consultation_booked"
  | "contact_submitted";

type EventProperties = Record<string, string | number | boolean | null>;

/** Record a custom analytics event. No-ops safely outside production. */
export function trackEvent(
  event: AnalyticsEvent,
  properties?: EventProperties,
): void {
  track(event, properties);
}
