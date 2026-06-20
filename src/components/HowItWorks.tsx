import { PhoneIncoming, Bot, CalendarCheck2, Wrench } from "lucide-react";

const STEPS = [
  {
    icon: PhoneIncoming,
    title: "A customer calls",
    text: "Any time, day or night, your number is answered — no hold music, no voicemail.",
  },
  {
    icon: Bot,
    title: "NexaFlow takes the call",
    text: "The AI answers like a trained receptionist, understands the request, and asks the right questions.",
  },
  {
    icon: CalendarCheck2,
    title: "The job gets booked",
    text: "An appointment lands on your calendar and a confirmation text goes out automatically.",
  },
  {
    icon: Wrench,
    title: "Your team keeps working",
    text: "No one has to drop a wrench to answer a phone. The work doesn't stop, and neither does the front desk.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Four steps between a ringing phone and a job on your schedule.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className="relative rounded-2xl border border-border bg-surface p-6"
          >
            <span className="text-xs font-medium text-muted">
              Step {i + 1}
            </span>
            <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 font-medium">{title}</h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
