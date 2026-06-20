import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <HowItWorks />
        <WhoItsFor />
        <Features />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
