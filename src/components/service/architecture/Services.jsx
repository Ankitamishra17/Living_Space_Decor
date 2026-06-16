"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Interior Services",
    desc: "Bespoke interiors that blend luxury with livability, tailored to your unique lifestyle.",
    image:
     
        "/lsd_images/10.jpg",
  },
  {
    title: "Architectural Design",
    desc: "Innovative architectural solutions that harmonize form, function, and sustainability.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    title: "Turnkey Projects",
    desc: "End-to-end project management delivering seamless execution from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    title: "Modern Heritage",
    desc: "Reimagining traditional aesthetics with contemporary design principles.",
    image:
      "/lsd_images/18.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#C8972B] uppercase tracking-[0.4em] text-xs">
            WHAT WE BUILD
          </span>

          <h2 className="text-5xl mt-4">Architecture Services</h2>

          <div className="w-16 h-[1px] bg-[#C8972B] mx-auto mt-5" />
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
