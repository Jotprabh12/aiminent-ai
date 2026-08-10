import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { PageHero } from "@/components/ui/page-hero";
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
      <PageHero
        badge="Contact"
        title="Get in Touch"
        description="Fill out the form or reach out directly — we respond within one business day."
        image="/images/hero-contact.jpg"
        imageAlt="Business professional communicating with clients in a modern office"
        imagePosition="center 55%"
      />

      <Section spacing="lg" background="surface" reveal>
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
                  <p>team@aiminentai.com</p>
                </div>
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Phone
                  </h3>
                  <p>+91 7888876239</p>
                </div>
                <div>
                  <h3 className="text-body-sm font-medium text-foreground">
                    Business Hours
                  </h3>
                  <p>Monday — Friday, 9 AM — 6 PM IST</p>
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
