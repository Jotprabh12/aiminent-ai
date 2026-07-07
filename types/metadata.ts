/**
 * SEO metadata types — the shape consumed by lib/seo/metadata.ts to build
 * Next.js `Metadata` objects (Chapter 7 §9 · Chapter 12 §9).
 */

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface SEOMetadata {
  /** Page title (without the site-name suffix; the template appends it). */
  title: string;
  description: string;
  /** Canonical path relative to the site URL, e.g. "/solutions". */
  path?: string;
  keywords?: string[];
  /** Override the default OG/Twitter image for this page. */
  image?: OpenGraphImage;
  /** Exclude from indexing (e.g. thank-you, preview routes). */
  noindex?: boolean;
  type?: "website" | "article";
}
