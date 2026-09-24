"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "A clear request is enough. We’ll take it from there.",
    image: "/images/how-it-works/01-request.jpg",
    alt: "Submitting a request",
  },
  {
    number: "02",
    title: "We refine the details",
    description: "If anything needs clarifying, we ask. Quietly and precisely.",
    image: "/images/how-it-works/02-clarify.jpg",
    alt: "Reviewing and refining the request",
  },
  {
    number: "03",
    title: "You receive a clear proposal",
    description: "Scope, requirements, and cost — defined before anything begins.",
    image: "/images/how-it-works/03-proposal.jpg",
    alt: "Clear proposal and scope",
  },
  {
    number: "04",
    title: "You approve",
    description: "Nothing moves without your confirmation.",
    image: "/images/how-it-works/04-approve.jpg",
    alt: "Approving the proposal",
  },
  {
    number: "05",
    title: "We handle everything",
    description: "The right person is assigned. You stay informed, not involved.",
    image: "/images/how-it-works/05-coordinate.jpg",
    alt: "Astra coordinating the request",
  },
  {
    number: "06",
    title: "It’s done",
    description: "Progress is shared. Completion is confirmed. You move on.",
    image: "/images/how-it-works/06-results.jpg",
    alt: "Request completed",
  },
];

/* Word-by-word cinematic headline reveal */
function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-top"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: delay + i * 0.05, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Sticky progress rail (desktop) */
function ProgressRail({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    setActive(Math.min(total - 1, Math.max(0, Math.round(v * (total - 1)))));
  });

  return (
    <div className="sticky top-[45vh] flex flex-col items-end gap-5 pr-6">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-center gap-3">
          <span
            className={`text-xs font-semibold tracking-[0.2em] transition-colors duration-500 ${
              i === active ? "text-amber-400" : "text-navy/25"
            }`}
          >
            {step.number}
          </span>
          <span
            className={`h-px transition-all duration-500 ${
              i === active ? "w-10 bg-amber-400" : "w-4 bg-navy/15"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

/* Sticky deck card */
function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const isLast = index === steps.length - 1;
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, isLast ? 1 : 0.93]);
  const brightness = useTransform(
    scrollYProgress,
    [0.8, 1],
    [1, isLast ? 1 : 0.6],
  );
  const filter = useTransform(brightness, (v) => `brightness(${v})`);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const flip = index % 2 === 1;

  return (
    <div ref={ref} className="relative h-[130vh]">
      <div className="sticky top-[10vh] h-[86vh] px-4 sm:px-8 lg:px-16">
        <motion.article
          style={{ scale, filter }}
          className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-navy/[0.06] bg-navy p-8 shadow-[0_40px_90px_-40px_rgba(11,31,58,0.35)] sm:p-12 lg:flex-row lg:items-center lg:gap-16 lg:p-20"
        >
          {/* Giant watermark number */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-2 select-none font-serif text-[11rem] leading-none text-white/[0.05] lg:text-[17rem]"
          >
            {step.number}
          </span>

          {/* Copy */}
          <div
            className={`relative z-10 flex w-full flex-col justify-center lg:w-[42%] ${
              flip ? "lg:order-2" : ""
            }`}
          >
            <span className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/80">
              <span className="h-px w-8 bg-amber-400/60" />
              Step {step.number} — of 06
            </span>

            <h3 className="mb-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {step.title}
            </h3>

            <p className="max-w-sm text-base leading-relaxed text-white/65 sm:text-lg">
              {step.description}
            </p>
          </div>

          {/* Image with parallax */}
          <div
            className={`relative mt-8 min-h-0 flex-1 self-stretch overflow-hidden rounded-2xl bg-white/5 lg:mt-0 ${
              flip ? "lg:order-1" : ""
            }`}
          >
            <motion.div
              style={{ y: imgY }}
              className="absolute left-0 right-0 -top-[6%] -bottom-[6%]"
            >
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const deckRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: deckProgress } = useScroll({
    target: deckRef,
    offset: ["start 0.5", "end 0.85"],
  });

  return (
    <section id="how-it-works" className="relative">
      {/* Intro */}
      <div className="container-wide section-padding pb-8 lg:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/80"
        >
          How it works
        </motion.p>

        <h2 className="max-w-3xl font-serif text-3xl font-medium tracking-tight text-navy sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          <RevealWords text="From request to results." />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-foreground/65 sm:text-lg"
        >
          A simple path designed so you never have to manage the middle.
        </motion.p>
      </div>

      {/* Sticky deck */}
      <div ref={deckRef} className="relative">
        <div className="mx-auto flex max-w-[1600px]">
          <aside className="hidden w-28 shrink-0 lg:block">
            <ProgressRail progress={deckProgress} total={steps.length} />
          </aside>

          <div className="min-w-0 flex-1">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Closing act / CTA */}
      <div className="relative mt-16 overflow-hidden bg-navy text-white lg:mt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]"
        />

        <div className="container-wide relative flex flex-col items-center section-padding text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/80"
          >
            One request. Zero friction.
          </motion.p>

          <h2 className="max-w-3xl font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            <RevealWords text="Ready when you are." delay={0.1} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Tell us once. We handle everything after that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mt-10"
          >
            <Link href="/request" className="btn-primary group bg-white text-navy rounded-xl">
              Start a Request
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="mt-5 text-sm text-white/40">
              No calls required · Proposal in hand before any commitment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}