import Reveal from "./Reveal";
import { CheckIcon } from "./icons";
import Pill from "./Pill";
import type { AudienceContent } from "@/sanity/lib/types";

export default function Audience({ content }: { content: AudienceContent }) {
  return (
    <section className="bg-white py-20 lg:py-28">
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

        <Reveal stagger={0.06} className="mt-14 grid gap-x-15 gap-y-5 text-left sm:grid-cols-2">
          {content.items.map((item) => (
            <div key={item} className="flex items-start gap-3 text-ink/80 text-xl max-w-md">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
