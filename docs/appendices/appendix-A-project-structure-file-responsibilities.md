# Appendix A --- Complete Project Structure & File Responsibilities

**Project:** Aiminent AI Website V1

------------------------------------------------------------------------

# Objective

This appendix defines the recommended production folder structure for
the website and explains the responsibility of every major directory.

The structure is designed for scalability, maintainability, and future
expansion into SaaS products.

------------------------------------------------------------------------

# Root Structure

``` text
aiminent-ai/
├── app/
├── components/
├── content/
├── hooks/
├── lib/
├── public/
├── styles/
├── types/
├── docs/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

------------------------------------------------------------------------

# app/

Contains all routes using the Next.js App Router.

``` text
app/
├── layout.tsx          # Global layout
├── page.tsx            # Homepage
├── globals.css
├── about/
├── contact/
├── packages/
├── solutions/
│   ├── page.tsx
│   ├── ai-lead-engine/
│   ├── ai-sales-assistant/
│   ├── ai-property-consultant/
│   ├── lifecycle-automation/
│   └── marketing-suite/
├── industries/
├── resources/
├── blog/
├── case-studies/
├── privacy/
├── terms/
├── book-consultation/
├── thank-you/
├── not-found.tsx
└── api/
```

Rules: - One route per folder. - Use Server Components by default. -
Keep page logic minimal.

------------------------------------------------------------------------

# components/

``` text
components/
├── ui/
├── layout/
├── sections/
├── forms/
├── animations/
└── common/
```

## ui/

Reusable primitives:

-   Button
-   Card
-   Badge
-   Accordion
-   Dialog
-   Input
-   Select
-   Textarea
-   Tabs
-   Toast

## layout/

-   Navbar
-   Footer
-   Container
-   MobileMenu
-   Section

## sections/

Homepage and landing page sections:

-   Hero
-   ProblemGrid
-   SolutionsGrid
-   WorkflowDemo
-   Timeline
-   FAQ
-   CTA
-   LogoCloud

## forms/

-   ContactForm
-   ConsultationForm
-   NewsletterForm

## animations/

Shared Framer Motion variants and wrappers.

------------------------------------------------------------------------

# content/

Store copy separately from UI.

``` text
content/
├── homepage.ts
├── solutions.ts
├── industries.ts
├── faq.ts
├── packages.ts
└── metadata.ts
```

Future CMS integration should replace this layer.

------------------------------------------------------------------------

# lib/

``` text
lib/
├── seo/
├── validations/
├── utils/
├── analytics/
├── constants/
└── integrations/
```

Responsibilities:

-   Metadata
-   JSON-LD
-   Validation schemas
-   Helper functions
-   Analytics wrappers
-   Future CRM integrations

------------------------------------------------------------------------

# hooks/

Reusable React hooks only.

Examples:

-   useScroll
-   useMediaQuery
-   useReducedMotion
-   useIntersectionObserver

------------------------------------------------------------------------

# styles/

Global styling resources.

``` text
styles/
├── tokens.css
├── animations.css
└── utilities.css
```

------------------------------------------------------------------------

# public/

``` text
public/
├── logos/
├── icons/
├── illustrations/
├── backgrounds/
└── images/
```

Use SVG whenever possible.

------------------------------------------------------------------------

# types/

Shared TypeScript types.

Examples:

-   Package
-   Solution
-   FAQ
-   Industry
-   FormData
-   NavigationItem

------------------------------------------------------------------------

# docs/

Internal documentation.

``` text
docs/
├── architecture.md
├── deployment.md
├── coding-standards.md
└── contributing.md
```

------------------------------------------------------------------------

# Naming Conventions

Components: - PascalCase

Hooks: - useCamelCase

Utilities: - camelCase

Files: - kebab-case where appropriate

------------------------------------------------------------------------

# Dependency Guidelines

Prefer:

-   Native APIs
-   Small focused libraries
-   Tree-shakeable packages

Avoid duplicate dependencies with overlapping functionality.

------------------------------------------------------------------------

# Build Pipeline

Development → Lint → Type Check → Build → Lighthouse Audit → Deployment

------------------------------------------------------------------------

# Definition of Done

A contributor should be able to understand the project by reading this
appendix alone.

Every file and folder must have a single, well-defined responsibility.
