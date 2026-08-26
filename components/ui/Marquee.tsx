"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * CSS-driven infinite marquee. The track is duplicated and translated -50%,
 * so the loop is seamless. Duplicate copy is aria-hidden so screen readers
 * hear the list exactly once.
 */
export function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      style={
        {
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="animate-marquee flex shrink-0 items-center"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
