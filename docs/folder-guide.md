# Folder Guide

Where everything belongs. When adding code, find the matching row first — if
nothing fits, that's a signal to discuss before inventing a new location.

## Top level

| Path          | Responsibility                                  | Add here…                                    |
| ------------- | ----------------------------------------------- | -------------------------------------------- |
| `app/`        | Routes, layouts, route metadata (App Router).   | A new page, layout, or route handler.        |
| `components/` | All React components, grouped by role.          | Any UI.                                      |
| `content/`    | Copy & content collections (CMS-ready).         | Marketing copy, FAQ items, solution data.    |
| `hooks/`      | Reusable React hooks.                           | A cross-component hook.                      |
| `lib/`        | Framework-agnostic logic, config, integrations. | Helpers, schemas, constants, SEO, analytics. |
| `styles/`     | Design tokens + global CSS.                     | A new token or global style.                 |
| `types/`      | Shared TypeScript types.                        | A cross-cutting interface/type.              |
| `public/`     | Static assets served at the root.               | Images, logos, icons, illustrations.         |
| `docs/`       | Product spec + engineering docs.                | Documentation.                               |

## `components/`

| Folder        | Put here                                                           |
| ------------- | ------------------------------------------------------------------ |
| `ui/`         | Reusable primitives (Button, Card, Input). shadcn/ui targets this. |
| `layout/`     | Navbar, Footer, Container, Section, MobileMenu.                    |
| `sections/`   | Page sections (Hero, FAQ, CTA, grids).                             |
| `forms/`      | Form components (RHF + Zod).                                       |
| `animations/` | Framer Motion wrapper components (variants live in `lib`).         |
| `common/`     | Empty/Loading/Error states, icon helpers.                          |

## `lib/`

| Folder          | Put here                                                 |
| --------------- | -------------------------------------------------------- |
| `utils/`        | `cn`, formatting, pure helpers.                          |
| `seo/`          | Metadata + JSON-LD builders.                             |
| `validations/`  | Zod schemas (source of truth for form shapes).           |
| `constants/`    | Site config, routes, navigation.                         |
| `animations/`   | Motion tokens + variants.                                |
| `analytics/`    | Analytics wrapper.                                       |
| `integrations/` | External-service contracts (CRM, n8n, Resend, WhatsApp). |
| `config/`       | Env parser + feature flags.                              |

## Naming conventions

| Kind                | Convention               | Example               |
| ------------------- | ------------------------ | --------------------- |
| Components          | PascalCase file & export | `HeroSection.tsx`     |
| Hooks               | `useX`, kebab file       | `use-media-query.ts`  |
| Utilities           | camelCase                | `formatDate`          |
| Constants           | UPPER_SNAKE / `AS const` | `ROUTES`, `MAIN_NAV`  |
| Types               | PascalCase               | `Solution`, `NavItem` |
| Non-component files | kebab-case               | `structured-data.ts`  |

## Import rules

- Always use the `@/*` absolute alias, never deep relative paths (`../../..`).
- Import from a folder's barrel (`@/lib/utils`), not individual files, when a
  barrel exists.
- `types → lib` imports are disallowed (would create a cycle); `lib → types` is
  fine.
