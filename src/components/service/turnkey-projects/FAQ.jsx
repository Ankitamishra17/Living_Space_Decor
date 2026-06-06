"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is included in a turnkey project?",
    answer:
      "Our turnkey service covers everything from concept design and material procurement to execution, supervision, quality checks, and final handover.",
  },
  {
    question: "How long does a turnkey project take?",
    answer:
      "Most residential projects are completed within 6–16 weeks depending on size, scope, and customization requirements.",
  },
  {
    question: "Do you provide warranties?",
    answer:
      "Yes. We provide comprehensive warranties on workmanship, modular solutions, and selected materials.",
  },
  {
    question: "Can I customize materials and finishes?",
    answer:
      "Absolutely. Every project is tailored around your preferences, lifestyle, and budget requirements.",
  },
  {
    question: "Do you handle procurement?",
    answer:
      "Yes, we source, procure, and manage all materials, furniture, lighting, and décor elements for a seamless experience.",
  },
  {
    question: "Do you offer 3D visualizations?",
    answer:
      "Yes. We provide detailed 3D renders and walkthroughs before execution begins, ensuring complete clarity.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState();

  return (
    <section className="py-20 md:py-28 bg-[#F7F2EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[#C8972B] text-[11px] mb-4">
            FAQs
          </p>

          <h2
            className=" font-heading text-4xl md:text-5xl lg:text-6xl text-[#2A1506]"
            // style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Frequently Asked
            <span className="text-[#C8972B]"> Questions</span>
          </h2>

          <div className="w-16 h-px bg-[#C8972B] mx-auto mt-6" />
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                layout
                className="
                  bg-white
                  rounded-md
                  border border-[#C8972B]/15
                  overflow-hidden
                  shadow-[0_15px_50px_rgba(0,0,0,0.04)]
                "
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    md:px-8
                    py-6
                    text-left
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        text-xl
                        md:text-md
                        text-[#C8972B]/30
                        leading-none
                      "
                      style={{
                        fontFamily: "'Cormorant Garamond', poppins",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h5 className="text-[#2A1506] font-body text-sm md:text-sm">
                      {faq.question}
                    </h5>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-[#C8972B]" size={22} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="px-6 md:px-8 pb-7 md:pb-8">
                        <div className="w-10 h-px bg-[#C8972B]/40 mb-5" />

                        <p className="text-[#6E6258] leading-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
