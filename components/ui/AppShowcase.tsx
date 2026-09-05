"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A real Play Store marketing screenshot — already carries its own phone
 * frame and "Peakly" branding, so this stays a plain light card rather
 * than reusing the dark video-shell chrome built for raw, unframed footage.
 */
export function AppShowcase({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "lift-strong relative aspect-[9/16] max-w-[260px] overflow-hidden rounded-2xl border border-line-strong bg-paper",
        className
      )}
    >
      <Image
        src={src}
        alt="Peakly app — swipe to pick a dish"
        fill
        sizes="260px"
        className="object-contain"
      />
    </div>
  );
}
