import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-semibold">
              Verkoper
            </h2>

            <p className="mt-1 text-[#C9A03C] font-medium">
              Property Solutions
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              A trusted real estate sales and project marketing company
              delivering exclusive sole selling mandates and strategic
              marketing solutions for developers across Maharashtra.
            </p>

          </div>

          {/* Corporate Office */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Corporate Office
            </h3>

            <div className="flex gap-3">

              <MapPin
                size={20}
                className="mt-1 text-[#C9A03C]"
              />

              <p className="leading-8 text-slate-300">
                105, Kanchan Business Center,
                <br />
                Opp. Zudio,
                <br />
                Mahim-Manor Road,
                <br />
                Palghar West,
                <br />
                Maharashtra – 401404
              </p>

            </div>

          </div>

          {/* Branch */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Branch Office
            </h3>

            <div className="flex gap-3">

              <MapPin
                size={20}
                className="mt-1 text-[#C9A03C]"
              />

              <p className="leading-8 text-slate-300">
                248, Shree Ram Square,
                <br />
                Shreeram Nagar,
                <br />
                Vartak Ward,
                <br />
                Virar West,
                <br />
                Maharashtra – 401303
              </p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-[#C9A03C]"
                />

                <span className="text-slate-300">
                  +91 95455 88688
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-[#C9A03C]"
                />

                <span className="text-slate-300">
                  sales@verkoper.co.in
                </span>

              </div>

            </div>

            <div className="mt-10">

              <h4 className="mb-4 font-semibold">
                Quick Links
              </h4>

              <div className="space-y-3">

                <Link
                  href="#home"
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  Home <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#about"
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  About <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#services"
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  Services <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#leadership"
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  Leadership <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="#contact"
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  Contact <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Verkoper Property Solutions.
            All Rights Reserved.
          </p>

          <p className="text-sm text-slate-400">
            Designed & Developed by
            <span className="ml-1 text-[#C9A03C] font-medium">
              Verkoper Property Solutions
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}