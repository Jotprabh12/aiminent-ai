import { features } from "@/lib/config/features";
import { calendlyProvider } from "@/lib/integrations/booking";

/**
 * Calendly CTA — renders only when the Calendly feature flag is on AND a
 * booking URL is configured. Reads through the booking provider so no
 * credential or URL is hardcoded here.
 */
export function CalendlyButton() {
  if (!features.calendly || !calendlyProvider.handlesScheduling()) {
    return null;
  }

  const url = calendlyProvider.getBookingUrl();
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-body-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:outline-none"
    >
      Schedule on Calendly
    </a>
  );
}
