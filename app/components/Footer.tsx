export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center lg:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
            A
          </span>
          <span className="text-sm font-medium text-ink">AODZN</span>
        </div>
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
