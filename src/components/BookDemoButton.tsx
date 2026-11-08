"use client";

export default function BookDemoButton() {
  return (
    <a
      href="https://cal.com/qdine/25min"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm relative z-20 cursor-pointer"
    >
      Book a demo
    </a>
  );
}
