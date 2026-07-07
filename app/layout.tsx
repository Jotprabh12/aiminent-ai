import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import { buildRootMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

/**
 * Root layout — the app shell.
 *
 * - Loads Inter via next/font/local (Chapter 3 §5) and exposes it as
 *   `--font-inter`. The font is self-hosted (vendored woff2) rather than fetched
 *   from Google Fonts — no build-time external dependency, better privacy/perf.
 *   See docs/decision-log.md.
 * - Forces the dark theme (`class="dark"`); light mode is prepared but disabled
 *   for V1 (see docs/decision-log.md).
 * - Applies centralised site metadata and emits Organization + WebSite JSON-LD.
 *
 * The visual shell (Navbar/Footer) is added in M2; this file stays minimal.
 */

const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          // Structured data is static JSON generated server-side — safe to inline.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </body>
    </html>
  );
}
