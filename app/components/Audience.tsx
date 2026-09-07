import Reveal from "./Reveal";
import { CheckIcon } from "./icons";
import Pill from "./Pill";

const FIT = [
  "You want to move beyond tutorials and design something real",
  "You want to work with a team and split real responsibilities",
  "You want honest, structured feedback on your work",
  "You struggle to explain the thinking behind your design decisions",
  "You want portfolio-ready case studies, not more scattered practice files",
  "You're a junior designer who wants more hands-on experience",
];

export default function Audience() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal stagger={0.12}>
          <Pill>Why this bootcamp works</Pill>
          <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Is This Bootcamp the Right Fit for You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-ink/60">
            If your answer is yes to any of these...
          </p>
        </Reveal>

        <Reveal stagger={0.06} className="mt-12 grid gap-x-10 gap-y-5 text-left sm:grid-cols-2">
          {FIT.map((item) => (
            <div key={item} className="flex items-start gap-3 text-ink/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-green text-white">
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
