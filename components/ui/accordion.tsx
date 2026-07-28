"use client";

import { createContext, useContext, type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps {
  children: ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}

export function Accordion({
  children,
  type = "single",
  defaultValue,
  value,
  onValueChange,
  className,
}: AccordionProps) {
  const isControlled = value !== undefined;
  const defaultOpen = new Set(
    (Array.isArray(defaultValue)
      ? defaultValue
      : defaultValue
        ? [defaultValue]
        : []) as string[],
  );

  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const currentOpen = isControlled
    ? new Set((value as string[]) ?? [])
    : internalOpen;

  const toggleItem = (itemValue: string) => {
    let next: Set<string>;
    if (type === "single") {
      next = currentOpen.has(itemValue) ? new Set() : new Set([itemValue]);
    } else {
      next = new Set(currentOpen);
      if (next.has(itemValue)) {
        next.delete(itemValue);
      } else {
        next.add(itemValue);
      }
    }

    if (!isControlled) {
      setInternalOpen(next);
    }

    onValueChange?.(
      type === "single" ? (Array.from(next)[0] ?? "") : Array.from(next),
    );
  };

  return (
    <AccordionContext.Provider
      value={{ openItems: currentOpen, toggleItem, type }}
    >
      <div className={cn("flex flex-col gap-2", className)} role="region">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  value: string;
  title: string;
  children: ReactNode;
}

export function AccordionItem({ value, title, children }: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const isOpen = ctx.openItems.has(value);

  return (
    <div className="overflow-hidden rounded-lg border border-divider bg-surface">
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 text-left text-body-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
        )}
        aria-expanded={isOpen}
        onClick={() => ctx.toggleItem(value)}
      >
        <span>{title}</span>
        <svg
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 6 8 10 12 6" />
        </svg>
      </button>
      {isOpen && (
        <div className="overflow-hidden transition-all duration-200 ease-in-out">
          <div className="px-4 pb-4 text-sm text-text-secondary">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
