"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import ApplicationForm from "./ApplicationForm";
import Modal from "./Modal";
import type { PricingContent } from "@/sanity/lib/types";

type RegistrationModalContextValue = {
  open: () => void;
};

const RegistrationModalContext = createContext<RegistrationModalContextValue | null>(null);

export function useRegistrationModal() {
  const ctx = useContext(RegistrationModalContext);
  if (!ctx) {
    throw new Error("useRegistrationModal must be used within RegistrationModalProvider");
  }
  return ctx;
}

export default function RegistrationModalProvider({
  children,
  pricing,
}: {
  children: ReactNode;
  pricing: PricingContent;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ open: () => setIsOpen(true) }), []);

  return (
    <RegistrationModalContext.Provider value={value}>
      {children}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} labelledBy="apply-modal-heading">
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10">
          <h3
            id="apply-modal-heading"
            className="cursor-pointer mb-6 text-2xl font-medium text-ink"
          >
            {pricing.primaryCtaLabel}
          </h3>
          <ApplicationForm pricing={pricing} />
        </div>
      </Modal>
    </RegistrationModalContext.Provider>
  );
}
