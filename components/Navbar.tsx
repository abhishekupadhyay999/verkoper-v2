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

const careerLink =
 "https://forms.gle/hRQMvb8KbRY62UQH6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#081B33]/92 backdrop-blur-xl border-b border-white/10 shadow-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Verkoper Property Solutions"
            width={300}
            height={100}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-[15px] font-medium tracking-wide text-white transition-all duration-300 hover:text-[#C9A03C]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A03C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Careers Button */}
        <a
          href={careerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center rounded-full bg-[#C9A03C] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#b88d2f]"
        >
          Careers
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
        >
          {isOpen ? <HiOutlineX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#081B33]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white transition hover:text-[#C9A03C]"
              >
                {item.name}
              </a>
            ))}

            <a
              href={careerLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#C9A03C] py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#b88d2f]"
            >
              Careers
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}