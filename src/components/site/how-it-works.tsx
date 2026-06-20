import {
  Phone,
  MicrophoneStage,
  CalendarCheck,
  CheckCircle,
} from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: Phone,
    title: "A call comes in",
    body: "Day or night, Nexaflow picks up on the first ring. No hold music, no voicemail.",
  },
  {
    icon: MicrophoneStage,
    title: "The AI handles the conversation",
    body: "It sounds natural, answers questions, and knows your services, hours, and pricing.",
  },
  {
    icon: CalendarCheck,
    title: "The appointment gets booked",
    body: "Straight onto your calendar, with a confirmation text sent automatically.",
  },
  {
    icon: CheckCircle,
    title: "You keep working",
    body: "No interruptions. The customer is taken care of and your day continues.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-sm font-medium text-accent">How it works</span>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            From ringing phone to booked job, with no one lifting a finger.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-base)] border border-border bg-border md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="bg-surface p-8">
              <span className="text-xs font-mono text-muted">
                0{i + 1}
              </span>
              <step.icon
                className="mt-4 size-7 text-accent"
                weight="duotone"
              />
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
