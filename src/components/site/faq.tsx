import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    question: "Will customers know it's AI?",
    answer:
      "The voice sounds natural and conversational. We're upfront that it's an AI assistant if a customer asks directly, but most calls flow like a normal conversation with your front desk.",
  },
  {
    question: "Can it transfer calls?",
    answer:
      "Yes. If a call needs a human, NexaFlow can transfer it straight to you or a team member based on rules you set.",
  },
  {
    question: "Does it work after hours?",
    answer:
      "Yes, that's most of the value. NexaFlow answers every call 24/7, including evenings, weekends, and holidays.",
  },
  {
    question: "Can it send SMS?",
    answer:
      "Yes. Booking confirmations, missed-call text-backs, and follow-ups are all sent automatically by text.",
  },
  {
    question: "Does it integrate with GHL?",
    answer:
      "Yes, NexaFlow connects with GoHighLevel along with most major CRMs, so your pipeline stays in sync automatically.",
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
