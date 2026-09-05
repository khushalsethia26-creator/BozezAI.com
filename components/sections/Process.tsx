"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { process } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";

export default function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="process">
      <Eyebrow>{process.eyebrow}</Eyebrow>
      <div className="mt-12">
        <KineticHeading
          lines={process.headlineLines}
          as="h2"
          className="text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold text-ink"
          accentIndex={3}
        />
      </div>

      <div ref={listRef} className="relative mt-20 pl-10 md:pl-16">
        {/* Spine track */}
        <div
          className="absolute top-2 bottom-2 left-[11px] w-px bg-line md:left-[17px]"
          aria-hidden="true"
        />
        {/* Spine fill — scroll-driven (Motion, independent of the GSAP
            scrub above — two different libraries, two different jobs,
            same section). */}
        <motion.div
          className="absolute top-2 bottom-2 left-[11px] w-px origin-top bg-gradient-to-b from-ink/15 via-ink/55 to-ink md:left-[17px]"
          style={reduced ? { scaleY: 1 } : { scaleY }}
          aria-hidden="true"
        />

        <ol className="space-y-14 md:space-y-20">
          {process.steps.map((step) => (
            <li key={step.index} className="relative">
              {/* Node */}
              <span
                className="absolute top-1.5 -left-10 grid size-[23px] place-items-center rounded-full border border-line bg-bg md:-left-16 md:size-[35px]"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-blue md:size-2" />
              </span>

              <motion.div
                data-reveal
                initial={reduced ? false : { opacity: 0, y: 34, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-3 md:grid-cols-[auto_1fr] md:gap-10"
              >
                <span className="type-display text-[13px] tracking-[0.18em] text-ink-faint md:pt-2">
                  {step.index}
                </span>
                <div>
                  <h3 className="type-display text-[clamp(1.5rem,3vw,2.3rem)] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-ink-dim">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
