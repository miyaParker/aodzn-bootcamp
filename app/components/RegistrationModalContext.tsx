"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import ApplicationForm from "./ApplicationForm";
import Modal from "./Modal";

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

export default function RegistrationModalProvider({ children }: { children: ReactNode }) {
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
            Enroll in the Bootcamp
          </h3>
          <ApplicationForm />
        </div>
      </Modal>
    </RegistrationModalContext.Provider>
  );
}
