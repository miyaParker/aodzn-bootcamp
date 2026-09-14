import SiteNav from "../components/SiteNav";
import Hero from "../components/Hero";
import Transform from "../components/Transform";
import Curriculum from "../components/Curriculum";
import Audience from "../components/Audience";
import PricingBanner from "../components/PricingBanner";
import Testimonials from "../components/Testimonials";
import Mentor from "../components/Mentor";
import FAQ from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import { getHomePageData, getSiteSettingsData } from "@/sanity/lib/data";

export default async function Home() {
  const [homePage, siteSettings] = await Promise.all([
    getHomePageData(),
    getSiteSettingsData(),
  ]);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteNav
        links={siteSettings.navLinks}
        ctaLabel={siteSettings.navCtaLabel}
      />
      <main className="flex-1">
        <Hero content={homePage.hero} />
        <Transform content={homePage.transform} />
        <Curriculum content={homePage.curriculum} pricing={homePage.pricing} />
        <Audience content={homePage.audience} />
        {/* <HowItWorks content={homePage.howItWorks} /> */}
        <PricingBanner content={homePage.pricingBanner} pricing={homePage.pricing} />
        <Testimonials content={homePage.testimonials} />
        <Mentor content={homePage.mentor} />
        <FAQ content={homePage.faq} />
        <CtaBanner content={homePage.ctaBanner} />
      </main>
      <Footer
        navLinks={siteSettings.navLinks}
        legalLinks={siteSettings.footerLegalLinks}
        copyrightName={siteSettings.footerCopyrightName}
      />
    </div>
  );
}
