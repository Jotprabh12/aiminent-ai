import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Compass,
  ClipboardCheck,
  Code2,
  Handshake,
  LifeBuoy,
  PencilRuler,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  Telescope,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { ProcessRoadmap } from "@/components/sections/process-roadmap";
import {
  TechOutcomes,
  type TechOutcome,
} from "@/components/sections/tech-outcomes";
import { Reveal } from "@/components/animations";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About — Aiminent AI",
  description:
    "Aiminent AI helps businesses adopt AI confidently through practical, reliable and premium automation solutions that solve real operational problems.",
  path: "/about",
});

const philosophy = [
  {
    title: "Automation Should Solve Real Problems",
    description:
      "Every project starts with a business problem, not a technology. If it doesn't remove real pain, we don't build it.",
    icon: Target,
  },
  {
    title: "Technology Should Be Practical",
    description:
      "We choose proven, maintainable tools over clever experiments. Pragmatism beats novelty.",
    icon: Wrench,
  },
  {
    title: "Trust Is More Important Than Hype",
    description:
      "We say what we can deliver — and deliver what we say. No inflated promises, no over-engineering.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnerships Over One-Time Projects",
    description:
      "We optimize, support and iterate long after launch. Your success is our metric.",
    icon: Handshake,
  },
  {
    title: "Quality Implementation Over Flashy Demos",
    description:
      "A demo impresses for a day. A well-built workflow performs for years. We build for the years.",
    icon: Award,
  },
];

const roadmapStages = [
  {
    title: "Discover",
    description:
      "We learn your business, goals, and the workflows that cost you time.",
    icon: <Search size={24} aria-hidden="true" />,
  },
  {
    title: "Design",
    description:
      "We map the automation architecture around your existing systems.",
    icon: <PencilRuler size={24} aria-hidden="true" />,
  },
  {
    title: "Build",
    description: "Our engineers develop and integrate your automation stack.",
    icon: <Code2 size={24} aria-hidden="true" />,
  },
  {
    title: "Test",
    description:
      "Every workflow is validated for reliability before it touches production.",
    icon: <ClipboardCheck size={24} aria-hidden="true" />,
  },
  {
    title: "Deploy",
    description:
      "We roll out, train your team, and hand over with full documentation.",
    icon: <Rocket size={24} aria-hidden="true" />,
  },
  {
    title: "Support",
    description:
      "Ongoing monitoring, optimization, and iteration to maximize ROI.",
    icon: <LifeBuoy size={24} aria-hidden="true" />,
  },
];

const techOutcomes: TechOutcome[] = [
  {
    id: "ai-models",
    title: "AI Models",
    description:
      "Frontier language models power conversations, analysis, and decision-making inside your workflows.",
    brands: ["openai", "anthropic", "gemini"],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Workflow engines connect your tools and run processes hands-free — reliably, 24/7.",
    brands: ["n8n", "zapier"],
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description:
      "Your CRM stays the single source of truth, synced in real time with everything else we connect.",
    brands: ["hubspot", "salesforce"],
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Meet customers where they already talk — WhatsApp Business API, email, and SMS in one flow.",
    brands: ["whatsapp"],
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Every workflow ships with clear performance dashboards, so you can see the ROI.",
    brands: ["n8n"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="About Us"
        title="Practical AI Automation for Growing Businesses"
        description="We help businesses automate repetitive work, improve customer experiences, and scale operations with AI-powered workflows — built reliably, delivered simply."
        image="/images/hero-about.jpg"
        imageAlt="Team collaborating on automation strategy in a modern office"
        imagePosition="center 40%"
      >
        <Button href={ROUTES.bookConsultation}>Book Free Consultation</Button>
      </PageHero>

      {/* Founder story — editorial */}
      <Section id="story" spacing="lg" background="base">
        <Container size="prose">
          <Reveal>
            <p className="text-caption font-medium tracking-widest text-primary uppercase">
              Our Story
            </p>
            <h2 className="mt-2 text-h2 font-semibold text-foreground">
              Why Aiminent AI Exists
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-primary pl-6 text-body-lg text-foreground italic">
              Many businesses wanted to automate repetitive work — but struggled
              to trust AI, or to find a partner that focused on practical
              outcomes.
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-body text-text-secondary">
              <p>
                Aiminent AI was founded after recognizing that many businesses
                wanted to automate repetitive work but struggled to trust AI or
                find practical automation partners.
              </p>
              <p>
                The goal was never to build flashy AI demos. The goal was to
                build automation that solves real business problems while
                remaining accessible to businesses that want premium
                implementation without unnecessary complexity.
              </p>
              <p>
                Rather than chasing trends, Aiminent AI focuses on creating
                reliable automation systems that save time, reduce manual work
                and allow businesses to grow more efficiently.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Story supporting image */}
      <Section spacing="none" background="base" container={false}>
        <Container size="wide" className="px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-divider">
              <Image
                src="/images/about-story.jpg"
                alt="Business team reviewing an automation workflow together"
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Mission & Vision — alternating editorial blocks */}
      <Section id="mission-vision" spacing="lg" background="surface">
        <Container>
          <div className="space-y-20">
            {/* Mission */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <div className="order-2 lg:order-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Compass size={22} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-caption font-medium tracking-widest text-primary uppercase">
                    Mission
                  </p>
                  <h3 className="mt-2 text-h3 font-semibold text-foreground">
                    Confident AI Adoption
                  </h3>
                  <p className="mt-4 text-body text-text-secondary">
                    To help businesses adopt AI confidently through practical,
                    reliable and premium automation solutions that solve real
                    operational problems.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-divider">
                  <Image
                    src="/images/about-craft.jpg"
                    alt="Colleagues planning an automation roadmap at a whiteboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Vision */}
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-divider">
                  <Image
                    src="/images/about-vision.png"
                    alt="Looking ahead toward the future of AI automation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Telescope size={22} aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-caption font-medium tracking-widest text-primary uppercase">
                    Vision
                  </p>
                  <h3 className="mt-2 text-h3 font-semibold text-foreground">
                    The Most Trusted Name in Automation
                  </h3>
                  <p className="mt-4 text-body text-text-secondary">
                    To build one of the most trusted AI automation companies by
                    consistently delivering automation systems that create
                    measurable business impact.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core philosophy */}
      <Section id="philosophy" spacing="lg" background="base">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-caption font-medium tracking-widest text-primary uppercase">
              Core Philosophy
            </p>
            <h2 className="mt-2 text-h2 font-semibold text-foreground">
              How We Think About Automation
            </h2>
            <p className="mx-auto mt-4 max-w-prose-w text-body text-text-secondary">
              Five principles guide every project we take on.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="flex h-full flex-col rounded-xl border border-divider bg-surface p-6 transition-shadow hover:shadow-medium">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-body-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            {/* Trust anchor card */}
            <Reveal delay={0.4}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-primary/25 bg-primary/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <BadgeCheck size={22} aria-hidden="true" />
                </div>
                <p className="mt-4 text-body-sm font-medium text-foreground italic">
                  &ldquo;Trust is earned by what ships — not by what we
                  say.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process — premium roadmap */}
      <ProcessRoadmap
        title="A Clear Journey From Start to Scale"
        subtitle="One accountable process, six connected stages — so you always know where your project stands."
        stages={roadmapStages}
      />

      {/* Technology — outcomes first */}
      <TechOutcomes
        title="Technology, Explained by the Outcomes"
        subtitle="We don't sell stacks. We choose proven platforms that deliver the result you need — with clear benefits at every layer."
        outcomes={techOutcomes}
      />

      {/* Final CTA */}
      <CTABanner
        heading="Ready to Automate Your Business?"
        description="No obligation. We'll identify automation opportunities tailored to your business."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Free Consultation"
      />
    </>
  );
}
