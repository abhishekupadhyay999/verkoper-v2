"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Chetan Gawde",
    designation: "Founder & CFO",
    bio: "With over 10 years of experience in real estate, finance and business operations, Chetan leads Verkoper's financial strategy and long-term business growth while ensuring transparency, operational excellence and value-driven solutions.",
  },
  {
    name: "Hitesh Jagtap",
    designation: "CEO & Co-Founder",
    bio: "With 13+ years of leadership experience across the automobile and real estate sectors, Hitesh drives the company's vision, strategic partnerships and business development while building long-term value for developers and investors.",
  },
  {
    name: "Divesh Bhoir",
    designation: "Managing Director",
    bio: "Backed by a strong family legacy in construction and more than a decade of industry experience, Divesh oversees operations, project execution and sustainable business growth through ethical leadership.",
  },
  {
    name: "Pawan Upadhyay",
    designation: "CSO & Co-Founder",
    bio: "Pawan leads sales strategy and project marketing with a customer-first approach, helping developers achieve successful launches and long-term sales performance.",
  },
  {
    name: "Mahesh Chavan",
    designation: "Director – Sales & Marketing",
    bio: "A multiple award-winning sales professional with over 10 years of experience, Mahesh specializes in residential, commercial and investment property solutions while driving Verkoper's marketing and sales initiatives.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#F8FAFC] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <p className="uppercase tracking-[5px] text-sm font-semibold text-[#C9A03C]">
            OUR LEADERSHIP
          </p>

          <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#081B33]">
            Experienced Leaders.
            <br />
            Shared Vision.
          </h2>

          <p className="mt-7 text-lg leading-8 text-slate-600">
            Our leadership team combines decades of experience in real estate,
            finance, sales and business strategy to deliver exceptional value
            and trusted guidance for every project.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {leaders.map((leader, index) => (

            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-10 transition duration-300 hover:shadow-lg"
            >

              <div className="h-1 w-16 rounded-full bg-[#C9A03C]" />

              <h3 className="mt-7 text-3xl font-semibold text-[#081B33]">
                {leader.name}
              </h3>

              <p className="mt-2 uppercase tracking-[2px] font-semibold text-[#C9A03C]">
                {leader.designation}
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                {leader.bio}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}