"use client";

import { sectors } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export default function Sectors() {
  return (
    <section className="relative border-y border-line py-14 md:py-16">
      <Reveal direction="none">
        <p className="mb-9 text-center text-[11px] tracking-[0.22em] text-ink-faint uppercase">
          Built for every kind of small business
        </p>
      </Reveal>

      <Marquee duration={52}>
        {sectors.map((s) => (
          <span key={s} className="flex items-center">
            <span className="type-display px-8 text-[clamp(1.5rem,3.2vw,2.6rem)] font-medium whitespace-nowrap text-ink-faint transition-colors duration-500 hover:text-ink">
              {s}
            </span>
            <span className="size-1.5 shrink-0 rounded-full bg-gold/60" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
