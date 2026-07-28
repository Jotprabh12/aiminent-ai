# Appendix F --- Claude Code Execution Workflow

**Project:** Aiminent AI Website V1 **Document Type:** Implementation
Workflow & Delivery Guide

------------------------------------------------------------------------

# 1. Purpose

This appendix tells Claude Code **how to execute** the project across
multiple sessions while maintaining architectural consistency.

The objective is to build the website incrementally, with each milestone
producing a working, testable codebase.

------------------------------------------------------------------------

# 2. Claude's Role

Act as:

-   Senior Product Engineer
-   Senior UI/UX Designer
-   Senior Next.js Architect
-   TypeScript Engineer
-   Accessibility Specialist
-   Technical Reviewer

Every implementation decision should favor maintainability, readability,
and scalability.

------------------------------------------------------------------------

# 3. Development Principles

-   Never break existing functionality.
-   Keep every commit buildable.
-   Reuse before creating new components.
-   Finish one milestone before starting the next.
-   Prefer simple, extensible solutions.

------------------------------------------------------------------------

# 4. Recommended Milestones

## M1 --- Project Foundation

-   Initialize Next.js project
-   Configure Tailwind
-   Install shadcn/ui
-   Configure ESLint & Prettier
-   Create folder structure
-   Define design tokens

**Checkpoint:** App builds successfully.

------------------------------------------------------------------------

## M2 --- Global Layout

-   Navbar
-   Footer
-   Global layout
-   Theme
-   Typography
-   Responsive container

**Checkpoint:** Responsive shell complete.

------------------------------------------------------------------------

## M3 --- Component Library

- Buttons
- Cards
- Forms (input primitives)
- Inputs (text, textarea, select, checkbox, radio, switch)
- Badges
- Accordions
- CTA Banner

**Checkpoint:** Components documented and reusable.

**Status:** ✅ Done (Session 2)

------------------------------------------------------------------------

## M4 --- Homepage

-   Hero
-   Problem section
-   Solutions
-   Workflow demo
-   Packages
-   FAQ
-   CTA

**Checkpoint:** Homepage complete.

------------------------------------------------------------------------

## M5 --- Remaining Pages

-   About
-   Contact
-   Solutions
-   Packages
-   Industries
-   Resources placeholders

**Checkpoint:** Navigation complete.

------------------------------------------------------------------------

## M6 --- Integrations

-   Forms
-   Calendly
-   Metadata
-   Analytics hooks
-   SEO utilities

**Checkpoint:** Lead flow operational.

------------------------------------------------------------------------

## M7 --- Polish

-   Animations
-   Accessibility audit
-   Performance optimization
-   QA fixes

**Checkpoint:** Production-ready build.

------------------------------------------------------------------------

# 5. Git Strategy

Suggested branch flow:

main ├── feat/foundation ├── feat/layout ├── feat/components ├──
feat/homepage ├── feat/pages ├── feat/forms ├── feat/seo └── feat/polish

Commit after each logical task.

Use conventional commit messages: - feat: - fix: - refactor: - docs: -
chore:

------------------------------------------------------------------------

# 6. Session Workflow

For every Claude Code session:

1.  Read the PRD.
2.  Review current project state.
3.  Implement one milestone.
4.  Run lint.
5.  Run type check.
6.  Build project.
7.  Fix issues.
8.  Commit changes.
9.  Summarize progress.

Do not begin a new milestone until the previous one passes.

------------------------------------------------------------------------

# 7. Code Review Checklist

Before every commit:

-   No TypeScript errors
-   No ESLint errors
-   No duplicated components
-   Responsive layouts verified
-   Accessible interactions
-   Imports organized
-   Dead code removed

------------------------------------------------------------------------

# 8. Testing Checklist

Verify:

-   Desktop
-   Tablet
-   Mobile
-   Navigation
-   Forms
-   CTA buttons
-   Animations
-   Keyboard navigation

Run Lighthouse before release milestones.

------------------------------------------------------------------------

# 9. Recovery Strategy

If a session ends unexpectedly:

1.  Review latest commit.
2.  Re-read relevant PRD chapters.
3.  Continue from the last completed milestone.
4.  Avoid rewriting finished modules unless necessary.

------------------------------------------------------------------------

# 10. Final Definition of Done

The project is complete when:

-   All pages are implemented.
-   Design system is consistently applied.
-   Components are reusable.
-   Accessibility meets WCAG AA.
-   Lighthouse targets are achieved.
-   Documentation is complete.
-   Lead flow works end-to-end.
-   The codebase is maintainable and ready for future industries.

------------------------------------------------------------------------

# 11. Handoff Instructions

Before handing the project to another developer or future Claude
session:

-   Update README.
-   Document architecture decisions.
-   List known limitations.
-   Record next planned milestone.
-   Ensure the repository builds without manual intervention.

------------------------------------------------------------------------

# 12. Acceptance Criteria

Claude Code should use this appendix together with Chapters 1--12 and
Appendices A--E as the authoritative implementation guide.

Every development session should produce incremental, production-quality
progress without compromising architecture or code quality.
