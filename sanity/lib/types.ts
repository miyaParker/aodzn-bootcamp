export type LinkItem = {
  label: string;
  href: string;
};

export type TransformItem = {
  icon: string;
  title: string;
  body: string;
};

export type WeekItem = {
  title: string;
  lessons: number;
  body: string;
};

export type HowItWorksStep = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TestimonialItem = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
};

export type HeroContent = {
  pillText: string;
  heading: string;
  subheading: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  joinCohortText: string;
  studentInitials: string[];
  weekCardLabel: string;
  weekChecklist: string[];
  progressCardLabel: string;
  progressPercent: number;
  progressWeekLabel: string;
  testimonialCard: {
    initials: string;
    name: string;
    cohortLabel: string;
    quote: string;
  };
};

export type TransformContent = {
  pillText: string;
  heading: string;
  subheading: string;
  items: TransformItem[];
};

export type CurriculumContent = {
  pillText: string;
  heading: string;
  subheading: string;
  weeks: WeekItem[];
  bonusTitle: string;
  bonusDescription: string;
};

export type AudienceContent = {
  pillText: string;
  heading: string;
  subheading: string;
  items: string[];
};

export type HowItWorksContent = {
  heading: string;
  steps: HowItWorksStep[];
};

export type PricingContent = {
  originalPrice: number;
  price: number;
  discountPercent: number;
  instalmentCount: number;
  instalmentAmount: number;
  perks: string[];
  primaryCtaLabel: string;
};

export type PricingBannerContent = {
  heading: string;
  subheading: string;
};

export type TestimonialsContent = {
  pillText: string;
  heading: string;
  subheading: string;
  items: TestimonialItem[];
};

export type MentorContent = {
  pillText: string;
  name: string;
  bio: string;
  quote: string;
};

export type FaqContent = {
  heading: string;
  items: FaqItem[];
};

export type CtaBannerContent = {
  heading: string;
  subheading: string;
  ctaLabel: string;
  guaranteeText: string;
};

export type HomePageData = {
  hero: HeroContent;
  transform: TransformContent;
  curriculum: CurriculumContent;
  audience: AudienceContent;
  howItWorks: HowItWorksContent;
  pricing: PricingContent;
  pricingBanner: PricingBannerContent;
  testimonials: TestimonialsContent;
  mentor: MentorContent;
  faq: FaqContent;
  ctaBanner: CtaBannerContent;
};

export type SiteSettingsData = {
  navLinks: LinkItem[];
  navCtaLabel: string;
  footerCopyrightName: string;
  footerLegalLinks: LinkItem[];
};
