"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          message: "",
        });
      } else {
        setStatus(data.message || "error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

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
          <form onSubmit={handleSubmit} className="space-y-8">

            {status === "success" && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-700">
                ✅ Thank you! Your request has been received. Our team will contact you shortly.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
                />
              </div>
                            <div>
                <label className="mb-2 block text-sm font-medium text-[#081B33]">
                  Project Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / Area"
                  required
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#C9A03C]"
              />
            </div>

            <div className="text-center">

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl bg-[#C9A03C] px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#b88d2f] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-3 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Sending...
                  </>
                ) : (
                  "Request a Callback"
                )}
              </button>

            </div>

          </form>

        </motion.div>

      </div>

    </section>
  );
}