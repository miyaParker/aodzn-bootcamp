import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import Transform from "./components/Transform";
import Curriculum from "./components/Curriculum";
import Audience from "./components/Audience";
import HowItWorks from "./components/HowItWorks";
import PricingBanner from "./components/PricingBanner";
import Testimonials from "./components/Testimonials";
import Mentor from "./components/Mentor";
import FAQ from "./components/FAQ";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Transform />
        <Curriculum />
        <Audience />
        {/* <HowItWorks /> */}
        <PricingBanner />
        <Testimonials />
        <Mentor />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
