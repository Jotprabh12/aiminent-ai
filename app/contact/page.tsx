import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Aiminent AI",
  description:
    "Get in touch with Aiminent AI. Book a free consultation or schedule a live demo.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section id="contact-hero" spacing="lg" background="base">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge>Contact</Badge>
            <h1 className="text-h1 font-semibold text-foreground">
              Get in Touch
            </h1>
            <p className="max-w-prose-w text-body text-text-secondary">
              Fill out the form or reach out directly — we respond within one
              business day.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="surface">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-h3 font-semibold text-foreground">
                Contact Information
              </h2>
              <div className="space-y-4 text-sm text-text-secondary">
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Email
                  </h3>
                  <p>hello@aiminent.ai</p>
                </div>
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Phone
                  </h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Business Hours
                  </h3>
                  <p>Monday — Friday, 9 AM — 6 PM EST</p>
                </div>
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Consultation
                  </h3>
                  <p>
                    We offer a free 30-minute consultation to discuss your
                    automation needs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner
        heading="Ready to Get Started?"
        description="No obligation. We will identify automation opportunities tailored to your business."
        ctaLabel="Book Free Consultation"
        ctaHref={ROUTES.bookConsultation}
        ctaVariant="primary"
        badge="Free Consultation"
      />
    </>
  );
}
