"use client";

import { useState } from "react";
import Link from "next/link";

import { useScroll } from "@/hooks";
import { useReducedMotion } from "@/hooks";
import { useLockBodyScroll } from "@/hooks";
import { useFocusTrap } from "@/hooks";
import { MobileMenu } from "@/components/layout";
import { Logo } from "@/components/layout";
import { MAIN_NAV, PRIMARY_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar with a glass surface after scroll.
 *
 * - Desktop: horizontal links + primary CTA.
 * - Mobile: hamburger toggles a drawer that traps focus and locks
 *   body scroll (Chapter 9 §8).
 * - Respects `prefers-reduced-motion` (Chapter 9 §17).
 * - Keyboard accessible: focus-visible ring on every interactive
 *   element; Esc closes the mobile drawer.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled } = useScroll(8);
  const reduceMotion = useReducedMotion();
  useLockBodyScroll(mobileOpen);
  const trapRef = useFocusTrap(mobileOpen);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-background/80 shadow-soft backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
          <Logo asLink />

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {MAIN_NAV.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
            <Link
              href={PRIMARY_CTA.href}
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              {PRIMARY_CTA.label}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <>
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        trapRef={trapRef}
        reduceMotion={reduceMotion}
      />
    </>
  );
}

function NavItem({
  label,
  href,
  external,
  comingSoon,
}: {
  label: string;
  href: string;
  external?: boolean;
  comingSoon?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-disabled={comingSoon || undefined}
      className={cn(
        "rounded-md text-sm font-medium text-text-secondary transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        comingSoon && "opacity-50cursor-not-allowed",
      )}
    >
      {label}
      {comingSoon && (
        <span className="bg-muted ml-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wider text-text-muted uppercase">
          Coming soon
        </span>
      )}
    </Link>
  );
}
