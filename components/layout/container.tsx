import { type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Max-width presets mapped to the container tokens (globals.css). */
const CONTAINER_SIZES = {
  /** Default page width — 1280px. */
  page: "max-w-page",
  /** Wide layouts — 1536px. */
  wide: "max-w-wide",
  /** Reading measure for long-form text — 720px. */
  prose: "max-w-prose-w",
  /** No max-width (edge-to-edge). */
  full: "max-w-none",
} as const;

export type ContainerSize = keyof typeof CONTAINER_SIZES;

export interface ContainerProps {
  children: ReactNode;
  /** Max-width preset. Default: "page". */
  size?: ContainerSize;
  /** Semantic element to render. Default: "div". */
  as?: ElementType;
  /** Remove the horizontal gutter (e.g. when a parent already pads). */
  bleed?: boolean;
  className?: string;
}

/**
 * Container — the single source of truth for horizontal layout: max-width and
 * responsive side gutters, centered. Every page/section constrains its content
 * with this instead of repeating `mx-auto max-w-… px-…` (Chapter 7 §3, no
 * duplicated layout code). Server Component.
 */
export function Container({
  children,
  size = "page",
  as: Tag = "div",
  bleed = false,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        CONTAINER_SIZES[size],
        !bleed && "px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
