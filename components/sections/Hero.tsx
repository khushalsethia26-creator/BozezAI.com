"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Zap, Unlock, Store, Sparkles } from "lucide-react";
import { hero, trustBadges } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const icons = { zap: Zap, unlock: Unlock, store: Store, sparkles: Sparkles };

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10 lg:px-14"
    >
      {/* ---- Ambient field ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Tints, not glows: on white these sit at very low opacity —
            a saturated orb would read as a stain, not atmosphere.
            This is the only place on the page besides the headline
            itself where colour appears — the second orb is neutral. */}
        <div
          className="animate-drift absolute -top-[18%] left-[8%] size-[46vw] max-w-[620px] rounded-full opacity-[0.16] blur-[110px]"
          style={{
            background: "radial-gradient(circle, var(--color-blue), transparent 68%)",
          }}
        />
        <div
          className="animate-drift absolute right-[4%] bottom-[6%] size-[38vw] max-w-[520px] rounded-full opacity-[0.35] blur-[110px]"
          style={{
            background: "radial-gradient(circle, var(--color-ink-faint), transparent 68%)",
            ["--drift-duration" as string]: "28s",
            animationDelay: "-8s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 42%, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 42%, black, transparent 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px]">
        {/* ---- Eyebrow ---- */}
        <motion.div
          data-reveal
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-9 flex items-center gap-3"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-gold" />
          </span>
          <span className="type-eyebrow text-gold-deep">{hero.eyebrow}</span>
        </motion.div>

        {/* ---- Headline — all three lines shown at once, no cycling ---- */}
        <h1 className="type-display max-w-[14ch] text-[clamp(2.9rem,8.4vw,7.5rem)] font-semibold text-ink">
          {hero.headlineLines.map((l, i) => (
            <span
              key={l}
              className={cn(
                "block",
                i === hero.headlineLines.length - 1 && "text-gradient-blue"
              )}
            >
              {l}
            </span>
          ))}
        </h1>

        {/* ---- Sub + CTAs ---- */}
        <motion.div
          data-reveal
          initial={reduced ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[54ch]"
        >
          <p className="text-[17px] leading-relaxed text-ink-dim md:text-[19px]">{hero.sub}</p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline" arrow={false}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-7 text-[13px] text-ink-faint">{hero.footnote}</p>
        </motion.div>

        {/* ---- Trust badges ---- */}
        <motion.ul
          data-reveal
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-8 md:flex md:flex-wrap md:items-center md:gap-x-10"
        >
          {trustBadges.map(({ label, icon }) => {
            const Icon = icons[icon as keyof typeof icons];
            return (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="size-4 shrink-0 text-blue" aria-hidden="true" />
                <span className="text-[13px] text-ink-dim">{label}</span>
              </li>
            );
          })}
        </motion.ul>
      </div>

      {/* ---- Scroll cue ---- */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="pointer-events-none absolute inset-x-0 bottom-7 hidden justify-center lg:flex"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.24em] text-ink-faint uppercase">Scroll</span>
          <ArrowDown className="size-3.5 text-ink-faint" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
