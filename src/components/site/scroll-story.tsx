"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimationFrame,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { BookDemoButton } from "@/components/site/book-demo-button";
import { AIDemoButton } from "@/components/site/ai-demo-button";
import { AI_DEMO_PHONE_E164, AI_DEMO_PHONE_DISPLAY } from "@/lib/contact";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

const VIDEO_DURATION = 10;
const VIDEO_FRAME_RATE = 24;
const MIN_FRAME_DELTA = 1 / VIDEO_FRAME_RATE;

// Three acts, each given a slice of total scroll distance (in vh). Ranges
// below are derived from these proportionally so there's one source of
// truth for "how long each act lingers" instead of two arrays to keep in sync.
const SCENE_VH = [80, 70, 70];
const TOTAL_VH = SCENE_VH.reduce((sum, vh) => sum + vh, 0);

const sceneRanges: [number, number][] = (() => {
  const ranges: [number, number][] = [];
  let acc = 0;
  for (const vh of SCENE_VH) {
    const start = acc / TOTAL_VH;
    acc += vh;
    ranges.push([start, acc / TOTAL_VH]);
  }
  return ranges;
})();

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

function useSceneMotion(scrollYProgress: MotionValue<number>, index: number) {
  const [a, b] = sceneRanges[index];
  const isFirst = index === 0;
  const isLast = index === sceneRanges.length - 1;

  const opacityInput = isFirst
    ? [a, b - 0.03, b]
    : isLast
      ? [a, a + 0.03, b]
      : [a, a + 0.03, b - 0.03, b];
  const opacityOutput = isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0];
  const yOutput = isFirst ? [0, 0, 16] : isLast ? [16, 0, 0] : [16, 0, 0, 16];

  // Use function-based transforms (not array-based) so each scene's
  // independent range is computed in JS rather than via Motion's
  // shared-timeline native acceleration, which miscalculates opacity
  // when several scenes map the same scrollYProgress source.
  const rawOpacity = useTransform(scrollYProgress, (v) =>
    piecewiseLinear(opacityInput, opacityOutput, v)
  );
  const rawY = useTransform(scrollYProgress, (v) => piecewiseLinear(opacityInput, yOutput, v));
  // Spring-smooth the crossfade/slide so scenes ease in and out instead
  // of tracking scroll position 1:1 — purely cosmetic, so it's safe to
  // lag a frame behind the raw scroll value (unlike the video scrub time).
  const opacity = useSpring(rawOpacity, { stiffness: 300, damping: 30, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.4 });

  return { opacity, y };
}

// Scrubs the source video by writing currentTime at most once per display
// frame, and only when the target has moved by at least one source-video
// frame. Per-scroll-event seeking (the previous approach) queues far more
// decode work than mobile video pipelines can keep up with, which is what
// produced the skipped frames / lag reported on phones.
function useVideoScrub(videoRef: React.RefObject<HTMLVideoElement | null>, time: MotionValue<number>) {
  const lastApplied = useRef(0);
  useAnimationFrame(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 1) return;
    const target = time.get();
    if (Math.abs(target - lastApplied.current) < MIN_FRAME_DELTA) return;
    lastApplied.current = target;
    try {
      video.currentTime = target;
    } catch {
      // Some mobile browsers throw if seeking before the element is fully seekable.
    }
  });
}

function Scene1({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 0);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-white md:text-6xl">
          Every Missed Call Is Lost Revenue
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
          While you&rsquo;re working, customers are calling.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <BookDemoButton size="lg" />
          <AIDemoButton
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
          />
        </div>
        <a
          href={`tel:${AI_DEMO_PHONE_E164}`}
          className="mt-3 inline-block text-sm text-white/50 hover:text-white/80"
        >
          or call {AI_DEMO_PHONE_DISPLAY} to talk to it now
        </a>
      </div>
    </motion.div>
  );
}

function Scene2({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 1);
  const benefits = [
    "Answers calls",
    "Books appointments",
    "Sends SMS",
    "Handles customer questions",
    "Works around the clock",
  ];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Meet Your 24/7 AI Receptionist
        </h2>
        <p className="mt-5 text-base text-white/70">
          Missed calls. Voicemails. Scheduling. Follow-ups. No-shows. One
          assistant replaces all of it.
        </p>
        <ul className="mt-6 space-y-2.5">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2.5 text-base text-white/90">
              <CheckCircle className="size-5 shrink-0 text-accent" weight="fill" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Scene3({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { opacity, y } = useSceneMotion(scrollYProgress, 2);
  const without = ["Missed opportunities", "Interrupted work", "Manual follow-up"];
  const with_ = ["Every call answered", "Automated follow-up", "More booked jobs"];
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div className="max-w-lg px-6 md:px-16">
        <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
          Stay On The Job. We Handle The Phone.
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-medium text-white/50">Without NexaFlow</p>
            <ul className="mt-3 space-y-2 text-white/70">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-white/40" weight="bold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-accent">With NexaFlow</p>
            <ul className="mt-3 space-y-2 text-white/90">
              {with_.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-accent" weight="fill" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-9">
          <BookDemoButton size="lg">Book A Demo</BookDemoButton>
        </div>
      </div>
    </motion.div>
  );
}

const sceneComponents = [Scene1, Scene2, Scene3];

function ProgressDot({ index, scrollYProgress }: { index: number; scrollYProgress: MotionValue<number> }) {
  const { opacity } = useSceneMotion(scrollYProgress, index);
  const dotOpacity = useTransform(opacity, (o) => 0.3 + o * 0.7);
  return <motion.span style={{ opacity: dotOpacity }} className="size-1.5 rounded-full bg-white" />;
}

function ProgressDots({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:right-10 md:flex">
      {sceneRanges.map((_, i) => (
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
  useVideoScrub(videoRef, time);

  return (
    <section ref={containerRef} className="relative bg-zinc-950" style={{ height: `${TOTAL_VH}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Ambient blurred backdrop fills the letterbox bars left by
            object-contain below, so the 16:9 source never looks empty
            on portrait/mobile viewports. */}
        <Image
          src="/video/hero-poster.jpg"
          alt=""
          fill
          priority
          className="scale-110 object-cover object-center blur-3xl brightness-[0.35] saturate-150"
        />
        <video
          ref={videoRef}
          // object-contain (not object-cover) keeps the full frame visible on
          // every aspect ratio — the previous cover crop cut off the subject
          // on tall mobile viewports.
          className="absolute inset-0 h-full w-full object-contain"
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
      title: "Every Missed Call Is Lost Revenue",
      body: "While you're working, customers are calling.",
      cta: true,
    },
    {
      img: "/video/scene-5.jpg",
      title: "Meet Your 24/7 AI Receptionist",
      body: "Missed calls. Voicemails. Scheduling. Follow-ups. No-shows. One assistant replaces all of it — answers calls, books appointments, sends SMS, handles customer questions, and works around the clock.",
    },
    {
      img: "/video/scene-7.jpg",
      title: "Stay On The Job. We Handle The Phone.",
      body: "Without NexaFlow: missed opportunities, interrupted work, manual follow-up. With NexaFlow: every call answered, automated follow-up, more booked jobs.",
      cta: true,
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
            className="scale-110 object-cover object-center blur-3xl brightness-[0.35] saturate-150"
          />
          <Image src={scene.img} alt="" fill className="object-contain" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/45 to-zinc-950/10" />
          <div className="relative z-10 max-w-lg px-6 py-16 md:px-16">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter text-white md:text-5xl">
              {scene.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">{scene.body}</p>
            {scene.cta && (
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BookDemoButton size="lg" />
                <AIDemoButton
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export function ScrollStory() {
  // useReducedMotion() reads matchMedia synchronously on first client render,
  // which differs from the server's render and would otherwise throw a
  // hydration mismatch — branch on it only after mount, once client and
  // server have already agreed on the same first paint.
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  if (mounted && shouldReduceMotion) {
    return <StaticStory />;
  }

  return <ScrollScrubStory />;
}
