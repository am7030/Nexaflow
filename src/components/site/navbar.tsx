"use client";

import Link from "next/link";
import { AIDemoButton } from "@/components/site/ai-demo-button";
import { BookDemoButton } from "@/components/site/book-demo-button";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Nexaflow
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <AIDemoButton
            variant="outline"
            size="sm"
            className="hidden border-white/20 bg-transparent text-white hover:bg-white/10 sm:inline-flex"
          />
          <BookDemoButton size="sm">Book a demo</BookDemoButton>
        </div>
      </div>
    </header>
  );
}
