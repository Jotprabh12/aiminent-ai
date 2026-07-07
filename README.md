# Aiminent AI — Website

Premium, conversion-focused marketing site for **Aiminent AI**, an AI automation
agency (launch focus: Real Estate in India; architecture ready for Healthcare,
Finance, Legal, Education, Hospitality, Manufacturing, and future SaaS).

> **Status:** Session 0 — engineering foundation. No marketing pages yet; the
> homepage and features are built in later milestones (see
> [`docs/roadmap.md`](docs/roadmap.md)).

## Tech stack

| Concern       | Choice                                                            |
| ------------- | ----------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router) · React 19                                |
| Language      | TypeScript (strict)                                               |
| Styling       | Tailwind CSS v4 (CSS-first `@theme`) · CSS-variable design tokens |
| UI primitives | shadcn/ui (configured; components added per milestone)            |
| Motion        | Framer Motion                                                     |
| Icons         | Lucide React                                                      |
| Forms         | React Hook Form + Zod                                             |
| Analytics     | Vercel Analytics                                                  |
| Tooling       | ESLint · Prettier · Husky · lint-staged · Commitlint              |
| Package mgr   | pnpm                                                              |

## Quick start

```bash
# 1. Use the pinned Node version (24) and enable pnpm
corepack enable pnpm         # or: corepack prepare pnpm@11.10.0 --activate

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env.local    # then fill in values

# 4. Run the dev server → http://localhost:3000
pnpm dev
```

Full setup notes: [`docs/developer-setup.md`](docs/developer-setup.md).

## Scripts

| Script              | Does                        |
| ------------------- | --------------------------- |
| `pnpm dev`          | Start the dev server.       |
| `pnpm build`        | Production build.           |
| `pnpm start`        | Serve the production build. |
| `pnpm lint`         | ESLint.                     |
| `pnpm typecheck`    | `tsc --noEmit`.             |
| `pnpm format`       | Prettier write.             |
| `pnpm format:check` | Prettier check (CI).        |

## Project structure

```
app/          Routes, layouts, route-level metadata (App Router)
components/    UI — ui · layout · sections · forms · animations · common
content/       Copy & content collections (CMS-ready)
hooks/         Reusable React hooks
lib/           utils · seo · validations · constants · animations · analytics · integrations · config
styles/        Design tokens + global CSS
types/         Shared TypeScript types
public/        Static assets
docs/          Spec (chapters/appendices) + engineering docs
```

Deep dive: [`docs/architecture.md`](docs/architecture.md) ·
[`docs/folder-guide.md`](docs/folder-guide.md).

## Documentation

- [Architecture](docs/architecture.md) — how the system fits together
- [Folder guide](docs/folder-guide.md) — where everything belongs
- [Coding standards](docs/coding-standards.md) — conventions & rules
- [Developer setup](docs/developer-setup.md) — local environment
- [Deployment](docs/deployment.md) — shipping to Vercel
- [Decision log](docs/decision-log.md) — key choices & deviations
- [Roadmap](docs/roadmap.md) — milestones M1→M7
- [Contributing](docs/contributing.md) — workflow & commits

## License

Proprietary — © Aiminent AI. All rights reserved.
