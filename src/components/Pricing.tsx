import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$397",
    setup: "$497 one-time setup",
    description: "Stop missing calls and start booking jobs.",
    features: [
      "AI inbound voice, 24/7",
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
    description: "Bring back old customers and fill more bays.",
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
    description: "Run the front desk on autopilot, end to end.",
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

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple pricing, built for service businesses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Choose how much of the front desk you want NexaFlow to run.
          Available for service businesses in the US, UK, Canada, and
          Australia.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              plan.highlighted
                ? "border-accent/40 bg-surface glow-border lg:-translate-y-3"
                : "border-border bg-surface"
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                Most Popular
              </span>
            )}

            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted">{plan.description}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-muted">/mo</span>
            </div>
            <p className="mt-1 text-xs text-muted">{plan.setup}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                plan.highlighted
                  ? "bg-foreground text-white"
                  : "border border-border text-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
