/**
 * Theme types. The design tokens themselves live in styles/tokens.css; these
 * types describe the theme surface for any TS that reasons about it.
 *
 * Light mode is prepared but disabled for V1 (dark is forced) — hence the mode
 * union exists even though only "dark" is active. See docs/decision-log.md.
 */

export type ThemeMode = "dark" | "light";

/** Named color tokens exposed as Tailwind utilities (bg-/text-/border-). */
export type ColorToken =
  | "background"
  | "foreground"
  | "surface"
  | "surface-muted"
  | "border"
  | "divider"
  | "text-secondary"
  | "text-muted"
  | "primary"
  | "primary-hover"
  | "primary-foreground"
  | "secondary"
  | "secondary-hover"
  | "secondary-foreground"
  | "accent"
  | "accent-foreground"
  | "ring"
  | "success"
  | "warning"
  | "error"
  | "info";

export type RadiusToken = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export type ShadowToken = "soft" | "medium" | "large" | "floating";
