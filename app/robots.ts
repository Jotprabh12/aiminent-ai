import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** robots.txt (App Router convention; Chapter 7 §9 places this responsibility
 *  in the SEO layer — see docs/decision-log.md for why it lives here). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
