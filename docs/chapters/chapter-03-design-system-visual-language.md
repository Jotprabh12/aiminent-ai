# Chapter 3 --- Design System & Visual Language

**Project:** Aiminent AI Website V1\
**Document Type:** Product Requirements Document (PRD)

------------------------------------------------------------------------

# 1. Objective

This chapter defines the visual identity, UI language, and design
standards for Aiminent AI.

The website should feel like a premium SaaS company rather than a
traditional IT services agency. The design must inspire confidence,
communicate technical excellence, and encourage visitors to book a
consultation.

Design inspiration should primarily come from:

-   OpenAI
-   Linear
-   Vercel
-   Framer
-   Stripe
-   Raycast

The experience should be modern, clean, interactive, and
conversion-focused.

------------------------------------------------------------------------

# 2. Design Principles

Every screen should follow these principles:

1.  Simplicity over complexity.
2.  White space is a feature.
3.  Motion should guide attention, not distract.
4.  Components must be reusable.
5.  Every visual element should support conversion.
6.  Premium aesthetics over flashy effects.
7.  Mobile-first without compromising desktop quality.

------------------------------------------------------------------------

# 3. Brand Identity

## Temporary Logo

Until an official logo is designed, Claude should generate a clean
wordmark.

Text:

Aiminent AI

Symbol ideas:

-   Abstract "A"
-   AI node network
-   Circuit-inspired geometry
-   Hexagonal mark
-   Minimal monogram

Requirements:

-   Flat design
-   Works in monochrome
-   SVG format
-   Easily replaceable

------------------------------------------------------------------------

# 4. Color System

The palette should be centralized using CSS variables.

### Primary

Deep Electric Blue

### Secondary

Purple Gradient Accent

### Background

Dark charcoal (#0B0D12 equivalent)

### Surface

Slightly lighter cards with subtle transparency.

### Semantic Colors

Success

Warning

Error

Info

Each semantic color should have:

-   Background
-   Border
-   Text
-   Hover state

------------------------------------------------------------------------

# 5. Typography

Primary font:

Inter

Fallback:

system-ui

Font Scale

Hero: 56--72px

H1: 48px

H2: 40px

H3: 32px

H4: 24px

Body: 18px

Small: 16px

Caption: 14px

Rules:

-   Maximum two font families.
-   Comfortable line height.
-   Excellent readability.

------------------------------------------------------------------------

# 6. Layout System

Use a responsive 12-column grid.

Container widths:

-   Mobile
-   Tablet
-   Desktop
-   Wide desktop

Spacing system:

4 8 12 16 24 32 48 64 96 128

Never use arbitrary spacing values.

------------------------------------------------------------------------

# 7. Components

Every component should be reusable.

Core components include:

-   Buttons
-   Cards
-   Badges
-   Pills
-   Forms
-   Inputs
-   Dropdowns
-   Navigation
-   Accordions
-   Tabs
-   Modals
-   Testimonials (future)
-   Pricing cards (future)
-   CTA banners
-   Footer

Variants should support:

Default

Hover

Focus

Active

Disabled

Loading

------------------------------------------------------------------------

# 8. Buttons

Primary CTA

Filled

High contrast

Large border radius

Subtle hover lift

Secondary CTA

Outlined

Ghost

Text link

Buttons should include smooth transitions and keyboard focus states.

------------------------------------------------------------------------

# 9. Cards

Cards are a core visual element.

Rules:

-   Rounded corners
-   Soft shadow
-   Glass effect (light)
-   Hover elevation
-   Smooth motion
-   Consistent padding

Cards should display:

Icon

Title

Description

CTA

------------------------------------------------------------------------

# 10. Icons

Use Lucide Icons.

Style:

Minimal

Outline

Consistent stroke width

Avoid mixing icon libraries.

------------------------------------------------------------------------

# 11. Illustration Style

Avoid stock photos.

Prefer:

-   Workflow diagrams
-   Abstract gradients
-   Isometric automation graphics
-   Minimal SaaS illustrations
-   Animated line connections

Real Estate pages may include tasteful property imagery where
appropriate.

------------------------------------------------------------------------

# 12. Motion Design

Use Framer Motion.

Animations should be purposeful.

Examples:

-   Fade-in on scroll
-   Staggered card reveal
-   Floating hero illustration
-   Gradient movement
-   Counter animations
-   Accordion transitions
-   Smooth page transitions
-   Button micro-interactions

Animation duration:

200--600ms

Use easing curves consistent across the site.

------------------------------------------------------------------------

# 13. Responsive Design

Breakpoints:

Mobile

Tablet

Laptop

Desktop

Ultra-wide

Requirements:

-   No layout shifts
-   Optimized typography
-   Flexible grids
-   Responsive navigation
-   Mobile-friendly forms

------------------------------------------------------------------------

# 14. Accessibility

Meet WCAG AA standards.

Requirements:

-   Keyboard navigation
-   Visible focus states
-   Sufficient color contrast
-   Semantic HTML
-   Accessible labels
-   Screen reader compatibility
-   Reduced motion support

------------------------------------------------------------------------

# 15. Performance Guidelines

Target Lighthouse score:

95+

Largest Contentful Paint:

\<2.5 seconds

Avoid unnecessary JavaScript.

Lazy-load non-critical assets.

Optimize images.

Use server components where appropriate.

------------------------------------------------------------------------

# 16. Claude Code Implementation Notes

Claude should create:

-   Global design tokens
-   Reusable Tailwind theme
-   Component library
-   Animation utilities
-   Theme variables
-   Typography utilities
-   Responsive helpers

The design system should support future expansion without major
refactoring.

------------------------------------------------------------------------

# 17. Acceptance Criteria

By the end of this chapter, Claude Code should understand:

-   The complete visual language of Aiminent AI.
-   How every UI component should look and behave.
-   The motion philosophy.
-   Responsive and accessibility standards.
-   The reusable design system that will power every future page.
