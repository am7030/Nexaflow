import { PhoneX, ClockCountdown, ChatCircleText } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: PhoneX,
    title: "Missed calls are missed revenue",
    body: "Every unanswered ring is a customer calling the next business on the list.",
  },
  {
    icon: ClockCountdown,
    title: "Customers don't call during business hours",
    body: "Evenings, weekends, lunch breaks. Demand doesn't wait for your schedule.",
  },
  {
    icon: ChatCircleText,
    title: "Follow-up falls through the cracks",
    body: "No-shows, callbacks, and quotes go cold when there's no one to chase them.",
  },
];

export function PainPoints() {
  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Every business loses customers the same way.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <point.icon
                className="size-7 text-accent"
                weight="duotone"
              />
              <h3 className="mt-5 text-lg font-medium tracking-tight">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
