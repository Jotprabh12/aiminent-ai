import { cn } from "@/lib/utils";

export interface CTABannerProps {
  /** Heading text displayed prominently. */
  heading: string;
  /** Supporting description below the heading. */
  description: string;
  /** CTA button label. */
  ctaLabel: string;
  /** CTA button href. */
  ctaHref?: string;
  /** CTA button variant. Default: "primary". */
  ctaVariant?: "primary" | "secondary" | "outline";
  /** Optional badge text shown above the heading. */
  badge?: string;
  /** Background surface style. Default: "surface". */
  background?: "surface" | "muted" | "primary";
  /** Text alignment. Default: "center". */
  align?: "left" | "center" | "right";
  className?: string;
}
const BACKGROUND_CLASSES = {
  surface: "bg-surface",
  muted: "bg-surface-muted",
  primary: "bg-primary text-primary-foreground",
} as const;

export function CTABanner({
  heading,
  description,
  ctaLabel,
  ctaHref,
  ctaVariant = "primary",
  badge,
  background = "surface",
  align = "center",
  className,
}: CTABannerProps) {
  const ctaClass =
    ctaVariant === "primary"
      ? "bg-primary text-primary-foreground"
      : ctaVariant === "secondary"
        ? "bg-secondary text-secondary-foreground"
        : "border border-divider bg-surface text-foreground";

  return (
    <div
      className={cn(
        "rounded-xl px-6 py-10 sm:px-8 sm:py-12",
        BACKGROUND_CLASSES[background],
        className,
      )}
    >
      <div
        className={cn(
          align === "center" && "mx-auto max-w-prose-w",
          align === "left" && "",
          align === "right" && "text-right",
        )}
      >
        {badge && (
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-caption font-medium text-primary">
            {badge}
          </span>
        )}
        <h2
          className={cn(
            "text-h1 font-semibold",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right",
          )}
        >
          {heading}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-text-secondary",
              align === "center" && "text-center",
              align === "left" && "text-left",
              align === "right" && "text-right",
            )}
          >
            {description}
          </p>
        )}
        {ctaLabel && (
          <div
            className={cn(
              "mt-6",
              align === "center" && "flex justify-center",
              align === "left" && "",
              align === "right" && "flex justify-end",
            )}
          >
            <a
              href={ctaHref ?? "#"}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-lg px-5 text-body-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                ctaClass,
              )}
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
