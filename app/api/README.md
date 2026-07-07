# `app/api/`

Route Handlers (server endpoints). Empty in Session 0.

Planned handlers (M6):

- `contact/` — receive contact-form submissions → email (Resend) + lead sink.
- `consultation/` — receive qualified leads → CRM / n8n (see `lib/integrations`).
- `newsletter/` — newsletter opt-in (feature-flagged).

**Conventions**

- Validate every payload with the shared Zod schemas in `@/lib/validations`.
- Keep handlers thin: validate → delegate to an integration in `@/lib/integrations`
  → return a typed JSON result.
- Never expose secrets; read config via `@/lib/config/env`.
