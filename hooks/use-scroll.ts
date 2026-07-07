"use client";

import { useEffect, useState } from "react";

export interface ScrollState {
  /** Current vertical scroll offset in pixels. */
  y: number;
  /** True once scrolled past `threshold` — drives the glass navbar. */
  scrolled: boolean;
}

/**
 * Track vertical scroll position with a passive listener.
 * @param threshold px past which `scrolled` becomes true (default 8).
 */
export function useScroll(threshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({ y: 0, scrolled: false });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setState({ y, scrolled: y > threshold });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
