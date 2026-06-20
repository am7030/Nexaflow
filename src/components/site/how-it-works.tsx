import { PhoneIncoming, Brain, CheckCircle } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

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

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">How it works</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Three steps to never missing a call again.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-base)] border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="bg-background p-8">
              <span className="text-xs font-mono text-muted">0{i + 1}</span>
              <step.icon className="mt-4 size-7 text-accent" weight="duotone" />
              <h3 className="mt-5 text-base font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
