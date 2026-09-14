import type { ReactNode } from "react";
import LegalToc from "./LegalToc";

export type LegalSection = {
  id: string;
  label: string;
};

export default function LegalPage({
  title,
  lastUpdated,
  sections,
  children,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink/50">Last updated: {lastUpdated}</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[220px_1fr]">
        <LegalToc sections={sections} />

        <div className="min-w-0 space-y-8 text-base leading-relaxed text-ink/80 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-dark">
          {children}
        </div>
      </div>
    </div>
  );
}
