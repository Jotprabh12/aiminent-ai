# `styles/`

Global styling resources, imported by `app/globals.css`.

| File             | Contents                                                                              |
| ---------------- | ------------------------------------------------------------------------------------- |
| `tokens.css`     | Design tokens as CSS variables. `:root` = light (disabled), `.dark` = active theme.   |
| `animations.css` | Shared keyframes + the `prefers-reduced-motion` reset.                                |
| `utilities.css`  | Token-driven `@utility` helpers (`container-page`, `surface-glass`, `text-gradient`). |

Tailwind consumes these via the `@theme` bridge in `app/globals.css`. Change a
token value here and it propagates across the whole app — components never
hard-code hex/px values (Chapter 8 · Chapter 12 §7).
