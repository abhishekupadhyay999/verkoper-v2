"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Leader } from "./LeadershipData";

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
  if (!leader) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
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
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-[60] w-[92%] max-w-4xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

              {/* Header */}

              <div className="relative bg-[#081B33] px-8 py-10 text-white">

                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 rounded-full bg-white/10 p-2 hover:bg-white/20"
                >
                  <X size={22} />
                </button>

                <div className="flex items-center gap-6">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#C9A03C] bg-[#102845] text-2xl font-bold text-[#C9A03C]">
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

              <div className="space-y-6 px-8 py-10">

                {leader.about.map((text, index) => {
                  const isBullet = text.startsWith("•");
                  const isHeading =
                    text === "About Me" ||
                    text === "Core Expertise:" ||
                    text === "Key Responsibilities as Managing Director";

                  if (isHeading) {
                    return (
                      <h3
                        key={index}
                        className="mt-6 text-2xl font-bold text-[#081B33]"
                      >
                        {text}
                      </h3>
                    );
                  }

                  if (isBullet) {
                    return (
                      <li
                        key={index}
                        className="ml-6 text-slate-700 leading-8"
                      >
                        {text.replace("•", "")}
                      </li>
                    );
                  }

                  return (
                    <p
                      key={index}
                      className="leading-8 text-slate-700"
                    >
                      {text}
                    </p>
                  );
                })}

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}