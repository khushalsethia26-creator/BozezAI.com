"use client";

import { motion, useReducedMotion } from "motion/react";
import { Play, Search, Bot, Check, X, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

/* ================================================================
   Mock-UI "props" — light editorial system.
   Pure markup + tokens, no external images: they render instantly,
   theme correctly, and never 404.
   Swap any of them for a real screenshot when you have one.
   ================================================================ */

const frame =
  "relative overflow-hidden rounded-2xl border border-line bg-paper lift";

/** Generic image placeholder — drop a real asset in later. */
export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  className,
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div className={cn(frame, ratio, "grid place-items-center", className)}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative text-center">
        <div className="mx-auto mb-3 grid size-11 place-items-center rounded-full border border-line-strong bg-sand">
          <span className="size-2 rounded-full bg-gold" />
        </div>
        <p className="type-eyebrow text-ink-faint">{label}</p>
        <p className="type-eyebrow mt-1 text-ink-faint/70">Placeholder</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- BROWSER */

export function BrowserProp({ className }: { className?: string }) {
  return (
    <div className={cn(frame, className)}>
      <div className="flex items-center gap-2 border-b border-line bg-sand/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <div className="ml-3 flex-1 rounded-md bg-paper px-3 py-1.5">
          <span className="text-[10px] text-ink-faint">yourbusiness.com</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="h-2.5 w-2/5 rounded-full bg-ink/70" />
        <div className="h-2 w-4/5 rounded-full bg-ink/12" />
        <div className="h-2 w-3/5 rounded-full bg-ink/12" />
        <div className="flex gap-2.5 pt-2">
          <div className="h-8 w-28 rounded-full bg-ink" />
          <div className="h-8 w-24 rounded-full border border-line-strong" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-lg border border-line p-3">
              <div className="size-6 rounded-md bg-gold/30" />
              <div className="h-1.5 w-full rounded-full bg-ink/12" />
              <div className="h-1.5 w-2/3 rounded-full bg-ink/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ PEAKLY SITE (real) */
/* Recreates the actual peakly.in hero — a browser chrome around the real
   WhatsApp mockup and headline from the live site — rather than a
   screenshot, so it stays crisp and on-brand like every other prop here. */

export function PeaklySiteProp({ className }: { className?: string }) {
  return (
    <div className={cn(frame, className)}>
      <div className="flex items-center gap-2 border-b border-line bg-sand/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <span className="size-2.5 rounded-full bg-ink/15" />
        <div className="ml-3 flex-1 rounded-md bg-paper px-3 py-1.5">
          <span className="text-[10px] text-ink-faint">peakly.in</span>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="rounded-2xl border border-line bg-sand/40 p-3.5">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-full bg-gold-soft">
              <span className="type-eyebrow text-gold-deep">R</span>
            </div>
            <span className="text-[12px] font-semibold text-ink">Rekha (Cook)</span>
            <span className="ml-auto flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="type-eyebrow text-ink-faint">Online</span>
            </span>
          </div>

          <div className="mt-3 max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-paper px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="grid size-6 shrink-0 place-items-center rounded-full bg-ink">
                <Mic className="size-3 text-paper" aria-hidden="true" />
              </div>
              <div className="flex flex-1 items-center gap-0.5">
                {[3, 6, 4, 8, 5, 7, 3].map((h, i) => (
                  <span
                    key={i}
                    className="w-0.5 rounded-full bg-ink/25"
                    style={{ height: `${h * 2}px` }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-ink-faint">0:23</span>
            </div>
            <p className="type-eyebrow mt-2 text-ink-faint">
              Peakly · 30 min before arrival
            </p>
          </div>
          <p className="mt-2 pl-1 text-[12px] text-ink-dim">Aaj: Rajma Chawal</p>
        </div>

        <div>
          <div className="h-2.5 w-4/5 rounded-full bg-ink/70" />
          <div className="mt-2 h-2.5 w-3/5 rounded-full bg-ink/70" />
        </div>
        <div className="h-8 w-32 rounded-full bg-ink" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- REEL */
/* The reel stays dark — a video player reads as a screen, and the
   contrast against cream makes it the focal object. */

export function ReelProp({
  className,
  runtime = "0:60",
}: {
  className?: string;
  runtime?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <div
      className={cn(
        "lift-strong relative aspect-[9/16] max-w-[260px] overflow-hidden rounded-2xl border border-line-strong bg-void",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(2,132,199,0.45), transparent 62%), radial-gradient(90% 70% at 50% 100%, rgba(125,211,252,0.20), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <span className="type-eyebrow rounded-full bg-paper/15 px-2.5 py-1 text-paper backdrop-blur">
            Reel
          </span>
          <span className="rounded-full bg-paper/15 px-2.5 py-1 text-[10px] font-semibold text-paper backdrop-blur">
            {runtime}
          </span>
        </div>

        <div className="grid place-items-center">
          <motion.div
            className="grid size-14 place-items-center rounded-full border border-paper/30 bg-paper/15 backdrop-blur"
            animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Play
              className="size-5 translate-x-0.5 fill-paper text-paper"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          <div className="h-1.5 w-4/5 rounded-full bg-paper/35" />
          <div className="h-1.5 w-3/5 rounded-full bg-paper/20" />
          <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-paper/20">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: "0%" }}
              animate={reduced ? { width: "62%" } : { width: ["0%", "100%"] }}
              transition={
                reduced ? undefined : { duration: 6, repeat: Infinity, ease: "linear" }
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- APP */

export function AppProp({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "lift-strong relative aspect-[9/16] max-w-[240px] overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink",
        className
      )}
    >
      <div className="flex h-full flex-col rounded-[1.6rem] bg-paper p-5">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-ink/15" />
        <p className="type-eyebrow text-ink-faint">Today</p>
        <p className="mt-1 text-[11px] text-ink-dim">Bookings</p>
        <p className="type-display mt-2 text-5xl leading-none text-ink">128</p>
        <div className="mt-5 flex h-16 items-end gap-1.5">
          {[38, 55, 34, 72, 48, 88, 64].map((h, i) => (
            <div
              key={i}
              className={cn("flex-1 rounded-sm", i === 5 ? "bg-blue" : "bg-ink/15")}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-auto space-y-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-lg border border-line bg-sand/50 p-2.5"
            >
              <div className="size-6 rounded-full bg-gold/30" />
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 w-3/4 rounded-full bg-ink/15" />
                <div className="h-1.5 w-1/2 rounded-full bg-ink/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- CHAT */

export function ChatProp({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <div className={cn(frame, className)}>
      <div className="flex items-center gap-2.5 border-b border-line bg-sand/60 px-4 py-3">
        <div className="grid size-7 place-items-center rounded-full bg-gold-soft">
          <Bot className="size-3.5 text-gold-deep" aria-hidden="true" />
        </div>
        <span className="text-[12px] font-semibold text-ink">Support</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-gold" />
          <span className="type-eyebrow text-ink-faint">Online</span>
        </span>
      </div>
      <div className="space-y-3 p-4">
        <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2.5">
          <p className="text-[12px] leading-snug text-paper">Are you open on Sunday?</p>
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-line bg-sand/60 px-3.5 py-2.5">
          <p className="text-[12px] leading-snug text-ink-dim">
            We are — 10am to 4pm. Want me to book you in?
          </p>
        </div>
        <div className="flex items-center gap-1.5 pl-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="size-1.5 rounded-full bg-ink-faint"
              animate={reduced ? undefined : { opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ GAP PROP: SEARCH */

export function SearchProp({ className }: { className?: string }) {
  return (
    <div className={cn(frame, className)}>
      <div className="border-b border-line p-4">
        <div className="flex items-center gap-2.5 rounded-full border border-line-strong bg-sand/50 px-3.5 py-2.5">
          <Search className="size-3.5 text-ink-faint" aria-hidden="true" />
          <span className="text-[11px] text-ink-dim">
            best {"{your service}"} near me
          </span>
          <span className="animate-blink ml-0.5 h-3 w-px bg-ink" aria-hidden="true" />
        </div>
      </div>
      <div className="space-y-3.5 p-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-2 w-1/2 rounded-full bg-ink/45" />
            <div className="h-1.5 w-full rounded-full bg-ink/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-ink/10" />
          </div>
        ))}
        <div className="mt-4 rounded-lg border border-dashed border-line-strong p-3 text-center">
          <p className="type-eyebrow text-ink-faint">Your business: not on this page</p>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------- GAP PROP: VENDORS */

export function VendorsProp({ className }: { className?: string }) {
  const vendors = ["Web guy", "Video freelancer", "App shop", "Automation dev"];
  return (
    <div className={cn(frame, "p-4", className)}>
      <div className="grid grid-cols-2 gap-2.5">
        {vendors.map((v) => (
          <div key={v} className="rounded-lg border border-line bg-sand/50 p-3">
            <div className="mb-2 size-6 rounded-md bg-ink/10" />
            <p className="text-[11px] leading-tight text-ink-dim">{v}</p>
            <p className="type-eyebrow mt-1.5 text-ink-faint">Invoice</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong p-2.5">
        <X className="size-3 text-ink-faint" aria-hidden="true" />
        <p className="type-eyebrow text-ink-faint">None of them talk to each other</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------- GAP PROP: QUOTE */

export function QuoteProp({ className }: { className?: string }) {
  /* Deliberately abstracted — doc §5 forbids pricing numbers in the UI,
     including illustrative ones. Bars stand in for line items. */
  const rows = [
    "Discovery & strategy",
    "Design retainer",
    "Build & QA",
    "Account management",
  ];
  return (
    <div className={cn(frame, className)}>
      <div className="flex items-center justify-between border-b border-line bg-sand/60 px-4 py-3">
        <span className="type-eyebrow text-ink-faint">Agency quote</span>
        <span className="type-eyebrow text-ink-faint">Est. 12 wks</span>
      </div>
      <div className="p-4">
        <div className="mb-4 space-y-2.5">
          {rows.map((r, i) => (
            <div key={r} className="flex items-center justify-between gap-4">
              <span className="text-[11px] text-ink-dim">{r}</span>
              <div
                className="h-2 rounded-full bg-ink/15"
                style={{ width: `${34 + i * 14}px` }}
              />
            </div>
          ))}
        </div>
        <div className="rule-fade mb-3" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-ink">Total</span>
          <div className="h-3 w-24 rounded-full bg-ink/35" />
        </div>
        <div className="mt-4 rounded-lg border border-dashed border-line-strong p-2.5 text-center">
          <p className="type-eyebrow text-ink-faint">
            Due upfront: before you see anything
          </p>
        </div>
      </div>
    </div>
  );
}

/** Bulleted capability row — the Axelo service-card list style. */
export function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-soft">
        <Check className="size-3 text-blue" aria-hidden="true" />
      </span>
      <span className="text-[15px] leading-relaxed text-ink">{children}</span>
    </li>
  );
}
