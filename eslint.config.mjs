import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

/**
 * Flat ESLint config.
 *
 * - `next/core-web-vitals` + `next/typescript` provide the framework rules.
 * - `eslint-config-prettier` is applied LAST so formatting concerns are owned
 *   solely by Prettier and never conflict with lint rules.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
