import { Check } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

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

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">Pricing</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Simple plans. No surprises.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[var(--radius-base)] border p-8",
                  tier.highlighted
                    ? "border-accent bg-surface shadow-[0_24px_48px_-24px_rgba(14,165,233,0.35)]"
                    : "border-border bg-surface"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-medium tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted">/mo</span>
                </div>
                <p className="mt-1 text-xs text-muted">{tier.setup}</p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        weight="bold"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                  asChild
                >
                  <a href="#faq">Get started</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
