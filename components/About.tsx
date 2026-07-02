"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Exclusive Sole Selling Mandates",
  "Strategic Project Marketing",
  "Dedicated Sales Management",
  "Transparent & Result-Driven Approach",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[5px] text-[#C9A03C] font-semibold">
              Who We Are
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
              Building Long-Term
              <br />
              Success for Developers
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
              Verkoper Property Solutions is a trusted real estate sales and
              project marketing company specializing in exclusive sole selling
              mandates. We partner with developers across Palghar, Vasai–Virar
              and the Mumbai Metropolitan Region to accelerate project sales
              through strategic marketing, dedicated sales management and
              transparent execution.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A03C]/10">
                    <CheckCircle
                      size={20}
                      className="text-[#C9A03C]"
                    />
                  </div>

                  <p className="text-lg font-medium text-[#081B33]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/office/office1.png"
                alt="Verkoper Office"
                width={700}
                height={700}
                className="h-[600px] w-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}