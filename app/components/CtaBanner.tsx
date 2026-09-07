"use client";

import { useRegistrationModal } from "./RegistrationModalContext";
import Reveal from "./Reveal";

export default function CtaBanner() {
  const { open } = useRegistrationModal();

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-8 grid grid-cols-3 gap-2 sm:right-16"
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
          Join the 6-Week Product Design
          Bootcamp today!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/60">
          Seats are limited! Secure your spot today and start building
          portfolio-ready design work.
        </p>
        <button
          type="button"
          onClick={open}
          className="cursor-pointer mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-lg font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Enroll in the Bootcamp
        </button>
        <p className="mt-4 text-base text-white/40">
          7-Day Money Back Guarantee · No risk, only reward
        </p>
      </Reveal>
    </section>
  );
}
