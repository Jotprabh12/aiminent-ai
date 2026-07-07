import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/constants";

/**
 * sitemap.xml. Lists indexable, currently-live routes only. As pages ship,
 * add their paths here (or generate from content collections). "Coming soon"
 * and utility routes (thank-you) are intentionally excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: string[] = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.solutions,
    ROUTES.packages,
    ROUTES.industries,
    ROUTES.contact,
  ];

  return paths.map((path) => ({
    url: new URL(path, SITE.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: path === ROUTES.home ? 1 : 0.7,
  }));
}
