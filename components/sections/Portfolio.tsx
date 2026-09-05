"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ReelProp, PeaklySiteProp } from "@/components/ui/Props";
import { VideoCard } from "@/components/ui/VideoCard";
import { AppShowcase } from "@/components/ui/AppShowcase";

const props = { reel: ReelProp, peaklySite: PeaklySiteProp } as const;

export default function Portfolio() {
  return (
    <Section id="work">
      <Eyebrow>{portfolio.eyebrow}</Eyebrow>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
        <Reveal>
          <h2 className="type-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold text-ink">
            {portfolio.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-ink-dim">
            {portfolio.sub}
          </p>
        </Reveal>
      </div>

      <RevealGroup className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
        {portfolio.items.map((item) => {
          const isVideo = item.prop === "video";
          const isAppShowcase = item.prop === "appShowcase";
          const Prop =
            isVideo || isAppShowcase ? null : props[item.prop as keyof typeof props];
          return (
            <RevealItem key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-colors duration-500 hover:border-line-strong hover:bg-paper">
                <div className="flex justify-center overflow-hidden bg-sand/50 p-7">
                  <div className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    {isVideo && (
                      <VideoCard src={"videoSrc" in item ? item.videoSrc : ""} className="w-full" />
                    )}
                    {isAppShowcase && (
                      <AppShowcase
                        src={"imageSrc" in item ? item.imageSrc : ""}
                        className="w-full"
                      />
                    )}
                    {Prop && <Prop className="w-full" />}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[10px] tracking-[0.16em] text-gold-deep uppercase">
                    {item.discipline}
                  </span>

                  <h3 className="type-display mt-4 text-[21px] font-semibold text-balance text-ink">
                    {item.title}
                  </h3>

                  {/* Named vs anonymised — driven by the per-item consent flag. */}
                  <p className="mt-2 text-[13px] text-ink-faint">{item.client}</p>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">
                    {item.description}
                  </p>

                  {"href" in item && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-blue-deep transition-colors duration-300 hover:text-blue"
                    >
                      {"linkLabel" in item ? item.linkLabel : "View live"}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal delay={0.1}>
        <div className="mt-14 flex justify-center">
          <Button href={portfolio.cta.href} variant="outline">
            {portfolio.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
