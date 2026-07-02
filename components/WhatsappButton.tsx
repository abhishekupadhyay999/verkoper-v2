"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
  href="https://wa.me/919545588688"
  target="_blank"
  rel="noopener noreferrer"
  className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-5 py-4 text-white shadow-xl transition-all duration-300 hover:pr-6"
>
  <FaWhatsapp size={30} />

  <span className="max-w-0 overflow-hidden whitespace-nowrap font-medium transition-all duration-300 group-hover:max-w-[160px]">
    Chat with Us
  </span>
</a>
  );
}