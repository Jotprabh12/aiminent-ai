import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { buildRootMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { PageTransition } from "@/components/animations";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import "./globals.css";

/**
 * Root layout — the app shell.
 *
 * - Inter (self-hosted woff2) injected as `--font-inter`.
 * - Forced dark theme (`class="dark"`); light mode prepared but disabled.
 * - Centralised metadata + Organization + WebSite JSON-LD.
 * - Wires Navbar, main content area (page-transition wrapped),
 *   and Footer around every page.
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
        {/* Skip-to-content — first tab stop for keyboard users. */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="flex flex-1 flex-col">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />

        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </body>
    </html>
  );
}
