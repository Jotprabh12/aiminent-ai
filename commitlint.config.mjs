/**
 * Commit message linting — enforces Conventional Commits.
 *
 * Allowed types mirror the git strategy in Appendix F:
 *   feat · fix · refactor · docs · chore · style · perf · test · build · ci · revert
 */
/** @type {import("@commitlint/types").UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "docs",
        "chore",
        "style",
        "perf",
        "test",
        "build",
        "ci",
        "revert",
      ],
    ],
    "subject-case": [0],
  },
};

export default config;
