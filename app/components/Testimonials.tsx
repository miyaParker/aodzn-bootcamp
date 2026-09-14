import Image from "next/image";
import Reveal from "./Reveal";
import { StarIcon } from "./icons";
import Pill from "./Pill";
import { IMAGES } from "../lib/images";
import type { TestimonialsContent } from "@/sanity/lib/types";

const AVATARS: Record<string, string> = {
  avatarDavid: IMAGES.avatarDavid,
  avatarEmily: IMAGES.avatarEmily,
  avatarAyesha: IMAGES.avatarAyesha,
};

export default function Testimonials({ content }: { content: TestimonialsContent }) {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal stagger={0.12}>
          <Pill>{content.pillText}</Pill>
          <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-ink/60">
            {content.subheading}
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-black/5 bg-surface-muted p-6">
              <div className="flex text-accent-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="relative h-10 w-10 overflow-hidden rounded-full bg-primary-light">
                  <Image src={AVATARS[t.avatar]} alt={t.name} fill sizes="40px" className="object-cover" />
                </span>
                <div>
                  <p className="text-lg font-medium text-ink">{t.name}</p>
                  <p className="text-base text-ink/45">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
