# `lib/`

Business-logic-free library code: helpers, config, and integration seams. Pure
and framework-agnostic wherever possible (Chapter 7 §13).

| Folder          | Responsibility                                                                          |
| --------------- | --------------------------------------------------------------------------------------- |
| `utils/`        | `cn()` + formatting helpers (dates, numbers, slugs, paths).                             |
| `seo/`          | `buildMetadata()` and JSON-LD builders (robots/sitemap live in `app/`).                 |
| `validations/`  | Zod schemas — the single source of truth for form data shapes.                          |
| `constants/`    | Site config, routes, and navigation data.                                               |
| `animations/`   | Motion tokens (canonical) + reusable Framer Motion variants.                            |
| `analytics/`    | Typed wrapper over Vercel Analytics (`trackEvent`).                                     |
| `integrations/` | Stable contracts + concrete clients for external services (CRM, n8n, Resend, WhatsApp). |
| `config/`       | Zod-validated env parser + feature flags.                                               |
| `actions/`      | Server actions for form handling (`contact`, `consultation`).                           |

**Import** from the folder barrel, e.g. `import { cn } from "@/lib/utils"`.
Every exported utility carries a doc comment describing its purpose.
