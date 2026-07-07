# Contributing

## Workflow (Appendix F)

1. Read the relevant spec chapter(s) and the [architecture](./architecture.md).
2. Branch from `main` using the milestone flow: `feat/layout`, `feat/components`,
   `feat/homepage`, `feat/pages`, `feat/forms`, `feat/seo`, `feat/polish`.
3. **Reuse before creating** — check `components/ui`, `lib/`, and `hooks/` first.
4. Implement one milestone; keep every commit buildable.
5. Run the gates locally: `pnpm lint && pnpm typecheck && pnpm format:check && pnpm build`.
6. Commit with Conventional Commits; open a PR; summarise progress.

Do not start a new milestone until the previous one passes its checkpoint.

## Branch & commit conventions

- **Branches:** `type/short-description` (e.g. `feat/navbar`).
- **Commits:** Conventional Commits — enforced by Commitlint.
  `feat · fix · refactor · docs · chore · style · perf · test · build · ci · revert`.
  Example: `feat(layout): add sticky glass navbar`.

## Pre-commit checklist (Appendix F §7)

- [ ] No TypeScript errors (`pnpm typecheck`).
- [ ] No ESLint errors (`pnpm lint`).
- [ ] Formatted (`pnpm format:check`).
- [ ] No duplicated components; reused where possible.
- [ ] Responsive verified (mobile / tablet / desktop).
- [ ] Accessible: keyboard, focus, ARIA, reduced motion.
- [ ] Imports organised (absolute `@/*`); dead code removed.

The **pre-commit** hook runs lint-staged (ESLint + Prettier) on staged files;
the **commit-msg** hook validates your message. Don't bypass with `--no-verify`.

## Adding things — quick pointers

- **A component?** Pick the right `components/*` folder (see the
  [folder guide](./folder-guide.md)); Server Component unless it needs
  interactivity.
- **Copy/data?** `content/` — never long-form copy in JSX.
- **A form?** Schema in `lib/validations` (source of truth), component in
  `components/forms`, handler in `app/api`.
- **A route?** Reference it in `lib/constants/routes`; add metadata via
  `buildMetadata`; register it in `app/sitemap.ts` if indexable.
- **A design change?** Edit a token in `styles/tokens.css` — not a component.
- **An env var?** Add it to the schema in `lib/config/env.ts` **and**
  `.env.example`.

## Definition of Done for a change

Builds · typed · linted · formatted · reused not duplicated · accessible ·
responsive · documented where it matters.
