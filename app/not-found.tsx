import Link from "next/link";
import type { Metadata } from "next";

import { ROUTES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page not found",
  description: "The page you are looking for could not be found.",
  noindex: true,
});

/** Global 404 (Chapter 7 §14). Minimal foundation version; restyled with the
 *  design system in M2. */
export default function NotFound() {
  return (
    <div className="container-page flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="text-h3 font-semibold text-primary">404</p>
      <h1 className="text-h4 font-semibold text-foreground">Page not found</h1>
      <p className="max-w-prose-w text-body text-text-secondary">
        The page you are looking for doesn’t exist or has moved.
      </p>
      <Link
        href={ROUTES.home}
        className="text-body-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}
