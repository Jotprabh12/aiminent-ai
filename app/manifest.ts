import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/** Web App Manifest — PWA metadata. Icons are added with the logo assets in a
 *  later session. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d12",
    theme_color: "#0b0d12",
    icons: [],
  };
}
