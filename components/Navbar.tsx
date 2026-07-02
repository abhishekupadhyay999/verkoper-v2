"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Verkoper"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition duration-300 ${
                scrolled
                  ? "text-[#081B33] hover:text-[#C9A03C]"
                  : "text-white hover:text-[#C9A03C]"
              }`}
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center rounded-xl px-7 py-3 font-semibold transition duration-300 ${
            scrolled
              ? "bg-[#C9A03C] text-white hover:bg-[#b88d2f]"
              : "border border-[#C9A03C] text-white hover:bg-[#C9A03C]"
          }`}
        >
          We're Hiring
        </a>

        {/* Mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${
            scrolled ? "text-[#081B33]" : "text-white"
          }`}
        >
          {isOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">

          <div className="px-6 py-6 flex flex-col gap-6">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-[#081B33]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-[#C9A03C] py-3 text-center font-semibold text-white"
            >
              Start Project
            </a>

          </div>

        </div>
      )}
    </header>
  );
}