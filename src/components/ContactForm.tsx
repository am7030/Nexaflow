"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const VERTICALS = [
  "Auto Repair Shop",
  "Plumbing",
  "Electrical",
  "HVAC",
  "House Cleaning",
  "Landscaping",
  "Pest Control",
  "Handyman",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-accent/30 bg-surface p-8 glow-border sm:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get started with NexaFlow
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Tell us about your business and we&apos;ll reach out to set up
            your AI receptionist.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="h-10 w-10 text-accent" />
            <h3 className="text-lg font-medium">Thanks — we&apos;ve got it.</h3>
            <p className="max-w-sm text-sm text-muted">
              Someone from NexaFlow will reach out shortly to set up your AI
              receptionist.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                placeholder="Jordan Smith"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="business" className="text-sm font-medium">
                Business name
              </label>
              <input
                id="business"
                name="business"
                required
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                placeholder="Jordan's Auto Repair"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                placeholder="jordan@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="vertical" className="text-sm font-medium">
                What kind of business?
              </label>
              <select
                id="vertical"
                name="vertical"
                defaultValue=""
                required
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              >
                <option value="" disabled>
                  Select one
                </option>
                {VERTICALS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Anything else we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
                placeholder="Call volume, current setup, busiest hours..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:col-span-2"
            >
              Get Started
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
