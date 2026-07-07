"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sofa, Building2, ChefHat, Compass } from "lucide-react";

const services = [
  {
    title: "Living Room",
    description:
      "Transform your living room with luxury interior design solutions in Noida, Greater Noida, and Ghaziabad. We create elegant, functional, and modern living spaces tailored to your lifestyle.",
    image: "/image/living_room6.jpeg",
    icon: Sofa,
    link: "/services/design-ideas/living-room-design",
  },
  
  {
    title: "Modular Kitchen",
    description:
      "Premium modular kitchen designs with smart storage, modern layouts, and customized finishes. Get stylish and functional kitchen interiors for homes in Noida, Greater Noida, and Ghaziabad.",
    image: "/image/kitchen_design5.jpeg",
    icon: ChefHat,
    link: "/services/design-ideas/kitchen-design-ideas",
  },
  {
    title: "Bedroom Design",
    description:
      "Create a comfortable and luxurious bedroom with custom interior design solutions. Our bedroom designs combine aesthetics, functionality, and personalized comfort for modern homes.",
    image: "/image/bedroom_design6.jpeg",
    icon: Building2,
    link: "/services/design-ideas/bedroom-design",
  },
  {
    title: "Bathroom Design",
    description:
      "Modern bathroom interior designs featuring premium fittings, elegant layouts, and space-efficient solutions. Upgrade your bathroom with stylish and functional designs.",
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
      "Elegant dining room interior designs that enhance comfort, functionality, and style. Create the perfect dining experience with customized furniture and luxury décor solutions.",
    image: "/image/dining_room5.jpeg",
    icon: Compass,
    link: "/services/design-ideas/dining-room-design",
  },
  {
    title: "Office Design",
    description:
      "Modern office interior design solutions that improve productivity, comfort, and brand identity. We create inspiring workspaces for home offices and commercial offices.",
    image: "/image/office_design8.jpg",
    icon: Compass,
    link: "/services/design-ideas/home-office-design",
  },
  {
    title: "Hospitality",
    description:
      "Luxury hospitality interior design services for hotels, restaurants, cafés, resorts, and commercial spaces. We create memorable guest experiences through premium design concepts.",
    image: "https://i.pinimg.com/736x/66/bd/54/66bd54f9c1b4b46691c66a2d62ef01d7.jpg",
    icon: Compass,
    link: "/services/design-ideas",
  },
];



export default function ServicesSection() {
  return (
    <section className="px-6 lg:px-14  mt-32">
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

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 border border-[#3D1F0D]/30 text-[#3D1F0D] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.12em] hover:bg-[#3D1F0D] hover:text-white transition-colors"
        >
          View Portfolio
        </Link>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.title}
              href={service.link}
              className="relative h-[340px] md:h-[420px] overflow-hidden group block"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Default overlay — lighter */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140802]/80 via-[#140802]/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover overlay — darker */}
              <div className="absolute inset-0 bg-[#140802]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon top-left */}
              <div className="absolute top-5 left-5 z-10">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center">
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
                <h3 className="font-[Cormorant_Garamond,serif] text-md md:text-3xl lg:text-3xl text-white">
                  {service.title}
                </h3>
                {/* gold underline */}
                <span className="block w-8 h-px bg-[#C8972B] mt-3" />
              </div>

              {/* ── HOVER: title + description centered ── */}
              <div className="absolute inset-0 z-10 mt-34 flex flex-col justify-center p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="block w-8 h-px bg-[#C8972B] mb-5" />
                <h3 className="font-[Cormorant_Garamond,serif]  text-2xl md:text-3xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/75 text-sm leading-7">
                  {service.description}
                </p>

                {/* arrow CTA */}
                <div className="mt-6 flex items-center gap-2 text-[#C8972B] text-xs tracking-[0.2em] uppercase">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
