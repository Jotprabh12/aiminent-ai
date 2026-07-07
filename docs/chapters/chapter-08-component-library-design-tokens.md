# Chapter 8 --- Component Library & Design Tokens

**Project:** Aiminent AI Website V1 **Document Type:** Engineering & UI
Specification

------------------------------------------------------------------------

# 1. Objective

This chapter defines the reusable component library and design token
system.

Every UI element should be built once and reused throughout the website.

The goal is to create a scalable design system that supports future
pages, industries, products, dashboards, and SaaS offerings without
redesign.

------------------------------------------------------------------------

# 2. Design Philosophy

The component library should follow these principles:

-   Modular
-   Reusable
-   Accessible
-   Consistent
-   Theme-driven
-   Animation-ready
-   Responsive by default

No page should contain one-off UI components unless absolutely
necessary.

------------------------------------------------------------------------

# 3. Design Tokens

All visual decisions should be centralized.

## Color Tokens

    Primary
    Primary Hover
    Primary Foreground

    Secondary
    Secondary Hover

    Accent

    Success
    Warning
    Error
    Info

    Background
    Surface
    Muted Surface

    Border
    Divider

    Text Primary
    Text Secondary
    Text Muted

Use CSS variables exposed through Tailwind.

------------------------------------------------------------------------

## Typography Tokens

    Display XL
    Display L
    Heading 1
    Heading 2
    Heading 3
    Heading 4

    Body Large
    Body
    Body Small

    Caption

    Button Text

Typography should remain consistent across all pages.

------------------------------------------------------------------------

## Spacing Tokens

Adopt an 8-point system.

    4
    8
    12
    16
    24
    32
    40
    48
    64
    80
    96
    128
    160

Never hardcode spacing.

------------------------------------------------------------------------

## Radius Tokens

    Small
    Medium
    Large
    Extra Large
    Full

Buttons, cards, dialogs, and forms should consume these values.

------------------------------------------------------------------------

## Shadow Tokens

    Soft
    Medium
    Large
    Floating

Use subtle shadows only.

Avoid heavy drop shadows.

------------------------------------------------------------------------

# 4. Core Components

## Button

Variants:

-   Primary
-   Secondary
-   Outline
-   Ghost
-   Link

Sizes:

-   Small
-   Medium
-   Large

States:

-   Default
-   Hover
-   Active
-   Focus
-   Disabled
-   Loading

Every button should support:

-   Icon Left
-   Icon Right
-   Loading Spinner
-   Full Width

------------------------------------------------------------------------

## Card

Used throughout the application.

Variants:

-   Feature Card
-   Package Card
-   Industry Card
-   Testimonial Card (future)
-   Blog Card
-   Integration Card

Shared Properties:

-   Radius
-   Padding
-   Border
-   Hover Elevation
-   Optional Badge

------------------------------------------------------------------------

## Badge

Types:

-   Default
-   Success
-   Warning
-   Error
-   Outline

Usage:

-   Status
-   Technology
-   Category
-   Coming Soon

------------------------------------------------------------------------

## Input Components

Text Input

Textarea

Select

Checkbox

Radio

Switch

Requirements:

-   Label
-   Helper Text
-   Validation State
-   Error State
-   Disabled State

------------------------------------------------------------------------

## Form Components

Reusable:

-   Contact Form
-   Consultation Form
-   Newsletter Form (future)

All forms should share validation and error presentation.

------------------------------------------------------------------------

## Accordion

Used for FAQs.

Requirements:

-   Keyboard support
-   Smooth animation
-   Single or multiple expand modes

------------------------------------------------------------------------

## Modal / Dialog

Support:

-   Confirmation
-   Information
-   Contact
-   Future authentication

------------------------------------------------------------------------

## Navigation

Desktop

Mobile Drawer

Sticky Navigation

Breadcrumb (future)

------------------------------------------------------------------------

## Footer

Reusable layout with configurable columns.

------------------------------------------------------------------------

# 5. Section Components

Reusable homepage blocks:

-   Hero
-   Logo Cloud
-   Problem Grid
-   Feature Grid
-   Workflow Diagram
-   Timeline
-   CTA Banner
-   FAQ Section

These should be configurable through props.

------------------------------------------------------------------------

# 6. Animation Tokens

Every animation should reference shared timing values.

Examples:

    FAST

    NORMAL

    SLOW

Shared easing:

    easeOut

    easeInOut

    spring

No component should invent custom animation timings.

------------------------------------------------------------------------

# 7. Icons

Use only Lucide React.

Rules:

-   Outline style
-   Consistent sizing
-   1 icon family
-   Responsive scaling

------------------------------------------------------------------------

# 8. Illustrations

Avoid stock photography.

Prefer:

-   SVG
-   Abstract gradients
-   Workflow diagrams
-   Isometric automation graphics
-   Animated node graphs

Illustrations should support dark mode.

------------------------------------------------------------------------

# 9. Component API Philosophy

Every reusable component should expose a clean API.

Example:

Button

-   variant
-   size
-   loading
-   disabled
-   icon
-   children

Cards

-   title
-   description
-   icon
-   badge
-   action

Consistency is more important than flexibility.

------------------------------------------------------------------------

# 10. Accessibility Rules

Every component should include:

-   Keyboard navigation
-   Focus ring
-   Screen reader labels
-   Semantic HTML
-   ARIA where required

Accessibility must be built into the component itself.

------------------------------------------------------------------------

# 11. Documentation

Every reusable component should include:

Purpose

Props

Variants

Usage examples

Accessibility notes

Extension guidelines

------------------------------------------------------------------------

# 12. Testing Guidelines

Components should be easy to test.

Future compatibility with:

-   Storybook
-   Playwright
-   React Testing Library

Avoid tightly coupled implementations.

------------------------------------------------------------------------

# 13. Acceptance Criteria

Claude Code should generate:

-   A reusable component library.
-   Centralized design tokens.
-   Theme-driven styling.
-   Consistent APIs.
-   Fully responsive components.
-   Accessible interactions.
-   Components suitable for future SaaS applications beyond the
    marketing website.
