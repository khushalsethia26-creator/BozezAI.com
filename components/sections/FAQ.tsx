"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <Section id="faq">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow>09 · QUESTIONS</Eyebrow>
          <div className="mt-12">
            <KineticHeading
              lines={["Straight", "answers,", "up front."]}
              as="h2"
              className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-semibold text-ink"
              accentIndex={2}
            />
          </div>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[38ch] text-[16px] leading-relaxed text-ink-dim">
              The things people ask before they book a call. If yours
              isn&apos;t here, ask it on the call — it&apos;s free.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} amount={0.1}>
          <dl className="border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-line">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "type-display text-[clamp(1.05rem,1.9vw,1.35rem)] font-medium transition-colors duration-300",
                          isOpen ? "text-ink" : "text-ink-dim group-hover:text-ink"
                        )}
                      >
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-45 border-blue/40 bg-blue-soft text-blue"
                            : "border-line text-ink-dim group-hover:border-line-strong"
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        id={`faq-panel-${i}`}
                        aria-labelledby={`faq-trigger-${i}`}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[58ch] pr-14 pb-7 text-[15px] leading-relaxed text-ink-dim">
                          {f.a}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
