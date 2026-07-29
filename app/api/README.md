# `app/api/`

Route Handlers (server endpoints). Built in M6.

## Endpoints

### `POST /api/contact`

Receive contact-form submissions. Validates with shared Zod schema, sends
notification email (Resend) with console fallback.

**Request body:**

```json
{
  "firstName": "string (required, 1-50 chars)",
  "lastName": "string (required, 1-50 chars)",
  "company": "string (required, 1-120 chars)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "industry": "string (required)",
  "teamSize": "string (optional)",
  "challenge": "string (required, 10-2000 chars)",
  "wantsCallback": "boolean (optional)"
}
```

**Response:** `200 { "success": true, "id": "..." }` or `400 { "error": "...", "details": {...} }`.

### `POST /api/consultation`

Receive consultation/lead-qualification submissions. Validates with shared Zod
schema, sends notification email (Resend) with console fallback.

**Request body:**

```json
{
  "fullName": "string (required, 2-80 chars)",
  "companyName": "string (required, 2-120 chars)",
  "email": "string (required, valid email)",
  "phone": "string (required, 7-20 chars, /^[+\\d][\\d\\s()-]*$/)",
  "industry": "string (required)",
  "teamSize": "string (required)",
  "challenge": "string (required, 10-1000 chars)",
  "preferredTime": "string (optional)"
}
```

**Response:** same as contact endpoint.

## Planned

- `newsletter/` — newsletter opt-in (feature-flagged).

## Conventions

- Validate every payload with the shared Zod schemas in `@/lib/validations`.
- Keep handlers thin: validate → delegate to `@/lib/integrations/lead-sink`
  → return a typed JSON result.
- Never expose secrets; read config via `@/lib/config/env`.
