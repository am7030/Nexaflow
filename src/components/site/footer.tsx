export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-background/60 sm:flex-row">
        <span className="font-medium text-background">Nexaflow</span>
        <nav className="flex gap-6">
          <a href="#how-it-works" className="hover:text-background transition-colors">
            How it works
          </a>
          <a href="#pricing" className="hover:text-background transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-background transition-colors">
            FAQ
          </a>
        </nav>
        <span>nexaflow.io</span>
      </div>
    </footer>
  );
}
