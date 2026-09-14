"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
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
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { open: openRegistration } = useRegistrationModal();

  function closeMenu() {
    setOpen(false);
  }

  function handleRegisterClick() {
    closeMenu();
    openRegistration();
  }

  useEffect(() => {
    if (!shouldRenderMenu) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRenderMenu]);

  useEffect(() => {
    if (open) {
      setShouldRenderMenu(true);
      return;
    }
    if (!shouldRenderMenu) return;

    const overlay = overlayRef.current;
    const nav = navRef.current;
    if (!overlay || !nav) {
      setShouldRenderMenu(false);
      return;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power2.in" }, onComplete: () => setShouldRenderMenu(false) })
        .to(
          Array.from(nav.children).reverse(),
          { opacity: 0, y: 16, duration: 0.25, stagger: 0.04 },
          0
        )
        .to(overlay, { opacity: 0, scale: 0.98, duration: 0.35 }, 0.05);
    });

    return () => ctx.revert();
  }, [open, shouldRenderMenu]);

  useEffect(() => {
    if (!shouldRenderMenu) return;

    const overlay = overlayRef.current;
    const nav = navRef.current;
    if (!overlay || !nav) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0)
        .fromTo(
          Array.from(nav.children),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          0.1
        );
    });

    return () => ctx.revert();
  }, [shouldRenderMenu]);

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
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {shouldRenderMenu &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={overlayRef}
            className="fixed inset-0 z-[90] flex flex-col bg-white lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="AODZN"
                  width={138}
                  height={44}
                  className="h-7 w-auto brightness-0"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav
              ref={navRef}
              className="flex flex-1 flex-col justify-center gap-6 px-8 pb-20"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-4xl font-medium tracking-tight text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleRegisterClick}
                className="cursor-pointer mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-medium text-white transition-colors hover:bg-primary-dark"
              >
                {ctaLabel}
              </button>
            </nav>
          </div>,
          document.body
        )}
    </header>
  );
}
