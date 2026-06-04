"use client";

import { useState } from "react";

export default function FaqItem({ question, answer, tags, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#EDE9E0]">
      <button
        onClick={() => setOpen(!open)}
        className={`group relative flex w-full items-center gap-4 py-6 text-left transition-all duration-300 ${
          open ? "pl-4 bg-[#B8882A]" : ""
        }`}
      >
        <span
          className={`text-sm italic transition ${
            open ? "text-white" : "text-[#B8882A]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-lg transition ${
            open ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          {question}
        </span>

        <div
          className={`h-8 w-8 rounded-full border flex items-center justify-center transition ${
            open ? "border-white bg-white/20" : "border-[#B8882A]/40"
          }`}
        >
          <span className="text-lg text-current">{open ? "−" : "+"}</span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex gap-4 pl-8 pb-6">
          <div className="w-[2px] bg-gradient-to-b from-[#B8882A] to-transparent" />

          <div>
            <p className="text-sm text-[#888] leading-8">{answer}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags?.map((tag, i) => (
                <span
                  key={i}
                  className="border border-[#B8882A]/30 px-2 py-1 text-[10px] uppercase tracking-widest text-[#9a7840]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
