"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Will it sound robotic on the phone?",
    a: "No. NexaFlow is built to sound and respond like a trained receptionist, not an automated phone tree. Customers talk to it the same way they'd talk to a person at your front desk.",
  },
  {
    q: "What happens to calls we used to miss?",
    a: "They get answered. Every inbound call is picked up in seconds, 24/7, and anything that still needs a human gets logged and handed off with full context.",
  },
  {
    q: "Is outbound calling and WhatsApp messaging opt-in?",
    a: "Yes. Outbound re-engagement and WhatsApp follow-ups on the Growth and Autopilot plans are consent-based — we only contact customers who've agreed to hear from your business.",
  },
  {
    q: "Can we keep our existing phone number?",
    a: "Yes, your existing number can be connected to NexaFlow so customers don't need to learn a new one.",
  },
  {
    q: "What's included in the setup fee?",
    a: "The $497 one-time setup covers onboarding, configuring the AI for your business and services, connecting your number and calendar, and testing before go-live.",
  },
  {
    q: "Do you support my industry?",
    a: "We're focused on independent auto repair shops and home service businesses — plumbing, electrical, HVAC, house cleaning, landscaping, pest control, and handyman services. Dental and legal are coming in a later phase.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-surface">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="px-6">
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="-mt-2 pb-5 text-sm text-muted">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
