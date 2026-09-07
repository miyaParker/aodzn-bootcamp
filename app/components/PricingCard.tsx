"use client";

import { useRegistrationModal } from "./RegistrationModalContext";
import { CheckIcon } from "./icons";

export const PRICING = {
  originalPrice: 600,
  price: 450,
  discountPercent: 25,
  instalmentCount: 3,
  instalmentAmount: 150,
};

const PERKS = [
  "6 weeks of live, cohort-based teaching",
  "Certificate of completion",
  "Weekly design critiques & feedback",
  "Downloadable templates & resources",
  "Continued access to the alumni community",
  "Live mentor office hours",
];

export default function PricingCard({ variant = "card" }: { variant?: "card" | "banner" }) {
  const { open } = useRegistrationModal();
  const isCard = variant === "card";

  return (
    <div
      className={
        isCard
          ? "flex h-full flex-col rounded-3xl bg-ink p-8 text-white shadow-xl lg:p-10"
          : "text-white"
      }
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent-green px-6 py-3 text-2xl font-medium text-ink">
          {PRICING.discountPercent}% off
        </span>
        <span className="text-xl text-white/40 line-through">
          ${PRICING.originalPrice}
        </span>
      </div>

      <p className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
        ${PRICING.price}
      </p>

      <ul className="mt-8 space-y-3.5">
        {PERKS.map((perk) => (
          <li key={perk} className="flex items-start gap-3 text-lg text-white/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
              <CheckIcon />
            </span>
            {perk}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-8">
        <button
          type="button"
          onClick={open}
          className="cursor-pointer w-full rounded-full bg-primary px-6 py-3.5 text-lg font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Enroll in the Bootcamp
        </button>
        <button
          type="button"
          onClick={open}
          className="cursor-pointer w-full rounded-full border border-white/25 px-6 py-3.5 text-lg font-medium text-white transition-colors hover:border-white/50"
        >
          Pay in {PRICING.instalmentCount} instalments of ${PRICING.instalmentAmount}
        </button>
      </div>
    </div>
  );
}
