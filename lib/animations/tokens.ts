/**
 * Motion tokens — the CANONICAL source of timing and easing (Chapter 9 §4–5).
 * ---------------------------------------------------------------------------
 * Values are in SECONDS (Framer Motion's unit). styles/animations.css and the
 * `--ease-*` tokens in globals.css mirror these; keep them in sync.
 * No component should invent its own duration or easing (Chapter 8 §6).
 */

/** Durations in seconds. */
export const DURATION = {
  instant: 0.1,
  fast: 0.18,
  normal: 0.3,
  slow: 0.5,
  hero: 0.8,
} as const;

/** Cubic-bezier easing curves. */
export const EASING = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  standard: [0.22, 1, 0.36, 1],
  emphasized: [0.16, 1, 0.3, 1],
} as const;

/** Shared spring for interactive/physical motion. */
export const SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 1,
} as const;

export type DurationToken = keyof typeof DURATION;
export type EasingToken = keyof typeof EASING;
