import Reveal from "./Reveal";
import Pill from "./Pill";

const ITEMS = [
  {
    title: "Understand Real Problems",
    body: "Learn how to frame a messy brief into a problem worth solving, instead of jumping straight to screens.",
    icon: (
      <path d="M11 4a7 7 0 1 0 4.9 12l4.1 4M11 4a7 7 0 0 1 7 7M11 4v3M4 11h3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Conduct User Research",
    body: "Run lightweight interviews and competitor reviews to find insights that actually shape a direction.",
    icon: (
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c.6-3.3 2.6-5.5 5-5.5s4.4 2.2 5 5.5M13 20c.6-3.3 2.6-5.5 5-5.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Design With Confidence",
    body: "Move from wireframes to polished interfaces using consistent, defensible design decisions.",
    icon: (
      <path d="M4 5h16v6H4zM4 15h7v4H4zM13 15h7v4h-7z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Prototype Without Guesswork",
    body: "Build interactive prototypes in Figma and validate them with real people before you commit.",
    icon: (
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Master Feedback & Iteration",
    body: "Take critique without flinching, and turn it into concrete improvements the next day.",
    icon: (
      <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18.5 4v3h-3M5.5 20v-3h3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Present & Defend Your Work",
    body: "Turn a case study into a clear story, and answer tough questions about your process with ease.",
    icon: (
      <path d="M4 5h16v10H4zM9 19h6M12 15v4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Transform() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <Reveal stagger={0.12}>
          <Pill>Why it matters</Pill>
          <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            How This Bootcamp Can Transform You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-ink/60">
            Break free from tutorial paralysis, build real portfolio work, and
            leave with practical skills you can defend in any interview.
          </p>
        </Reveal>

        <Reveal stagger={0.08} className="mt-14 grid gap-x-10 gap-y-10 text-left sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {item.icon}
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
