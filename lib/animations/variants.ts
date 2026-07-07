import type { Variants } from "framer-motion";
import { DURATION, EASING } from "@/lib/animations/tokens";

/**
 * Reusable Framer Motion variants (Chapter 9 §6–7).
 * ---------------------------------------------------------------------------
 * Plain animation DATA — no components. Sections/components consume these so
 * motion stays consistent and centralised. All timing/easing comes from the
 * motion tokens; nothing here invents its own values.
 */

/** Cast a readonly easing tuple to Framer's mutable bezier tuple. */
const bezier = (token: keyof typeof EASING) =>
  [...EASING[token]] as [number, number, number, number];

/** Simple opacity fade. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: bezier("out") },
  },
};

/** Fade + rise — the default scroll-reveal for content and cards. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: bezier("out") },
  },
};

/** Subtle scale-in for emphasis (badges, icons). */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: bezier("out") },
  },
};

/** Slide from the right — mobile navigation drawer. */
export const slideInRight: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: DURATION.normal, ease: bezier("emphasized") },
  },
  exit: {
    x: "100%",
    transition: { duration: DURATION.fast, ease: bezier("emphasized") },
  },
};

/**
 * Parent container that staggers its children's reveal. Pair with `fadeInUp`
 * on each child (Chapter 9 §7 — staggered card reveal).
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
