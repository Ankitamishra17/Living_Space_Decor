"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Sofa, Building2, ChefHat, Compass } from "lucide-react";

const services = [
  {
    title: "Living Room",
    description:
      "Transform your living room with luxury interior design solutions in Noida, Greater Noida, and Ghaziabad.",
    image: "/image/living_room6.jpeg",
    icon: Sofa,
    link: "/services/design-ideas/living-room-design",
  },
  {
    title: "Modular Kitchen",
    description:
      "Get stylish and functional kitchen interiors for homes in Noida, Greater Noida, and Ghaziabad.",
    image: "/image/kitchen_design5.jpeg",
    icon: ChefHat,
    link: "/services/design-ideas/kitchen-design-ideas",
  },
  {
    title: "Bedroom Design",
    description:
      "Create a comfortable and luxurious bedroom with custom interior design solutions.",
    image: "/image/bedroom_design6.jpeg",
    icon: Building2,
    link: "/services/design-ideas/bedroom-design",
  },
  {
    title: "Bathroom Design",
    description:
      "Modern bathroom interior designs featuring premium fittings, elegant layouts, and space-efficient solutions.",
    image: "/image/bathroom_design.png",
    icon: Building2,
    link: "/services/design-ideas/bathroom-design",
  },
  {
    title: "Architecture",
    description:
      "Professional architectural design services for residential and commercial projects. We deliver innovative planning, modern elevations, and sustainable architectural solutions.",
    image: "/Home/architecture.avif",
    icon: Compass,
    link: "/services/architecture",
  },
  {
    title: "Dining Room Design",
    description:
      "Elegant dining room interior designs that enhance comfort, functionality, and style.",
    image: "/image/dining_room5.jpeg",
    icon: Compass,
    link: "/services/design-ideas/dining-room-design",
  },
  {
    title: "Office Design",
    description:
      "Modern office interior design solutions that improve productivity, comfort, and brand identity.",
    image: "/image/office_design8.jpg",
    icon: Compass,
    link: "/services/design-ideas/home-office-design",
  },
  {
    title: "Hospitality",
    description:
      "Luxury hospitality interior design services for hotels, restaurants, cafés, resorts, and commercial spaces.",
    image:
      "https://i.pinimg.com/736x/66/bd/54/66bd54f9c1b4b46691c66a2d62ef01d7.jpg",
    icon: Compass,
    link: "/services/design-ideas",
  },
];

export default function ServicesSection() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= max - 4);
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 4 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const handlePointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragMoved.current = false;
    setDragging(true);
    startX.current = (e.touches ? e.touches[0].pageX : e.pageX) - track.offsetLeft;
    scrollLeftStart.current = track.scrollLeft;
  };

  const handlePointerMove = (e) => {
    const track = trackRef.current;
    if (!isDragging.current || !track) return;
    e.preventDefault();
    const x = (e.touches ? e.touches[0].pageX : e.pageX) - track.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    track.scrollLeft = scrollLeftStart.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // Prevents a drag-release from being misread as a card click
  const handleCardClick = (e) => {
    if (dragMoved.current) {
      e.preventDefault();
      dragMoved.current = false;
    }
  };

  return (
    <section className="px-6 lg:px-14 py-12">
      {/* ── Heading ── */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
        <div>
          <p className="flex items-center gap-3 text-[10px] tracking-[.28em] uppercase text-[#C8972B] font-medium mb-3">
            <span className="w-6 h-px bg-[#C8972B]" />
            What We Offer
          </p>
          <h2 className="font-[Cormorant_Garamond,serif] text-4xl md:text-[50px] font-medium leading-[1.1] text-[#2A1506]">
            Our <em className="text-[#C8972B] not-italic">Services</em>
          </h2>
          <p className="text-[15px] text-[#2A1506]/60 mt-3 max-w-[480px] leading-[1.75] font-light">
            From concept to completion — we transform ordinary spaces into
            extraordinary living experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Arrow controls — desktop affordance for the carousel */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Scroll services left"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#3D1F0D]/25 text-[#3D1F0D] transition-all hover:bg-[#3D1F0D] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#3D1F0D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Scroll services right"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[#3D1F0D]/25 text-[#3D1F0D] transition-all hover:bg-[#3D1F0D] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#3D1F0D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B]"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-[#3D1F0D]/30 text-[#3D1F0D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.12em] hover:bg-[#3D1F0D] hover:text-white transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div className="relative">
        <div
          ref={trackRef}
          role="region"
          aria-label="Our services"
          tabIndex={0}
          className={`flex gap-4 overflow-x-auto scrollbar-hide select-none snap-x snap-mandatory scroll-px-6 focus-visible:outline-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollBehavior: dragging ? "auto" : "smooth" }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={stopDragging}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollByCard(1);
            if (e.key === "ArrowLeft") scrollByCard(-1);
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.link}
                draggable={false}
                data-card
                onClick={handleCardClick}
                className="group relative h-[340px] md:h-[420px] w-[260px] md:w-[320px] shrink-0 snap-start overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8972B]"
              >
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px) 260px, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Default overlay — lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/85 via-[#140802]/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Hover overlay — darker */}
                <div className="absolute inset-0 bg-[#140802]/78 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gold frame — reads as "selected" on hover, no shadow needed */}
                <div className="pointer-events-none absolute inset-3 z-10 border border-[#C8972B]/0 group-hover:border-[#C8972B]/50 transition-colors duration-500" />

                {/* Icon top-left */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-colors duration-500 group-hover:bg-[#C8972B]/90 group-hover:border-[#C8972B]">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Number top-right */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="text-[#C8972B] text-sm tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ── DEFAULT: only title at bottom ── */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="font-heading text-md md:text-3xl lg:text-3xl text-white">
                    {service.title}
                  </h3>
                  <span className="block w-8 h-px bg-[#C8972B] mt-3" />
                </div>

                {/* ── HOVER: title + description, properly centered ── */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="block w-8 h-px bg-[#C8972B] mb-5" />
                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-7">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#C8972B] text-xs tracking-[0.2em] uppercase">
                    <span>Explore</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Progress rail — shows position within the carousel */}
        <div className="mt-6 h-[2px] w-full bg-[#3D1F0D]/10 rounded-full overflow-hidden md:hidden">
          <div
            className="h-full bg-[#C8972B] rounded-full transition-transform duration-150"
            style={{
              width: "25%",
              transform: `translateX(${progress * 300}%)`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        /* hide scrollbar but keep native touch/trackpad + drag scrolling */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}