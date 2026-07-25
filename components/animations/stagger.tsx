"use client";

import { type ReactNode } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useReducedMotion } from "@/hooks";

type StaggerTag = "div" | "ul" | "ol";
type ItemTag = "div" | "li";

export interface StaggerProps {
  children: ReactNode;
  as?: StaggerTag;
  /** Viewport amount (0–1) that must be visible to trigger. */
  amount?: number;
  className?: string;
}

export interface StaggerItemProps {
  children: ReactNode;
  as?: ItemTag;
  className?: string;
}

/**
 * Staggered-reveal container (Chapter 9 §7). Wrap a list of `Stagger.Item`s;
 * each child animates in sequence as the group enters the viewport. Under
 * reduced motion, renders children immediately with no motion.
 */
export function Stagger({
  children,
  as = "div",
  amount = 0.2,
  className,
}: StaggerProps) {
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
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
      >
        {children}
      </MotionTag>
    </LazyMotion>
  );
}

/**
 * A single staggered child. Must be rendered inside `Stagger`. Inherits the
 * parent's animation orchestration via the shared `visible`/`hidden` states.
 */
function StaggerItem({ children, as = "div", className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = m[as];

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionTag className={className} variants={fadeInUp}>
        {children}
      </MotionTag>
    </LazyMotion>
  );
}

Stagger.Item = StaggerItem;
