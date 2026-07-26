# `app/`

Next.js App Router — routes, layouts, and route-level metadata. Server
Components by default; keep page logic thin and delegate to `components/`,
`content/`, and `lib/` (Chapter 7 §7, §15).

## Shell files (present now — Session 1)

| File            | Role                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `layout.tsx`    | Root shell: Inter font, forced dark theme, metadata, JSON-LD, Analytics, Navbar, `<main id="main-content">` + PageTransition, Footer, skip-link. |
| `globals.css`   | Tailwind entry + design-token → theme bridge + scrollbar/skip-link/selection.                                                                    |
| `not-found.tsx` | Global 404.                                                                                                                                      |
| `error.tsx`     | Root error boundary (Client Component).                                                                                                          |
| `loading.tsx`   | Route-level loading UI.                                                                                                                          |
| `robots.ts`     | robots.txt.                                                                                                                                      |
| `sitemap.ts`    | sitemap.xml (live routes).                                                                                                                       |
| `manifest.ts`   | PWA web app manifest.                                                                                                                            |
| `icon.svg`      | PWA favicon.                                                                                                                                     |
| `fonts/`        | Self-hosted Inter variable woff2.                                                                                                                |
| `api/`          | Route Handlers (form submissions, webhooks) — M6.                                                                                                |

## Route folders

Each planned route has its own folder with a README describing its purpose and
target milestone. They contain **no `page.tsx`** yet — pages are built in
Sessions 1+. One route per folder; dynamic routes (`[slug]`) support future
solutions/industries without restructuring (Chapter 7 §6).
