"use client";

import { type ReactNode } from "react";
import { m, LazyMotion, domAnimation, type Variants } from "framer-motion";

import { fadeInUp } from "@/lib/animations";
import { useReducedMotion } from "@/hooks";

/** Semantic wrapper tags the Reveal component can render as. */
type RevealTag = "div" | "section" | "ul" | "ol" | "li" | "span";

export interface RevealProps {
  children: ReactNode;
  /** Variants to animate with. Defaults to fade + rise. */
  variants?: Variants;
  /** Semantic element to render. Defaults to `div`. */
  as?: RevealTag;
  /** Seconds to wait before animating. */
  delay?: number;
  /** Viewport amount (0–1) that must be visible to trigger. */
  amount?: number;
  /** Animate every time it enters the viewport, not just once. */
  repeat?: boolean;
  className?: string;
}

/**
 * Scroll-reveal wrapper (Chapter 9 §7). Fades/rises its children in when they
 * enter the viewport. Under `prefers-reduced-motion` it renders immediately
 * with no transform (Chapter 9 §17).
 *
 * Client Component by necessity (viewport + motion). Wrap content with it;
 * don't make whole pages client just to use it. `LazyMotion` keeps the motion
 * feature bundle out of the critical path.
 */
export function Reveal({
  children,
  variants = fadeInUp,
  as = "div",
  delay = 0,
  amount = 0.3,
  repeat = false,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = m[as];

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag
        className={className}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: !repeat, amount }}
        transition={{ delay }}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}
