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
    image: "/Home/banner1.avif",
    mobileImage:
      "https://images.pexels.com/photos/5712146/pexels-photo-5712146.jpeg",
    href: "/services/modular-kitchen",
    desc: "Elegant modular kitchens designed for functionality, comfort, and modern living.",
  },
  {
    title: "Modular Wardrobes",
    image: "/Home/banner2.avif",
    mobileImage:
      "https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg",
    href: "/services/wardrobes",
    desc: "Smart storage solutions with premium finishes tailored to your lifestyle.",
  },
  {
    title: "Stylish Lighting",
    image: "/Home/banner3.avif",
    mobileImage:
      "https://images.pexels.com/photos/5371578/pexels-photo-5371578.jpeg",
    href: "/services/lights",
    desc: "Transform your interiors with ambient, decorative, and modern lighting designs.",
  },
  {
    title: "Furnishings",
    image: "/Home/banner4.avif",
    mobileImage:
      "https://images.pexels.com/photos/29532568/pexels-photo-29532568.jpeg",
    href: "/services/furnitures",
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
              <div className="relative h-max-screen min-h-[600px]">
                {/* Desktop & Tablet */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="hidden md:block object-cover"
                />

                {/* Mobile */}
                <Image
                  src={slide.mobileImage}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="block md:hidden object-cover"
                />

                <div className="absolute inset-0 bg-[#000000]/40" />
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
                  text-[28px]
                  sm:text-[22px]
                  md:text-[52px]
                  lg:text-[62px]
                  text:nowrap
                  
                
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
