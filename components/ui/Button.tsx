"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "outline" | "invert" | "ghost";

/* Axelo's pill: Inter 600, 13px, fully rounded, ink-filled. */
const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold cursor-pointer " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out " +
  "min-h-[52px] px-7 text-[14px] tracking-[-0.005em] active:scale-[0.985]";

const variants: Record<Variant, string> = {
  /* Blue carries every conversion moment — the trust colour. */
  primary:
    "bg-blue text-paper shadow-[0_1px_2px_rgba(29,78,216,0.18)] " +
    "hover:bg-blue-deep hover:shadow-[0_10px_28px_-8px_rgba(29,78,216,0.55)] hover:-translate-y-px",
  outline:
    "border border-line-strong text-ink bg-transparent " +
    "hover:border-blue hover:text-blue-deep",
  /* for use inside dark blocks */
  invert:
    "bg-paper text-ink shadow-[0_1px_2px_rgba(0,0,0,0.18)] " +
    "hover:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.5)] hover:-translate-y-px",
  ghost: "text-ink-dim hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = true,
  magnetic = true,
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  magnetic?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const cls = cn(base, variants[variant], className);

  const el = href ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );

  return magnetic ? <Magnetic strength={0.25}>{el}</Magnetic> : el;
}
