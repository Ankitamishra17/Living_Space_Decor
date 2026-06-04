"use client";

import FaqItem from "./FaqItem";
const tags = ["Process", "Timelines", "Approvals"];

const faqs = [
  {
    q: "How long does an architecture project typically take?",
    a: "A residential project generally takes 12–18 months from concept to completion.",
    tags: ["Residential", "Commercial"],
  },
  {
    q: "Do you handle government approvals and permits?",
    a: "Yes. Our team manages the full statutory approval process.",
    tags: ["Approvals", "Legal"],
  },
  {
    q: "Can we be involved in the design process?",
    a: "Absolutely. We practice a deeply collaborative model.",
    tags: ["Collaboration", "Design"],
  },
  {
    q: "Do you take on projects outside major cities?",
    a: "Yes, we work across India and internationally. We've completed projects in remote hill stations, coastal towns, and metropolitan centres alike.",
    tags: ["Location", "Remote"],
  },
  {
    q: "What sustainability practices do you follow?",
    a: "Sustainability is integral to our design philosophy. We prioritize passive cooling, natural lighting, locally sourced materials, and energy-efficient solutions.",
    tags: ["Sustainability", "Green Design"],
  },
  {
    q: "How do you ensure the quality of construction?",
    a: "We have a rigorous quality assurance process that includes regular site inspections, detailed documentation, and close collaboration with trusted contractors.",
    tags: ["Quality", "Construction"],
  },
  {
    q: "Can you work within a specific budget?",
    a: "Yes, we tailor our design solutions to meet your budgetary requirements while maintaining quality, functionality, and aesthetics.",
    tags: ["Budget", "Cost Management"],
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#FAFAF8] py-24 px-6 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-20">
        <div className="lg:sticky lg:top-24 h-fit">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8882A]">
            Got Questions
          </span>

          <h2 className="mt-5 text-5xl font-light leading-tight">
            Frequently <br />
            <span className="italic text-[#B8882A]">Asked</span>
          </h2>

          <p className="mt-6 text-[#888] leading-8">
            Everything you need to know about working with us — from timelines
            to approvals.
          </p>

          <div className="mt-10 border border-[#B8882A]/20 bg-[#C9A96E]/10 p-6">
            <div className="text-5xl text-[#B8882A]">7</div>

            <div className="mt-2 text-xs tracking-[0.25em] uppercase text-[#9a7840]">
              Common Questions
            </div>

            <div className="my-4 h-px bg-[#B8882A]/20" />

            <p className="text-sm text-[#9a7840]">
              Can't find an answer? Reach out directly — our team responds
              within one business day.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#B4915A]/30 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-[#9a7840] font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.q}
              answer={faq.a}
              tags={faq.tags}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
