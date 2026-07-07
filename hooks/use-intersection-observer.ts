"use client";

import { useEffect, useRef, useState } from "react";

export interface UseIntersectionOptions extends IntersectionObserverInit {
  /** Stop observing after the first intersection (scroll-reveal default). */
  freezeOnceVisible?: boolean;
}

/**
 * Observe when an element enters the viewport. Returns a ref to attach and the
 * current intersection state — the basis for scroll-reveal (Chapter 9 §7).
 *
 * @example
 * const { ref, isIntersecting } = useIntersectionObserver({ freezeOnceVisible: true });
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionOptions = {},
) {
  const { freezeOnceVisible = true, ...observerInit } = options;
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setIsIntersecting(entry.isIntersecting);
    }, observerInit);

    observer.observe(element);
    return () => observer.disconnect();
    // observerInit is spread; re-run only on the primitive knobs that matter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    freezeOnceVisible,
    isIntersecting,
    observerInit.root,
    observerInit.rootMargin,
    observerInit.threshold,
  ]);

  return { ref, isIntersecting };
}
