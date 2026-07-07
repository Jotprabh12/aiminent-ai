# Chapter 9 --- Motion System & Micro-Interactions

**Project:** Aiminent AI Website V1\
**Document Type:** Motion Design & Interaction Engineering Specification

------------------------------------------------------------------------

# 1. Objective

Motion should improve comprehension, reinforce hierarchy, and make the
website feel premium.

Animations must never exist purely for decoration. Every animation
should communicate state, guide attention, or provide feedback.

Design inspiration:

-   Linear
-   Vercel
-   Framer
-   Raycast
-   Stripe

------------------------------------------------------------------------

# 2. Motion Principles

Every animation should satisfy at least one objective:

-   Guide attention
-   Explain a process
-   Confirm an action
-   Provide feedback
-   Reduce perceived latency
-   Improve delight

Avoid excessive motion, parallax overload, and distracting effects.

------------------------------------------------------------------------

# 3. Animation Stack

Preferred library:

-   Framer Motion

Use CSS transitions for simple hover states and Framer Motion for page
transitions, scroll reveals, timelines, and complex interactions.

------------------------------------------------------------------------

# 4. Global Timing Tokens

Standard durations:

  Token     Duration
  --------- ----------
  Instant   100ms
  Fast      180ms
  Normal    300ms
  Slow      500ms
  Hero      800ms

Use a shared motion configuration across the application.

------------------------------------------------------------------------

# 5. Easing Tokens

Use a consistent easing system:

-   easeOut
-   easeInOut
-   spring (interactive)
-   linear (progress indicators)

Do not invent custom easing curves for individual components.

------------------------------------------------------------------------

# 6. Page Load Experience

Sequence:

1.  Navbar fades in.
2.  Hero headline appears.
3.  Supporting copy slides upward.
4.  CTA buttons animate.
5.  Hero workflow illustration begins looping.
6.  Scroll indicator fades in.

Total entrance time should remain under one second.

------------------------------------------------------------------------

# 7. Scroll Reveal Rules

Each major section should reveal once.

Recommended order:

-   Section title
-   Supporting copy
-   Cards (staggered)
-   CTA

Cards should animate with slight vertical movement and opacity.

------------------------------------------------------------------------

# 8. Navigation Interactions

Navbar:

-   Transparent at top.
-   Glass background after scrolling.
-   Smooth transition.

Links:

-   Underline or highlight on hover.
-   Visible keyboard focus.

Mobile drawer:

-   Slide from right.
-   Fade overlay.
-   Trap keyboard focus while open.

------------------------------------------------------------------------

# 9. Button Interactions

Hover:

-   Slight elevation
-   Soft shadow
-   Background transition

Active:

-   Small press effect

Loading:

-   Spinner
-   Disabled interaction

Success:

-   Optional confirmation state for forms.

------------------------------------------------------------------------

# 10. Card Interactions

Cards should:

-   Lift slightly on hover.
-   Increase shadow subtly.
-   Animate icon or accent.
-   Maintain accessibility without requiring hover.

No excessive rotation or 3D transforms.

------------------------------------------------------------------------

# 11. Hero Workflow Animation

The automation diagram should animate continuously.

Example sequence:

Lead → Qualification → CRM → WhatsApp → Appointment → Sales → Closed
Deal

Each node pulses as data flows through the workflow.

Animation should pause when the user prefers reduced motion.

------------------------------------------------------------------------

# 12. Timeline Animation

Implementation timeline:

-   Reveal on scroll.
-   Progress line animates.
-   Steps activate sequentially.

Each step expands slightly on hover or focus.

------------------------------------------------------------------------

# 13. FAQ Interaction

Accordion behavior:

-   Smooth height animation.
-   Icon rotates.
-   Keyboard accessible.
-   Preserve scroll position.

------------------------------------------------------------------------

# 14. Form Feedback

Validation:

-   Inline error message.
-   Shake animation avoided.
-   Highlight field accessibly.

Submission:

-   Loading indicator.
-   Success transition.
-   Clear confirmation message.

------------------------------------------------------------------------

# 15. Page Transitions

Transitions between routes should be subtle.

Recommended:

-   Fade
-   Slight upward movement

Avoid long full-screen transitions.

------------------------------------------------------------------------

# 16. Skeleton Loading

Future content should use reusable skeleton components.

Examples:

-   Cards
-   Blog list
-   Case studies
-   Package list

Avoid layout shifts.

------------------------------------------------------------------------

# 17. Reduced Motion

Respect the user's operating system preference.

When reduced motion is enabled:

-   Disable looping animations.
-   Replace movement with fades.
-   Keep interactions functional.

------------------------------------------------------------------------

# 18. Performance Budget

Animation should never noticeably reduce responsiveness.

Guidelines:

-   Animate transform and opacity whenever possible.
-   Avoid layout thrashing.
-   Minimize expensive filters.
-   Lazy-load non-critical animated assets.

------------------------------------------------------------------------

# 19. Motion Acceptance Criteria

Claude Code should implement:

-   Shared animation utilities.
-   Consistent timing tokens.
-   Premium micro-interactions.
-   Accessible motion.
-   Responsive behavior.
-   Smooth performance on desktop and mobile.

The website should feel polished without appearing flashy.
