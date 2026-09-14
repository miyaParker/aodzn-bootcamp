"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "./Reveal";
import { PlusIcon } from "./icons";
import type { FaqContent } from "@/sanity/lib/types";

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
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
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="cursor-pointer flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-medium text-ink">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-ink text-white" : "bg-surface-muted text-ink/60"
          }`}
        >
          <PlusIcon
            className={`h-3 w-3 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <p className="max-w-2xl pb-5 text-lg leading-relaxed text-ink/55">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ({ content }: { content: FaqContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            {content.heading}
          </h2>
        </Reveal>

        <Reveal stagger={0.06} className="mt-12 divide-y divide-black/5 border-y border-black/5">
          {content.items.map((item, i) => (
            <FAQItem
              key={item.question}
              q={item.question}
              a={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
