# Decision Log

Architecturally-significant decisions and every deliberate deviation from the
spec. The spec instructs: _follow modern best practice over the documentation
where they conflict, and document the reason_ — that's what this file is for.

Format: **Decision · Context · Choice · Rationale · Status**.

---

## D1 — Next.js 16 (spec pins 15)

- **Context:** The PRD lists Next.js 15 + React 19 as "non-negotiable". As of
  the build date, Next.js 16 is the current stable release.
- **Choice:** Next.js 16 + React 19.
- **Rationale:** Best-practice-over-docs rule; newest stable APIs and the
  longest support window. React 19 (as specified) is unchanged. Confirmed with
  the project owner.
- **Status:** Accepted.

## D2 — Tailwind CSS v4, CSS-first (spec references `tailwind.config.ts`)

- **Context:** Appendix A lists `tailwind.config.ts` and `styles/tokens.css`.
  Tailwind v4 (the current shadcn/ui default) is CSS-first: theme is configured
  in CSS via `@theme`, with no JS config file.
- **Choice:** Tailwind v4. No `tailwind.config.ts`. Tokens in
  `styles/tokens.css`, bridged in `app/globals.css`.
- **Rationale:** Matches the docs' actual intent ("CSS variables consumed by
  Tailwind"), aligns with shadcn's current setup, and is less config to
  maintain. Confirmed with the project owner.
- **Status:** Accepted.

## D3 — pnpm as package manager

- **Choice:** pnpm (via Corepack), pinned with `packageManager` in
  `package.json`.
- **Rationale:** Fast, strict, disk-efficient; the Vercel-standard choice for a
  long-lived codebase. Confirmed with the project owner.
- **Status:** Accepted.

## D4 — Provisional color palette

- **Context:** The PRD fixes only the background (`#0B0D12`) and the direction
  ("deep electric blue" + "purple/violet accent", plus cyan/indigo gradients).
  The full palette is unspecified.
- **Choice:** A complete provisional dark palette (electric blue `#4C6FFF`,
  violet `#8B5CF6`, cyan `#22D3EE`, semantic set) defined as CSS variables in
  `styles/tokens.css`.
- **Rationale:** Because everything is tokenised, finalising the brand palette
  is a single-file edit with zero component churn.
- **Status:** Provisional — revisit at brand sign-off.

## D5 — `robots.ts` / `sitemap.ts` / `manifest.ts` live in `app/`

- **Context:** Chapter 7 §9 places robots/sitemap under `lib/seo/`.
- **Choice:** They live in `app/` (`app/robots.ts`, `app/sitemap.ts`,
  `app/manifest.ts`); reusable SEO _helpers_ remain in `lib/seo`.
- **Rationale:** The Next.js App Router generates these files from `app/`
  metadata routes. Placing them elsewhere would not work.
- **Status:** Accepted.

## D6 — Light mode prepared but disabled

- **Choice:** Light-theme tokens are defined in `:root`; the app forces
  `<html class="dark">`. No theme toggle ships in V1.
- **Rationale:** Matches the spec ("Light Mode prepared but disabled") and lets a
  future toggle be added by flipping a class — no rework.
- **Status:** Accepted.

## D7 — Temporary homepage placeholder

- **Choice:** `app/page.tsx` is a minimal, non-marketing bootstrap placeholder,
  clearly labelled, to be replaced by the real homepage in M4.
- **Rationale:** Session 0 is foundation-only (no pages/sections), but the app
  must compile and the token pipeline must be verifiable. Building nothing would
  leave a non-buildable repo.
- **Status:** Temporary — replaced in M4.

## D8 — Logo asset deferred

- **Choice:** No logo SVG generated in Session 0; `public/logos/` is scaffolded
  empty.
- **Rationale:** Logos/illustrations are visual assets excluded by the Session 0
  strict rules. Added with the layout work (M2).
- **Status:** Deferred.

## D9 — Strict TypeScript superset

- **Choice:** Enabled `noUncheckedIndexedAccess`, `noImplicitOverride`,
  `noImplicitReturns`, `noFallthroughCasesInSwitch` on top of `strict`.
- **Rationale:** Catches whole classes of bugs at compile time; cheap to adopt
  at project start, painful to retrofit later.
- **Status:** Accepted.

## D10 — Empty route folders documented, not stubbed with pages

- **Choice:** Planned routes exist as folders with a README (purpose + target
  milestone) and **no `page.tsx`**.
- **Rationale:** Communicates the information architecture without creating
  pages (a later-session concern) or empty routes that would 404 oddly.
- **Status:** Accepted.

## D11 — Self-hosted Inter via `next/font/local` (not `next/font/google`)

- **Context:** The spec calls for Inter via `next/font`. `next/font/google`
  fetches the font from Google Fonts **at build time**, which fails in networks
  that don't allow `fonts.googleapis.com`.
- **Choice:** Vendor the Inter variable woff2 (`app/fonts/inter-variable.woff2`,
  sourced from the `@fontsource-variable/inter` npm package) and load it with
  `next/font/local`.
- **Rationale:** Still `next/font` and still Inter, but with no build-time
  external dependency — plus the usual self-hosting wins (privacy/GDPR, no extra
  DNS/connection, deterministic offline builds). To update the font, replace the
  woff2 from the same package.
- **Status:** Accepted.

## D12 — Mobile drawer pattern (focus trap + body scroll lock + Esc)

- **Context:** Chapter 9 §8 specifies the mobile nav should trap keyboard
  focus while open and lock body scroll. Session 0 had the hooks stubbed
  but not implemented.
- **Choice:** `useFocusTrap` + `useLockBodyScroll` hooks + Esc-to-close +
  `slideInRight` Framer variant for the drawer animation.
- **Rationale:** WCAG 2.1.2 (no keyboard trap on modal) and 2.4.3 (focus
  order) require trapping; `useLockBodyScroll` prevents background scroll
  underneath the drawer. The Esc key is the expected dismissal pattern.
- **Status:** Accepted.

## D13 — `app/page.tsx` now a `<div>` (not `<main>`) — layout provides `<main>`

- **Context:** Session 0 left `<main>` only in `not-found.tsx` and
  `error.tsx`. The layout now wraps all children in `<main id="main-content">`.
- **Choice:** `page.tsx` (placeholder) drops its own wrapper;
  `not-found.tsx`, `error.tsx`, `loading.tsx` were also unwrapped to avoid
  nested `<main>` elements.
- **Rationale:** One `<main>` per route is the semantic requirement.
  The layout provides it; page files fill the slot.
- **Status:** Accepted.

## D14 — `PageTransition` wrapper in layout shell

- **Context:** Chapter 9 §15 calls for subtle route transitions (fade +
  slight upward move) without long full-screen transitions.
- **Choice:** A `PageTransition` wrapper in the layout uses Framer Motion's
  `key={pathname}` pattern (Enter only; no AnimatePresence exit to avoid
  blocking the incoming route).
- **Rationale:** `lazyMotion` + `domAnimation` keeps the motion bundle out
  of the critical path. Enter-only motion is the recommended App Router
  pattern. Reduced motion disables it cleanly.
- **Status:** Accepted.

## D15 — Scrollbar styling, skip link, custom selection (theme finishing)

- **Context:** Session 0's theme lacked scrollbar visuals, keyboard skip
  navigation, and selection styling.
- **Choice:** Added `::-webkit-scrollbar` theming (token-driven), `skip-link`
  with `:focus-visible` reveal, and `::selection` styled with primary color.
- **Rationale:** These are accessibility polish items that are cheap to add
  once and improve the experience for every user immediately.
- **Status:** Accepted.
