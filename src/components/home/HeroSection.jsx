"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    title: "Modular Kitchen",
    image:
      "https://images.pexels.com/photos/35618203/pexels-photo-35618203.jpeg",
    href: "/services/modular-kitchen",
    desc: "Elegant modular kitchens designed for functionality, comfort, and modern living.",
  },
  {
    title: "Modular Wardrobes",
    image:
      "https://images.pexels.com/photos/27562185/pexels-photo-27562185.png",
    href: "/services/wardrobe",
    desc: "Smart storage solutions with premium finishes tailored to your lifestyle.",
  },
  {
    title: "Stylish Lighting",
    image:
      "https://images.pexels.com/photos/19343357/pexels-photo-19343357.jpeg",
    href: "/services/lighting",
    desc: "Transform your interiors with ambient, decorative, and modern lighting designs.",
  },
  {
    title: "Furnishings",
    image:
      "https://images.pexels.com/photos/36601409/pexels-photo-36601409.jpeg",
    href: "/services/furnishing",
    desc: "Luxury furnishings that add warmth, elegance, and personality to every space.",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = categories[activeIndex];

  return (
    <main className="overflow-x-hidden">
      <section className="relative h-screen min-h-[700px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="
            h-full
            [&_.swiper-pagination]:!bottom-8
            [&_.swiper-pagination-bullet]:bg-white/40
            [&_.swiper-pagination-bullet-active]:bg-[#C8972B]
            [&_.swiper-pagination-bullet-active]:w-8
          "
        >
          {categories.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen min-h-[700px]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F0D]/85 via-[#3D1F0D]/55 to-[#3D1F0D]/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-5 text-center">
            {/* Heading */}
            <h1
              className="
                  text-white
                  font-heading
                  font-medium
                  leading-[1.05]
                  mb-6
                  text-[38px]
                  sm:text-[32px]
                  md:text-[52px]
                  lg:text-[62px]
                
                "
            >
              {activeSlide.title}
            </h1>
            {/* Tag */}
            <p className="text-[#ffffff] text-xs md:text-sm  tracking-[0.1em]  mb-5">
              {activeSlide.desc}
            </p>
            {/* Button */}
            <div className="flex justify-center">
              <Link
                href={activeSlide.href}
                className="
      inline-flex
      items-center
      gap-2
      bg-[#C8972B]
      hover:bg-[#3D1F0D]
      text-white
      px-8
      py-4
      text-sm
      font-semibold
      uppercase
      tracking-[0.12em]
      transition-all
      duration-300
    "
              >
                Explore
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
