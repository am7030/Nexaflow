import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { PainPoints } from "@/components/site/pain-points";
import { HowItWorks } from "@/components/site/how-it-works";
import { Features } from "@/components/site/features";
import { Pricing } from "@/components/site/pricing";
import { Verticals } from "@/components/site/verticals";
import { FAQ } from "@/components/site/faq";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing />
        <Verticals />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
