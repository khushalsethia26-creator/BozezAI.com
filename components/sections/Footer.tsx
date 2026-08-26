"use client";

import Link from "next/link";
import { brand, footerNav, contact } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="size-9" aria-hidden="true">
                <defs>
                  <linearGradient id="footer-logo-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-gold)" />
                    <stop offset="100%" stopColor="var(--color-ink)" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 13.5 L18 5.5 Q20 4 22.5 5 L33 11 Q35 12.5 34.5 15.5 L32.5 28 Q32 31 29 32 L15 35.5 Q12 36 10 33.5 L5.5 21 Q4.8 17.5 8 13.5 Z"
                  fill="url(#footer-logo-g)"
                  fillOpacity="0.14"
                  stroke="url(#footer-logo-g)"
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
              <span className="type-display text-[19px] font-semibold text-ink">
                {brand.name}
              </span>
            </div>

            <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-ink-dim">
              {brand.meaning}
            </p>

            <a
              href={contact.phone.href}
              className="mt-5 inline-flex min-h-[44px] items-center text-[13px] text-ink-dim transition-colors duration-300 hover:text-ink"
            >
              {contact.phone.label}
            </a>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-[10px] tracking-[0.2em] text-ink-faint uppercase">
              Services
            </h2>
            <ul className="mt-4 space-y-0.5">
              {footerNav.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex min-h-[44px] items-center text-[15px] text-ink-dim transition-colors duration-300 hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company — Blog slot kept so it can be added without a redesign */}
          <nav aria-label="Company">
            <h2 className="text-[10px] tracking-[0.2em] text-ink-faint uppercase">
              Company
            </h2>
            <ul className="mt-4 space-y-0.5">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  {"soon" in l && l.soon ? (
                    <span className="inline-flex min-h-[44px] items-center gap-2 text-[15px] text-ink-faint">
                      {l.label}
                      <span className="rounded-full border border-line px-2 py-0.5 text-[9px] tracking-[0.14em] uppercase">
                        Soon
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={l.href}
                      className="flex min-h-[44px] items-center text-[15px] text-ink-dim transition-colors duration-300 hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rule-fade mt-14" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] tracking-[0.1em] text-ink-faint">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.1em] text-ink-faint">
            {brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
