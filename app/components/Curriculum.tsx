"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import { PlusIcon } from "./icons";
import Pill from "./Pill";
import type { CurriculumContent, PricingContent, WeekItem as WeekItemData } from "@/sanity/lib/types";

function WeekItem({
  week,
  index,
  isOpen,
  onToggle,
}: {
  week: WeekItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      gsap.set(el, { height: isOpen ? "auto" : 0 });
      return;
    }

    gsap.to(el, {
      height: isOpen ? "auto" : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div className="rounded-2xl bg-white p-5 text-left text-ink">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>
          <span className="block text-xl font-medium text-ink">
            Week {index + 1}: {week.title}
          </span>
          <span className="mt-1 block text-left text-lg text-ink/45">
            {week.lessons} lessons
          </span>
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-ink/60 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <PlusIcon />
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="mt-3 text-xl leading-relaxed text-ink/60">{week.body}</p>
      </div>
    </div>
  );
}

export default function Curriculum({
  content,
  pricing,
}: {
  content: CurriculumContent;
  pricing: PricingContent;
}) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="curriculum"
      className="bg-primary  bg-cover bg-center bg-no-repeat py-20 text-white lg:py-28"
      style={{ backgroundImage: "url(/bg-10.jpg)" }}
    >
      <Reveal stagger={0.12} className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Pill tone="dark">{content.pillText}</Pill>
        <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-white sm:text-6xl">
          {content.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/80">
          {content.subheading}
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch lg:px-10">
        <Reveal stagger={0.06} className="space-y-3">
          {content.weeks.map((week, i) => (
            <WeekItem
              key={week.title}
              week={week}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}

          <div className="flex items-start justify-between gap-4 rounded-2xl bg-white p-5 text-left text-ink">
            <span>
              <span className="block text-xl font-medium text-ink">{content.bonusTitle}</span>
              <span className="mt-1 block text-lg text-ink/45">
                {content.bonusDescription}
              </span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-ink/60">
              <PlusIcon />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="h-full">
          <PricingCard pricing={pricing} />
        </Reveal>
      </div>
    </section>
  );
}
