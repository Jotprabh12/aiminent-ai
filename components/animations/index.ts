/**
 * Animation wrapper components — barrel export.
 * Import from "@/components/animations".
 * Thin Framer Motion wrappers that consume the variants and tokens in
 * @/lib/animations. All respect `prefers-reduced-motion` (Chapter 9 §17).
 */
export { Reveal, type RevealProps } from "@/components/animations/reveal";
export {
  Stagger,
  type StaggerProps,
  type StaggerItemProps,
} from "@/components/animations/stagger";
export {
  PageTransition,
  type PageTransitionProps,
} from "@/components/animations/page-transition";
