import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const VARIANT_CLASSES = {
  default: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
  outline: "border border-divider bg-surface text-text-secondary",
} as const;

const SIZE_CLASSES = {
  sm: "px-2 py-0.5 text-caption",
  md: "px-2.5 py-1 text-xs",
} as const;

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
