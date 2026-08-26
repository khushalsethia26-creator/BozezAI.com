import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Sectors from "@/components/sections/Sectors";
import IntroVideo from "@/components/sections/IntroVideo";
import Gap from "@/components/sections/Gap";
import Services from "@/components/sections/Services";
import WhyBozez from "@/components/sections/WhyBozez";
import Process from "@/components/sections/Process";
import Scoping from "@/components/sections/Scoping";
import Founding from "@/components/sections/Founding";
import Portfolio from "@/components/sections/Portfolio";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Intro hook */}
        <Hero />
        <Sectors />
        <IntroVideo />

        {/* Chapter 1 — the problem */}
        <Gap />

        {/* Chapter 2 — the solution */}
        <Services />
        <WhyBozez />

        {/* Chapter 3 — the journey */}
        <Process />
        <Scoping />
        <Founding />
        <Portfolio />
        <Guarantee />

        {/* Objections + climax CTA */}
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
