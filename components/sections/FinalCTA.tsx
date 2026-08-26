"use client";

import { finalCta } from "@/lib/content";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40 lg:px-14">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 90% at 50% 110%, rgba(2,132,199,0.20), transparent 65%), radial-gradient(45% 60% at 50% 120%, rgba(223,235,250,0.85), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
        <KineticHeading
          lines={finalCta.headlineLines}
          as="h2"
          className="max-w-[18ch] text-[clamp(2.5rem,7vw,5.8rem)] font-semibold text-ink"
          accentIndex={1}
        />

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Button href={finalCta.cta.href} className="min-h-[58px] px-9 text-[16px]">
              {finalCta.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
