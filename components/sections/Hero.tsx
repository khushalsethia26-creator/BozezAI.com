"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Zap, Unlock, Store, Sparkles } from "lucide-react";
import { hero, trustBadges } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const icons = { zap: Zap, unlock: Unlock, store: Store, sparkles: Sparkles };

/**
 * THE hero moment (see globals.css .text-gradient-blue comment) —
 * the section pins in place while the three headline lines cycle
 * through in sync with scroll position, Apple's signature technique.
 *
 * Motion (framer-style) owns the eyebrow/sub/CTA/badges — those play
 * once on mount, same as every other section. GSAP owns ONLY the three
 * headline lines, because mixing two animation libraries' writes on the
 * same DOM nodes (Motion's transform + GSAP's position/opacity) is the
 * kind of thing that silently fights itself. One library per element.
 *
 * Reduced motion: the lines render as plain stacked text, no pin, no
 * GSAP involvement at all — matchMedia below never creates the
 * ScrollTrigger in that case, so there's no risk of trapping scroll
 * in a pinned section that never releases.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const lines = lineRefs.current;
    if (!section || lines.some((l) => !l)) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const [l1, l2, l3] = lines as HTMLSpanElement[];

      // Stage the lines on top of one another. Height is pinned to the
      // tallest line so the layout doesn't collapse once they're
      // absolutely positioned — measured after the plain stacked
      // layout has already painted, so this is the real rendered size.
      const maxH = Math.max(...lines.map((l) => l!.getBoundingClientRect().height));
      const stage = l1.parentElement!;
      gsap.set(stage, { position: "relative", height: maxH });
      gsap.set([l1, l2, l3], { position: "absolute", inset: 0 });
      gsap.set([l2, l3], { opacity: 0, y: 40 });
      // l1 starts fully visible, not animated in: Hero is the very first
      // section, so its ScrollTrigger ("top top") is already live at
      // scrollY 0 — there's no pre-pin moment for a separate entrance
      // tween to play during. A second tween touching l1's opacity here
      // raced the scrub timeline below and both lost (rendered opacity 0).
      gsap.set(l1, { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      tl.to(l1, { opacity: 0, y: -30, duration: 1 })
        .fromTo(l2, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to({}, { duration: 0.5 }) // hold
        .to(l2, { opacity: 0, y: -30, duration: 1 })
        .fromTo(l3, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to({}, { duration: 0.6 }); // hold before release

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={sectionRef}
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

        {/* ---- Headline ---- */}
        {reduced ? (
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
        ) : (
          <h1 className="type-display max-w-[14ch] text-[clamp(2.9rem,8.4vw,7.5rem)] font-semibold text-ink">
            {/* Stacked by default (before GSAP measures + stages them) —
                this is also what a slow/failed JS load leaves visible. */}
            {hero.headlineLines.map((l, i) => (
              <span
                key={l}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                data-reveal
                className={cn(
                  "block will-change-transform",
                  i === hero.headlineLines.length - 1 && "text-gradient-blue"
                )}
              >
                {l}
              </span>
            ))}
          </h1>
        )}

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
