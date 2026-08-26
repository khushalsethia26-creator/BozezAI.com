"use client";

import { useState } from "react";
import { Phone, Check } from "lucide-react";
import { contact } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink " +
  "placeholder:text-ink-faint/70 transition-colors duration-300 " +
  "hover:border-line-strong focus:border-blue focus:outline-none";

const labelCls = "mb-2 block text-[13px] font-medium text-ink-dim";

export default function Contact() {
  const [interests, setInterests] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (v: string) =>
    setInterests((cur) =>
      cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]
    );

  /**
   * NOT WIRED TO A BACKEND YET.
   * Replace with a real handler (Formspree / Resend / a route handler)
   * before launch — right now this only shows the success state.
   */
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email")) {
      setError("Please add your name and email so we can reach you.");
      return;
    }
    setError(null);
    setSent(true);
  }

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* ---- Left: pitch + direct line ---- */}
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>

          <div className="mt-12">
            <KineticHeading
              lines={contact.headlineLines}
              as="h2"
              className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-semibold text-ink"
              accentIndex={3}
            />
          </div>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-ink-dim">
              {contact.sub}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href={contact.phone.href}
              className="group mt-10 flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 transition-colors duration-500 hover:border-line-strong hover:bg-paper"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-soft">
                <Phone className="size-4.5 text-blue" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[10px] tracking-[0.18em] text-ink-faint uppercase">
                  {contact.phone.note}
                </span>
                <span className="type-display mt-1 block text-[19px] font-medium text-ink">
                  {contact.phone.label}
                </span>
              </span>
            </a>
            <p className="mt-3 text-[10px] tracking-[0.12em] text-ink-faint uppercase">
              Placeholder — swap in the real number
            </p>
          </Reveal>
        </div>

        {/* ---- Right: intake form ---- */}
        <Reveal delay={0.1} amount={0.1}>
          {sent ? (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-blue/35 bg-paper p-10 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-blue-soft">
                <Check className="size-6 text-blue" aria-hidden="true" />
              </span>
              <h3 className="type-display mt-7 text-[26px] font-semibold text-ink">
                Thanks — that&apos;s in.
              </h3>
              <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-dim">
                We&apos;ll come back with next steps, including your free audit
                if you asked for one.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-line bg-paper p-7 md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input id="name" name="name" className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="business" className={labelCls}>
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    className={field}
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={field}
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone / WhatsApp
                  </label>
                  <input id="phone" name="phone" type="tel" className={field} placeholder="+00 000 000 0000" />
                </div>
              </div>

              {/* Multi-select interests */}
              <fieldset className="mt-7">
                <legend className={labelCls}>What are you interested in?</legend>
                <div className="flex flex-wrap gap-2.5">
                  {contact.interests.map((opt) => {
                    const active = interests.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(opt)}
                        aria-pressed={active}
                        className={cn(
                          "inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 text-[13px] whitespace-nowrap transition-all duration-300",
                          active
                            ? "border-blue/45 bg-blue-soft text-blue-deep"
                            : "border-line text-ink-dim hover:border-line-strong hover:text-ink"
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="interests" value={interests.join(", ")} />
              </fieldset>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="situation" className={labelCls}>
                    Current situation
                  </label>
                  <select id="situation" name="situation" className={cn(field, "cursor-pointer")}>
                    {contact.situations.map((s) => (
                      <option key={s} value={s} className="bg-paper">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelCls}>
                    Rough budget range{" "}
                    <span className="text-ink-faint">(optional)</span>
                  </label>
                  <select id="budget" name="budget" className={cn(field, "cursor-pointer")}>
                    {contact.budgets.map((b) => (
                      <option key={b} value={b} className="bg-paper">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-7">
                <label htmlFor="problem" className={labelCls}>
                  What&apos;s the main problem you&apos;re trying to solve?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={4}
                  className={cn(field, "resize-y")}
                  placeholder="Tell us what's actually slowing things down."
                />
              </div>

              {/* Error sits next to the fields, not only at the top */}
              {error && (
                <p role="alert" className="mt-5 text-[13px] text-red-400">
                  {error}
                </p>
              )}

              <div className="mt-9">
                <Button type="submit" magnetic={false} className="w-full sm:w-auto">
                  {contact.submitLabel}
                </Button>
              </div>

              <p className="mt-5 text-[10px] leading-relaxed tracking-[0.1em] text-ink-faint uppercase">
                Demo only — form is not connected to a backend yet
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
