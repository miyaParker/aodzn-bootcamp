import Image from "next/image";
import Reveal from "./Reveal";
import { StarIcon } from "./icons";
import Pill from "./Pill";
import { IMAGES } from "../lib/images";

const TESTIMONIALS = [
  {
    avatar: IMAGES.avatarDavid,
    name: "David A.",
    role: "Sales Executive turned UX Designer",
    quote:
      "Handling objections in client meetings gave me an edge — turns out those skills transfer straight into design critiques. This bootcamp made the switch feel less like a leap of faith.",
  },
  {
    avatar: IMAGES.avatarEmily,
    name: "Emily C.",
    role: "Freelance Graphic Designer",
    quote:
      "I struggled to communicate my ideas to clients without slides in front of me. Now I can walk anyone through my process, personally and convincingly, without leaning on a deck.",
  },
  {
    avatar: IMAGES.avatarAyesha,
    name: "Ayesha K.",
    role: "University Student",
    quote:
      "Job interviews used to terrify me. After my mock critiques with the cohort, I walked into a portfolio review confident, calm and ready for whatever they asked.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal stagger={0.12}>
          <Pill>Trusted by 9+ happy students</Pill>
          <h2 className="mx-auto mt-5 max-w-2xl text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            Don&apos;t Just Take My Word for It
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl font-normal leading-relaxed text-ink/60">
            Hear from students who&apos;ve overcome tutorial paralysis and
            mastered practical, portfolio-ready product design.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
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
                  <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-ink">{t.name}</p>
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
