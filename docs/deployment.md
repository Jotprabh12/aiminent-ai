# Deployment

Target platform: **Vercel** (Chapter 7 §2). The app also builds a
self-contained server bundle (`output: "standalone"`) for container/self-host.

## Vercel (recommended)

1. Import the repository into Vercel.
2. Framework preset: **Next.js** (auto-detected). Package manager: **pnpm**
   (auto-detected from `pnpm-lock.yaml`).
3. Build command `pnpm build`, output handled by the Next.js adapter.
4. Add environment variables (from `.env.example`) in **Project → Settings →
   Environment Variables** for Preview and Production. At minimum:
   `NEXT_PUBLIC_SITE_URL`.
5. Deploy. Vercel Analytics is enabled automatically (the `<Analytics />`
   component is mounted in the root layout).

## Environment variables

| Variable                    | Scope  | Required | Purpose                              |
| --------------------------- | ------ | -------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`      | Public | Yes      | Canonical origin (SEO, OG, sitemap). |
| `NEXT_PUBLIC_CALENDLY_URL`  | Public | M6       | Consultation booking embed.          |
| `RESEND_API_KEY`            | Secret | M6       | Transactional email.                 |
| `RESEND_FROM_EMAIL`         | Secret | M6       | Verified sender.                     |
| `NEXT_PUBLIC_GA_ID`         | Public | Optional | Google Analytics.                    |
| `NEXT_PUBLIC_META_PIXEL_ID` | Public | Optional | Meta Pixel.                          |

Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonicals, Open Graph
URLs, `robots.txt`, and `sitemap.xml` resolve correctly.

## Pre-deploy checklist (Appendix A build pipeline)

```
Develop → Lint → Type check → Build → Lighthouse audit → Deploy
```

```bash
pnpm lint && pnpm typecheck && pnpm format:check && pnpm build
```

Run a Lighthouse audit before release milestones. Targets (Chapter 12 §11):
Performance > 95, Accessibility 100, SEO 100, Best Practices 100.

## Self-hosted / container

`pnpm build` emits `.next/standalone`. Run with `node .next/standalone/server.js`
behind your reverse proxy, providing the same environment variables.
