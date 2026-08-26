"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        bleed ? "" : "px-6 md:px-10 lg:px-14",
        "py-24 md:py-32 lg:py-40",
        className
      )}
    >
      {bleed ? children : <div className="mx-auto w-full max-w-[1240px]">{children}</div>}
    </section>
  );
}

/** Small monospaced section marker, e.g. "03 · THE GAP". */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal direction="none" blur={false}>
      <div className={cn("flex items-center gap-4", className)}>
        <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
        <span className="type-eyebrow text-gold-deep">
          {children}
        </span>
        <span className="rule-fade hidden flex-1 sm:block" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
