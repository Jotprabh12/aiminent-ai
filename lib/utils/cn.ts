import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and de-duplicate conflicting Tailwind classes.
 *
 * `clsx` resolves conditionals/arrays/objects; `twMerge` ensures the last
 * conflicting utility wins (e.g. `cn("p-2", "p-4")` → `"p-4"`). This is the
 * standard shadcn/ui helper — used by every component that accepts `className`.
 *
 * @example
 * cn("rounded-lg px-4", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
