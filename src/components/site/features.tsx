import {
  Phone,
  CalendarCheck,
  ChatCircleText,
  WhatsappLogo,
  ArrowsClockwise,
  ChatsCircle,
} from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    icon: Phone,
    title: "24/7 inbound voice",
    body: "Every call answered instantly, around the clock, every day of the year.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking",
    body: "Synced straight to your calendar so nothing needs to be re-entered.",
  },
  {
    icon: ChatCircleText,
    title: "Missed-call text-back",
    body: "Anyone who slips through still gets an instant SMS reply.",
  },
  {
    icon: ChatsCircle,
    title: "AI website chatbot",
    body: "The same assistant answers questions for visitors on your site.",
  },
  {
    icon: WhatsappLogo,
    title: "WhatsApp integration",
    body: "Reach customers on the channel they already check the most.",
  },
  {
    icon: ArrowsClockwise,
    title: "Outbound re-engagement",
    body: "Consent-based follow-up that brings cold leads and no-shows back.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">Platform</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Everything it takes to never lose a customer.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 3) * 0.08}
              className="rounded-[var(--radius-base)] border border-border p-7"
            >
              <feature.icon className="size-6 text-accent" weight="duotone" />
              <h3 className="mt-5 text-base font-medium tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
