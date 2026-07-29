"use client";

import { track } from "@vercel/analytics";
import { Button, type ButtonProps } from "@/components/ui/button";

type TrackedEvent = "cta_click";

interface TrackedButtonProps extends ButtonProps {
  event?: TrackedEvent;
  eventData?: Record<string, string | number | boolean | null>;
}

export function TrackedButton({
  event,
  eventData,
  onClick,
  ...props
}: TrackedButtonProps) {
  return (
    <Button
      onClick={(e) => {
        if (event) {
          track(event, eventData);
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
}
