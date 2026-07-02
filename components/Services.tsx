"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  BarChart3,
  Megaphone,
  Users,
  ClipboardList,
  Building2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Project Launch Strategy",
    description:
      "Market research, pricing strategy and go-to-market planning for successful project launches.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Lead generation through Meta, Google Ads and performance-driven digital campaigns.",
  },
  {
    icon: Users,
    title: "Sales Management",
    description:
      "Dedicated sales teams handling customer engagement, follow-ups and booking closures.",
  },
  {
    icon: Building2,
    title: "Channel Partner Network",
    description:
      "Strong broker and partner relationships that expand project reach and sales opportunities.",
  },
  {
    icon: ClipboardList,
    title: "CRM & Lead Management",
    description:
      "Systematic lead tracking, customer database management and transparent reporting.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Branding & Promotions",
    description:
      "Creative branding, project positioning and promotional campaigns that build trust.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-sm font-semibold text-[#C9A03C]">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
            Everything You Need
            <br />
            To Sell Faster
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            From exclusive sole selling mandates to strategic marketing,
            Verkoper provides complete sales solutions designed specifically
            for real estate developers.
          </p>
        </motion.div>

        {/* Featured */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-[#081B33] p-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div>

              <p className="uppercase tracking-[4px] text-[#C9A03C] font-semibold">
                Featured Service
              </p>

              <h3 className="mt-4 text-4xl font-semibold text-white">
                Sole Selling Mandates
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                We become your dedicated sales partner by managing project
                marketing, lead generation, customer engagement and inventory
                closures while you focus on delivering exceptional developments.
              </p>

            </div>

            <div className="hidden lg:flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A03C]">
              <ArrowRight className="text-white" size={34} />
            </div>

          </div>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 p-8 transition duration-300 hover:shadow-lg"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C9A03C]/10">

                  <Icon
                    className="text-[#C9A03C]"
                    size={28}
                  />

                </div>

                <h3 className="mt-7 text-2xl font-semibold text-[#081B33]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}