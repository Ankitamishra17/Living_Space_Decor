"use client";

import Image from "next/image";

const howWeHelp = [
  {
    id: "01",
    tag: "RESIDENTIAL",
    title: "Luxury Residential Design",
    description:
      "Custom-designed homes that blend elegance, functionality, and comfort while reflecting your unique lifestyle.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
    titleGold: false,
  },
  {
    id: "02",
    tag: "COMMERCIAL",
    title: "Commercial Architecture",
    description:
      "Innovative office spaces, retail environments, and business facilities designed to enhance productivity and brand identity.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
    titleGold: false,
  },
  {
    id: "03",
    tag: "PLANNING",
    title: "Urban & Master Planning",
    description:
      "Strategic planning solutions that create sustainable communities, public spaces, and future-ready developments.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800",
    titleGold: true,
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-[#F7F4EE] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.45em] text-[#B8954A] text-xs mb-6">
            Our Expertise
          </p>
          <h2 className="font-serif text-[#1B140F] text-5xl md:text-7xl leading-tight font-light">
            Architecture With{" "}
            <span className="italic text-[#B8954A]">Purpose</span>
            <br />
            Designed for You
          </h2>
          <div className="w-20 h-[1px] bg-[#B8954A] mx-auto mt-8" />
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {howWeHelp.map((item) => (
            <article key={item.id} className="group flex flex-col">
              {/* Image with clip-path */}
              <div
                className="relative h-[520px] overflow-hidden flex-shrink-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Large ghost number */}
                <span className="absolute top-8 left-8 font-body text-[78px] font-light text-white/20 leading-none select-none pointer-events-none transition-all duration-500 group-hover:text-[#B8954A] group-hover:text-opacity-60 group-hover:scale-105">
                  {item.id}
                </span>

                {/* Category tag */}
                <span className="absolute bottom-10 right-0 bg-[#C59A43] text-white text-[10px] font-semibold tracking-[0.35em] px-5 py-3">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="relative pt-10 flex-1 flex flex-col">
                <h3 className="font-serif text-[38px] leading-tight mb-4 text-[#2B2017] transition-colors duration-500 group-hover:text-[#B8954A]">
                  {item.title}
                </h3>

                <div className="w-10 h-[1px] bg-[#C59A43] mb-5" />

                <p className="text-[#6D6258] text-[15px] leading-[1.85] flex-1">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-4 text-[#C59A43] uppercase tracking-[0.35em] text-[10px] font-bold group/btn w-fit">
                  Discover More
                  <span className="block h-[1px] w-8 bg-[#C59A43] transition-all duration-300 group-hover/btn:w-12" />
                </button>

                {/* Hover corner bracket */}
                <span className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-[#C59A43] opacity-0 transition-opacity duration-400 group-hover:opacity-100 pointer-events-none" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
