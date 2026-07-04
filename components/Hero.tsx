"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}

      <Image
      src="/verkoper-v2/public/Hero/hero-bg.jpg"
      alt="Verkoper property"
      fill
      priority
      className="absolute inset-0 object-cover object-[72%_centre]"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/95 via-[#081B33]/75 to-[#081B33]/20" />

      {/* Content */}

      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto max-w-7xl px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-2xl pt-24 lg:pt-12"
          >

            

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]"
              style={{
                textShadow: "0 6px 24px rgba(0,0,0,.35)",
              }}
            >
              <span className="text-[#C9A03C]">
                Strategic Real Estate
              </span>

              <br />

              <span className="text-white">
                Sales & Project
              </span>

              <br />

              <span className="text-white">
                Marketing Solutions
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-200">
              Helping developers accelerate project sales through exclusive
              sole selling mandates, strategic marketing and dedicated sales
              management across Palghar, Vasai, Virar and the Mumbai
              Metropolitan Region.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C9A03C] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B88D2F] hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#081B33]"
              >
                Learn More
              </a>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white via-white/70 to-transparent" />

    </section>
  );
}