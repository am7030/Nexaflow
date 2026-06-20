export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="relative h-2.5 w-2.5 rounded-full bg-accent">
              <span className="absolute inset-0 rounded-full bg-accent-glow blur-[6px]" />
            </span>
            <span>NexaFlow</span>
          </div>
          <p className="mt-2 text-sm text-muted">Your Business. Automated.</p>
        </div>

        <div className="mt-6 text-sm text-muted sm:mt-0 sm:text-right">
          <p>nexaflow.io</p>
          <p className="mt-1">Serving the US, UK, Canada &amp; Australia</p>
          <p className="mt-1">© {new Date().getFullYear()} NexaFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
