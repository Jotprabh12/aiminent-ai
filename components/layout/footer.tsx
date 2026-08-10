import Link from "next/link";

import { Logo } from "@/components/layout";
import { SocialIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { FOOTER, ROUTES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, "linkedin" | "x" | "github" | "instagram"> =
  {
    LinkedIn: "linkedin",
    X: "x",
    GitHub: "github",
    Instagram: "instagram",
  };

/**
 * Footer — compact single-row navigation on desktop (brand · Company ·
 * Solutions · Industries · Resources), stacked on mobile. Social links carry
 * proper brand icons (lucide-style) with a subtle hover lift. Server
 * Component; no client interactivity required.
 */
export function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <div className="mx-auto max-w-screen-2xl px-6 py-10 sm:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4">
            <Logo withWordmark asLink={false} />
            <p className="max-w-56 text-sm leading-relaxed text-text-secondary">
              Reliable AI automation for growing businesses.
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-text-secondary transition-colors hover:text-primary"
                >
                  {SITE.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.contactPhone.replace(/\D/g, "")}`}
                  className="text-text-secondary transition-colors hover:text-primary"
                >
                  {SITE.contactPhone}
                </a>
              </li>
            </ul>
            <Button
              href={ROUTES.bookConsultation}
              size="sm"
              className="mt-1 rounded-full"
            >
              Book Free Consultation
            </Button>
            <div className="flex gap-2.5">
              {FOOTER.social.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-label={social.label}
                >
                  <span className="sr-only">{social.label}</span>
                  <SocialIcon name={SOCIAL_ICONS[social.label] ?? "linkedin"} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation row — one horizontal group of link columns */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-4 lg:col-span-4">
            {FOOTER.columns.map((column) => (
              <div key={column.id} className="space-y-3">
                <h4 className="text-caption font-semibold tracking-widest text-text-muted uppercase">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm text-text-secondary transition-colors hover:text-primary",
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
        </div>

        {/* Base row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-divider pt-6 sm:flex-row">
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
