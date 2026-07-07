/**
 * Route-level loading UI (Chapter 12 §15 · Chapter 9 §16). Shown during
 * navigation/suspense. Minimal foundation version; a proper skeleton system is
 * added with the component library.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="container-page flex flex-1 items-center justify-center py-32"
    >
      <span className="size-6 animate-spin rounded-full border-2 border-border border-t-primary" />
    </div>
  );
}
