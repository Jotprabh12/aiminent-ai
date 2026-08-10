import {
  ClipboardCheck,
  Code2,
  PencilRuler,
  PhoneCall,
  RefreshCcw,
  Rocket,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero";
import { ProblemGrid } from "@/components/sections/problem-grid";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { WorkflowDemo } from "@/components/sections/workflow-demo";
import { FAQSection } from "@/components/sections/faq";
import { PackagesSection } from "@/components/sections/packages";
import { CTABanner } from "@/components/ui/cta-banner";
import { BrandLogoStrip } from "@/components/ui/brand-logos";

const problemIcons = {
  alert: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  clock: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  zap: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  database: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  repeat: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  ),
  users: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
} as const;

const solutionIcons = {
  chip: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  robot: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="11" width="14" height="10" />
      <rect x="11" y="8" width="6" height="3" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="8" y1="2" x2="8" y2="5" />
      <line x1="16" y1="2" x2="16" y2="5" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
    </svg>
  ),
  home: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  mail: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  barChart3: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  wrench: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
} as const;

/** Implementation timeline — the phases of one automation project. */
export const implementationPhases = [
  {
    id: "discovery",
    week: "Week 1",
    title: "Discovery",
    items: ["Discovery call", "Business audit"],
    duration: "1 week",
    icon: <PhoneCall size={24} aria-hidden="true" />,
  },
  {
    id: "mapping",
    week: "Week 2",
    title: "Planning",
    items: ["Workflow mapping", "Requirement analysis"],
    duration: "1 week",
    icon: <Workflow size={24} aria-hidden="true" />,
  },
  {
    id: "design",
    week: "Week 3–4",
    title: "Automation Design",
    items: [
      "Architecture of your automation stack",
      "Integration design & approvals",
    ],
    duration: "2 weeks",
    icon: <PencilRuler size={24} aria-hidden="true" />,
  },
  {
    id: "development",
    week: "Week 5–6",
    title: "Development",
    items: ["Building workflows & AI integrations"],
    duration: "2 weeks",
    icon: <Code2 size={24} aria-hidden="true" />,
  },
  {
    id: "testing",
    week: "Week 7",
    title: "Testing & Training",
    items: ["Rigorous testing", "Refinement", "Team training"],
    duration: "1 week",
    icon: <ClipboardCheck size={24} aria-hidden="true" />,
  },
  {
    id: "deployment",
    week: "Week 8",
    title: "Deployment",
    items: ["Launch & go-live handoff"],
    duration: "1 week",
    icon: <Rocket size={24} aria-hidden="true" />,
  },
  {
    id: "optimization",
    week: "Ongoing",
    title: "Optimization & Support",
    items: ["Continuous optimization", "Dedicated support", "Iteration"],
    duration: "Ongoing",
    icon: <RefreshCcw size={24} aria-hidden="true" />,
  },
];

const faqItems = [
  {
    id: "how-long",
    question: "How long does implementation take?",
    answer:
      "Most deployments take 4–8 weeks from discovery to launch, depending on complexity.",
  },
  {
    id: "crm",
    question: "Do I need to change my CRM?",
    answer:
      "No. Our automation layer integrates with your existing CRM — no migration required.",
  },
  {
    id: "whatsapp",
    question: "Can you integrate WhatsApp?",
    answer:
      "Yes. WhatsApp Business API integration is a core part of our automation stack.",
  },
  {
    id: "support",
    question: "Is support included?",
    answer:
      "Yes — every package includes ongoing support, monitoring, and optimization.",
  },
  {
    id: "custom",
    question: "Can solutions be customized?",
    answer:
      "Absolutely. Every solution is built around your specific business processes.",
  },
  {
    id: "security",
    question: "How secure are the automations?",
    answer:
      "Enterprise-grade security with encryption at rest and regular audits.",
  },
];

const packages = [
  {
    slug: "starter",
    name: "Starter",
    tagline: "Perfect for small teams getting started with automation.",
    problem: "Lose leads to slow follow-ups and manual processes.",
    outcome: "3× faster response times and 40% more qualified leads.",
    automations: [
      "Lead capture",
      "Auto-responder",
      "Basic CRM sync",
      "WhatsApp integration",
    ],
    price: "Starting from $999/month",
    cta: { label: "Learn more", href: "/packages" },
    featured: false,
  },
  {
    slug: "growth",
    name: "Growth",
    tagline: "The most popular choice for scaling businesses.",
    problem: "Scaling operations without scaling your team.",
    outcome: "60% reduction in manual tasks and 25% higher conversion rates.",
    automations: [
      "Everything in Starter",
      "AI lead scoring",
      "Sales pipeline automation",
      "Analytics dashboard",
    ],
    price: "Starting from $3,999/month",
    cta: { label: "Learn more", href: "/packages" },
    featured: true,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    tagline: "Full-suite automation for organizations of any size.",
    problem: "Complex workflows across departments and systems.",
    outcome: "End-to-end automation with dedicated support and SLAs.",
    automations: [
      "Everything in Growth",
      "Custom AI models",
      "Multi-department workflows",
      "Dedicated account manager",
    ],
    price: "Contact Us",
    cta: { label: "Learn more", href: "/packages" },
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="AI Automation Agency"
        headline="Automate Your Business. Close More Deals. Save Hundreds of Hours."
        subheadline="Help your team automate lead management, WhatsApp follow-ups, CRM workflows, appointment scheduling and customer communication using AI-powered automation."
        backgroundImage="/images/hero-home.jpg"
        backgroundImageAlt="Business team working with AI automation in a modern office"
        primaryCta={
          <Button href="/book-consultation" size="lg">
            Book Free Consultation
          </Button>
        }
        secondaryCta={
          <Button variant="outline" size="lg" href="/book-consultation">
            Schedule Live Demo
          </Button>
        }
        highlights={[
          "AI Automation",
          "CRM Integration",
          "WhatsApp Automation",
          "Custom Software",
        ]}
        footer={<BrandLogoStrip className="mt-4 pt-6" />}
      />

      {/* Problems */}
      <ProblemGrid
        title="Your Team Shouldn't Waste Time on Repetitive Work."
        subtitle="Six problems we solve with AI-powered automation."
        problems={[
          {
            title: "Missed Leads",
            description:
              "Inquiries fall through the cracks without real-time capture and routing.",
            solution:
              "Instant lead capture with AI qualification and auto-routing.",
            icon: problemIcons.alert,
          },
          {
            title: "Manual Follow-ups",
            description:
              "Your team spends hours on outreach that automation can handle.",
            solution: "Automated follow-up sequences that convert 3× better.",
            icon: problemIcons.clock,
          },
          {
            title: "Slow Response Times",
            description: "Every minute of delay costs you a potential deal.",
            solution: "Sub-minute response times on all inbound conversations.",
            icon: problemIcons.zap,
          },
          {
            title: "CRM Chaos",
            description:
              "Data scattered across tools with no single source of truth.",
            solution: "Unified CRM sync with real-time data validation.",
            icon: problemIcons.database,
          },
          {
            title: "Repetitive Admin Tasks",
            description:
              "Your team drowns in data entry, scheduling, and reporting.",
            solution: "Zero-touch workflow automation for routine admin.",
            icon: problemIcons.repeat,
          },
          {
            title: "Poor Customer Experience",
            description:
              "Customers expect instant, personalized responses 24/7.",
            solution:
              "AI-powered support that never sleeps and never forgets context.",
            icon: problemIcons.users,
          },
        ]}
      />

      {/* Featured Solutions */}
      <SolutionsGrid
        title="Featured Solutions"
        subtitle="AI-powered tools built for real estate and beyond."
        solutions={[
          {
            name: "AI Lead Engine",
            tagline: "Intelligent lead capture and qualification.",
            description:
              "AI identifies, scores, and routes leads in real time.",
            features: [
              "Real-time scoring",
              "Auto qualification",
              "Smart routing",
              "Lead nurturing",
            ],
            icon: solutionIcons.chip,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/ai-lead-engine",
          },
          {
            name: "AI Sales Assistant",
            tagline: "Conversational AI that books appointments.",
            description:
              "An always-on assistant that handles inquiries and books consultations.",
            features: [
              "24/7 availability",
              "Natural conversations",
              "Calendar sync",
              "Multi-language",
            ],
            icon: solutionIcons.robot,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/ai-sales-assistant",
          },
          {
            name: "AI Property Consultant",
            tagline: "Personalized property recommendations.",
            description:
              "AI matches buyers with properties and guides them through decisions.",
            features: [
              "Preference matching",
              "Market analysis",
              "Virtual tours",
              "Offer guidance",
            ],
            icon: solutionIcons.home,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/ai-property-consultant",
          },
          {
            name: "Customer Lifecycle Automation",
            tagline: "End-to-end customer journey automation.",
            description:
              "Automate every touchpoint from first inquiry to post-sale follow-up.",
            features: [
              "Onboarding flows",
              "Re-engagement campaigns",
              "Feedback loops",
            ],
            icon: solutionIcons.mail,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/customer-lifecycle",
          },
          {
            name: "Marketing Automation Suite",
            tagline: "Omnichannel marketing that converts.",
            description:
              "Email, SMS, WhatsApp — all automated with AI-driven personalization.",
            features: [
              "Multi-channel",
              "AI personalization",
              "Analytics",
              "A/B testing",
            ],
            icon: solutionIcons.barChart3,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/marketing-automation",
          },
          {
            name: "Custom AI Solutions",
            tagline: "Bespoke automation for unique challenges.",
            description:
              "When out-of-the-box isn't enough, we build custom AI workflows.",
            features: [
              "Custom models",
              "API integration",
              "Dedicated team",
              "Scalable architecture",
            ],
            icon: solutionIcons.wrench,
            ctaLabel: "Learn more",
            ctaHref: "/solutions/custom-ai",
          },
        ]}
      />

      {/* Packages */}
      <PackagesSection
        title="Packages"
        subtitle="Choose the automation level that fits your business."
        packages={packages}
      />

      {/* Implementation timeline */}
      <WorkflowDemo
        title="From Discovery to Deployment in 8 Weeks"
        subtitle="A clear, staged timeline for every automation project — so you always know what happens next."
        phases={implementationPhases}
        totalDuration="~8 weeks from kickoff to launch"
        ctaLabel="Start your project"
        ctaHref="/book-consultation"
      />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Get answers to the most common questions about our services."
        items={faqItems}
      />

      {/* Final CTA */}
      <CTABanner
        heading="Ready to Automate Your Business?"
        description="No obligation. We'll identify automation opportunities tailored to your business."
        ctaLabel="Book Free Consultation"
        ctaHref="/book-consultation"
        ctaVariant="primary"
        badge="Free Consultation"
      />
    </>
  );
}
