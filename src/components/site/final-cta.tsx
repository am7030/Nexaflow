import { Phone } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-foreground py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Phone
            className="mx-auto size-9 text-accent"
            weight="duotone"
          />
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-background md:text-4xl">
            Stop losing customers to a missed call.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/70">
            Set up Nexaflow once. Let it answer every call after that.
          </p>
          <Button size="lg" className="mt-9" asChild>
            <a href="#pricing">See pricing</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
