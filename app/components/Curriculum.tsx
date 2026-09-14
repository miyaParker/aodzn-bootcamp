"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import PricingCard from "./PricingCard";
import Reveal from "./Reveal";
import { PlusIcon } from "./icons";
import Pill from "./Pill";

const WEEKS = [
  {
    title: "Understanding Product Design",
    lessons: 6,
    body: "What product designers do, how teams work and how to approach an unfamiliar problem.",
  },
  {
    title: "Research and Problem Discovery",
    lessons: 8,
    body: "Understanding users, conducting basic research and identifying the real problem.",
  },
  {
    title: "Insights, Direction and Information Architecture",
    lessons: 12,
    body: "Organising findings, defining user needs, choosing a design direction, and mapping journeys and content structure.",
  },
  {
    title: "Wireframing and Interaction Design",
    lessons: 9,
    body: "Turning ideas into screens, flows and usable early solutions.",
  },
  {
    title: "Interface Design and Design Systems",
    lessons: 10,
    body: "Typography, colour, spacing, components, visual hierarchy and consistency.",
  },
  {
    title: "Prototyping, Testing and Final Presentation",
    lessons: 10,
    body: "Creating interactive prototypes, gathering feedback, iterating, and presenting the final project at Demo Day.",
  },
];

function WeekItem({
  week,
  index,
  isOpen,
  onToggle,
}: {
  week: (typeof WEEKS)[number];
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

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="curriculum"
      className="bg-primary  bg-cover bg-center bg-no-repeat py-20 text-white lg:py-28"
      style={{ backgroundImage: "url(/bg-10.jpg)" }}
    >
      <Reveal stagger={0.12} className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Pill tone="dark">Curriculum breakdown</Pill>
        <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-white sm:text-6xl">
          Your 6-Week Guide to Product Design
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/80">
          Step-by-step guidance from your first wireframe to your final
          presentation, with structured lessons and hands-on projects.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch lg:px-10">
        <Reveal stagger={0.06} className="space-y-3">
          {WEEKS.map((week, i) => (
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
              <span className="block text-xl font-medium text-ink">Bonus Resources</span>
              <span className="mt-1 block text-lg text-ink/45">
                Figma UI kit, portfolio templates and resume review
              </span>
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-ink/60">
              <PlusIcon />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="h-full">
          <PricingCard />
        </Reveal>
      </div>
    </section>
  );
}
