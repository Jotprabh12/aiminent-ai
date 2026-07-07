import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * Kept intentionally lean for the foundation. Feature-specific options
 * (image remote patterns, redirects, headers) are added in the sessions
 * that introduce those features so the config never drifts ahead of usage.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Fail the production build on type errors instead of shipping them.
  // (Next 16 no longer runs ESLint during the build; linting is a separate
  // `pnpm lint` step and a pre-commit hook.)
  typescript: {
    ignoreBuildErrors: false,
  },

  // Security-friendly defaults.
  poweredByHeader: false,

  images: {
    // Prefer modern formats; raster sources are optimised at request time.
    formats: ["image/avif", "image/webp"],
  },

  // Produce a self-contained server bundle for portable/container deploys.
  output: "standalone",
};

export default nextConfig;
