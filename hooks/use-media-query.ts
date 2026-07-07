"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe media query hook. Returns whether `query` currently matches.
 * Starts `false` on the server and first client render to avoid hydration
 * mismatches, then syncs after mount.
 *
 * @example const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
