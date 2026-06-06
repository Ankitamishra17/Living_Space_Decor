"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  Search,
} from "lucide-react";
import ConsultationModal from "@/components/common/ConsultationModal";
import { AnimatedSearchBar } from "@/components/common/AnimatedSearchBar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    submenu: [
      {
        name: "Interior Design",
        href: "/services/interior-design",
      },
      {
        name: "Modular Kitchen",
        href: "/services/modular-kitchen",
      },
      {
        name: "Turnkey Project",
        href: "/services/turnkey-projects",
      },
      {
        name: "Architecture",
        href: "/services/architecture",
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      {/* ── TOP CONTACT BAR WITH ANIMATED SEARCH ── */}
      <div className="w-full bg-[#2c2c2c] border-b border-[#F5EBE0]/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-10 text-xs text-[#F5EBE0]/80">
            {" "}
            {/* tagline */}
            {/* <span className="sm:block tracking-widest  text-[10px] lg:text-[12px] text-[#C8972B]/80 font-medium whitespace-nowrap flex-shrink-0">
              livingdecor@gmail.com
            </span> */}
            <div className="justify-self-start">
              <span className="tracking-widest text-[10px] lg:text-[12px] text-[#C8972B]/80 font-medium whitespace-nowrap">
                info@livingspacedecor.com
              </span>
            </div>
            {/* Animated Search Bar */}
            <div className="justify-self-center">
              <AnimatedSearchBar onSearch={handleSearch} />
            </div>
            {/* contact links */}
            <div className="flex items-center gap-1 ml-auto flex-shrink-0">
              <a
                href="tel:+918826606869"
                className="flex items-center gap-1.5 ml-8 px-3 py-1 rounded hover:bg-white/10 transition-colors duration-200 text-[#C8972B]"
              >
                <Phone size={10} className="text-[#C8972B]" />
                <span className=" lg:inline text-[8px] lg:text-[12px]">
                  +91 8826606869
                </span>
              </a>

              <span className="hidden sm:block text-white/20 select-none">
                |
              </span>

              <a
                href="https://wa.me/+918826606869"
                target="_blank"
                rel="noreferrer"
                className=" hidden sm:flex  items-center gap-1.5 px-3 py-1 rounded hover:bg-white/10 transition-colors duration-200 text-[#25D366]"
              >
                <MessageCircle size={13} />
                <span className="lg:inline text-[8px] lg:text-[12px]">+91 8826606869</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={`sticky top-0 z-50 bg-[#F5EBE0] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(61,31,13,0.10)]" : "shadow-none"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[62px]">
            {/* ── LOGO ── */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Living Space Decor"
                width={300}
                height={80}
                priority
                className="h-30 w-auto object-contain"
              />
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <div key={item.name} className="relative group">
                  {!item.submenu ? (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 group whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#C8972B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  ) : (
                    <>
                      {/* Dropdown Button */}
                      <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 whitespace-nowrap">
                        {item.name}
                        <ChevronDown size={14} />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full hidden group-hover:block min-w-[240px] bg-white shadow-xl rounded-md overflow-hidden border border-[#3D1F0D]/10 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-3 text-[13px] text-[#3D1F0D]/80 hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* ── DESKTOP SEARCH + CTA ── */}
            <div className="hidden lg:flex items-center  gap-3 flex-shrink-0">
              {/* CTA Button */}
              <button
                onClick={() => setShowConsultationModal(true)}
                className="flex items-center gap-2 bg-[#3D1F0D] hover:bg-[#C8972B] text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-4 py-2.5 rounded-[3px] transition-colors whitespace-nowrap"
              >
                Book Free Consultation
              </button>
            </div>

            {/* ── MOBILE RIGHT ── */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Mobile Search Icon */}
              {/* <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-[3px] bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/15 text-[#3D1F0D] transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button> */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="w-9 h-9 flex items-center justify-center rounded-[3px] bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/15 text-[#3D1F0D] transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {isOpen && (
          <div
            className="lg:hidden overflow-hidden"
            style={{
              animation: "slideDown 0.3s ease-out forwards",
            }}
          >
            <div className="border-t border-[#3D1F0D]/10 bg-white">
              <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-0.5">
                {navLinks.map((item) => (
                  <div key={item.name}>
                    {!item.submenu ? (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="flex items-center justify-between px-3 py-3 rounded-[4px] text-[#3D1F0D] font-medium text-[14px] hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div className="px-3 py-3">
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="w-full flex items-center justify-between text-[#3D1F0D] font-medium text-[14px]"
                        >
                          <span>{item.name}</span>

                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileServicesOpen
                              ? "max-h-[300px] opacity-100 mt-3"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-3 flex flex-col">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="py-2 text-[13px] text-[#3D1F0D]/70 hover:text-[#C8972B]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* divider */}
                <div className="my-2 border-t border-[#3D1F0D]/10" />

                {/* contact actions */}
                <a
                  href="tel:+918826606869"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] text-[#3D1F0D]/75 text-sm hover:bg-[#F5EBE0] transition-colors"
                >
                  <Phone size={16} className="text-[#C8972B]" />
                  +918826606869
                </a>

                <a
                  href="https://wa.me/+918826606869"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] text-[#25D366] text-sm hover:bg-[#F5EBE0] transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>

                {/* full-width CTA */}
                <button
                  onClick={() => {
                    setShowConsultationModal(true);
                    setIsOpen(false);
                  }}
                  className="mt-2 w-full text-center bg-[#3D1F0D] hover:bg-[#C8972B] text-white text-[12px] font-semibold uppercase tracking-[0.1em] py-3 rounded-[3px] transition-colors"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
