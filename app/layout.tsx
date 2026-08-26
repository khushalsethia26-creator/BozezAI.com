import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

/* No domain is hardcoded — the doc notes one isn't secured yet. */
export const metadata: Metadata = {
  title: "Bozez — Websites, AI Marketing Videos, Apps & Bots for Small Business",
  description:
    "Bozez builds websites, AI marketing videos, apps and bots for small and mid-size businesses — scoped around what your business actually needs, not a one-size-fits-all package.",
  keywords: [
    "small business website",
    "AI marketing video",
    "mobile app development",
    "chatbot automation",
    "business solutions studio",
  ],
  openGraph: {
    title: "Bozez — Your foundation. Their obstacle, removed.",
    description:
      "Websites, AI marketing videos, apps and bots — built around what your business actually needs.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  /* No next/font here — --font-display/--font-body resolve straight to the
     system stack in globals.css. Mac/iOS visitors get actual SF Pro, no
     Google Font approximation involved, matching Apple's own approach. */
  return (
    <html lang="en">
      <head>
        {/* Motion writes its `initial` state into the SSR HTML as inline
            styles, so if the JS bundle never loads every revealed element
            would stay at opacity:0 and the page would render blank.
            CSS !important outranks non-important inline styles, so this
            restores a fully readable page with no JS at all. */}
        <noscript>
          <style>{`
            [data-reveal],[data-reveal] *{opacity:1!important;transform:none!important;filter:none!important}
            h1 span,h2 span,h1 span span,h2 span span{opacity:1!important;transform:none!important}
            [data-pin-spacer]{height:auto!important}
          `}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
