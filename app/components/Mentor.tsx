import Image from "next/image";
import Reveal from "./Reveal";
import Pill from "./Pill";
import type { MentorContent } from "@/sanity/lib/types";

export default function Mentor({ content }: { content: MentorContent }) {
  return (
    <section id="mentor" className="bg-primary-dark py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
        <Reveal className="relative aspect-[4/5] w-full max-w-sm" y={16}>
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-white/10">
            <Image
              src="/abdul.jpeg"
              alt={content.name}
              fill
              sizes="(min-width: 1024px) 24rem, 90vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -right-3 -top-3 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-accent-green text-ink"
          >
            ✦
          </span>
          <span
            aria-hidden
            className="absolute -bottom-3 -left-3 flex h-8 w-8 -rotate-12 items-center justify-center rounded-lg bg-accent-yellow text-ink"
          >
            ✦
          </span>
        </Reveal>

        <Reveal stagger={0.12}>
          <Pill tone="dark">{content.pillText}</Pill>
          <h2 className="mt-5 text-5xl font-medium tracking-tight sm:text-6xl">
            {content.name}
          </h2>
          <p className="mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/60">
            {content.bio}
          </p>
          <p className="mt-6 font-quote text-2xl italic text-white/90">
            &ldquo;{content.quote}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
