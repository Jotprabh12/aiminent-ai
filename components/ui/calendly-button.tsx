import { env } from "@/lib/config/env";
import { features } from "@/lib/config/features";

export function CalendlyButton() {
  const url = env.NEXT_PUBLIC_CALENDLY_URL;

  if (!features.calendly || !url) {
    return null;
  }

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
