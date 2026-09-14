import Image from "next/image";
import { IMAGES } from "../lib/images";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Learn at Your Own Pace",
    body: "Access to 30+ on-demand video lessons, structured to walk you through every stage of the design process.",
  },
  {
    title: "Apply What You Learn Daily",
    body: "Turn theory into muscle memory through daily design exercises and challenges that build real confidence.",
  },
  {
    title: "Practice with Live Critiques",
    body: "Join weekly live sessions with the instructor for real-time feedback and practice presenting your work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl" y={16}>
          <Image
            src={IMAGES.teamMeeting}
            alt="A small team meeting around a table reviewing design work"
            fill
            sizes="(min-width: 1024px) 450px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-5xl font-medium tracking-tight text-ink sm:text-6xl">
              Your Roadmap to Product Design Success
            </h2>
          </Reveal>

          <Reveal stagger={0.12} className="mt-10 space-y-8">
            {STEPS.map((step) => (
              <div key={step.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-green text-base font-semibold text-white">
                  ✓
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-lg leading-relaxed text-ink/55">{step.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
