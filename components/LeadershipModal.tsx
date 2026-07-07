"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Leader } from "./leadershipData";
import { useEffect } from "react";

interface LeadershipModalProps {
  leader: Leader | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadershipModal({
  leader,
  isOpen,
  onClose,
}: LeadershipModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && leader && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.35 }}
            className="fixed left-1/2 top-1/2 z-[100] w-[92%] max-w-4xl -translate-x-1/2 -translate-y-1/2"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="relative overflow-hidden rounded-t-3xl bg-[#081B33] px-8 py-10 text-white">

                {/* Close Button */}

                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                >
                  <X size={22} />
                </button>

                {/* Initials */}

                <div className="flex items-center gap-6">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#C9A03C] bg-[#102845] text-3xl font-bold text-[#C9A03C] shadow-xl">
                    {leader.initials}
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold">
                      {leader.name}
                    </h2>

                    <p className="mt-2 text-lg text-slate-300">
                      {leader.designation}
                    </p>
                  </div>

                </div>

              </div>

              {/* Body */}

              <div className="space-y-10 px-8 py-10">

                {/* About */}

                <div>

                  <h3 className="mb-5 text-2xl font-semibold text-[#081B33]">
                    About
                  </h3>

                  <div className="space-y-5 leading-8 text-slate-600">

                    {leader.about.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}

                  </div>

                </div>

                {/* Expertise */}

                <div>

                  <h3 className="mb-5 text-2xl font-semibold text-[#081B33]">
                    Core Expertise
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">

                    {leader.expertise.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-[#C9A03C]"
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Philosophy */}

                <div className="rounded-2xl border-l-4 border-[#C9A03C] bg-[#F8FAFC] p-6">

                  <h3 className="mb-3 text-xl font-semibold text-[#081B33]">
                    Leadership Philosophy
                  </h3>

                  <p className="italic leading-8 text-slate-700">
                    "{leader.philosophy}"
                  </p>

                </div>

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}