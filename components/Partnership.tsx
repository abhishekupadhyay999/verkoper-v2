"use client";

import { motion } from "framer-motion";
import { Search, Megaphone, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Strategy",
    description:
      "We study your project, market, pricing and target audience to build a winning sales strategy.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Our team creates powerful digital campaigns, branding and lead generation activities that attract quality buyers.",
  },
  {
    icon: Handshake,
    title: "Sales Execution",
    description:
      "Dedicated sales professionals manage enquiries, customer interactions and booking closures from start to finish.",
  },
];

export default function Partnership() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-sm font-semibold text-[#C9A03C]">
            OUR PARTNERSHIP MODEL
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
            You Build.
            <br />
            We Sell.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            We become an extension of your business by managing the complete
            sales and marketing journey—from planning and promotion to customer
            acquisition and successful closures.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-slate-200 p-10 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/10">
                  <Icon className="text-[#C9A03C]" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#081B33]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}