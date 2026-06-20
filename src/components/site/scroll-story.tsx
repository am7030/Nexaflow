"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CalendarCheck, ChatCircleText, ArrowsClockwise, WhatsappLogo } from "@phosphor-icons/react";

const VIDEO_DURATION = 10;

type Scene = {
  range: [number, number];
  vh: number;
};

const scenes: Scene[] = [
  { range: [0, 0.2], vh: 140 },
  { range: [0.2, 0.35], vh: 105 },
  { range: [0.35, 0.5], vh: 105 },
  { range: [0.5, 0.6], vh: 70 },
  { range: [0.6, 0.75], vh: 105 },
  { range: [0.75, 0.9], vh: 105 },
  { range: [0.9, 1], vh: 70 },
];

const TOTAL_VH = scenes.reduce((sum, s) => sum + s.vh, 0);

function piecewiseLinear(input: number[], output: number[], v: number) {
  if (v <= input[0]) return output[0];
  if (v >= input[input.length - 1]) return output[output.length - 1];
  for (let i = 0; i < input.length - 1; i++) {
    if (v >= input[i] && v <= input[i + 1]) {
      const t = (v - input[i]) / (input[i + 1] - input[i]);
      return output[i] + t * (output[i + 1] - output[i]);
    }
  }
  return output[output.length - 1];
}

function useSceneMotion(
  scrollYProgress: MotionValue<number>,
  index: number
) {
  const [a, b] = scenes[index].range;
  const isFirst = index === 0;
  const isLast = index === scenes.length - 1;

  const opacityInput = isFirst
    ? [a, b - 0.03, b]
    : isLast
      ? [a, a + 0.03, b]
      : [a, a + 0.03, b - 0.03, b];
  const opacityOutput = isFirst
    ? [1, 1, 0]
    : isLast
      ? [0, 1, 1]
      : [0, 1, 1, 0];
  const yOutput = isFirst
    ? [0, 0, 16]
    : isLast
      ? [16, 0, 0]
      : [16, 0, 0, 16];

  // Use function-based transforms (not array-based) so each scene's
  // independent range is computed in JS rather than via Motion's
  // shared-timeline native acceleration, which miscalculates opacity
  // when several scenes map the same scrollYProgress source.
  const opacity = useTransform(scrollYProgress, (v) =>
    piecewiseLinear(opacityInput, opacityOutput, v)
  );
  const y = useTransform(scrollYProgress, (v) =>
    piecewiseLinear(opacityInput, yOutput, v)
  );

  return { opacity, y };
}

function Scene1({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 0);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-white md:text-6xl">
          Every Missed Call Costs You Money
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
          NexaFlow answers every call, books appointments, follows up
          automatically, and keeps your business running 24/7.
        </p>
        <Button size="lg" className="mt-9" asChild>
          <a href="#pricing">
            Book Demo
            <ArrowRight className="size-4" weight="bold" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

function Scene2({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 1);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          You Can&rsquo;t Answer Calls While Doing The Work
        </h2>
        <ul className="mt-6 space-y-1.5 text-base text-white/70">
          <li>Under a sink</li>
          <li>On a roof</li>
          <li>Driving between jobs</li>
          <li>Inside a customer&rsquo;s property</li>
        </ul>
        <p className="mt-5 text-base font-medium text-white">
          Every missed call becomes revenue lost.
        </p>
      </div>
    </motion.div>
  );
}

function Scene3({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 2);
  const parts = [
    ["Screen", "Missed calls"],
    ["Speaker", "Voicemail"],
    ["Battery", "Lost leads"],
    ["Buttons", "Scheduling"],
    ["SIM", "Follow-ups"],
  ];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Calls. Texts. Scheduling. Follow-Ups. Reminders.
        </h2>
        <p className="mt-5 text-base text-white/70">
          Too many moving parts. Not enough time.
        </p>
        <ul className="mt-6 space-y-2 border-l border-white/15 pl-4 text-sm text-white/60">
          {parts.map(([part, meaning]) => (
            <li key={part}>
              <span className="text-white/90">{part}</span> — {meaning}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Scene4({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 3);
  const items = [
    "Answers calls",
    "Books appointments",
    "Sends SMS",
    "Handles WhatsApp",
    "Recovers no-shows",
  ];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Replace The Chaos With One AI System
        </h2>
        <p className="mt-5 text-sm font-medium text-white/60">
          One platform that:
        </p>
        <ul className="mt-3 space-y-1.5 text-base text-white/85">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Scene5({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 4);
  const chips = [
    { icon: Phone, label: "AI Voice Receptionist" },
    { icon: CalendarCheck, label: "Appointment Booking" },
    { icon: ChatCircleText, label: "SMS Follow-Up" },
    { icon: ArrowsClockwise, label: "CRM Updates" },
    { icon: WhatsappLogo, label: "WhatsApp Messaging" },
  ];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Meet Your New 24/7 Receptionist
        </h2>
        <p className="mt-5 text-base text-white/70">
          Never sleeps. Never misses a call.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
            >
              <chip.icon className="size-3.5 text-accent" weight="bold" />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Scene6({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 5);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Every Call Gets Answered
        </h2>
        <div className="mt-7 flex flex-col gap-3">
          <div className="self-start rounded-2xl rounded-bl-sm bg-white/10 px-4 py-2.5 text-sm text-white/90">
            Hi, I need a plumber today.
          </div>
          <div className="self-end rounded-2xl rounded-br-sm bg-accent px-4 py-2.5 text-sm text-accent-foreground">
            I can help with that. What time works best?
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Scene7({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 6);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Stay On The Job. We&rsquo;ll Handle The Phone.
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium text-white/50">Before</p>
            <ul className="mt-2 space-y-1.5 text-white/70">
              <li>Stop working</li>
              <li>Answer calls</li>
              <li>Lose focus</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-accent">After</p>
            <ul className="mt-2 space-y-1.5 text-white/90">
              <li>Keep working</li>
              <li>AI answers</li>
              <li>Jobs keep getting booked</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const sceneComponents = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];

function ProgressDot({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const { opacity } = useSceneMotion(scrollYProgress, index);
  const dotOpacity = useTransform(opacity, (o) => 0.3 + o * 0.7);
  return (
    <motion.span
      style={{ opacity: dotOpacity }}
      className="size-1.5 rounded-full bg-white"
    />
  );
}

function ProgressDots({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:right-10 md:flex">
      {scenes.map((_, i) => (
        <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function ScrollScrubStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const time = useTransform(scrollYProgress, [0, 1], [0, VIDEO_DURATION]);
  useMotionValueEvent(time, "change", (latest) => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      videoRef.current.currentTime = latest;
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-zinc-950"
      style={{ height: `${TOTAL_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/video/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/hero-transform.webm" type="video/webm" />
          <source src="/video/hero-transform.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/45 to-zinc-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/20" />

        {sceneComponents.map((SceneComponent, i) => (
          <SceneComponent key={i} scrollYProgress={scrollYProgress} />
        ))}

        <ProgressDots scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function StaticStory() {
  const sceneCopy = [
    {
      img: "/video/scene-1.jpg",
      title: "Every Missed Call Costs You Money",
      body: "NexaFlow answers every call, books appointments, follows up automatically, and keeps your business running 24/7.",
      cta: true,
    },
    {
      img: "/video/scene-2.jpg",
      title: "You Can't Answer Calls While Doing The Work",
      body: "Under a sink. On a roof. Driving between jobs. Inside a customer's property. Every missed call becomes revenue lost.",
    },
    {
      img: "/video/scene-3.jpg",
      title: "Calls. Texts. Scheduling. Follow-Ups. Reminders.",
      body: "Too many moving parts. Not enough time.",
    },
    {
      img: "/video/scene-4.jpg",
      title: "Replace The Chaos With One AI System",
      body: "One platform that answers calls, books appointments, sends SMS, handles WhatsApp, and recovers no-shows.",
    },
    {
      img: "/video/scene-5.jpg",
      title: "Meet Your New 24/7 Receptionist",
      body: "Never sleeps. Never misses a call.",
    },
    {
      img: "/video/scene-6.jpg",
      title: "Every Call Gets Answered",
      body: "“Hi, I need a plumber today.” — “I can help with that. What time works best?”",
    },
    {
      img: "/video/scene-7.jpg",
      title: "Stay On The Job. We'll Handle The Phone.",
      body: "Keep working. AI answers. Jobs keep getting booked.",
    },
  ];

  return (
    <section className="bg-zinc-950">
      {sceneCopy.map((scene) => (
        <div
          key={scene.title}
          className="relative flex min-h-[80vh] items-center overflow-hidden border-b border-white/5"
        >
          <Image
            src={scene.img}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/45 to-zinc-950/10" />
          <div className="relative z-10 max-w-lg px-6 py-16 md:px-16">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
              {scene.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              {scene.body}
            </p>
            {scene.cta && (
              <Button size="lg" className="mt-9" asChild>
                <a href="#pricing">
                  Book Demo
                  <ArrowRight className="size-4" weight="bold" />
                </a>
              </Button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export function ScrollStory() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <StaticStory />;
  }

  return <ScrollScrubStory />;
}
