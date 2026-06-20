import { PhoneMissed, Voicemail, Clock3, CheckCircle2, MessageSquareText, CalendarCheck } from "lucide-react";

const OLD_WAY = [
  { icon: PhoneMissed, text: "Calls ring out while you're under a vehicle or on another job" },
  { icon: Voicemail, text: "Customers hit voicemail and call the next shop on the list" },
  { icon: Clock3, text: "Nobody's answering after hours or on weekends" },
];

const NEW_WAY = [
  { icon: CheckCircle2, text: "Every call answered in seconds, 24/7, no exceptions" },
  { icon: CalendarCheck, text: "Appointments booked straight into your schedule" },
  { icon: MessageSquareText, text: "Missed calls get an instant text-back so no lead goes cold" },
];

export default function Story() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          We didn&apos;t build a smarter phone.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We replaced the front desk. The phone that just rings is gone —
          what answers now is a voice that books the job and lets your crew
          keep working.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h3 className="text-sm font-medium text-muted">The old way</h3>
          <ul className="mt-5 space-y-4">
            {OLD_WAY.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                <span className="text-foreground/80">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-accent/30 bg-surface p-8 glow-border">
          <h3 className="text-sm font-medium text-accent">The NexaFlow way</h3>
          <ul className="mt-5 space-y-4">
            {NEW_WAY.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
