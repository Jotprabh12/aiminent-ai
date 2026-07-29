import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Aiminent AI",
  description:
    "Real estate automation case studies and client success stories.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section id="case-studies-hero" spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>Case Studies</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              Client Success Stories
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              See how Aiminent AI has helped businesses transform their
              operations with AI-powered automation.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="surface">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-body text-text-secondary">
              Client success stories are coming soon.
            </p>
            <p className="text-sm text-text-muted">
              While we prepare detailed case studies, explore our{" "}
              <Button variant="link" href={ROUTES.solutions}>
                solutions
              </Button>{" "}
              to see what we offer.
            </p>
          </div>
        </Container>
      </Section>

      {/* Placeholder cards */}
      <Section spacing="lg" background="base">
        <Container>
          <h2 className="mb-8 text-center text-h3 font-semibold text-foreground">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                challenge: "Challenge placeholder",
                solution: "Solution placeholder",
                result: "Results placeholder",
              },
              {
                challenge: "Challenge placeholder",
                solution: "Solution placeholder",
                result: "Results placeholder",
              },
              {
                challenge: "Challenge placeholder",
                solution: "Solution placeholder",
                result: "Results placeholder",
              },
            ].map((cs, i) => (
              <Card key={i} variant="feature" hoverLift>
                <h3 className="text-body-sm font-semibold text-foreground">
                  {cs.challenge}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {cs.solution}
                </p>
                <p className="mt-2 text-sm font-medium text-primary">
                  {cs.result}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
