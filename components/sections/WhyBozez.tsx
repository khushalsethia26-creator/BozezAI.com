"use client";

import { whyBozez } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function WhyBozez() {
  return (
    <Section id="why">
      <Eyebrow>{whyBozez.eyebrow}</Eyebrow>

      <div className="mt-12">
        <KineticHeading
          lines={whyBozez.headlineLines}
          as="h2"
          className="text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold text-ink"
          accentIndex={2}
        />
      </div>

      <RevealGroup
        className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3"
        stagger={0.07}
      >
        {whyBozez.items.map((item) => (
          <RevealItem key={item.index}>
            {/* Hairline grid: the 1px gaps ARE the borders. */}
            <div className="group relative h-full bg-bg p-8 transition-colors duration-500 hover:bg-paper">
              <span className="type-display text-[12px] tracking-[0.18em] text-ink-faint transition-colors duration-500 group-hover:text-gold-deep">
                {item.index}
              </span>
              <h3 className="type-display mt-6 text-[21px] font-semibold text-balance text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-dim">{item.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
