"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Returns `true` when the user has requested reduced motion. Gate looping and
 * decorative animations on this (Chapter 9 §17 — reduced-motion support).
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
