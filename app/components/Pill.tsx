import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export default function Pill({ children, className = "", tone = "light" }: PillProps) {
  const toneClasses =
    tone === "dark" ? "bg-white/15 text-white" : "bg-primary-light text-primary";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${toneClasses} px-4 py-1.5 text-sm font-medium sm:text-base ${className}`}
    >
      {children}
    </span>
  );
}
