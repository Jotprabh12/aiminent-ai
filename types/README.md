# `types/`

Shared, cross-cutting TypeScript types. Page-agnostic domain models and
primitives only — no page-specific logic, no runtime code.

Import from the barrel: `import type { Solution, NavItem } from "@/types"`.

**Note:** form data shapes (`ContactFormValues`, `ConsultationFormValues`, …)
are inferred from their Zod schemas in `@/lib/validations` — that is their
single source of truth. `types/forms.ts` holds only form-agnostic primitives to
avoid duplication and a `types → lib` cycle.
