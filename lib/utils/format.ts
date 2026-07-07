/**
 * Formatting helpers — pure, framework-agnostic, and locale-aware.
 * No business logic; just presentation transforms reused across the app.
 */

/** Convert an arbitrary string into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Format a date using Intl. Defaults to a medium, India-locale date. */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  locale = "en-IN",
): string {
  const value = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(value);
}

/** Format an integer with locale grouping (e.g. 12000 → "12,000"). */
export function formatNumber(value: number, locale = "en-IN"): string {
  return new Intl.NumberFormat(locale).format(value);
}

/** Truncate text to `max` characters on a word boundary, adding an ellipsis. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

/** Join path segments into a clean, single-slash URL path. */
export function joinPath(...segments: string[]): string {
  return (
    `/${segments.join("/")}`.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/"
  );
}
