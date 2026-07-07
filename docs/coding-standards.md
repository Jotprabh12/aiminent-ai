# Coding Standards

Non-negotiables distilled from Chapters 7, 8, 12 and Appendix F. Enforced by
TypeScript, ESLint, Prettier, and the pre-commit hooks.

## TypeScript

- **Strict mode**, plus `noUncheckedIndexedAccess`, `noImplicitOverride`,
  `noImplicitReturns`, `noFallthroughCasesInSwitch`.
- No `any`. Prefer precise types; use `unknown` + narrowing at boundaries.
- Shared shapes live in `@/types`; infer form types from Zod schemas.
- Export types with `export type` (works with `isolatedModules`).

## Components

- **Server Components by default.** Add `"use client"` only for state, effects,
  or browser APIs.
- **Composition over inheritance.** Small, single-purpose, reusable.
- Typed props; destructure with sensible defaults. No one-off components when a
  primitive exists (`components/ui`).
- **Accessibility is built in**, not bolted on: semantic HTML, keyboard support,
  visible focus, ARIA where needed, `prefers-reduced-motion` respected
  (WCAG 2.2 AA).

## Styling

- Use **design tokens** via Tailwind utilities (`bg-primary`, `rounded-lg`,
  `shadow-floating`). **Never** hard-code hex/px or use magic numbers.
- Respect the spacing scale (4·8·12·16·24·32·40·48·64·80·96·128·160).
- Compose classes with `cn()`; keep conditional classes readable.

## Motion

- Use shared tokens (`DURATION`, `EASING`, `SPRING`) and variants from
  `@/lib/animations`. No component invents its own timing.
- Animate `transform`/`opacity`; avoid layout thrash.

## Content & config

- No long-form copy in JSX — put it in `content/`.
- No `process.env` in components — read `@/lib/config/env`.
- Reference routes via `ROUTES`, not string literals.

## Imports & files

- Absolute `@/*` imports only; import from barrels where available.
- One component per file, filename matches the export.
- No dead code, no `TODO`s in committed production code, no commented-out blocks.

## Formatting & linting

- Prettier owns formatting (2-space, semicolons, double quotes, trailing commas,
  80 cols). Don't hand-format.
- Code must pass `pnpm lint`, `pnpm typecheck`, and `pnpm format:check` before
  commit (the pre-commit hook runs lint-staged automatically).

## Commits

- Conventional Commits enforced by Commitlint:
  `feat · fix · refactor · docs · chore · style · perf · test · build · ci · revert`.
- Keep each commit buildable (Appendix F §3).
