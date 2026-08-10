/**
 * Section components — barrel export. Import from "@/components/sections".
 * Composables page sections: Hero, Problems, Solutions, Workflow,
 * Packages, FAQ. Built in M4.
 */
export { HeroSection } from "@/components/sections/hero";
export type { HeroSectionProps } from "@/components/sections/hero";
export {
  ProblemGrid,
  type ProblemCardProps,
  type ProblemGridProps,
} from "@/components/sections/problem-grid";
export {
  SolutionsGrid,
  type SolutionCardProps,
  type SolutionsGridProps,
} from "@/components/sections/solutions-grid";
export {
  WorkflowDemo,
  type ImplementationPhase,
  type WorkflowDemoProps,
} from "@/components/sections/workflow-demo";
export { PackagesSection } from "@/components/sections/packages";
export type { PackagesSectionProps } from "@/components/sections/packages";
export { FAQSection } from "@/components/sections/faq";
export type { FAQSectionProps } from "@/components/sections/faq";
export { ProcessRoadmap } from "@/components/sections/process-roadmap";
export type {
  RoadmapStage,
  ProcessRoadmapProps,
} from "@/components/sections/process-roadmap";
export { TechOutcomes } from "@/components/sections/tech-outcomes";
export type {
  TechOutcome,
  TechOutcomesProps,
} from "@/components/sections/tech-outcomes";
export { CTABanner } from "@/components/ui/cta-banner";
export type { CTABannerProps } from "@/components/ui/cta-banner";
