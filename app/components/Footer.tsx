import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center lg:px-10">
        <Image
          src="/logo.svg"
          alt="AODZN"
          width={138}
          height={44}
          className="h-6 w-auto brightness-0"
        />
        <p className="text-xs text-ink/40">
          © {new Date().getFullYear()} AODZN. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-ink/40">
          <a href="#" className="hover:text-ink/70">Terms &amp; Conditions</a>
          <span>·</span>
          <a href="#" className="hover:text-ink/70">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
