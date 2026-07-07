import { z } from "zod";

/**
 * Type-safe environment access.
 * ---------------------------------------------------------------------------
 * `process.env` is validated once, at module load, against a Zod schema so the
 * app fails fast on misconfiguration instead of at some random runtime call.
 *
 * Rules (Next.js):
 *  - Only `NEXT_PUBLIC_*` vars are available in the browser, so each var is
 *    referenced EXPLICITLY below (Next statically inlines them — dynamic access
 *    like `process.env[key]` would not be replaced).
 *  - Server-only secrets are optional here so client-side validation (where
 *    they are absent) does not throw. Guard their USAGE in server code.
 *
 * Add new variables in three places: the schema, the `processEnv` map, and
 * .env.example.
 */

const schema = z.object({
  // Runtime
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // Public — safe to expose to the browser.
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_CALENDLY_URL: z.string().url().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),

  // Server-only secrets (optional until their feature ships).
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
});

/** Explicit map so Next can inline `NEXT_PUBLIC_*` at build time. */
const processEnv = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
};

const parsed = schema.safeParse(processEnv);

if (!parsed.success) {
  // Surface a readable error at startup rather than a cryptic runtime failure.
  const details = parsed.error.issues
    .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
  console.error(`❌ Invalid environment variables:\n${details}`);
  throw new Error("Invalid environment variables. See .env.example.");
}

/** Validated, fully-typed environment. Import this — never touch process.env. */
export const env = parsed.data;

export type Env = typeof env;
