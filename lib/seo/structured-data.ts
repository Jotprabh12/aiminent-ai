import type { FAQItem } from "@/types/faq";
import { SITE, SOCIALS } from "@/lib/constants/site";

/**
 * JSON-LD structured-data builders (Chapter 10 · Chapter 12 §9).
 * Each returns a plain object to be serialised into a
 * <script type="application/ld+json"> tag by the consuming component.
 *
 * `WithContext`-style typing is kept loose (Record) to avoid a schema-dts
 * dependency; the shapes follow schema.org.
 */

type JsonLd = Record<string, unknown>;

/** Organization schema — emit once, sitewide (typically in the root layout). */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.contactEmail,
    sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.x],
  };
}

/** WebSite schema — enables sitelinks search box eligibility. */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

/** BreadcrumbList schema from an ordered list of {name, path} crumbs. */
export function breadcrumbSchema(
  crumbs: ReadonlyArray<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, SITE.url).toString(),
    })),
  };
}

/** FAQPage schema built from FAQ content items. */
export function faqSchema(items: ReadonlyArray<FAQItem>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
