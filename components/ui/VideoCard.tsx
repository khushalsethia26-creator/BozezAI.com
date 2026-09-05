"use client";

import { cn } from "@/lib/utils";

/**
 * A real portfolio video, shown native (controls, no autoplay — these are
 * ~40s clips, so autoplaying them on scroll would be a bandwidth/attention
 * cost visitors didn't ask for). Same shell as ReelProp's mock reel frame
 * so it slots into the grid looking consistent with the other cards.
 */
export function VideoCard({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "lift-strong relative aspect-[9/16] max-w-[260px] overflow-hidden rounded-2xl border border-line-strong bg-void",
        className
      )}
    >
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}
