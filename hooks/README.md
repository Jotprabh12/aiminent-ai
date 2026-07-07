# `hooks/`

Reusable React hooks only — no components, no business logic. Each is a Client
Component hook (`"use client"`) and SSR-safe.

| Hook                      | Purpose                                           |
| ------------------------- | ------------------------------------------------- |
| `useMediaQuery`           | SSR-safe `matchMedia` subscription.               |
| `useReducedMotion`        | Respect `prefers-reduced-motion` (Chapter 9 §17). |
| `useScroll`               | Scroll offset + `scrolled` flag (glass navbar).   |
| `useIntersectionObserver` | Viewport entry detection for scroll-reveal.       |

Import from the barrel: `import { useScroll } from "@/hooks"`.
