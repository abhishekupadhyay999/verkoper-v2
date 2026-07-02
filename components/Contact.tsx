"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-[#C9A03C]">
            START YOUR PROJECT
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
            Let's Discuss Your
            <br />
            Next Project
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            Ready to accelerate your project's success? Share your details and
            our team will get in touch to discuss the right sales and marketing
            strategy for your development.
          </p>
        </motion.div>

        {/* Form */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12"
        >
          <form className="space-y-8">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Project Location
                </label>

                <input
                  type="text"
                  placeholder="City / Area"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>

            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#081B33]">
                Project Details
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-xl bg-[#C9A03C] px-10 py-4 font-semibold text-white transition hover:bg-[#b88d2f]"
              >
                Request a Callback
              </button>
            </div>

          </form>

        </motion.div>

      </div>
    </section>
  );
}