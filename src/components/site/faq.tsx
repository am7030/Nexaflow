import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most lines go live within days. We configure the assistant with your services, hours, and pricing before it ever takes a real call.",
  },
  {
    question: "What happens if I go over my call minutes?",
    answer:
      "We'll let you know as you approach your limit. You can add minutes or move up a tier at any time, no long-term commitment required.",
  },
  {
    question: "Can the AI speak to customers in different regions?",
    answer:
      "Yes. Nexaflow is built to handle customers across the US, UK, Canada, and Australia, matching tone and accent expectations for each market.",
  },
  {
    question: "Do I need to keep my existing phone number?",
    answer:
      "Yes, we forward your existing number to Nexaflow, so customers never notice a change on their end.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "There's no long-term contract. You can cancel your monthly plan whenever you'd like.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
