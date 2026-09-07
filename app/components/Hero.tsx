"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRegistrationModal } from "./RegistrationModalContext";
import { CheckIcon } from "./icons";
import { IMAGES } from "../lib/images";
import Pill from "./Pill";

const CHECKLIST_MOCK = ["User research", "Wireframing", "Prototype testing"];

const STUDENT_INITIALS = ["JM", "KA", "TR", "SO"];

export default function Hero() {
  const { open } = useRegistrationModal();
  const introRef = useRef<HTMLDivElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = introRef.current;
    const cardsWrap = cardsWrapRef.current;
    if (!intro) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        Array.from(intro.children),
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
      );

      const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
      if (cardsWrap && cards.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
          "-=0.3"
        );

        cards.forEach((card, i) => {
          gsap.to(card, {
            y: i % 2 === 0 ? -8 : 8,
            duration: 2.4 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1 + i * 0.2,
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="overview" className="relative overflow-hidden bg-white pb-24 pt-16 lg:pb-36 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-primary-light to-white"
      />

      <div ref={introRef} className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Pill>92% of graduates ship a portfolio-ready case study</Pill>

        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight text-ink sm:text-7xl">
          Master Product Design in Just 6 Weeks!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-ink/60">
          Say goodbye to guesswork. Learn how to research, design and present
          real product solutions with a live cohort and a working mentor.
        </p>

        <div className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={open}
            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-7 py-3.5 text-lg font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Enroll in the Bootcamp
          </button>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 px-7 py-3.5 text-lg font-medium text-ink transition-colors hover:border-black/30"
          >
            See the Curriculum
          </a>
        </div>

        <div className="mx-auto mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex -space-x-2">
            {STUDENT_INITIALS.map((initials) => (
              <span
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary-light text-[11px] font-semibold text-primary"
              >
                {initials}
              </span>
            ))}
          </div>
          <span className="text-lg text-ink/50">Join a growing cohort of designers</span>
        </div>
      </div>

      <div ref={cardsWrapRef} className="relative mx-auto mt-16 hidden max-w-5xl px-6 lg:block lg:px-10">
        <div ref={card1Ref} className="absolute -left-2 top-4 z-10 w-60 rounded-2xl border border-black/5 bg-white p-5 shadow-xl">
          <p className="text-base font-medium text-ink/40">This week</p>
          <ul className="mt-3 space-y-2.5">
            {CHECKLIST_MOCK.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-lg text-ink/80">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-green text-white">
                  <CheckIcon className="h-2.5 w-2.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={card2Ref} className="absolute -right-2 top-24 z-10 w-52 rounded-2xl border border-black/5 bg-white p-5 shadow-xl">
          <p className="text-base font-medium text-ink/40">Your progress</p>
          <div className="mt-3 flex items-center gap-3">
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef1ff" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#3457ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="97.4"
                strokeDashoffset="32.1"
              />
            </svg>
            <div>
              <p className="text-2xl font-semibold text-ink">67%</p>
              <p className="text-base text-ink/50">Week 4 of 6</p>
            </div>
          </div>
        </div>

        <div ref={card3Ref} className="absolute -bottom-6 right-16 z-10 w-64 rounded-2xl border border-black/5 bg-white p-5 shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-yellow/30 text-lg font-semibold text-ink">
              JM
            </span>
            <div>
              <p className="text-lg font-medium text-ink">Jide M.</p>
              <p className="text-base text-ink/40">Cohort 01</p>
            </div>
          </div>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">
            &ldquo;Before this bootcamp I had zero design vocabulary. Now I can
            defend every decision I make.&rdquo;
          </p>
        </div>

        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl">
          <Image
            src={IMAGES.hero}
            alt="Product designers collaborating around a table"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
