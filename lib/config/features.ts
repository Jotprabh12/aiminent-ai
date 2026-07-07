/**
 * Feature flags — central switchboard for progressively-enabled functionality.
 *
 * Flags let later sessions merge scaffolding for a feature while keeping it
 * dark in production until it is ready. Read flags via `features.<name>`; never
 * scatter `process.env` checks through the UI.
 *
 * Values are resolved once here so the source (env, constant, or future remote
 * config) can change without touching call sites.
 */

export interface FeatureFlags {
  /** Blog listing + article routes. */
  blog: boolean;
  /** Case studies section. */
  caseStudies: boolean;
  /** Newsletter capture form. */
  newsletter: boolean;
  /** Light theme toggle (prepared but disabled for V1). */
  lightMode: boolean;
  /** Calendly scheduling embed on the consultation flow. */
  calendly: boolean;
}

export const features: FeatureFlags = {
  blog: false,
  caseStudies: false,
  newsletter: false,
  lightMode: false,
  calendly: false,
};

/** Narrow helper for readable guards: `if (isEnabled("blog")) …`. */
export function isEnabled(flag: keyof FeatureFlags): boolean {
  return features[flag];
}
