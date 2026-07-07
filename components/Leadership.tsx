"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import LeadershipModal from "./LeadershipModal";
import { leaders, Leader } from "./LeadershipData";

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <>
      <section
        id="leadership"
        className="bg-[#F8FAFC] py-28"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >

            <p className="text-sm font-semibold uppercase tracking-[5px] text-[#C9A03C]">
              Leadership
            </p>

            <h2 className="mt-5 text-5xl font-semibold text-[#081B33]">
              Meet Our Leadership
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Meet the experienced professionals leading Verkoper Property
              Solutions with integrity, innovation and a customer-first
              approach.
            </p>

          </motion.div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {leaders.map((leader, index) => (

              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: .5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-[#C9A03C]/20 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
              >

                {/* Initials */}

                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#C9A03C] bg-[#081B33] text-2xl font-bold text-[#C9A03C]">

                  {leader.initials}

                </div>

                {/* Name */}

                <h3 className="mt-8 text-2xl font-semibold text-[#081B33]">

                  {leader.name}

                </h3>

                {/* Designation */}

                <p className="mt-2 font-medium text-[#C9A03C]">

                  {leader.designation}

                </p>

                {/* Short Description */}

                <p className="mt-6 leading-8 text-slate-600">

                  {leader.shortDescription}

                </p>

                {/* Button */}

                <button
                  onClick={() => setSelectedLeader(leader)}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#081B33] transition hover:text-[#C9A03C]"
                >

                  Read More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <LeadershipModal
        leader={selectedLeader}
        isOpen={selectedLeader !== null}
        onClose={() => setSelectedLeader(null)}
      />

    </>
  );
}