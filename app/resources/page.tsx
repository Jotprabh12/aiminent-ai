import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resources — Aiminent AI",
  description:
    "Automation guides, AI playbooks, and best practices for your business.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <Section spacing="lg" background="base">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge>Resources</Badge>
          <h1 className="text-h1 font-semibold text-foreground">Resources</h1>
          <p className="max-w-prose-w text-body text-text-secondary">
            Automation guides, AI playbooks, CRM best practices, WhatsApp
            automation tips, lead management strategies, and productivity
            insights — coming soon.
          </p>
          <p className="text-sm text-text-muted">
            We&apos;re building a comprehensive resource library. Check back
            soon.
          </p>
        </div>
      </Container>
    </Section>
  );
}
