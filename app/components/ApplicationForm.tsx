"use client";

import { useState, type FormEvent } from "react";
import type { PricingContent } from "@/sanity/lib/types";

const inputClass =
  "mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass = "text-sm font-medium text-ink/80";

export default function ApplicationForm({ pricing }: { pricing: PricingContent }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      paymentPlan: formData.get("paymentPlan"),
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-medium text-ink">You&apos;re almost in!</h3>
        <p className="mt-3 text-ink/55">
          Thanks for enrolling in the AODZN Product Design Bootcamp. We&apos;ll
          email you shortly with payment confirmation and Cohort 01 dates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <label className="block">
        <span className={labelClass}>Full name</span>
        <input required name="fullName" type="text" className={inputClass} />
      </label>

      <label className="block">
        <span className={labelClass}>Email address</span>
        <input required name="email" type="email" className={inputClass} />
      </label>

      <fieldset>
        <legend className={labelClass}>How would you like to pay?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-3 text-sm text-ink/80">
            <input type="radio" name="paymentPlan" value="full" defaultChecked required className="accent-primary" />
            Pay in full — ${pricing.price}
          </label>
          <label className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-3 text-sm text-ink/80">
            <input type="radio" name="paymentPlan" value="instalments" required className="accent-primary" />
            {pricing.instalmentCount} instalments of ${pricing.instalmentAmount}
          </label>
        </div>
      </fieldset>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Confirm Enrollment"}
      </button>

      <p className="text-center text-xs text-ink/40">
        By enrolling, you agree to our{" "}
        <a href="/terms-of-service" className="underline hover:text-ink/70">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="underline hover:text-ink/70">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
