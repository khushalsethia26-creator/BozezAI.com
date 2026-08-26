"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Stacked display heading where each line rises out of a clipping mask.
 * This is the site's signature headline treatment.
 *
 * IMPORTANT — why the trigger lives on the OUTER mask:
 * IntersectionObserver intersection rects are clipped by `overflow: hidden`
 * ancestors. The inner line starts translated 150% down, which puts it
 * entirely outside its own mask's clip box, so an observer on the *inner*
 * element reports zero visible area and `whileInView` can never fire — the
 * line can't animate until it's visible, and can't be visible until it
 * animates. The mask itself is never clipped, so it observes correctly and
 * propagates the variant state to the child.
 *
 * Under reduced motion the lines render immediately in final position.
 */

const lineVariants: Variants = {
  hidden: { y: "150%", opacity: 0 },
  show: { y: "0%", opacity: 1 },
};

export function KineticHeading({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.08,
  accentIndex,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  /** Index of a line to render in the gradient accent treatment. */
  accentIndex?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Tag className={cn("type-display", className)}>
        {lines.map((line, i) => (
          <span key={`${line}-${i}`} className="block">
            <span
              className={cn(
                "block",
                accentIndex === i && "text-gradient-gold",
                lineClassName
              )}
            >
              {line}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={cn("type-display", className)}>
      {/* The pb/-mb pair extends each clip box past the descenders
          (line-height is 0.95, so glyph tails fall outside the line box)
          without changing layout spacing. */}
      {lines.map((line, i) => (
        <motion.span
          key={`${line}-${i}`}
          className="block overflow-hidden pb-[0.2em] -mb-[0.2em]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span
            data-reveal
            className={cn(
              "block will-change-transform",
              accentIndex === i && "text-gradient-gold",
              lineClassName
            )}
            variants={lineVariants}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
