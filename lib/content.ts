/**
 * BOZEZ — single source of truth for all site copy.
 *
 * VOICE (ported from the Axelo build):
 *   • Short declarative fragments. Cut every word that isn't load-bearing.
 *   • Say the outcome, not the abstraction. "Get Booked", not "unlock potential".
 *   • Capabilities are bullets, never paragraphs.
 *   • One idea per line.
 *
 * HARD CONSTRAINTS (doc §2 Credibility Strategy):
 *   • No pricing figures anywhere in the UI.
 *   • No client counts, no "trusted by N businesses", no fabricated logos.
 *   • No testimonial quotes — show the work, never quoted praise.
 *   • No mention of team size, in either direction.
 *   • Portfolio items carry a `named` flag; unnamed clients stay anonymised.
 */

export const brand = {
  name: "Bozez",
  tagline: "Your foundation. Their obstacle, removed.",
  meaning:
    "Named for a foundation stone — the base you build on, and the obstacle we clear.",
} as const;

/* ---------------------------------------------------------------- HERO */

export const hero = {
  eyebrow: "01 · BOZEZ",
  /** Three beats, three concrete outcomes a small business actually wants. */
  headlineLines: ["Get Online.", "Get Noticed.", "Get Booked."] as const,
  sub: "Websites, AI marketing videos, apps and bots for small business. Built around what you actually need. No agency price tag.",
  primaryCta: { label: "Get Your Free Business Audit", href: "#contact" },
  secondaryCta: { label: "Book a Free Call", href: "#contact" },
  footnote: "Custom-scoped every time. You only pay for what you need.",
} as const;

/* --------------------------------------------------------- TRUST BADGES */

export const trustBadges = [
  { label: "Fast turnaround", icon: "zap" },
  { label: "No long-term contracts", icon: "unlock" },
  { label: "Built for small business", icon: "store" },
  { label: "Revisions included", icon: "sparkles" },
] as const;

/* --------------------------------------------------------- INTRO VIDEO */

export const introVideo = {
  eyebrow: "02 · SEE IT FIRST",
  caption: "This video? We made it.",
  captionRest: "It's exactly what we'd make for you.",
  sub: "Sixty seconds, produced with the same AI process we'd use on your business. No crew. No studio. No three-week wait.",
  runtime: "0:60",
} as const;

/* ------------------------------------------------------- SECTORS MARQUEE */

export const sectors = [
  "RETAIL",
  "RESTAURANTS & CAFES",
  "SALONS & SPAS",
  "CLINICS & HEALTHCARE",
  "CONSULTANTS",
  "REAL ESTATE",
  "FITNESS & GYMS",
  "E-COMMERCE",
  "LOCAL SERVICES",
  "TRADES & CONTRACTORS",
  "STARTUPS",
  "PROFESSIONAL SERVICES",
] as const;

/* ----------------------------------------------------------- THE GAP */

export const gap = {
  eyebrow: "03 · THE GAP",
  headlineLines: ["Still stitching", "it together", "from four", "vendors?"] as const,
  sub: "A site that doesn't convert. No video presence. An app you've never had time to scope. That's the gap we close.",
  items: [
    {
      numeral: "I",
      title: "Customers can't find you",
      body: "Or they do — and what they see doesn't earn the call.",
      prop: "search",
    },
    {
      numeral: "II",
      title: "Four vendors, four invoices",
      body: "None of them talk to each other. All of them are your problem.",
      prop: "vendors",
    },
    {
      numeral: "III",
      title: "The agency quote lands like a brick",
      body: "Enterprise pricing, due before anything real exists.",
      prop: "quote",
    },
  ],
  kicker: "Here's how Bozez closes all three.",
} as const;

/* ---------------------------------------------------------- SERVICES */

export const services = [
  {
    id: "websites",
    index: "01",
    flag: "MOST REQUESTED",
    title: "Websites",
    tagline: "Look as good online as you do in person.",
    blurb:
      "A site that brings in business — whether that's trust and leads, or a store that sells while you sleep.",
    capabilities: [
      "Business sites, 5–10 pages",
      "Online stores that actually sell",
      "Mobile-first, built to convert",
      "Ongoing maintenance available",
    ],
    cta: "Get a Website Quote",
    prop: "browser",
    href: "/services/websites",
  },
  {
    id: "videos",
    index: "02",
    flag: null,
    title: "AI Marketing Videos",
    tagline: "Weeks of production, done in days.",
    blurb:
      "Scroll-stopping social content and clear explainer films — without the crew, the studio, or the agency invoice.",
    capabilities: [
      "Reels and ads, 15–60 seconds",
      "Explainer and product demo films",
      "Fully AI-made, or built from your footage",
      "Revisions until it's right",
    ],
    cta: "Get a Video Quote",
    prop: "reel",
    href: "/services/ai-marketing-videos",
  },
  {
    id: "apps",
    index: "03",
    flag: null,
    title: "Apps",
    tagline: "Built around how you work, not a template.",
    blurb:
      "Every app starts with one question: what problem is this actually solving? If there isn't one, we'll say so.",
    capabilities: [
      "Internal tools: inventory, booking, operations",
      "Customer apps: ordering, loyalty, booking",
      "iOS and Android",
      "Scoped to one real problem",
    ],
    cta: "Get an App Quote",
    prop: "app",
    href: "/services/apps",
  },
  {
    id: "bots",
    index: "04",
    flag: null,
    title: "Bots",
    tagline: "Less falls on you. More gets handled.",
    blurb:
      "The kind that actually reduces your workload — not the kind that adds another tool to manage.",
    capabilities: [
      "WhatsApp and website chatbots",
      "Bookings and FAQs answered 24/7",
      "Internal workflow automation",
      "Hands over to a human when it matters",
    ],
    cta: "Get a Bot Quote",
    prop: "chat",
    href: "/services/bots",
  },
] as const;

/* --------------------------------------------------------- WHY BOZEZ */

export const whyBozez = {
  eyebrow: "05 · WHY BOZEZ",
  headlineLines: ["Why small", "businesses", "choose us."] as const,
  items: [
    {
      index: "01",
      title: "One Team, Not Four",
      body: "One partner who knows your brand. Not four freelancers who never talk.",
    },
    {
      index: "02",
      title: "Only What You Need",
      body: "No bloated packages. We build around your business, not a template.",
    },
    {
      index: "03",
      title: "AI-Powered, Not AI-Generic",
      body: "The speed and the price of AI, without the templated look.",
    },
    {
      index: "04",
      title: "Revisions Until You're Happy",
      body: "Included, not billed as extras. Nothing is done until you say it is.",
    },
    {
      index: "05",
      title: "No Long-Term Contracts",
      body: "A one-time build fee. Optional monthly support. Nothing you're locked into.",
    },
    {
      index: "06",
      title: "Priced for Small Business",
      body: "Agencies quote like you're a Fortune 500. We price for how you actually spend.",
    },
  ],
} as const;

/* ---------------------------------------------------------- PROCESS */

export const process = {
  eyebrow: "06 · HOW WE WORK",
  headlineLines: ["From idea", "to online", "in five steps."] as const,
  steps: [
    {
      index: "01",
      title: "Discovery",
      body: "One free call. We find what's actually holding the business back.",
    },
    {
      index: "02",
      title: "Design",
      body: "We map exactly what gets built, and show you before anything is locked in.",
    },
    {
      index: "03",
      title: "Build",
      body: "Website, video, app, bot, or a mix. AI-accelerated, so it lands in days.",
    },
    {
      index: "04",
      title: "Launch",
      body: "We ship it, test it, and make sure it works in the real world.",
    },
    {
      index: "05",
      title: "Support",
      body: "Ongoing maintenance, so it keeps working long after day one.",
    },
  ],
} as const;

/* ------------------------------------------- SCOPING (replaces pricing) */
/* Doc §5: no pricing numbers anywhere — every pricing-adjacent moment
   routes to a custom quote. So this sells the process, not a number. */

export const scoping = {
  eyebrow: "07 · SCOPE & QUOTE",
  headlineLines: ["No packages.", "No padding.", "One clear number."] as const,
  sub: "We don't publish price lists, because we've never built the same thing twice. Here's how your number gets made.",
  steps: [
    {
      index: "01",
      title: "We find the constraint",
      body: "One free call. Often it isn't the thing you came in for.",
    },
    {
      index: "02",
      title: "We scope only that",
      body: "A written scope. If a service doesn't earn its place, it isn't in there.",
    },
    {
      index: "03",
      title: "You get one number",
      body: "A fixed build fee, plus optional monthly support. Nothing appears later.",
    },
  ],
  note: "Every quote is custom. The call that makes it is free.",
  cta: { label: "Get Your Free Business Audit", href: "#contact" },
} as const;

/* --------------------------------------------------- FOUNDING OFFER */

export const founding = {
  eyebrow: "08 · FOUNDING CLIENTS",
  headline: "We're taking on our first founding clients.",
  body: "Early clients get founding pricing and direct, hands-on attention — rates you won't see once we're at full capacity.",
  perks: [
    "Founding pricing, locked for the life of the project",
    "Direct line to the people doing the work",
    "Priority scheduling on your build",
    "Support rates fixed at founding level",
  ],
  urgency: "Limited founding spots.",
  cta: { label: "Claim a Founding Spot", href: "#contact" },
} as const;

/* --------------------------------------------------------- PORTFOLIO */
/* `named: false` → client did not consent to being named. Show the work,
   describe the sector generically, never invent a name or logo. */

export const portfolio = {
  eyebrow: "09 · RECENT WORK",
  headline: "A look at recent work.",
  sub: "Real projects, real results. As we take on more founding clients, this keeps growing.",
  items: [
    {
      id: "retail-video",
      named: false,
      client: "Local retail business",
      title: "AI marketing video campaign",
      description:
        "Short-form social videos built to put a physical storefront in front of people searching nearby.",
      discipline: "AI Marketing Video",
      prop: "reel",
    },
    {
      id: "services-site",
      named: false,
      client: "Service business",
      title: "Lead-generation website",
      description:
        "A fast, mobile-first site rebuilt around one goal: turn a visitor into a booked enquiry.",
      discipline: "Website",
      prop: "browser",
    },
    {
      id: "ops-app",
      named: false,
      client: "Operations-led business",
      title: "Internal operations app",
      description:
        "A mobile tool replacing a paper-and-spreadsheet workflow, built around how the team already works.",
      discipline: "App",
      prop: "app",
    },
  ],
  cta: { label: "Want results like these? Book a Free Call", href: "#contact" },
} as const;

/* --------------------------------------------------------- GUARANTEE */

export const guarantee = {
  eyebrow: "10 · OUR PROMISE",
  headlineLines: ["We don't", "call it done", "until you do."] as const,
  body: "Revisions are included, not billed as extras. No long-term contract. And you're not left alone after launch.",
  marquee: [
    "REVISIONS INCLUDED",
    "NO LONG-TERM CONTRACTS",
    "ONE ACCOUNTABLE TEAM",
    "ONGOING SUPPORT",
  ],
} as const;

/* ------------------------------------------------------------- FAQ */

export const faqs = [
  {
    q: "How much does this cost?",
    a: "It depends on what your business needs. We don't do one-size-fits-all pricing — book a free call and you'll get a clear, custom quote.",
  },
  {
    q: "Do I need all four services?",
    a: "No. Most clients start with one or two. We build what moves the needle, not what we'd like to sell you.",
  },
  {
    q: "How long does a project take?",
    a: "It varies by scope, but our AI-accelerated process is significantly faster than a traditional agency. Timelines are confirmed after the discovery call.",
  },
  {
    q: "What happens after launch?",
    a: "Optional monthly support and maintenance keeps your site, app or bot running. You're not left on your own after day one.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. A one-time build fee, with optional monthly support after. Nothing long-term.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "Revision rounds are built into every project. The goal is that you're genuinely happy — not that a deadline was met.",
  },
] as const;

/* ----------------------------------------------------------- CONTACT */

export const contact = {
  eyebrow: "12 · GET STARTED",
  headlineLines: ["Tell us what's", "slowing you", "down."] as const,
  sub: "Book a free call, or send a few details. We'll come back with next steps — including a free audit of your current site or marketing.",
  /** Placeholder — replace with the real number before launch. */
  phone: { label: "+00 000 000 0000", href: "tel:+000000000000", note: "Phone / WhatsApp" },
  submitLabel: "Send & Book My Free Audit",
  interests: ["Website", "AI Marketing Video", "App", "Bot", "Not sure yet"],
  situations: [
    "No online presence yet",
    "Have something, but it needs work",
    "Not sure",
  ],
  budgets: [
    "Just exploring",
    "Starter scope",
    "Mid-size project",
    "Full multi-service build",
    "Prefer to discuss on the call",
  ],
} as const;

/* ------------------------------------------------------------ FINAL */

export const finalCta = {
  headlineLines: ["Ready to get online,", "noticed and booked?"] as const,
  cta: { label: "Get Your Free Business Audit", href: "#contact" },
} as const;

/* ------------------------------------------------------------- NAV */

export const nav = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
] as const;

/* Footer keeps a Blog slot so it can be added later without a redesign
   (doc §5). No social links — none exist yet, so none are shown. */
export const footerNav = {
  services: services.map((s) => ({ label: s.title, href: s.href })),
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog", soon: true },
  ],
} as const;
