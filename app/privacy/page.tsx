import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — Aiminent AI",
  description: "Our privacy policy and how we handle your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section spacing="lg" background="base">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Badge variant="outline">Privacy Policy</Badge>
          <h1 className="mt-4 text-h2 font-semibold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Last updated: July 2026
          </p>

          <div className="mt-8 space-y-6 text-sm text-text-secondary">
            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                1. Introduction
              </h2>
              <p className="mt-2">
                Aiminent AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                We collect information you provide directly to us, such as your
                name, email address, company, and phone number when you submit a
                consultation request or contact form.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                3. How We Use Your Information
              </h2>
              <p className="mt-2">
                We use the information we collect to respond to your inquiries,
                provide our services, improve our website, and communicate with
                you about relevant products and updates.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                4. Data Security
              </h2>
              <p className="mt-2">
                We implement enterprise-grade security measures including
                encryption at rest, secure data transmission, and regular
                security audits to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                5. Your Rights
              </h2>
              <p className="mt-2">
                You have the right to access, update, or delete your personal
                data at any time. Contact us at team@aiminentai.com to exercise
                these rights.
              </p>
            </section>

            <section>
              <h2 className="text-body-lg font-semibold text-foreground">
                6. Contact Us
              </h2>
              <p className="mt-2">
                If you have questions about this Privacy Policy, please contact
                us at team@aiminentai.com.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
