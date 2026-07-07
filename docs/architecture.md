# Architecture

How the Aiminent AI website is put together and why. Pairs with the product
spec in [`chapters/`](./chapters) and [`appendices/`](./appendices); this doc
covers the **engineering** view.

## Principles

1. **Separation of concerns.** Presentation (`components/`), content
   (`content/`), and logic (`lib/`) are distinct layers. Pages orchestrate; they
   don't implement.
2. **Server Components first.** Ship zero client JS by default; opt into
   `"use client"` only for interactivity (Chapter 12 §3, §11).
3. **Tokens over hard-coding.** Every color/space/radius/shadow/duration is a
   design token. No magic numbers in components (Chapter 8 · Chapter 12 §7).
4. **Single source of truth.** Routes in `lib/constants/routes`, form shapes in
   `lib/validations`, motion timing in `lib/animations/tokens`, site config in
   `lib/constants/site`. Duplication is a bug.
5. **Typed everywhere.** Strict TypeScript; shared shapes in `@/types`.
6. **Extensible by design.** New industries/solutions are content + a dynamic
   route — no restructuring (Chapter 7 §18).

## Layers

```
        ┌────────────────────────────────────────────┐
route →  │ app/            (App Router: layouts, pages) │
        └───────────────┬────────────────────────────┘
                        │ composes
        ┌───────────────▼────────────────────────────┐
        │ components/     (ui · layout · sections …)   │
        └───────┬───────────────────────┬─────────────┘
                │ reads                  │ uses
        ┌───────▼─────────┐     ┌────────▼─────────────┐
        │ content/        │     │ lib/  hooks/  types/ │
        │ (copy, data)    │     │ (logic, config)      │
        └─────────────────┘     └──────────────────────┘
                        │ styled by
        ┌───────────────▼────────────────────────────┐
        │ styles/ + app/globals.css (design tokens)   │
        └─────────────────────────────────────────────┘
```

## Styling & theming

- **Tailwind v4, CSS-first.** No `tailwind.config.ts`. Tokens are CSS variables
  in `styles/tokens.css`, bridged to Tailwind utilities via `@theme` in
  `app/globals.css`.
- **Theme model.** `:root` holds the (prepared, disabled) **light** theme;
  `.dark` holds the active **dark** theme. `<html>` is forced to `dark` for V1.
  A future theme toggle only needs to flip the class.
- **Motion.** Timing/easing are defined once in `lib/animations/tokens.ts`
  (canonical) and mirrored in CSS. Framer variants live in
  `lib/animations/variants.ts`; wrapper components in `components/animations`.

## Data & content flow

Content collections (`content/*`) are typed arrays consumed by sections and
pages. They are CMS-ready: swapping in a headless CMS means replacing this layer
without touching components. SEO reads from `lib/seo` (metadata + JSON-LD),
seeded by `lib/constants/site`.

## Forms & lead flow

`Form → Zod validation → server action/route → integration sink → confirmation`
(Chapter 12 §12). Schemas in `lib/validations` are shared by client and server.
External services are reached only through `lib/integrations` contracts, so
providers can change without touching UI.

## SEO

- `lib/seo/metadata.ts` builds every route's `Metadata` (title template,
  canonical, OG, Twitter).
- `lib/seo/structured-data.ts` builds JSON-LD (Organization, WebSite,
  Breadcrumb, FAQ).
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` handle crawl/PWA files
  (App Router convention — see the [decision log](./decision-log.md)).

## Configuration

`lib/config/env.ts` validates `process.env` with Zod at startup (fail-fast).
`lib/config/features.ts` gates progressively-enabled features. Nothing reads
`process.env` directly.
