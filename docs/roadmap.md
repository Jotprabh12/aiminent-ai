# Roadmap

Milestones from Appendix F. Each milestone must compile, lint, type-check, and
build before the next begins (Appendix F §3, §6). One feature branch per
milestone.

| Milestone | Scope                                                                                                    | Checkpoint                        | Status              |
| --------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------- |
| **M1**    | Project foundation: scaffold, Tailwind, shadcn config, ESLint/Prettier, folder structure, design tokens. | App builds successfully.          | ✅ Done (Session 0) |
| **M2**    | Global layout: Navbar, Footer, Container, Section, theme, typography, responsive shell.                  | Responsive shell complete.        | ✅ Done (Session 1) |
| **M3**    | Component library: Button, Card, Badge, Input, Accordion, CTA banner.                                    | Components documented & reusable. | ✅ Done (Session 2) |
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
- Self-hosted Inter font (no Google Fonts dependency).

## What Session 1 (M2) delivered

- **Navbar**: sticky, glass-on-scroll, desktop horizontal nav + mobile
  hamburger drawer (focus trap, scroll lock, Esc-to-close, reduced-motion
  aware, config-driven).
- **Footer**: four-column responsive footer, config-driven, social links,
  legal links, newsletter placeholder (feature-gated).
- **Logo**: inline SVG mark + wordmark with `currentColor` for theme
  compatibility; standalone mark SVG in `public/logos/`; `app/icon.svg`
  favicon.
- **Container**: responsive width-constrained primitive (page / wide / prose /
  full).
- **Section**: vertical rhythm primitive (background, spacing, id, container
  toggle, optional scroll-reveal).
- **Motion foundation**: `pageTransition` variant, `Reveal` (scroll-reveal
  wrapper, reduced-motion aware), `Stagger` (parent + item for staggered
  reveals), `PageTransition` wrapper keyed by pathname.
- **Hooks**: `useFocusTrap`, `useLockBodyScroll` (mobile drawer support).
- **Theme finishing**: custom scrollbar styling, skip-to-content link,
  custom selection color, smooth scroll.
- **Accessibility skip link** (visible on keyboard focus).
- **App shell**: `layout.tsx` wires Navbar → `<main id="main-content">` →
  PageTransition → Footer + Analytics + JSON-LD.
- All pages (`error.tsx`, `not-found.tsx`, `loading.tsx`) updated to drop
  redundant `<main>` wrappers (layout provides it).

## What Session 2 (M3) delivered

- **Button:** Primary, Secondary, Outline, Ghost, Link variants; Sm, Md, Lg sizes; loading state, icon support, full-width.
- **Card:** Feature, Package, Industry, Testimonial, Blog, Integration variants; sub-components (Header, Title, Description, Content, Footer); hover-lift option.
- **Badge:** Default, Success, Warning, Error, Outline variants; Sm, Md sizes.
- **Input:** Text Input, Textarea, Select, Checkbox, Radio, Switch; label, helper text, validation state, error state, disabled state.
- **Accordion:** Single and multiple expand modes; keyboard accessible; smooth animation; controlled and uncontrolled support.
- **CTABanner:** Configurable heading, description, CTA button; surface/muted/primary backgrounds; left/center/right alignment.

## Definition of Done (project)

All pages implemented · design system consistently applied · components reusable
· WCAG 2.2 AA · Lighthouse targets met · docs complete · lead flow works
end-to-end · ready for additional industries (Appendix F §10).
