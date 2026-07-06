"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  BadgeCheck,
  Landmark,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "25+",
    title: "Team Strength",
  },
  {
    icon: Building2,
    number: "150+",
    title: "Projects Marketed",
  },
  {
    icon: Landmark,
    number: "50+",
    title: "Developer Partners",
  },
  {
    icon: BadgeCheck,
    number: "2,000+",
    title: "Happy Customers",
  },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="-mt-16 relative z-20 rounded-3xl bg-white shadow-2xl border border-slate-200">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center px-8 py-10 text-center border-b lg:border-b-0 lg:border-r last:border-r-0 border-slate-200"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A03C]/10">

                    <Icon
                      className="text-[#C9A03C]"
                      size={30}
                    />

                  </div>

                  <h3 className="mt-6 text-4xl font-bold text-[#081B33]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.title}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}