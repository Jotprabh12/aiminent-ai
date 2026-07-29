import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. Default: "primary". */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  /** Size preset. Default: "md". */
  size?: "sm" | "md" | "lg";
  /** Show a loading spinner and disable interaction. */
  loading?: boolean;
  /** Icon rendered before the label. */
  iconLeft?: ReactNode;
  /** Icon rendered after the label. */
  iconRight?: ReactNode;
  /** Stretch to full width of the parent. */
  fullWidth?: boolean;
  /** Render as an anchor tag with the given href. */
  href?: string;
}

const VARIANT_CLASSES = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-ring",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-ring",
  outline:
    "border border-divider bg-surface text-foreground hover:bg-surface-muted focus-visible:ring-ring",
  ghost: "text-foreground hover:bg-surface-muted focus-visible:ring-ring",
  link: "text-primary underline-offset-4 hover:underline focus-visible:ring-ring",
} as const;

const SIZE_CLASSES = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-body-sm",
  lg: "h-12 px-6 text-body-lg",
} as const;

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    loading && "pointer-events-none",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || loading || undefined}
      >
        {loading && (
          <svg
            className="animate-spin"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="28.27"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>
        )}
        {!loading && iconLeft && (
          <span className="flex shrink-0" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children}
        {!loading && iconRight && (
          <span className="flex shrink-0" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="28.27"
            strokeDashoffset="10"
            strokeLinecap="round"
          />
        </svg>
      )}
      {!loading && iconLeft && (
        <span className="flex shrink-0" aria-hidden="true">
          {iconLeft}
        </span>
      )}
      {children}
      {!loading && iconRight && (
        <span className="flex shrink-0" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
}
