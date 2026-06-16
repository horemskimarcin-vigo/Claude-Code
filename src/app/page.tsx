import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Programs } from "@/components/site/Programs";
import { Approach } from "@/components/site/Approach";
import { Outcomes } from "@/components/site/Outcomes";
import { Trainers } from "@/components/site/Trainers";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <TrustBar />
        <Programs />
        <Approach />
        <Trainers />
        <Outcomes />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
