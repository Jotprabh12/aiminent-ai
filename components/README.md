# `components/`

Presentation layer. All React components live here, grouped by responsibility.

## Subfolders

| Folder        | Responsibility                                                                     |
| ------------- | ---------------------------------------------------------------------------------- |
| `ui/`         | Reusable primitives (Button, Card, Badge, Input…). shadcn/ui components land here. |
| `layout/`     | App shell: `Navbar`, `Footer`, `Container`, `Section`, `MobileMenu`, `Logo`.       |
| `sections/`   | Composable page sections: `Hero`, `ProblemGrid`, `SolutionsGrid`, `FAQ`, `CTA`.    |
| `forms/`      | Form components: `ContactForm`, `ConsultationForm` (RHF + Zod).                    |
| `animations/` | Framer Motion wrapper components (`Reveal`, `Stagger`, `PageTransition`).          |
| `common/`     | Cross-cutting helpers: `EmptyState`, `ErrorState`, `LoadingState`, icon helpers.   |

## Status

- **Session 0 (M1):** Foundation only — folder structure + barrels defined, no components.
- **Session 1 (M2):** Layout shell built — `Navbar`, `MobileMenu`, `Footer`, `Logo`,
  `Container`, `Section`, `Reveal`, `Stagger`, `PageTransition`.
- **Session 2 (M3):** UI primitives built — `Button`, `Card`, `Badge`, `Input`, `Accordion`, `CTABanner`.

## Conventions

- **Server Components by default.** Add `"use client"` only when a component
  needs state, effects, or browser APIs (Chapter 12 §3).
- **Composition over inheritance.** Small, single-purpose components.
- **Typed props, no `any`.** Import shared shapes from `@/types`.
- **Style with tokens**, never raw hex/px — use the design-token utilities.
