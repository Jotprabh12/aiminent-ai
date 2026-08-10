import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — Aiminent AI",
  description: "Terms of service for using Aiminent AI's website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section spacing="lg" background="base">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Badge variant="outline">Terms of Service</Badge>
          <h1 className="mt-4 text-h2 font-semibold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-6 text-sm text-text-secondary">
            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="mt-2">
                By accessing and using the Aiminent AI website
                (&quot;Service&quot;), you agree to be bound by these Terms of
                Service. If you disagree with any part of the terms, you may not
                access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                2. Services
              </h2>
              <p className="mt-2">
                Aiminent AI provides AI-powered business automation services
                including lead management, CRM integration, WhatsApp automation,
                and custom software solutions.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                3. Client Responsibilities
              </h2>
              <p className="mt-2">
                Clients are responsible for providing accurate information,
                maintaining their own data, and ensuring compliance with
                applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                4. Intellectual Property
              </h2>
              <p className="mt-2">
                All intellectual property rights in the Service and its content
                remain with Aiminent AI. Clients retain rights to their own data
                and outputs generated through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                5. Limitation of Liability
              </h2>
              <p className="mt-2">
                Aiminent AI is not liable for any indirect, incidental, or
                consequential damages arising from the use of the Service. Our
                total liability is limited to the fees paid for the relevant
                service.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                6. Termination
              </h2>
              <p className="mt-2">
                Either party may terminate the agreement at any time with
                written notice. Upon termination, clients retain access to their
                data for a 30-day grace period.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                7. Contact
              </h2>
              <p className="mt-2">
                For questions about these Terms, contact us at
                team@aiminentai.com.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
