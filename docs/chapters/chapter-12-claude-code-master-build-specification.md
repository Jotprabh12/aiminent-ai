# Chapter 12 --- Claude Code Master Build Specification

**Project:** Aiminent AI Website V1\
**Audience:** Claude Code\
**Purpose:** Master implementation instructions

------------------------------------------------------------------------

# 1. Your Role

Act as a senior:

-   Product Designer
-   UI/UX Designer
-   Frontend Architect
-   Next.js Engineer
-   TypeScript Engineer
-   Technical SEO Engineer
-   Accessibility Specialist

Do not generate a prototype. Generate production-quality code.

------------------------------------------------------------------------

# 2. Primary Objective

Build a premium SaaS-style marketing website for **Aiminent AI**.

The website's purpose is to convert visitors into consultation bookings
while positioning the company as a trusted AI automation partner.

The launch focus is **Real Estate**, with architecture ready for future
industries.

------------------------------------------------------------------------

# 3. Non-Negotiable Requirements

-   Next.js 15 (App Router)
-   React 19
-   TypeScript (strict)
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion
-   Lucide Icons
-   React Hook Form
-   Zod
-   Server Components by default

No placeholder-quality code.

------------------------------------------------------------------------

# 4. Build Order

Generate the project in this sequence:

1.  Project scaffold
2.  Global theme
3.  Layout
4.  Navigation
5.  Footer
6.  Reusable UI components
7.  Homepage
8.  Solutions pages
9.  Packages page
10. About
11. Contact
12. Industries
13. Resources placeholders
14. Forms
15. SEO
16. Animations
17. Testing pass
18. Documentation

Each step should compile successfully before moving to the next.

------------------------------------------------------------------------

# 5. Folder Structure

Implement the structure defined in Chapter 7.

Keep concerns separated:

-   app
-   components
-   lib
-   hooks
-   styles
-   types
-   content
-   public

Avoid deeply nested folders unless justified.

------------------------------------------------------------------------

# 6. Component Rules

Every reusable component must:

-   Be typed
-   Be documented
-   Be reusable
-   Be accessible
-   Accept sensible props
-   Avoid duplicated logic

Prefer composition over inheritance.

------------------------------------------------------------------------

# 7. Styling Rules

-   Use design tokens.
-   Avoid hard-coded values.
-   Respect the spacing system.
-   Use CSS variables through Tailwind.
-   Support dark mode from the start.

------------------------------------------------------------------------

# 8. Motion Rules

Implement the motion system from Chapter 9.

Animation should:

-   Improve comprehension
-   Never distract
-   Respect reduced-motion preferences
-   Use shared timing/easing tokens

------------------------------------------------------------------------

# 9. SEO Rules

Every route must include:

-   Metadata
-   Open Graph
-   Canonical URL
-   Structured data where applicable

Generate sitemap and robots configuration.

------------------------------------------------------------------------

# 10. Accessibility Rules

Meet WCAG 2.2 AA.

Every interactive element must support:

-   Keyboard navigation
-   Visible focus
-   Screen readers
-   Semantic HTML
-   Color contrast

------------------------------------------------------------------------

# 11. Performance Rules

Target:

-   Lighthouse Performance \>95
-   Accessibility 100
-   SEO 100
-   Best Practices 100

Prefer:

-   Server Components
-   Dynamic imports
-   Image optimization
-   Font optimization

Avoid unnecessary client-side JavaScript.

------------------------------------------------------------------------

# 12. Forms

All forms must use:

-   React Hook Form
-   Zod
-   Shared validation schemas

Submission flow:

Form → Validation → Success state → Calendly → Confirmation

Future-ready for CRM integration.

------------------------------------------------------------------------

# 13. Content Management

Store copy separately from components.

Use content files for:

-   Homepage
-   Solutions
-   FAQ
-   Industries

No long-form copy inside JSX.

------------------------------------------------------------------------

# 14. Code Quality

Use:

-   Strict TypeScript
-   ESLint
-   Prettier
-   Meaningful names
-   Small functions
-   Clean imports

Avoid dead code and duplication.

------------------------------------------------------------------------

# 15. Error Handling

Implement reusable:

-   Error boundaries
-   Empty states
-   Loading states
-   Not-found page

Gracefully handle failures.

------------------------------------------------------------------------

# 16. Documentation

Generate:

-   README
-   Setup guide
-   Environment example
-   Deployment instructions
-   Folder overview

Document important architectural decisions.

------------------------------------------------------------------------

# 17. Definition of Done

The project is complete only if:

-   Builds successfully.
-   Is fully responsive.
-   Meets accessibility standards.
-   Meets Lighthouse targets.
-   Contains no placeholder UI.
-   Uses reusable components.
-   Has complete metadata.
-   Has working navigation.
-   Has working forms.
-   Includes documentation.

------------------------------------------------------------------------

# 18. Things to Avoid

Do NOT:

-   Copy generic templates.
-   Mix multiple design languages.
-   Hardcode repeated values.
-   Duplicate components.
-   Ignore accessibility.
-   Overuse animations.
-   Use unnecessary dependencies.
-   Leave TODOs in production code.

------------------------------------------------------------------------

# 19. Final Quality Checklist

Before considering the project complete:

-   Verify all routes.
-   Verify responsive layouts.
-   Verify component reuse.
-   Verify animations.
-   Verify forms.
-   Verify SEO.
-   Verify accessibility.
-   Verify performance.
-   Verify documentation.

------------------------------------------------------------------------

# 20. Final Instruction

Use Chapters 1--11 as the authoritative specification.

When multiple valid implementations exist, choose the one that:

1.  Maximizes maintainability.
2.  Improves user experience.
3.  Follows modern Next.js best practices.
4.  Produces production-ready code.
5.  Makes future expansion into additional industries straightforward.

The generated project should feel like a premium SaaS product rather
than a typical agency website.
