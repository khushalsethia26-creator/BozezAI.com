"use client";

import { guarantee } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

export default function Guarantee() {
  return (
    <>
      <Section id="guarantee" className="pb-14 md:pb-16 lg:pb-20">
        <Eyebrow>{guarantee.eyebrow}</Eyebrow>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <KineticHeading
            lines={guarantee.headlineLines}
            as="h2"
            className="text-[clamp(2.4rem,6vw,5rem)] font-semibold text-ink"
            accentIndex={2}
          />
          <Reveal delay={0.15}>
            <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-dim">
              {guarantee.body}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Promise strip */}
      <div className="border-y border-line bg-paper py-6">
        <Marquee duration={34}>
          {guarantee.marquee.map((m) => (
            <span key={m} className="flex items-center">
              <span className="px-7 text-[12px] tracking-[0.2em] whitespace-nowrap text-ink-dim uppercase">
                {m}
              </span>
              <span className="size-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
