import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/animations";
import { type FAQItem } from "@/types";
import { cn } from "@/lib/utils";

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({
  title,
  subtitle,
  items,
  className,
}: FAQSectionProps) {
  return (
    <Section id="faq" spacing="lg" background="surface">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-body text-text-secondary">{subtitle}</p>
          )}
        </div>

        <div className={cn("mx-auto max-w-2xl", className)}>
          <Reveal>
            <Accordion type="single">
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  title={item.question}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
