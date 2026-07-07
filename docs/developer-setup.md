# Developer Setup

## Prerequisites

| Tool    | Version           | Notes                                     |
| ------- | ----------------- | ----------------------------------------- |
| Node.js | 24 (see `.nvmrc`) | `nvm use` picks it up. Minimum: 20.11.    |
| pnpm    | 11.x              | Enabled via Corepack (bundled with Node). |
| Git     | any recent        | Required (Husky hooks).                   |

## First-time setup

```bash
# Enable pnpm through Corepack (no global install needed)
corepack enable pnpm
# If your environment can't symlink into a system dir, target a user bin:
#   corepack enable --install-directory "$HOME/.local/bin" pnpm

# Install dependencies (also installs Husky git hooks via the "prepare" script)
pnpm install

# Create your local env file and fill in values
cp .env.example .env.local
```

`lib/config/env.ts` validates the environment on boot — a missing/invalid var
throws a readable error listing exactly what's wrong.

## Everyday commands

```bash
pnpm dev            # dev server at http://localhost:3000
pnpm build          # production build
pnpm start          # serve the production build
pnpm lint           # ESLint
pnpm lint:fix       # ESLint --fix
pnpm typecheck      # tsc --noEmit
pnpm format         # Prettier write
pnpm format:check   # Prettier check (what CI runs)
```

## Git hooks (Husky)

Installed automatically by `pnpm install`:

- **pre-commit** → `lint-staged` (ESLint + Prettier on staged files).
- **commit-msg** → Commitlint (Conventional Commits).

To bypass in an emergency: `git commit --no-verify` (avoid — CI still enforces).

## Editor

- Install the **ESLint** and **Prettier** extensions; enable format-on-save.
- The repo ships `.editorconfig` for consistent whitespace.
- TypeScript: use the workspace version.

## Troubleshooting

- **`pnpm: command not found`** → `corepack enable pnpm` (ensure your shell PATH
  includes the Corepack shim directory).
- **Env validation error on start** → compare `.env.local` against
  `.env.example`; the error message names the offending variable.
- **Native build script warning (`sharp`)** → expected; `sharp` ships prebuilt
  binaries. Approve with `pnpm approve-builds` if desired.
