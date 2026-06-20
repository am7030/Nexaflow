import { Car, Droplet, Zap, Fan, Sparkles, Trees, Bug, Hammer } from "lucide-react";

const HOME_SERVICES = [
  { icon: Droplet, label: "Plumbing" },
  { icon: Zap, label: "Electrical" },
  { icon: Fan, label: "HVAC" },
  { icon: Sparkles, label: "House Cleaning" },
  { icon: Trees, label: "Landscaping" },
  { icon: Bug, label: "Pest Control" },
  { icon: Hammer, label: "Handyman" },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for businesses that run on calls and appointments
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          NexaFlow is purpose-built for service businesses where a missed
          call is a missed job — not for businesses that sell online.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-accent/30 bg-surface p-8 glow-border">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Primary focus
          </span>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Car className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-medium">Independent Auto Repair Shops</h3>
          </div>
          <p className="mt-4 text-muted">
            Bays are full, hands are dirty, and the phone doesn&apos;t stop.
            NexaFlow answers every call so estimates and bookings keep coming
            in without pulling a tech off a job.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-muted">
            Same phase
          </span>
          <h3 className="mt-5 text-xl font-medium">Home Service Businesses</h3>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {HOME_SERVICES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-muted" />
                <span className="text-sm text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Dental and legal practices are on our roadmap for a later phase.
        NexaFlow isn&apos;t built for ecommerce or car dealerships.
      </p>
    </section>
  );
}
