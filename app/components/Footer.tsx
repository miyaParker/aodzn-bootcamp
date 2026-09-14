import Image from "next/image";
import type { LinkItem } from "@/sanity/lib/types";
import { InstagramIcon, LinkedInIcon, XIcon } from "./icons";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/aodznstudio?igsh=MXZ0M3NhcHd2M3F4dw%3D%3D&utm_source=qr",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulazees-olayinka-msc-98b3b9aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Icon: LinkedInIcon,
  },
  { label: "X", href: "https://x.com/aodznstudio?s=21", Icon: XIcon },
];

function resolveHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function Footer({
  navLinks,
  legalLinks,
  copyrightName,
}: {
  navLinks: LinkItem[];
  legalLinks: LinkItem[];
  copyrightName: string;
}) {
  const contactEmail = process.env.CONTACT_TO_EMAIL;

  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.svg"
              alt="AODZN"
              width={138}
              height={44}
              className="h-7 w-auto brightness-0"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/50">
              A hands-on, cohort-based product design bootcamp for aspiring
              designers ready to build real, portfolio-ready work.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink/50 transition-colors hover:border-black/20 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-ink/40 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    className="text-ink/60 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-ink/40 uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink/60 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {contactEmail && (
            <div>
              <p className="text-xs font-medium tracking-wide text-ink/40 uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="break-all text-ink/60 transition-colors hover:text-ink"
                  >
                    {contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 border-t border-black/5 pt-8 text-center">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} {copyrightName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
