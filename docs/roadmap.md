# Roadmap

Milestones from Appendix F. Each milestone must compile, lint, type-check, and
build before the next begins (Appendix F §3, §6). One feature branch per
milestone.

| Milestone | Scope                                                                                                    | Checkpoint                        | Status              |
| --------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------- |
| **M1**    | Project foundation: scaffold, Tailwind, shadcn config, ESLint/Prettier, folder structure, design tokens. | App builds successfully.          | ✅ Done (Session 0) |
| **M2**    | Global layout: Navbar, Footer, Container, Section, theme, typography, responsive shell.                  | Responsive shell complete.        | ✅ Done (Session 1) |
| **M3**    | Component library: Button, Card, Badge, Input, Accordion, CTA banner.                                    | Components documented & reusable. | ✅ Done (Session 2) |
| **M4**    | Homepage: Hero, Problems, Solutions, Workflow demo, Packages, FAQ, CTA.                                  | Homepage complete.                | ✅ Done (Session 3) |
| **M5**    | Remaining pages: About, Contact, Solutions, Packages, Industries, Resources placeholders.                | Navigation complete.              | ✅ Done (Session 4) |
| **M6**    | Integrations: forms, Calendly, metadata, analytics hooks, SEO utilities.                                 | Lead flow operational.            | ✅ Done (Session 5) |
| **M7**    | Polish: animations, accessibility audit, performance, QA.                                                | Production-ready build.           | ✅ Done (Session 6) |

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

## What Session 3 (M4) delivered

- **HeroSection:** Eyebrow, headline, subheadline, primary + secondary CTAs, trust chips.
- **ProblemGrid:** Six problem cards with hover-lift effect, each showing problem + solution.
- **SolutionsGrid:** Six solution cards with features list and CTA link.
- **WorkflowDemo:** Seven-step horizontal timeline with connecting line and staggered reveals.
- **PackagesSection:** Three package cards (Starter, Growth, Enterprise) with features and recommended badge.
- **FAQSection:** Six FAQ items in an accordion with smooth animation.
- **CTABanner:** Final CTA banner with "Book Free Consultation" link.
- **Homepage (`app/page.tsx`):** Full homepage composing all sections in spec-defined order.

## What Session 4 (M5) delivered

- **12 new routes:** `/about`, `/contact`, `/solutions`, `/packages`, `/industries`, `/resources`, `/blog`, `/case-studies`, `/book-consultation`, `/thank-you`, `/privacy`, `/terms`.
- **About page:** Hero, story, values, process (6-step timeline), technology stack, CTA.
- **Contact page:** Contact info sidebar + form (Input, Select, Switch) with server-side action.
- **Solutions page:** 6 solution cards (AI Lead Engine, AI Sales Assistant, AI Property Consultant, Customer Lifecycle Automation, Marketing Automation Suite, Custom AI Solutions) with features lists.
- **Packages page:** 3-tier pricing (Starter, Growth, Enterprise) with feature lists and recommended badge.
- **Industries page:** Real Estate (live) + 7 coming-soon industry cards.
- **Book Consultation page:** Benefits list + booking form with server-side action, contact fallback.
- **Thank You page:** Confirmation with Calendly/home/solutions links.
- **Privacy & Terms pages:** Legal policy pages with sections.
- **Blog, Case Studies, Resources:** Coming-soon placeholders.
- **All pages:** Server Components, `action`-based forms (no `"use client"`), metadata via `buildMetadata`.
- **Build:** TypeScript + Next.js build passes; ESLint clean on M5 files; 18 total static routes.

## What Session 5 (M6) delivered

- **Server actions:** `lib/actions/contact.ts` and `lib/actions/consultation.ts` with Zod validation, `useActionState`-compatible return types, and `redirect` on success.
- **Client form components:** `ContactForm` and `ConsultationForm` — client components with `useActionState`, inline error display, full field alignment with schemas.
- **Email integration:** `lib/integrations/email.ts` — Resend API via fetch with graceful fallback to console log when API key not configured.
- **Lead sink:** `lib/integrations/lead-sink.ts` — formats lead data and sends via email; implements the `LeadSink` interface.
- **API routes:** `app/api/contact/route.ts` and `app/api/consultation/route.ts` — POST endpoints with Zod validation, returning JSON responses.
- **Calendly integration:** `components/ui/calendly-button.tsx` — conditional button when `NEXT_PUBLIC_CALENDLY_URL` is set and feature flag enabled.
- **Analytics tracking:** `track()` calls in server actions for `contact_submitted` and `consultation_booked` events; `TrackedButton` component for CTA click tracking; `Analytics` component already wired in layout.
- **Metadata paths:** All 12 page metadata calls now include `path` for correct canonical URLs.
- **Dynamic thank-you page:** Reads `source` query param to show contact vs. consultation messaging; shows Calendly link when configured.
- **Barrel exports:** `lib/actions/index.ts`, `lib/integrations/index.ts` updated with new exports.
- **Feature flags:** `calendly` enabled by default.
- **Build:** 22 routes (20 static + 2 dynamic API + 2 dynamic pages), TypeScript + lint clean.

## What Session 6 (M7) delivered

- **Focus styles:** Added `focus-visible:ring-2` to error.tsx "Try again" button and not-found.tsx "Back to home" link.
- **Heading hierarchy:** Added missing `<h2>` section headings on solutions, packages, and industries pages (h1→h2→h3 progression).
- **Interior page animations:** Added `reveal` prop to 12 Section components across about (4 sections), solutions (1), industries (1), packages (1), contact (1), and book-consultation (1) pages.
- **Problem grid animations:** Wrapped each ProblemCard in a `Reveal` with staggered delay.
- **Lint warnings eliminated:** Removed 7 unused imports (`Button`, `cn`, `className` from hero.tsx; `Stagger` from solutions-grid.tsx; `Link` from packages.tsx; `ROUTES` from footer.tsx; `AnchorHTMLAttributes` from button.tsx).
- **Build:** Zero lint warnings, zero TypeScript errors, 22 routes compile + generate cleanly.

## Definition of Done (project)

All pages implemented · design system consistently applied · components reusable
· WCAG 2.2 AA · Lighthouse targets met · docs complete · lead flow works
end-to-end · ready for additional industries (Appendix F §10).
