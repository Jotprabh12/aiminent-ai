# `content/`

Site copy and content collections, stored **separately from UI** so text is
easy to edit and the layer can later be swapped for a CMS (Chapter 7 §10 ·
Chapter 12 §13). No long-form copy lives in JSX.

| File            | Contents                                            |
| --------------- | --------------------------------------------------- |
| `homepage.ts`   | Homepage section order (structure, not copy).       |
| `solutions.ts`  | `Solution[]` collection.                            |
| `packages.ts`   | `Package[]` collection.                             |
| `industries.ts` | `Industry[]` collection.                            |
| `faq.ts`        | `FAQItem[]` collection.                             |
| `metadata.ts`   | Per-route `SEOMetadata` inputs for `buildMetadata`. |

Collections are **typed but empty** in Session 0; copy is authored in M4/M5.
Import from the barrel: `import { solutions } from "@/content"`.
