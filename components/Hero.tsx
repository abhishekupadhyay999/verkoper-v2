"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081B33]/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/95 via-[#081B33]/75 to-[#081B33]/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            {/* Main Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              <span className="text-[#C9A03C]">
              Strategic Real Estate
              <br />
              Sales & Project
              <br />
              Marketing Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
              Helping developers accelerate project sales through exclusive
              sole selling mandates, strategic marketing and dedicated sales
              management across Palghar, Vasai, Virar and the Mumbai
              Metropolitan Region.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C9A03C] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#b88d2f]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-[#081B33]"
              >
                Learn More
              </a>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">

        <p className="text-xs uppercase tracking-[4px] text-white/70">
          Scroll
        </p>

        <div className="mx-auto mt-3 h-10 w-6 rounded-full border border-white/40">
          <div className="mx-auto mt-2 h-2 w-2 animate-bounce rounded-full bg-[#C9A03C]" />
        </div>

      </div>

    </section>
  );
}