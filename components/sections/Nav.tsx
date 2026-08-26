"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Logo slot — placeholder for the green/stone "B" mark from the doc. */
function Logo() {
  return (
    <Link
      href="#top"
      className="group flex min-h-[44px] items-center gap-3"
      aria-label={brand.name}
    >
      <span className="relative grid size-9 place-items-center">
        <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
          <defs>
            <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-gold)" />
              <stop offset="100%" stopColor="var(--color-ink)" />
            </linearGradient>
          </defs>
          {/* Stone-shaped mark: an irregular hewn block, not a circle. */}
          <path
            d="M8 13.5 L18 5.5 Q20 4 22.5 5 L33 11 Q35 12.5 34.5 15.5 L32.5 28 Q32 31 29 32 L15 35.5 Q12 36 10 33.5 L5.5 21 Q4.8 17.5 8 13.5 Z"
            fill="url(#logo-g)"
            fillOpacity="0.14"
            stroke="url(#logo-g)"
            strokeWidth="1.4"
          />
          <text
            x="20"
            y="26"
            textAnchor="middle"
            className="type-display"
            fontSize="16"
            fontWeight="700"
            fill="var(--color-ink)"
          >
            B
          </text>
        </svg>
      </span>
      <span className="type-display text-[19px] font-semibold tracking-[-0.03em] text-ink">
        {brand.name}
      </span>
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled
            ? "border-b border-line bg-bg/72 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between px-6 md:px-10 lg:px-14">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[14px] text-ink-dim transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" className="min-h-[44px] px-6 text-[14px]">
              Get Your Free Audit
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[79] bg-bg/96 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reduced ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="type-display border-b border-line py-5 text-[34px] tracking-[-0.03em] text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-9">
                <Button href="#contact" magnetic={false} className="w-full">
                  Get Your Free Audit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
