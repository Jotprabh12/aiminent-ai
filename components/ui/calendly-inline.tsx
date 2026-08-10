"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { getActiveBookingProvider } from "@/lib/integrations/booking";

/**
 * Calendly inline booking embed — official inline-embed markup, isolated in
 * the smallest possible client component.
 *
 * How it works (verified against the shipped widget.js):
 *
 *  - The element below uses Calendly's documented `.calendly-inline-widget`
 *    pattern: class + `data-url` + `data-resize="true"`.
 *  - widget.js scans for that class when it loads and injects a
 *    width/height-100% iframe into the element. Initialization is idempotent
 *    (widget.js stamps `data-processed`), so no duplicate widgets — we never
 *    call `initInlineWidget` ourselves.
 *  - `data-resize` makes the widget listen for `calendly.page_height` posts
 *    and grow the container when the booking UI needs more room — without it
 *    the iframe is frozen at the container's initial height, which clips the
 *    date/time picker.
 *  - The container has a generous 700px min-height (the parent gives the
 *    iframe its height: `height:100%`), no `overflow` clipping, and grows.
 *
 * The widget script is lazy-loaded only on this page. A placeholder is shown
 * until the iframe actually appears; on hard failure the whole embed falls
 * back to the direct "Open Calendly" link below.
 */

/** Lazy-loaded Calendly widget runtime (official, cached by browsers). */
const WIDGET_SCRIPT_URL =
  "https://assets.calendly.com/assets/external/widget.js";

/**
 * Embed theme params — light embed appearance: off-white background #F7F8FA
 * (the site's light `--surface` token in styles/tokens.css), black text
 * #000000, and the Aiminent AI blue #4C6FFF (`--primary`) for buttons/links.
 * `hide_gdpr_banner=1` hides Calendly's cookie-settings link/banner. These
 * are Calendly's own URL-driven appearance settings; nothing here styles the
 * iframe internals with CSS.
 */
const EMBED_PARAMS =
  "hide_gdpr_banner=1&background_color=f7f8fa&text_color=000000&primary_color=4c6fff";

/** Vertical space Calendly needs for the full booking interface. */
const EMBED_MIN_HEIGHT = 700;

type LoadState = "loading" | "ready" | "error";

export function CalendlyInline() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<LoadState>("loading");
  const url = getActiveBookingProvider().getBookingUrl();
  const embedUrl = url
    ? url.includes("?")
      ? `${url}&${EMBED_PARAMS}`
      : `${url}?${EMBED_PARAMS}`
    : null;

  useEffect(() => {
    if (!embedUrl) return;

    let cancelled = false;
    let poll: number | undefined;

    const pollForWidget = () => {
      poll = window.setInterval(() => {
        if (cancelled) {
          window.clearInterval(poll);
          return;
        }
        if (widgetRef.current?.querySelector("iframe")) {
          window.clearInterval(poll);
          setState("ready");
        }
      }, 400);
    };

    // Loading the script again after a client-side route back is safe: the
    // cached file re-runs, its scan re-initializes this element, and
    // `data-processed` prevents any double initialization.
    const script = document.createElement("script");
    script.async = true;
    script.src = WIDGET_SCRIPT_URL;
    script.onload = pollForWidget;
    script.onerror = () => {
      if (!cancelled) setState("error");
    };
    document.body.appendChild(script);
    pollForWidget();

    return () => {
      cancelled = true;
      if (poll) window.clearInterval(poll);
    };
  }, [embedUrl]);

  if (!url) {
    return null;
  }

  return (
    <div>
      <div className="relative w-full">
        {/* Official Calendly inline widget container */}
        <div
          ref={widgetRef}
          className="calendly-inline-widget w-full rounded-xl border border-divider bg-surface"
          data-url={embedUrl ?? undefined}
          data-resize="true"
          style={{ minWidth: 320, minHeight: EMBED_MIN_HEIGHT }}
          aria-label="Free consultation booking calendar, powered by Calendly"
        />

        {state === "loading" && (
          <div
            role="status"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl"
          >
            <div className="h-12 w-12 animate-pulse rounded-lg bg-surface-muted" />
            <p className="text-sm text-text-muted">Loading available times…</p>
            <span className="sr-only">Loading the consultation calendar.</span>
          </div>
        )}

        {state === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl p-6 text-center">
            <p className="text-sm text-text-secondary">
              The booking calendar couldn&apos;t load&nbsp;— book directly on
              Calendly instead.
            </p>
            <Button href={url} target="_blank" size="sm">
              Open Calendly
            </Button>
          </div>
        )}
      </div>

      {/* Graceful fallback — always available, beneath the embed */}
      <p className="mt-4 text-center text-caption text-text-muted">
        Prefer to open Calendly directly?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline"
        >
          Open Calendly
        </a>
      </p>
    </div>
  );
}
