import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTABanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Select, Switch } from "@/components/ui/input";
import { ROUTES } from "@/lib/constants";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Aiminent AI",
  description:
    "Get in touch with Aiminent AI. Book a free consultation or schedule a live demo.",
});

const INDUSTRIES = [
  { label: "Real Estate", value: "realestate" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Education", value: "education" },
  { label: "Legal", value: "legal" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Other", value: "other" },
];

const TEAM_SIZES = [
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "201–500", value: "201-500" },
  { label: "500+", value: "500+" },
];

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
              Remove friction from contacting us. Fill out the form or reach out
              directly — we respond within one business day.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" background="surface">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
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

            {/* Form */}
            <div>
              <form className="space-y-4" action={ROUTES.thankYou}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input label="First Name" name="firstName" required />
                  <Input label="Last Name" name="lastName" required />
                </div>
                <Input label="Company" name="company" required />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input label="Email" name="email" type="email" required />
                  <Input label="Phone" name="phone" type="tel" />
                </div>
                <Select
                  label="Industry"
                  name="industry"
                  required
                  options={INDUSTRIES}
                />
                <Select
                  label="Team Size"
                  name="teamSize"
                  options={TEAM_SIZES}
                />
                <Input
                  label="Biggest Challenge"
                  name="challenge"
                  required
                  helperText="Tell us what you would like to automate."
                />
                <Switch label="I would like a callback instead of email" />
                <Button type="submit" fullWidth size="lg">
                  Book Free Consultation
                </Button>
              </form>
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
