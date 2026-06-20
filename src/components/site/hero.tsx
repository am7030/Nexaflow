"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/video/hero-transform.mp4"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/55 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80"
          >
            <Phone className="size-3.5 text-accent" weight="fill" />
            Never miss another call
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tighter text-white md:text-6xl"
          >
            Your business.{" "}
            <span className="text-accent">Automated.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-white/75"
          >
            Nexaflow answers every call, books the appointment, and follows
            up by text, 24 hours a day. Your team keeps working. Nothing
            falls through the cracks.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" asChild>
              <a href="#pricing">
                See pricing
                <ArrowRight className="size-4" weight="bold" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="#how-it-works"
                className="border-white/25 text-white hover:bg-white/10"
              >
                How it works
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
