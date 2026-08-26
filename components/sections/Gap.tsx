"use client";

import { gap } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SearchProp, VendorsProp, QuoteProp } from "@/components/ui/Props";

const props = {
  search: SearchProp,
  vendors: VendorsProp,
  quote: QuoteProp,
} as const;

export default function Gap() {
  return (
    <Section id="gap" className="relative">
      {/* Chapter 1 of the scroll narrative: the problem. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
      />

      <Eyebrow>{gap.eyebrow}</Eyebrow>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
        <KineticHeading
          lines={gap.headlineLines}
          as="h2"
          className="text-[clamp(2.4rem,6.2vw,5rem)] font-semibold text-ink"
          accentIndex={gap.headlineLines.length - 1}
        />
        <Reveal delay={0.15}>
          <p className="max-w-[48ch] text-[17px] leading-relaxed text-ink-dim">{gap.sub}</p>
        </Reveal>
      </div>

      <RevealGroup className="mt-20 grid gap-6 md:grid-cols-3" stagger={0.12}>
        {gap.items.map((item) => {
          const Prop = props[item.prop as keyof typeof props];
          return (
            <RevealItem key={item.numeral}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-colors duration-500 hover:border-line-strong hover:bg-paper">
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="type-display text-[13px] tracking-[0.14em] text-gold-deep">
                    {item.numeral}
                  </span>
                  <span className="rule-fade flex-1" aria-hidden="true" />
                </div>

                <h3 className="type-display text-[22px] font-semibold text-balance text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{item.body}</p>

                <div className="mt-7">
                  <Prop />
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <p className="type-display mt-16 text-center text-[clamp(1.4rem,2.8vw,2.1rem)] font-medium text-ink-dim">
          {gap.kicker}
        </p>
      </Reveal>
    </Section>
  );
}
