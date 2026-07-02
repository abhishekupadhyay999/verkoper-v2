"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPinned,
  Users,
  BarChart3,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Developer Focused",
    description:
      "We work exclusively with real estate developers, providing strategic sales and project marketing solutions.",
  },
  {
    icon: MapPinned,
    title: "Local Market Expertise",
    description:
      "Strong understanding of Palghar, Vasai, Virar, Boisar and the Mumbai Metropolitan Region.",
  },
  {
    icon: Users,
    title: "Dedicated Sales Team",
    description:
      "Experienced professionals committed to accelerating sales and customer engagement.",
  },
  {
    icon: BarChart3,
    title: "Strategic Marketing",
    description:
      "Data-driven marketing campaigns designed to generate quality leads and maximize conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "Regular reporting, ethical business practices and complete transparency at every stage.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We believe in building lasting relationships by delivering measurable results and exceptional service.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="bg-[#F8FAFC] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-[#C9A03C]">
            Why Choose Verkoper
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
            Your Trusted Sales &
            <br />
            Marketing Partner
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            We combine market expertise, strategic planning and dedicated sales
            execution to help developers achieve faster project sales with
            complete transparency.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:shadow-lg"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A03C]/10">

                  <Icon
                    className="text-[#C9A03C]"
                    size={28}
                  />

                </div>

                <h3 className="mt-7 text-2xl font-semibold text-[#081B33]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}