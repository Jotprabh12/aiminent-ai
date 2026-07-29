import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Aiminent AI",
  description:
    "Insights on AI automation, CRM best practices, and business growth strategies.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <Section spacing="lg" background="base">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge>Blog</Badge>
          <h1 className="text-h1 font-semibold text-foreground">Blog</h1>
          <p className="max-w-prose-w text-body text-text-secondary">
            Insights on AI automation, CRM best practices, WhatsApp automation,
            lead management, and business growth — coming soon.
          </p>
          <p className="text-sm text-text-muted">
            Our content library is being built. Check back soon for articles,
            guides, and case studies.
          </p>
        </div>
      </Container>
    </Section>
  );
}
