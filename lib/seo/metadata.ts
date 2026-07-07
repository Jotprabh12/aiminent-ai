import type { Metadata } from "next";
import type { SEOMetadata } from "@/types/metadata";
import { SITE } from "@/lib/constants/site";

/**
 * Build a Next.js `Metadata` object from a small, page-level `SEOMetadata`
 * input (Chapter 12 §9). Centralising this guarantees every route ships a
 * consistent title template, canonical URL, Open Graph, and Twitter card.
 *
 * @example
 * export const metadata = buildMetadata({
 *   title: "Solutions",
 *   description: "AI automation solutions for growing businesses.",
 *   path: "/solutions",
 * });
 */
export function buildMetadata(input: SEOMetadata): Metadata {
  const {
    title,
    description,
    path = "/",
    keywords,
    image,
    noindex = false,
    type = "website",
  } = input;

  const canonical = new URL(path, SITE.url).toString();
  const ogImage = image ?? {
    url: SITE.ogImage,
    width: 1200,
    height: 630,
    alt: SITE.name,
  };

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    keywords: keywords ?? [...SITE.keywords],
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      siteName: SITE.name,
      title,
      description,
      url: canonical,
      locale: SITE.locale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

/**
 * Root metadata used by app/layout.tsx. Applies the site title template so
 * child pages render as "Page Title | Aiminent AI".
 */
export function buildRootMetadata(): Metadata {
  return {
    ...buildMetadata({
      title: SITE.tagline,
      description: SITE.description,
      path: "/",
    }),
    title: {
      default: `${SITE.tagline} | ${SITE.name}`,
      template: `%s | ${SITE.name}`,
    },
    applicationName: SITE.name,
    authors: [{ name: SITE.name }],
    creator: SITE.name,
  };
}
