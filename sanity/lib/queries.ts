import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "bootcampHomePage"][0]{
  hero,
  transform,
  curriculum,
  audience,
  howItWorks,
  pricing,
  pricingBanner,
  testimonials,
  mentor,
  faq,
  ctaBanner
}`;

export const siteSettingsQuery = groq`*[_type == "bootcampSiteSettings"][0]{
  navLinks,
  navCtaLabel,
  footerCopyrightName,
  footerLegalLinks
}`;
