import { PhoneCall, Lightning, MagnifyingGlassMinus, CalendarCheck } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { icon: PhoneCall, label: "More answered calls" },
  { icon: Lightning, label: "Faster response times" },
  { icon: MagnifyingGlassMinus, label: "Fewer missed leads" },
  { icon: CalendarCheck, label: "More booked jobs" },
];

export function Results() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            What Changes After NexaFlow
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-base)] border border-border bg-border md:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.08}
              className="flex flex-col items-start gap-4 bg-surface p-7"
            >
              <metric.icon className="size-6 text-accent" weight="duotone" />
              <span className="text-base font-medium tracking-tight">
                {metric.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
