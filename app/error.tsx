"use client";

import { useEffect } from "react";

/**
 * Root error boundary (Chapter 12 §15). Catches unhandled errors in the route
 * subtree and offers a recovery action. Must be a Client Component.
 * Minimal foundation version; restyled with the design system in M2.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with a real error-reporting sink (Sentry, etc.) in a later session.
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-h4 font-semibold text-foreground">
        Something went wrong
      </h1>
      <p className="max-w-prose-w text-body text-text-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
      >
        Try again
      </button>
    </div>
  );
}
