"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Lenis-driven smooth scroll, wired to GSAP ScrollTrigger.
 *
 * Pinned/scrubbed sections (Hero, Process) need ScrollTrigger's cached
 * trigger positions to stay in exact sync with Lenis's eased scroll
 * position — without this wiring, pins visibly jitter or fire a frame
 * late. The fix is the standard Lenis+GSAP integration:
 *   1. `lenis.on('scroll', ScrollTrigger.update)` — recompute on every
 *      Lenis frame, not just native scroll events.
 *   2. Drive Lenis from `gsap.ticker` instead of its own rAF loop, so
 *      Lenis and every GSAP tween update on the identical frame clock.
 *
 * Next 16 no longer overrides `scroll-behavior` during navigation, and
 * globals.css deliberately omits `scroll-behavior: smooth` — Lenis is
 * the single owner of scroll position, so the two can never fight.
 *
 * Disabled entirely under prefers-reduced-motion: native scrolling is
 * the accessible baseline, and pinned sections' own matchMedia guards
 * (in Hero/Process) already skip creating ScrollTrigger instances in
 * that case, so there is nothing here that needs Lenis to drive it.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Fonts here are system stack (no web-font load), but a first paint
    // can still shift layout — one refresh after mount keeps pinned
    // trigger start/end positions accurate.
    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    // Belt-and-suspenders: recompute once every image (including large
    // client-logo assets) has actually loaded and the window has settled
    // to its real size. Percentage-based end values (e.g. "+=160%") are
    // resolved against window.innerHeight at refresh time — if that ever
    // fires while the tab is 0x0 (backgrounded/not yet composited), the
    // pin distance would be calculated wrong and stay wrong until the
    // next refresh. This guarantees at least one more, later.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
      cancelAnimationFrame(refreshId);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
