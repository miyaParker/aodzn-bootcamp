"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass = "text-sm font-medium text-ink/80";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
            Pay in full — $450
          </label>
          <label className="flex items-center gap-2 rounded-lg border border-black/10 px-4 py-3 text-sm text-ink/80">
            <input type="radio" name="paymentPlan" value="instalments" required className="accent-primary" />
            3 instalments of $150
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Confirm Enrollment
      </button>
    </form>
  );
}
