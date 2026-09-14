import Image from "next/image";
import Reveal from "./Reveal";
import Pill from "./Pill";

export default function Mentor() {
  return (
    <section id="mentor" className="bg-primary-dark py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10">
        <Reveal className="relative aspect-[4/5] w-full max-w-sm" y={16}>
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-white/10">
            <Image
              src="/abdul.jpeg"
              alt="Abdulazees Olayinka"
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
          <Pill tone="dark">Meet your instructor</Pill>
          <h2 className="mt-5 text-5xl font-medium tracking-tight sm:text-6xl">
            Abdulazees Olayinka
          </h2>
          <p className="mt-4 max-w-xl text-xl font-normal leading-relaxed text-white/60">
            Abdulazees has spent more than a decade working across brand and
            digital product design, helping teams turn early ideas and
            complicated problems into clear, usable experiences. He founded
            AODZN to give aspiring designers the practical guidance, honest
            feedback and collaborative experience that&apos;s hard to get from
            isolated tutorials.
          </p>
          <p className="mt-6 font-quote text-2xl italic text-white/90">
            &ldquo;Good design isn&apos;t about being perfect. It&apos;s about
            being prepared. My goal is to help you find your process and own
            the room.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
