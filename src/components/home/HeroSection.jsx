"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
  {
    image:
      "/banner/1.png",
    alt: "Luxury living room design",
  },
  {
    image:
      "/banner/9.png",
    alt: "Premium modular kitchen",
  },
  {
    image:
      "/banner/5.png",
    alt: "Elegant  suite",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F5EBE0] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
          }}
          className="
            h-[100svh]
            [&_.swiper-pagination]:!bottom-6
            [&_.swiper-pagination-bullet]:bg-white/40
            [&_.swiper-pagination-bullet]:transition-all
            [&_.swiper-pagination-bullet-active]:bg-[#C8972B]
            [&_.swiper-pagination-bullet-active]:w-8
          "
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[100svh] min-h-[650px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F0D]/85 via-[#3D1F0D]/55 to-[#3D1F0D]/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16">
            <div className="max-w-3xl">
              {/* Tag */}
              <p className=" font-body flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#C8972B] font-medium mb-5">
                <span className="w-8 sm:w-10 h-px bg-[#C8972B]" />
                Luxury Interior Studio
              </p>

              {/* Heading */}
              <h1
                className="
                  text-white
                  font-medium
                  font-heading
                  leading-[1.05]
                  mb-6
                  text-[32px]
                  sm:text-[46px]
                  md:text-[72px]
                  lg:text-[92px]
                "
              >
                Crafting{" "}
                <span className="text-[#C8972B]">
                  Spaces
                </span>
                <br />
                That Inspire
              </h1>

              {/* Description */}
              <p
                className="
                font-body
                  text-[#F5EBE0]/85
                  text-xs
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  max-w-xl
                  mb-8
                "
              >
                Premium home interiors, modular kitchens, turnkey projects
                and luxury spaces crafted with elegance and functionality
                across Noida & Delhi NCR.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#C8972B]
                    hover:bg-[#3D1F0D]
                    text-white
                    px-6
                    sm:px-8
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                  "
                >
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-white/40
                    hover:border-white
                    text-white
                    px-6
                    sm:px-8
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}