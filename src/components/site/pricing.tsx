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
    <section
      id="pricing"
      className="relative overflow-hidden bg-zinc-950 py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 size-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 size-[28rem] translate-x-1/2 translate-y-1/3 rounded-full bg-sky-400/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">Pricing</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Simple plans. No surprises.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={cn(
                  "glass-card relative flex h-full flex-col rounded-[var(--radius-base)] p-8",
                  tier.highlighted && "glass-card--accent"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-medium tracking-tight text-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-white/60">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/60">/mo</span>
                </div>
                <p className="mt-1 text-xs text-white/50">{tier.setup}</p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/85"
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
                  className={cn(
                    "mt-8 w-full",
                    !tier.highlighted &&
                      "border-white/20 bg-transparent text-white hover:bg-white/10"
                  )}
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
