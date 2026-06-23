"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const lightingTypes = [
  {
    title: "Profile Lighting",
    description:
      "Modern linear lighting solutions creating clean architectural lines.",
    images: [
      "https://images.pexels.com/photos/23916830/pexels-photo-23916830.png",
      "https://i.ytimg.com/vi/aVghDk_xQII/maxresdefault.jpg",
      "https://tse1.mm.bing.net/th/id/OIP._WB-gqBtM4VCLhEj_Fyo8gHaEJ?pid=Api&P=0&h=180",
    ],
  },
  {
    title: "Cove Lighting",
    description: "Hidden lighting that delivers warm ambient illumination.",
    images: [
      "https://images.pexels.com/photos/7005457/pexels-photo-7005457.jpeg",
      "https://images.pexels.com/photos/8134787/pexels-photo-8134787.jpeg",
      "https://images.pexels.com/photos/8082551/pexels-photo-8082551.jpeg",
    ],
  },
  {
    title: "Accent Lighting",
    description: "Focused lighting to highlight walls, décor and artwork.",
    images: [
      "https://images.pexels.com/photos/25039772/pexels-photo-25039772.jpeg",
      "https://tse4.mm.bing.net/th/id/OIP.jq09G7sRkQ9YWdDfybEsNQHaEO?pid=Api&P=0&h=180",
      "https://images.pexels.com/photos/27604110/pexels-photo-27604110.png",
    ],
  },
];

export default function LightingTypes() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F5EBE0] py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-[#C8972B]/30 bg-[#C8972B]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#C8972B]">
            Lighting Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-heading text-[#3D1F0D]">
            Types of Lighting We Design
          </h2>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {lightingTypes.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`group w-full text-left rounded-md border p-6 transition-all duration-500 ${
                  active === index
                    ? "bg-[#3D1F0D] border-[#3D1F0D] text-white"
                    : "bg-white border-gray-200 text-[#3D1F0D] hover:border-[#C8972B]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading">{item.title}</h3>

                  <ArrowRight
                    className={`transition-transform duration-300 ${
                      active === index
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>

                <p
                  className={`mt-4 text-[12px] ${
                    active === index ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={lightingTypes[active].images[0]}
                alt={lightingTypes[active].title}
                width={1200}
                height={800}
                className="h-[550px] w-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="mt-6 grid grid-cols-3 gap-5">
              {lightingTypes[active].images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt=""
                    width={400}
                    height={300}
                    className="h-44 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
