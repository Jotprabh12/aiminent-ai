import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface CardProps {
  children: ReactNode;
  variant?:
    "feature" | "package" | "industry" | "testimonial" | "blog" | "integration";
  hoverLift?: boolean;
  className?: string;
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const VARIANT_RADIUS = {
  feature: "rounded-xl",
  package: "rounded-xl",
  industry: "rounded-lg",
  testimonial: "rounded-xl",
  blog: "rounded-xl",
  integration: "rounded-lg",
} as const;

const VARIANT_PADDING = {
  feature: "p-6",
  package: "p-8",
  industry: "p-5",
  testimonial: "p-6",
  blog: "p-5",
  integration: "p-5",
} as const;

export function Card({
  children,
  variant = "feature",
  hoverLift = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col border border-divider bg-surface",
        VARIANT_RADIUS[variant],
        VARIANT_PADDING[variant],
        hoverLift && "transition-shadow hover:shadow-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4 flex flex-col gap-1.5", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-h3 font-semibold text-foreground", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-text-secondary", className)}>{children}</p>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("flex-1", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-4 flex items-center gap-3", className)}>
      {children}
    </div>
  );
}

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";
