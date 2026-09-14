// One-off script that seeds the `homePage` and `siteSettings` singletons in
// Sanity with the copy that used to be hardcoded in the Next.js components.
// Run with: node --env-file=.env.local scripts/seed.mjs
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET or SANITY_API_TOKEN."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-09-14",
  useCdn: false,
});

const homePage = {
  _id: "bootcampHomePage",
  _type: "bootcampHomePage",
  hero: {
    pillText: "92% of graduates ship a portfolio-ready case study",
    heading: "Master Product Design in Just 6 Weeks!",
    subheading:
      "Say goodbye to guesswork. Learn how to research, design and present real product solutions with a live cohort and a working mentor.",
    primaryCtaLabel: "Enroll in the Bootcamp",
    secondaryCtaLabel: "See the Curriculum",
    joinCohortText: "Join a growing cohort of designers",
    studentInitials: ["JM", "KA", "TR", "SO"],
    weekCardLabel: "This week",
    weekChecklist: ["User research", "Wireframing", "Prototype testing"],
    progressCardLabel: "Your progress",
    progressPercent: 67,
    progressWeekLabel: "Week 4 of 6",
    testimonialCard: {
      initials: "JM",
      name: "Jide M.",
      cohortLabel: "Cohort 01",
      quote:
        "Before this bootcamp I had zero design vocabulary. Now I can defend every decision I make.",
    },
  },
  transform: {
    pillText: "Why it matters",
    heading: "How This Bootcamp Can Transform You",
    subheading:
      "Break free from tutorial paralysis, build real portfolio work, and leave with practical skills you can defend in any interview.",
    items: [
      {
        _key: "understand-real-problems",
        icon: "compass",
        title: "Understand Real Problems",
        body: "Learn how to frame a messy brief into a problem worth solving, instead of jumping straight to screens.",
      },
      {
        _key: "conduct-user-research",
        icon: "research",
        title: "Conduct User Research",
        body: "Run lightweight interviews and competitor reviews to find insights that actually shape a direction.",
      },
      {
        _key: "design-with-confidence",
        icon: "layout",
        title: "Design With Confidence",
        body: "Move from wireframes to polished interfaces using consistent, defensible design decisions.",
      },
      {
        _key: "prototype-without-guesswork",
        icon: "prototype",
        title: "Prototype Without Guesswork",
        body: "Build interactive prototypes in Figma and validate them with real people before you commit.",
      },
      {
        _key: "master-feedback-iteration",
        icon: "feedback",
        title: "Master Feedback & Iteration",
        body: "Take critique without flinching, and turn it into concrete improvements the next day.",
      },
      {
        _key: "present-defend-your-work",
        icon: "present",
        title: "Present & Defend Your Work",
        body: "Turn a case study into a clear story, and answer tough questions about your process with ease.",
      },
    ],
  },
  curriculum: {
    pillText: "Curriculum breakdown",
    heading: "Your 6-Week Guide to Product Design",
    subheading:
      "Step-by-step guidance from your first wireframe to your final presentation, with structured lessons and hands-on projects.",
    weeks: [
      {
        _key: "week-1",
        title: "Understanding Product Design",
        lessons: 6,
        body: "What product designers do, how teams work and how to approach an unfamiliar problem.",
      },
      {
        _key: "week-2",
        title: "Research and Problem Discovery",
        lessons: 8,
        body: "Understanding users, conducting basic research and identifying the real problem.",
      },
      {
        _key: "week-3",
        title: "Insights, Direction and Information Architecture",
        lessons: 12,
        body: "Organising findings, defining user needs, choosing a design direction, and mapping journeys and content structure.",
      },
      {
        _key: "week-4",
        title: "Wireframing and Interaction Design",
        lessons: 9,
        body: "Turning ideas into screens, flows and usable early solutions.",
      },
      {
        _key: "week-5",
        title: "Interface Design and Design Systems",
        lessons: 10,
        body: "Typography, colour, spacing, components, visual hierarchy and consistency.",
      },
      {
        _key: "week-6",
        title: "Prototyping, Testing and Final Presentation",
        lessons: 10,
        body: "Creating interactive prototypes, gathering feedback, iterating, and presenting the final project at Demo Day.",
      },
    ],
    bonusTitle: "Bonus Resources",
    bonusDescription: "Figma UI kit, portfolio templates and resume review",
  },
  audience: {
    pillText: "Why this bootcamp works",
    heading: "Is This Bootcamp the Right Fit for You?",
    subheading: "If your answer is yes to any of these...",
    items: [
      "You want to move beyond tutorials and design something real",
      "You want to work with a team and split real responsibilities",
      "You want honest, structured feedback on your work",
      "You struggle to explain the thinking behind your design decisions",
      "You want portfolio-ready case studies, not more scattered practice files",
      "You're a junior designer who wants more hands-on experience",
    ],
  },
  howItWorks: {
    heading: "Your Roadmap to Product Design Success",
    steps: [
      {
        _key: "learn-at-your-own-pace",
        title: "Learn at Your Own Pace",
        body: "Access to 30+ on-demand video lessons, structured to walk you through every stage of the design process.",
      },
      {
        _key: "apply-what-you-learn-daily",
        title: "Apply What You Learn Daily",
        body: "Turn theory into muscle memory through daily design exercises and challenges that build real confidence.",
      },
      {
        _key: "practice-with-live-critiques",
        title: "Practice with Live Critiques",
        body: "Join weekly live sessions with the instructor for real-time feedback and practice presenting your work.",
      },
    ],
  },
  pricing: {
    originalPrice: 600,
    price: 450,
    discountPercent: 25,
    instalmentCount: 3,
    instalmentAmount: 150,
    perks: [
      "6 weeks of live, cohort-based teaching",
      "Certificate of completion",
      "Weekly design critiques & feedback",
      "Downloadable templates & resources",
      "Continued access to the alumni community",
      "Live mentor office hours",
    ],
    primaryCtaLabel: "Enroll in the Bootcamp",
  },
  pricingBanner: {
    heading: "Transform Your Design Skills in Just 6 Weeks",
    subheading:
      "From scattered Figma files to confident, portfolio-ready case studies. Learn the full product design process, hands-on.",
  },
  testimonials: {
    pillText: "Trusted by 9+ happy students",
    heading: "Don't Just Take My Word for It",
    subheading:
      "Hear from students who've overcome tutorial paralysis and mastered practical, portfolio-ready product design.",
    items: [
      {
        _key: "david",
        avatar: "avatarDavid",
        name: "David A.",
        role: "Sales Executive turned UX Designer",
        quote:
          "Handling objections in client meetings gave me an edge — turns out those skills transfer straight into design critiques. This bootcamp made the switch feel less like a leap of faith.",
      },
      {
        _key: "emily",
        avatar: "avatarEmily",
        name: "Emily C.",
        role: "Freelance Graphic Designer",
        quote:
          "I struggled to communicate my ideas to clients without slides in front of me. Now I can walk anyone through my process, personally and convincingly, without leaning on a deck.",
      },
      {
        _key: "ayesha",
        avatar: "avatarAyesha",
        name: "Ayesha K.",
        role: "University Student",
        quote:
          "Job interviews used to terrify me. After my mock critiques with the cohort, I walked into a portfolio review confident, calm and ready for whatever they asked.",
      },
    ],
  },
  mentor: {
    pillText: "Meet your instructor",
    name: "Abdulazees Olayinka",
    bio: "Abdulazees has spent more than a decade working across brand and digital product design, helping teams turn early ideas and complicated problems into clear, usable experiences. He founded AODZN to give aspiring designers the practical guidance, honest feedback and collaborative experience that's hard to get from isolated tutorials.",
    quote:
      "Good design isn't about being perfect. It's about being prepared. My goal is to help you find your process and own the room.",
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        _key: "who-is-this-for",
        question: "Who is this bootcamp for?",
        answer:
          "This bootcamp is for anyone looking to break into product design, whether you're a beginner, a self-taught designer, or a junior designer wanting more practical, structured experience.",
      },
      {
        _key: "how-delivered",
        question: "How are the lessons delivered?",
        answer:
          "Fully online. Live sessions run through video calls, with project work happening in Figma and your team's shared channels between sessions.",
      },
      {
        _key: "prior-experience",
        question: "Do I need prior experience in design?",
        answer:
          "No. The programme is built for beginner to junior-level designers. What matters more is your willingness to practise, collaborate and take feedback.",
      },
      {
        _key: "certificate",
        question: "Will I get a certificate?",
        answer:
          "Yes, participants who complete the programme receive a certificate of completion. The real outcome, however, is the portfolio case study you'll walk away with.",
      },
      {
        _key: "refund",
        question: "Can I get a refund if the bootcamp isn't for me?",
        answer:
          "Yes. If you're not satisfied within the first week of live sessions, we offer a full refund — no risk, only reward.",
      },
      {
        _key: "equipment",
        question: "What equipment do I need?",
        answer: "A laptop, a stable internet connection, and a free Figma account.",
      },
    ],
  },
  ctaBanner: {
    heading: "Join the 6-Week Product Design Bootcamp today!",
    subheading:
      "Seats are limited! Secure your spot today and start building portfolio-ready design work.",
    ctaLabel: "Enroll in the Bootcamp",
    guaranteeText: "7-Day Money Back Guarantee · No risk, only reward",
  },
};

const siteSettings = {
  _id: "bootcampSiteSettings",
  _type: "bootcampSiteSettings",
  navLinks: [
    { _key: "curriculum", label: "Curriculum", href: "#curriculum" },
    { _key: "pricing", label: "Pricing", href: "#pricing" },
    { _key: "testimonials", label: "Testimonials", href: "#testimonials" },
    { _key: "mentor", label: "Mentor", href: "#mentor" },
    { _key: "faqs", label: "FAQ", href: "#faqs" },
  ],
  navCtaLabel: "Enroll now",
  footerCopyrightName: "AODZN",
  footerLegalLinks: [
    { _key: "terms", label: "Terms & Conditions", href: "/terms-of-service" },
    { _key: "privacy", label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const transaction = client.transaction();
transaction.createOrReplace(homePage);
transaction.createOrReplace(siteSettings);

const result = await transaction.commit();
console.log(`Seeded ${result.results.length} documents:`);
for (const r of result.results) {
  console.log(`  - ${r.id} (${r.operation})`);
}
