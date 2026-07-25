"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { pageTransition } from "@/lib/animations";
import { useReducedMotion } from "@/hooks";

export interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Route-transition wrapper (Chapter 9 §15). Re-runs a subtle fade + rise each
 * time the pathname changes (the `key` forces a remount). Kept intentionally
 * short so navigation never feels blocked. No-op under reduced motion.
 *
 * Note: we use enter-only motion (no AnimatePresence exit) so outgoing content
 * never blocks the incoming route — the recommended pattern for the App Router.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        key={pathname}
        className={className}
        variants={pageTransition}
        initial="hidden"
        animate="enter"
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
