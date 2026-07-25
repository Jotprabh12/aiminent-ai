"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  trapRef: React.RefObject<HTMLElement | null>;
  reduceMotion: boolean;
}

/**
 * Slide-in mobile navigation drawer (Chapter 9 §8).
 *
 * - Opens from the right with a fade overlay.
 * - Traps keyboard focus while open (useFocusTrap).
 * - Locks body scroll (useLockBodyScroll).
 * - Esc closes the drawer.
 * - Respects `prefers-reduced-motion` — skip transition when active.
 */
export function MobileMenu({
  isOpen,
  onClose,
  trapRef,
  reduceMotion,
}: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={cn(
        "fixed inset-0 z-[60] md:hidden",
        reduceMotion ? "opacity-100" : "animate-in fade-in duration-200",
      )}
    >
      {/* Dim overlay */}
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <nav
        ref={trapRef}
        aria-label="Mobile navigation"
        className={cn(
          "absolute top-0 right-0 flex h-full w-[80vw] max-w-[320px] flex-col border-l border-divider bg-background shadow-large",
          reduceMotion
            ? "translate-x-0 opacity-100"
            : "animate-in slide-in-from-right duration-300 ease-emphasized",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-body-sm font-semibold text-foreground">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            onClick={onClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 py-2">
          {MAIN_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-foreground",
                  item.comingSoon && "cursor-not-allowed opacity-50",
                )}
              >
                {item.label}
                {item.comingSoon && (
                  <span className="ml-2 text-[10px] font-medium tracking-wider text-text-muted uppercase">
                    Soon
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-divider px-4 py-4">
          <Link
            href={ROUTES.bookConsultation}
            onClick={onClose}
            className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Book Free Consultation
          </Link>
        </div>
      </nav>
    </div>
  );
}

const MAIN_NAV_ITEMS = [
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Industries", href: ROUTES.industries },
  { label: "Packages", href: ROUTES.packages },
  { label: "About", href: ROUTES.about },
  { label: "Resources", href: ROUTES.resources, comingSoon: true },
  { label: "Contact", href: ROUTES.contact },
];
