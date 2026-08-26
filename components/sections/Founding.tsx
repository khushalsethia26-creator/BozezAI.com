"use client";

import { founding } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckRow, StoneMark } from "@/components/ui/Props";

export default function Founding() {
  return (
    <Section id="founding" bleed className="px-6 md:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line-strong p-9 md:p-14">
            {/* Feature wash — this is the highest-intent moment on the page. */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(90% 120% at 0% 0%, rgba(2,132,199,0.20), transparent 60%), radial-gradient(80% 110% at 100% 100%, rgba(223,235,250,0.85), transparent 62%)",
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-paper" aria-hidden="true" />

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-70" />
                    <span className="relative inline-flex size-2 rounded-full bg-gold" />
                  </span>
                  <span className="text-[11px] tracking-[0.2em] text-gold-deep uppercase">
                    {founding.eyebrow}
                  </span>
                </div>

                <h2 className="type-display mt-7 text-[clamp(2rem,4.6vw,3.5rem)] font-semibold text-balance text-ink">
                  {founding.headline}
                </h2>

                <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-ink-dim">
                  {founding.body}
                </p>

                <ul className="mt-9 space-y-3.5">
                  {founding.perks.map((p) => (
                    <CheckRow key={p}>{p}</CheckRow>
                  ))}
                </ul>

                <div className="mt-11 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <Button href={founding.cta.href}>{founding.cta.label}</Button>
                  <p className="text-[11px] tracking-[0.14em] text-gold-deep uppercase">
                    {founding.urgency}
                  </p>
                </div>
              </div>

              <div className="hidden justify-center lg:flex">
                <StoneMark className="w-full max-w-[280px]" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
