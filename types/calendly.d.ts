/**
 * Minimal global typings for the Calendly widget script
 * (https://assets.calendly.com/assets/external/widget.js), loaded lazily by
 * <CalendlyInline />. Only the surface actually used is declared — nothing
 * more, so a future full integration can extend this file.
 */

declare global {
  interface Window {
    Calendly?: {
      /** Render an inline scheduling widget into a given element. */
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export {};
