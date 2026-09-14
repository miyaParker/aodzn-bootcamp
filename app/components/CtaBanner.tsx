"use client";

import { useRegistrationModal } from "./RegistrationModalContext";
import Reveal from "./Reveal";
import type { CtaBannerContent } from "@/sanity/lib/types";

export default function CtaBanner({ content }: { content: CtaBannerContent }) {
  const { open } = useRegistrationModal();

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-8 hidden grid-cols-3 gap-2 sm:right-16 sm:grid"
      >
        <span className="h-6 w-6 rounded bg-accent-yellow" />
        <span className="h-6 w-6 rounded bg-accent-green" />
        <span className="h-6 w-6 rounded bg-primary" />
        <span className="h-6 w-6 rounded bg-primary" />
        <span className="h-6 w-6 rounded bg-accent-yellow" />
        <span className="h-6 w-6 rounded bg-accent-green" />
      </div>

      <Reveal stagger={0.12} className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-5xl font-medium tracking-tight sm:text-6xl">
          {content.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/60">
          {content.subheading}
        </p>
        <button
          type="button"
          onClick={open}
          className="cursor-pointer mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-lg font-medium text-white transition-colors hover:bg-primary-dark"
        >
          {content.ctaLabel}
        </button>
        <p className="mt-4 text-base text-white/40">
          {content.guaranteeText}
        </p>
      </Reveal>
    </section>
  );
}
