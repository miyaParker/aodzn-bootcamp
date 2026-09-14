"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRegistrationModal } from "./RegistrationModalContext";
import type { LinkItem } from "@/sanity/lib/types";

export default function SiteNav({
  links,
  ctaLabel,
}: {
  links: LinkItem[];
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const { open: openRegistration } = useRegistrationModal();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="AODZN"
            width={138}
            height={44}
            className="h-7 w-auto brightness-0"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/60 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openRegistration}
          className="cursor-pointer hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark lg:inline-flex"
        >
          {ctaLabel}
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-ink/70">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openRegistration();
              }}
              className="cursor-pointer mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              {ctaLabel}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
