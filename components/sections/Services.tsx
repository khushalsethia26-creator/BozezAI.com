"use client";

import { services } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  BrowserProp,
  ReelProp,
  AppProp,
  ChatProp,
  CheckRow,
} from "@/components/ui/Props";
import { cn } from "@/lib/utils";

const props = {
  browser: BrowserProp,
  reel: ReelProp,
  app: AppProp,
  chat: ChatProp,
} as const;

export default function Services() {
  return (
    <Section id="services">
      <Eyebrow>04 · SERVICES</Eyebrow>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
        <KineticHeading
          lines={["Four capabilities.", "Deployed only", "where they earn it."]}
          as="h2"
          className="text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold text-ink"
          accentIndex={2}
        />
        <Reveal delay={0.15}>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-dim">
            Take one, or combine them. You don&apos;t need four vendors, and you
            don&apos;t pay for services your business doesn&apos;t need.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 space-y-6">
        {services.map((s, i) => {
          const Prop = props[s.prop as keyof typeof props];
          const flip = i % 2 === 1;

          return (
            <Reveal key={s.id} amount={0.15}>
              <article
                className={cn(
                  "group relative grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-paper p-7 transition-colors duration-500 md:p-10 lg:grid-cols-2 lg:gap-16",
                  "hover:border-line-strong hover:bg-paper"
                )}
              >
                {/* Hover wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 90% at 15% 0%, rgba(2,132,199,0.10), transparent 65%)",
                  }}
                  aria-hidden="true"
                />

                <div className={cn("relative", flip && "lg:order-2")}>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="type-display text-[13px] tracking-[0.16em] text-ink-faint">
                      {s.index}
                    </span>
                    {/* ink on the gold tint — gold-on-gold measured 4.28:1,
                        just under AA for 9px text */}
                    {s.flag && (
                      <span className="rounded-full border border-gold/45 bg-gold-soft px-3 py-1 text-[9px] font-semibold tracking-[0.16em] text-ink uppercase">
                        {s.flag}
                      </span>
                    )}
                  </div>

                  <h3 className="type-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[17px] text-gold-deep">{s.tagline}</p>
                  <p className="mt-5 max-w-[48ch] text-[15px] leading-relaxed text-ink-dim">
                    {s.blurb}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {s.capabilities.map((c) => (
                      <CheckRow key={c}>{c}</CheckRow>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Button href="#contact" variant="outline">
                      {s.cta}
                    </Button>
                  </div>
                </div>

                <div
                  className={cn(
                    "relative flex justify-center",
                    flip && "lg:order-1 lg:justify-start"
                  )}
                >
                  <Prop className="w-full" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
