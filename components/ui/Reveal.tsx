"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = true,
  once = true,
  amount = 0.35,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  blur?: boolean;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const { x, y } = offset[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x,
      y,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      data-reveal
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggers direct children. Pair with <RevealItem>.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduced = useReducedMotion();
  const { x, y } = offset[direction];

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      data-reveal
      className={className}
      variants={{
        hidden: { opacity: 0, x, y, filter: "blur(6px)" },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
