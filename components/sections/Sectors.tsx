"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export default function Sectors() {
  return (
    <section className="relative border-y border-line py-14 md:py-16">
      {/* Real, named client logos, endlessly rotating — each gets its own
          neutral card so wildly different source backgrounds (navy, white,
          near-black) still read as one coherent set rather than clashing
          directly against the page. */}
      <Reveal direction="none">
        <p className="mb-9 text-center text-[11px] tracking-[0.14em] text-ink-faint uppercase">
          A few businesses we&apos;ve helped
        </p>
      </Reveal>

      <Marquee duration={34}>
        {clientLogos.map((logo) => (
          <div key={logo.name} className="shrink-0 px-2.5 sm:px-3.5">
            <div className="lift group relative size-[130px] overflow-hidden rounded-2xl border border-line bg-paper p-5 transition-colors duration-500 hover:border-line-strong sm:size-[160px]">
              <div className="relative size-full">
                <Image
                  src={`/logos/${logo.file}`}
                  alt={logo.name}
                  fill
                  sizes="160px"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
