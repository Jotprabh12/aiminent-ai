/**
 * TEMPORARY bootstrap placeholder — NOT the homepage.
 * Session 0 delivers the engineering foundation only; the real homepage
 * is built in Session 4 / Milestone M4 and will replace this file entirely.
 * It exists so the app compiles and the design-token pipeline can be
 * verified visually. No marketing copy lives here by design.
 */
export default function BootstrapPlaceholder() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <span className="rounded-full border border-border bg-surface px-3 py-1 text-caption tracking-wider text-text-secondary uppercase">
        Session 0 · Foundation
      </span>
      <h1 className="text-h2 font-semibold text-foreground">
        Aiminent AI — project foundation is ready.
      </h1>
      <p className="max-w-prose-w text-body text-text-secondary">
        This placeholder is replaced by the homepage in Milestone M4. Explore
        the architecture in <code className="text-primary">/docs</code>.
      </p>
    </div>
  );
}
