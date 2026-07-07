/**
 * Motion types — describe the shared Framer Motion vocabulary defined in
 * lib/animations. Timing/easing values are centralised (Chapter 8 §6,
 * Chapter 9 §4–5); components never invent their own.
 */

export type MotionDurationToken =
  "instant" | "fast" | "normal" | "slow" | "hero";

export type MotionEasingToken = "out" | "inOut" | "standard" | "emphasized";

/** A minimal Framer-Motion-compatible variant shape (kept lib-agnostic). */
export interface MotionVariant {
  [state: string]: Record<string, unknown>;
}

/** Options accepted by scroll-reveal helpers. */
export interface RevealOptions {
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Stagger (seconds) applied between children. */
  stagger?: number;
  /** Only animate the first time the element enters the viewport. */
  once?: boolean;
}
