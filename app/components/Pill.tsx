import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className?: string;
};

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-base font-medium text-primary ${className}`}
    >
      {children}
    </span>
  );
}
