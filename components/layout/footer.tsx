import Link from "next/link";

import { Logo } from "@/components/layout";
import { FOOTER, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Footer — four-column layout on desktop, stacked on mobile.
 * Config-driven from `FOOTER` in `lib/constants/navigation.ts`
 * (Chapter 2 §8). Social links and the legal row are
 * Server Components; no client interactivity required.
 */
export function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo withWordmark asLink={false} />
            <p className="text-sm leading-relaxed text-text-secondary">
              AI automation agency helping businesses convert visitors into
              booked consultations since 2024.
            </p>
            <div className="flex gap-3">
              {FOOTER.social.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text-secondary transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  )}
                  aria-label={social.label}
                >
                  <span className="sr-only">{social.label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="6" />
                    <circle cx="8" cy="8" r="2" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((column) => (
            <div key={column.id} className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm text-text-secondary transition-colors hover:text-foreground",
                        item.comingSoon && "cursor-not-allowed opacity-50",
                      )}
                      aria-disabled={item.comingSoon || undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Base row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-divider pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-text-muted transition-colors hover:text-text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
