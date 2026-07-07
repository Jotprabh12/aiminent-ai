# Roadmap

Milestones from Appendix F. Each milestone must compile, lint, type-check, and
build before the next begins (Appendix F §3, §6). One feature branch per
milestone.

| Milestone | Scope                                                                                                    | Checkpoint                        | Status              |
| --------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------- |
| **M1**    | Project foundation: scaffold, Tailwind, shadcn config, ESLint/Prettier, folder structure, design tokens. | App builds successfully.          | ✅ Done (Session 0) |
| **M2**    | Global layout: Navbar, Footer, Container, Section, theme, typography, responsive shell.                  | Responsive shell complete.        | ⬜ Next             |
| **M3**    | Component library: Button, Card, Badge, Input, Accordion, CTA banner.                                    | Components documented & reusable. | ⬜                  |
| **M4**    | Homepage: Hero, Problems, Solutions, Workflow demo, Packages, FAQ, CTA.                                  | Homepage complete.                | ⬜                  |
| **M5**    | Remaining pages: About, Contact, Solutions, Packages, Industries, Resources placeholders.                | Navigation complete.              | ⬜                  |
| **M6**    | Integrations: forms, Calendly, metadata, analytics hooks, SEO utilities.                                 | Lead flow operational.            | ⬜                  |
| **M7**    | Polish: animations, accessibility audit, performance, QA.                                                | Production-ready build.           | ⬜                  |

## What Session 0 (M1) delivered

- Next.js 16 + React 19 + TypeScript (strict) scaffold.
- Tailwind v4 CSS-first design-token system (color, spacing, radius, shadow,
  typography, motion; dark active, light prepared).
- Full folder architecture with per-folder documentation and barrels.
- Shared types, utilities, hooks, validation schemas, SEO helpers, analytics
  wrapper, integration contracts, env parser, and feature flags.
- Tooling: ESLint, Prettier, Husky, lint-staged, Commitlint.
- Documentation set (this `docs/` engineering suite + root README).

## Recommended next step (M2)

Build the layout shell (`components/layout`): `Navbar` (glass-on-scroll via
`useScroll`), `Footer` (from `FOOTER` config), `Container`, and `Section`, then
wire them into `app/layout.tsx`. See the Session 1 recommendations in the
handoff summary.

## Definition of Done (project)

All pages implemented · design system consistently applied · components reusable
· WCAG 2.2 AA · Lighthouse targets met · docs complete · lead flow works
end-to-end · ready for additional industries (Appendix F §10).
