"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { introVideo } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ReelProp } from "@/components/ui/Props";

export default function IntroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Counter-scroll parallax: the reel rises as the copy settles.
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3.5, -3.5]);

  return (
    <Section>
      <Eyebrow>{introVideo.eyebrow}</Eyebrow>

      <div
        ref={ref}
        className="mt-14 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      >
        <div>
          <Reveal>
            <h2 className="type-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold text-ink">
              {introVideo.caption}{" "}
              <span className="text-gradient-gold">{introVideo.captionRest}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-ink-dim">
              {introVideo.sub}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex items-center gap-3 rounded-xl border border-dashed border-line-strong bg-paper p-4">
              <span className="size-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <p className="text-[10px] leading-relaxed tracking-[0.12em] text-ink-faint uppercase">
                Placeholder — drop the finished 60s explainer in here
              </p>
            </div>
          </Reveal>
        </div>

        <motion.div
          style={reduced ? undefined : { y, rotate }}
          className="flex justify-center lg:justify-end"
        >
          <ReelProp runtime={introVideo.runtime} className="w-full" />
        </motion.div>
      </div>
    </Section>
  );
}
