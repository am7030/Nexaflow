export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid pt-20 pb-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-glow/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI Voice Receptionist for Auto Repair &amp; Home Service Businesses
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Your Business.
          <br />
          <span className="glow-text text-accent">Automated.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
          Every call your shop misses is a job that goes to the next name on
          the list. NexaFlow answers every inbound call 24/7, books the
          appointment, and follows up by text — so your bay stays full
          whether you&apos;re on the phone, under a vehicle, or closed for
          the night.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-foreground px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            Get Started
          </a>
          <a
            href="#pricing"
            className="w-full rounded-full border border-border bg-surface px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent sm:w-auto"
          >
            See Pricing
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface glow-border">
          <video
            className="aspect-video w-full object-cover"
            src="/videos/hero-transform.mp4"
            poster="/videos/hero-poster.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          The old phone gets replaced by a voice that never misses a call —
          your team keeps working, the AI handles the front desk.
        </p>
      </div>
    </section>
  );
}
