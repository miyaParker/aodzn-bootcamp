import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import type { PricingBannerContent, PricingContent } from "@/sanity/lib/types";

export default function PricingBanner({
  content,
  pricing,
}: {
  content: PricingBannerContent;
  pricing: PricingContent;
}) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 h-10 w-16 rotate-12 rounded-md bg-accent-yellow/80 sm:right-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-24 h-8 w-8 -rotate-6 rounded-md bg-accent-green/70 sm:right-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-6 h-6 w-6 rotate-12 rounded-md bg-primary/70 sm:right-16"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal stagger={0.12}>
          <svg viewBox="0 0 160 24" className="h-6 w-32 text-accent-yellow" fill="none">
            <path
              d="M2 18c10-16 20 16 30 0s20 16 30 0 20 16 30 0 20 16 30 0"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl">
            {content.heading}
          </h2>
          <p className="mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/60">
            {content.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <PricingCard pricing={pricing} variant="banner" />
        </Reveal>
      </div>
    </section>
  );
}
