"use client";

import { scoping } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Occupies the slot a pricing table would normally take.
 * Doc §5 forbids public pricing, so this section sells the *process*
 * that produces a number instead of showing one.
 */
export default function Scoping() {
  return (
    <Section id="scope" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(2,132,199,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Eyebrow>{scoping.eyebrow}</Eyebrow>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
        <KineticHeading
          lines={scoping.headlineLines}
          as="h2"
          className="text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold text-ink"
          accentIndex={2}
        />
        <Reveal delay={0.15}>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-dim">
            {scoping.sub}
          </p>
        </Reveal>
      </div>

      <RevealGroup className="mt-20 grid gap-6 md:grid-cols-3" stagger={0.11}>
        {scoping.steps.map((s) => (
          <RevealItem key={s.index}>
            <div className="relative h-full rounded-2xl border border-line bg-paper p-8 transition-colors duration-500 hover:border-line-strong hover:bg-paper">
              <span className="type-display text-[13px] tracking-[0.16em] text-gold-deep">
                {s.index}
              </span>
              <h3 className="type-display mt-5 text-[21px] font-semibold text-balance text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{s.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-col items-center gap-7 rounded-2xl border border-line bg-paper p-9 text-center">
          <p className="type-display max-w-[28ch] text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium text-balance text-ink">
            {scoping.note}
          </p>
          <Button href={scoping.cta.href}>{scoping.cta.label}</Button>
        </div>
      </Reveal>
    </Section>
  );
}
