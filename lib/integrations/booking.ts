import { env } from "@/lib/config/env";

/**
 * Booking abstraction — single seam between the consultation UI and the
 * scheduling backend.
 *
 * Today the flow supports two providers:
 *  1. Calendly — the active provider. The live event URL below is the V1
 *     default, so booking works with zero configuration. An environment
 *     override (`NEXT_PUBLIC_CALENDLY_URL`) is respected when set — the hook
 *     a future V2 swap (or a re-branded event URL) can use without touching
 *     the UI.
 *  2. Form — the built-in consultation form (server action + email). Kept as
 *     a defensive fallback and for future provider switching.
 *
 * Swapping scheduling backends later (Cal.com, Acuity, …) means implementing
 * this interface once — pages and actions never touch provider specifics.
 */

/** Live Calendly event — the one true booking link for V1. */
export const DEFAULT_CALENDLY_URL = "https://calendly.com/mandeepvvip123/30min";

export interface BookingProvider {
  /** Display name of the scheduling backend. */
  readonly name: string;
  /** True when this provider handles scheduling directly (e.g. Calendly). */
  handlesScheduling(): boolean;
  /** Absolute booking URL when the provider is external; else null. */
  getBookingUrl(): string | null;
}

export const calendlyProvider: BookingProvider = {
  name: "Calendly",
  handlesScheduling: () => true,
  getBookingUrl: () => env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL,
};

export const formProvider: BookingProvider = {
  name: "Consultation Form",
  handlesScheduling: () => true,
  getBookingUrl: () => null,
};

/**
 * Resolve the active booking provider. Calendly handles scheduling in V1;
 * the form provider is available as a fallback path.
 */
export function getActiveBookingProvider(): BookingProvider {
  return calendlyProvider.handlesScheduling() ? calendlyProvider : formProvider;
}
