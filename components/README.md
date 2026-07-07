# `components/`

Presentation layer. All React components live here, grouped by responsibility.
Components are **empty in Session 0 by design** — the foundation defines _where_
UI belongs; the UI itself is built in Sessions 1+ (Milestones M2–M4).

## Subfolders

| Folder        | Responsibility                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `ui/`         | Reusable primitives (Button, Card, Badge, Input…). shadcn/ui components land here.                       |
| `layout/`     | App shell: `Navbar`, `Footer`, `Container`, `Section`, `MobileMenu`.                                     |
| `sections/`   | Composable page sections: `Hero`, `ProblemGrid`, `SolutionsGrid`, `FAQ`, `CTA`.                          |
| `forms/`      | Form components: `ContactForm`, `ConsultationForm` (RHF + Zod).                                          |
| `animations/` | Framer Motion **wrapper components** (e.g. `Reveal`, `Stagger`). Variants/data live in `lib/animations`. |
| `common/`     | Cross-cutting helpers: `EmptyState`, `ErrorState`, `LoadingState`, icon helpers.                         |

## Conventions

- **Server Components by default.** Add `"use client"` only when a component
  needs state, effects, or browser APIs (Chapter 12 §3).
- **Composition over inheritance.** Small, single-purpose components.
- **Typed props, no `any`.** Import shared shapes from `@/types`.
- **Style with tokens**, never raw hex/px — use the design-token utilities.
- **Accessible by construction**: keyboard, focus ring, ARIA, semantic HTML.
- Each folder re-exports its public surface via `index.ts`; import from
  `@/components/<folder>`.
