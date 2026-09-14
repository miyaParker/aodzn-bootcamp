"use client";

import { useRegistrationModal } from "./RegistrationModalContext";
import { CheckIcon } from "./icons";
import type { PricingContent } from "@/sanity/lib/types";

export default function PricingCard({
  pricing,
  variant = "card",
}: {
  pricing: PricingContent;
  variant?: "card" | "banner";
}) {
  const { open } = useRegistrationModal();
  const isCard = variant === "card";

  return (
    <div
      className={
        isCard
          ? "flex h-full flex-col rounded-3xl bg-primary-dark p-8 text-white shadow-xl lg:p-10"
          : "text-white"
      }
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent-gold px-6 py-3 text-2xl font-medium text-ink">
          {pricing.discountPercent}% off
        </span>
        <span className="text-xl text-white/40 line-through">
          ${pricing.originalPrice}
        </span>
      </div>

      <p className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
        ${pricing.price}
      </p>

      <ul className="mt-8 space-y-3.5">
        {pricing.perks.map((perk) => (
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
          {pricing.primaryCtaLabel}
        </button>
        <button
          type="button"
          onClick={open}
          className="cursor-pointer w-full rounded-full border border-white/25 px-6 py-3.5 text-lg font-medium text-white transition-colors hover:border-white/50"
        >
          Pay in {pricing.instalmentCount} instalments of ${pricing.instalmentAmount}
        </button>
      </div>
    </div>
  );
}
