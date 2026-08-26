"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Thin progress rail at the top of the viewport.
 * The "Scroll-Triggered Storytelling" pattern calls for a progress
 * indicator so a long narrative page stays orientating.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[90] h-0.5 origin-left bg-gradient-to-r from-ink/15 via-ink/55 to-ink"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
