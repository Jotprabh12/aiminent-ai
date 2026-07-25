import Link from "next/link";

import { cn } from "@/lib/utils";
import { ROUTES, SITE } from "@/lib/constants";

export interface LogoProps {
  /** Show the "Aiminent AI" wordmark next to the mark. Default: true. */
  withWordmark?: boolean;
  /** Wrap in a link to the homepage. Default: true. */
  asLink?: boolean;
  className?: string;
}

/**
 * Aiminent AI logo — temporary, minimal, monochrome mark (Chapter 3 §3).
 *
 * Rendered inline with `currentColor` so it inherits the current text color and
 * stays crisp at any size and in either theme. Swapping in the final brand mark
 * later means editing only this component. Server Component (no interactivity).
 */
export function Logo({
  withWordmark = true,
  asLink = true,
  className,
}: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground",
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M6 27 16 6 26 27"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 20 H21.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="6" r="2.6" fill="currentColor" />
        <circle cx="6" cy="27" r="2.2" fill="currentColor" />
        <circle cx="26" cy="27" r="2.2" fill="currentColor" />
      </svg>
      {withWordmark && (
        <span className="text-body-lg font-semibold tracking-tight">
          Aiminent<span className="font-normal text-text-secondary"> AI</span>
        </span>
      )}
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href={ROUTES.home}
      aria-label={`${SITE.name} — home`}
      className="inline-flex rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      {content}
    </Link>
  );
}
