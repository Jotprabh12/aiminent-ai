/**
 * Common, framework-agnostic utility types shared across the codebase.
 */

/** A Lucide icon component (or any icon accepting SVG props). */
export type IconName = string;

/** Anything renderable — kept local to avoid leaking React types everywhere. */
export type Nullable<T> = T | null;

/** Make selected keys of T optional. */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Make selected keys of T required. */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/** A value that may be provided directly or lazily. */
export type MaybeArray<T> = T | T[];

/** Non-empty array helper for content collections that must have ≥1 item. */
export type NonEmptyArray<T> = [T, ...T[]];

/** Standard async request lifecycle, used by forms and data fetching. */
export type RequestStatus = "idle" | "loading" | "success" | "error";

/** A stable, URL-safe identifier. */
export type Slug = string;
