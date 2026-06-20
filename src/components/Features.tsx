import {
  Headset,
  CalendarCheck,
  MessageSquareText,
  Bot,
  Megaphone,
  MessageCircle,
  KanbanSquare,
  Mail,
} from "lucide-react";

const FEATURES = [
  { icon: Headset, title: "24/7 AI Inbound Voice", text: "Every call answered around the clock, no exceptions." },
  { icon: CalendarCheck, title: "Appointment Booking", text: "Jobs land directly on your calendar, in real time." },
  { icon: MessageSquareText, title: "Missed-Call Text-Back", text: "Anyone who slips through gets an instant SMS reply." },
  { icon: Bot, title: "AI Website Chatbot", text: "Answers and books from your site, not just your phone." },
  { icon: Megaphone, title: "Outbound Re-engagement", text: "Consent-based follow-up to win back old customers." },
  { icon: MessageCircle, title: "WhatsApp Integration", text: "Meet customers where they already message you." },
  { icon: KanbanSquare, title: "CRM Pipeline & No-Show Recovery", text: "Track every lead and recover the ones who don't show." },
  { icon: Mail, title: "Email Sequences & Billing Automation", text: "Follow-ups and invoicing that run themselves." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything the front desk used to do
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          One AI assistant, handling voice, text, and follow-up so nothing
          falls through the cracks.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 text-sm font-medium">{title}</h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
