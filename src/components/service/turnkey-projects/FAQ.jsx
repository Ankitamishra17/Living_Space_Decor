"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is included in a turnkey project?",
    answer: "Design, procurement, execution, supervision, and final handover.",
  },
  {
    question: "How long does a turnkey project take?",
    answer: "Typically 6–16 weeks depending on project size and scope.",
  },
  {
    question: "Do you provide warranties?",
    answer: "Yes, we provide workmanship and material warranties.",
  },
  {
    question: "Can I customize materials and finishes?",
    answer: "Absolutely. Every project is tailored to your requirements.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  const renderFAQ = (list, offset = 0) =>
    list.map((faq, index) => {
      const realIndex = index * 2 + offset;

      return (
        <div
          key={realIndex}
          className="border border-[#C8972B]/20 rounded-2xl overflow-hidden bg-white hover:border-[#C8972B]/50 transition"
        >
          <button
            onClick={() => setOpen(open === realIndex ? null : realIndex)}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <span className="font-semibold text-[#2A1506]">{faq.question}</span>

            <ChevronDown
              className={`text-[#C8972B] transition ${
                open === realIndex ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === realIndex && (
            <div className="px-6 pb-6 text-[#6E6258]">{faq.answer}</div>
          )}
        </div>
      );
    });

  return (
    <section className="py-20 bg-[#F7F2EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#2A1506]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="space-y-4">{renderFAQ(leftFaqs, 0)}</div>

          {/* RIGHT */}
          <div className="space-y-4">{renderFAQ(rightFaqs, 1)}</div>
        </div>
      </div>
    </section>
  );
}
