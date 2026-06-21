"use client";

import { useEffect, useState } from "react";
import { Phone } from "@phosphor-icons/react/ssr";
import {
  PhoneIncoming,
  Brain,
  CheckCircle,
  Check,
  Drop,
  Lightning,
  Wind,
  HouseLine,
  SprayBottle,
  Tree,
  Key,
  Bug,
} from "@phosphor-icons/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { BookDemoButton } from "@/components/site/book-demo-button";
import { cn } from "@/lib/utils";

const TAB_IDS = ["how-it-works", "industries", "pricing", "faq"] as const;
type TabId = (typeof TAB_IDS)[number];

const steps = [
  {
    icon: PhoneIncoming,
    title: "Forward your business number",
    body: "Point your existing line to NexaFlow. Customers keep dialing the same number.",
  },
  {
    icon: Brain,
    title: "We train your AI receptionist",
    body: "Your hours, services, and pricing get loaded in so every answer sounds like you.",
  },
  {
    icon: CheckCircle,
    title: "Calls start getting answered automatically",
    body: "From that point on, every call is picked up, every booking gets made.",
  },
];

const industries = [
  { icon: Drop, label: "Plumbing" },
  { icon: Lightning, label: "Electrical" },
  { icon: Wind, label: "HVAC" },
  { icon: HouseLine, label: "Roofing" },
  { icon: SprayBottle, label: "Cleaning" },
  { icon: Tree, label: "Landscaping" },
  { icon: Key, label: "Locksmith" },
  { icon: Bug, label: "Pest control" },
];

const tiers = [
  {
    name: "Starter",
    price: "$397",
    setup: "$497 one-time setup",
    description: "For businesses that just need every call answered.",
    features: [
      "AI inbound voice",
      "Appointment booking",
      "Missed-call SMS text-back",
      "AI website chatbot",
      "150 call minutes / mo",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$797",
    setup: "$497 one-time setup",
    description: "For businesses ready to win back lost leads.",
    features: [
      "Everything in Starter",
      "Outbound re-engagement (consent-based)",
      "WhatsApp integration",
      "CRM pipeline",
      "No-show recovery",
      "300 call minutes / mo",
    ],
    highlighted: true,
  },
  {
    name: "Autopilot",
    price: "$1,497",
    setup: "$497 one-time setup",
    description: "For businesses that want it fully hands-off.",
    features: [
      "Everything in Growth",
      "Email sequences",
      "Billing automation",
      "Monthly optimization call",
      "Priority support",
      "Unlimited minutes (fair use)",
    ],
    highlighted: false,
  },
];

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

function isTabId(value: string): value is TabId {
  return (TAB_IDS as readonly string[]).includes(value);
}

export function EverythingElse() {
  const [tab, setTab] = useState<TabId>("how-it-works");

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isTabId(hash)) setTab(hash);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="more" className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">Everything you need to know</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            One section. Every answer.
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <Tabs value={tab} onValueChange={(v) => isTabId(v) && setTab(v)} defaultValue="how-it-works">
            <TabsList>
              <TabsTrigger value="how-it-works" id="how-it-works">
                How it works
              </TabsTrigger>
              <TabsTrigger value="industries" id="industries">
                Industries
              </TabsTrigger>
              <TabsTrigger value="pricing" id="pricing">
                Pricing
              </TabsTrigger>
              <TabsTrigger value="faq" id="faq">
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="how-it-works" className="mt-8">
              <div className="grid gap-px overflow-hidden rounded-[var(--radius-base)] border border-border bg-border sm:grid-cols-3">
                {steps.map((step, i) => (
                  <div key={step.title} className="bg-background p-6">
                    <span className="text-xs font-mono text-muted">0{i + 1}</span>
                    <step.icon className="mt-3 size-6 text-accent" weight="duotone" />
                    <h3 className="mt-3 text-sm font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industries" className="mt-8">
              <p className="text-sm text-muted">
                Built for service businesses that live on the phone.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {industries.map((industry) => (
                  <div
                    key={industry.label}
                    className="flex flex-col items-start gap-3 rounded-[var(--radius-base)] border border-border bg-background p-5"
                  >
                    <industry.icon className="size-6 text-accent" weight="duotone" />
                    <span className="text-sm font-medium tracking-tight">{industry.label}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={cn(
                      "glass-card relative flex h-full flex-col rounded-[var(--radius-base)] p-6",
                      tier.highlighted && "glass-card--accent"
                    )}
                  >
                    {tier.highlighted && (
                      <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        Most popular
                      </span>
                    )}
                    <h3 className="text-lg font-medium tracking-tight">{tier.name}</h3>
                    <p className="mt-1 text-sm text-muted">{tier.description}</p>

                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="text-3xl font-semibold tracking-tight">{tier.price}</span>
                      <span className="text-sm text-muted">/mo</span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{tier.setup}</p>

                    <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" weight="bold" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <BookDemoButton
                      size="default"
                      className="mt-6 w-full"
                      variant={tier.highlighted ? "primary" : "outline"}
                      message={`Hi, I'm interested in the ${tier.name} plan. I'd like to book a demo of NexaFlow.`}
                    >
                      Get started
                    </BookDemoButton>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8 max-w-2xl">
              <Accordion type="single" collapsible>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>

      <div className="mt-20 border-t border-border bg-foreground py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Phone className="mx-auto size-9 text-accent" weight="duotone" />
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-background md:text-4xl">
              Stop Missing Calls. Start Capturing Every Opportunity.
            </h2>
            <BookDemoButton size="lg" className="mt-9">
              Book A Demo
            </BookDemoButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
