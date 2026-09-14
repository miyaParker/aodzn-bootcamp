import Reveal from "./Reveal";
import Pill from "./Pill";
import type { TransformContent } from "@/sanity/lib/types";

const ICON_PATHS: Record<string, string> = {
  compass: "M11 4a7 7 0 1 0 4.9 12l4.1 4M11 4a7 7 0 0 1 7 7M11 4v3M4 11h3",
  research:
    "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c.6-3.3 2.6-5.5 5-5.5s4.4 2.2 5 5.5M13 20c.6-3.3 2.6-5.5 5-5.5",
  layout: "M4 5h16v6H4zM4 15h7v4H4zM13 15h7v4h-7z",
  prototype: "M13 3 4 14h6l-1 7 9-11h-6l1-7Z",
  feedback: "M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18.5 4v3h-3M5.5 20v-3h3",
  present: "M4 5h16v10H4zM9 19h6M12 15v4",
};

export default function Transform({ content }: { content: TransformContent }) {
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

        <Reveal stagger={0.08} className="mt-14 grid gap-x-10 gap-y-10 text-left sm:grid-cols-2">
          {content.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d={ICON_PATHS[item.icon]} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-1.5 text-base font-normal leading-relaxed text-ink/55">{item.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
