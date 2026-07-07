# Chapter 7 --- Technical Architecture & Folder Structure

**Project:** Aiminent AI Website V1 **Document Type:** Engineering
Specification

------------------------------------------------------------------------

# 1. Objective

This chapter defines the engineering architecture for the Aiminent AI
website.

The project should be scalable, modular, maintainable, and optimized for
future expansion into multiple industries and products without major
refactoring.

The architecture should follow modern Next.js best practices and
production-ready engineering standards.

------------------------------------------------------------------------

# 2. Core Technology Stack

Framework - Next.js 15 (App Router)

Language - TypeScript (Strict Mode)

Styling - TailwindCSS

UI Components - shadcn/ui

Animations - Framer Motion

Icons - Lucide React

Forms - React Hook Form - Zod Validation

Email - Resend

Scheduling - Calendly Embed

Analytics - Vercel Analytics

Deployment - Vercel

Future Backend - Node.js - PostgreSQL - Prisma ORM - n8n Integrations

------------------------------------------------------------------------

# 3. Engineering Principles

Every part of the application should be:

-   Modular
-   Reusable
-   Type-safe
-   Accessible
-   SEO-friendly
-   Performance optimized
-   Easy to extend

Avoid code duplication.

------------------------------------------------------------------------

# 4. Directory Structure

    app/
        about/
        blog/
        case-studies/
        contact/
        industries/
        packages/
        solutions/
        book-consultation/
        api/
        layout.tsx
        page.tsx

    components/
        common/
        layout/
        sections/
        ui/
        forms/
        animations/

    lib/
        seo/
        utils/
        constants/
        validations/

    hooks/

    public/
        images/
        icons/
        logos/
        illustrations/

    styles/

    types/

    content/

    docs/

------------------------------------------------------------------------

# 5. Component Organization

## Layout Components

-   Navbar
-   Footer
-   Mobile Navigation
-   Container
-   Section Wrapper

## Section Components

-   Hero
-   Feature Grid
-   Workflow Demo
-   FAQ
-   CTA Banner
-   Process Timeline
-   Industry Cards

## UI Components

-   Button
-   Card
-   Badge
-   Accordion
-   Tabs
-   Dialog
-   Input
-   Textarea
-   Select
-   Toast

Each component should remain independent and reusable.

------------------------------------------------------------------------

# 6. Routing Strategy

Use the App Router.

Examples:

    /solutions

    /solutions/ai-lead-engine

    /solutions/ai-sales-assistant

    /packages

    /contact

    /about

Dynamic routes should support future industries and services.

------------------------------------------------------------------------

# 7. State Management

Version 1 should remain lightweight.

Prefer:

-   React Server Components
-   Local component state
-   Context API (only where necessary)

Avoid introducing global state libraries unless required.

------------------------------------------------------------------------

# 8. Forms

All forms should use:

-   React Hook Form
-   Zod Validation

Shared validation schemas should live in:

    lib/validations

All forms should support:

-   Client-side validation
-   Loading state
-   Success state
-   Error handling

------------------------------------------------------------------------

# 9. SEO Architecture

Centralize SEO utilities.

    lib/seo/

    metadata.ts

    structured-data.ts

    robots.ts

    sitemap.ts

Every page should define:

-   Title
-   Description
-   Open Graph
-   Twitter Metadata

------------------------------------------------------------------------

# 10. Content Strategy

Avoid hardcoding long-form content.

Store reusable copy inside:

    content/

    homepage.ts

    solutions.ts

    industries.ts

    faq.ts

This allows future CMS integration.

------------------------------------------------------------------------

# 11. Theme System

Use CSS variables for:

-   Colors
-   Typography
-   Radius
-   Shadows
-   Gradients

Tailwind should consume these variables.

Future theme updates should not require component rewrites.

------------------------------------------------------------------------

# 12. Image Organization

    public/

    logos/

    illustrations/

    icons/

    backgrounds/

    images/

Use SVG whenever possible.

Optimize raster images.

------------------------------------------------------------------------

# 13. Utility Functions

    lib/utils/

    cn.ts

    format.ts

    animations.ts

    constants.ts

Keep utilities framework-agnostic.

------------------------------------------------------------------------

# 14. Error Handling

Create reusable components for:

-   Empty State
-   Loading State
-   Error State
-   404
-   Form Errors

All user-facing errors should provide clear guidance.

------------------------------------------------------------------------

# 15. Performance Strategy

Prefer:

-   Server Components
-   Dynamic imports
-   Lazy loading
-   Image optimization
-   Font optimization

Avoid unnecessary client components.

------------------------------------------------------------------------

# 16. Accessibility

Every reusable component should include:

-   Keyboard support
-   ARIA labels
-   Focus states
-   Semantic HTML
-   Screen reader compatibility

Accessibility should be built into components rather than added later.

------------------------------------------------------------------------

# 17. Code Quality Standards

Use:

-   ESLint
-   Prettier
-   Strict TypeScript
-   Consistent naming conventions

Naming conventions:

Components: PascalCase

Hooks: useSomething

Utilities: camelCase

Constants: UPPER_SNAKE_CASE where appropriate

------------------------------------------------------------------------

# 18. Future Integrations

Architecture should allow easy integration with:

-   CRM platforms
-   WhatsApp Business API
-   Calendly
-   HubSpot
-   Google Analytics
-   Meta Pixel
-   n8n
-   Custom REST APIs

No architectural changes should be required.

------------------------------------------------------------------------

# 19. Documentation

Every major folder should include a README explaining:

-   Purpose
-   Responsibilities
-   Usage
-   Extension guidelines

------------------------------------------------------------------------

# 20. Acceptance Criteria

Claude Code should generate a production-ready project architecture
that:

-   Uses modern Next.js practices.
-   Is modular and scalable.
-   Minimizes future refactoring.
-   Supports additional industries and services.
-   Separates presentation, content, and logic.
-   Maintains clean engineering standards suitable for long-term growth.
