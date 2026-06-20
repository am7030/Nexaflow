import {
  Wrench,
  HouseLine,
  Tooth,
  Scales,
  Briefcase,
  UsersThree,
} from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";

const verticals = [
  { icon: Wrench, label: "Auto shops" },
  { icon: HouseLine, label: "Home services" },
  { icon: Tooth, label: "Clinics" },
  { icon: Scales, label: "Legal practices" },
  { icon: Briefcase, label: "Professional services" },
  { icon: UsersThree, label: "Anyone who takes calls" },
];

export function Verticals() {
  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            Built for any business that answers a phone.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Nexaflow doesn&rsquo;t care what industry you&rsquo;re in. If
            customers call you, Nexaflow can answer for you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-base)] border border-border bg-border md:grid-cols-3">
          {verticals.map((vertical, i) => (
            <Reveal
              key={vertical.label}
              delay={i * 0.06}
              className="flex items-center gap-3 bg-background px-6 py-7"
            >
              <vertical.icon className="size-5 text-accent" weight="duotone" />
              <span className="text-sm font-medium">{vertical.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
