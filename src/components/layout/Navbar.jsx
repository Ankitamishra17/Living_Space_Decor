"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Search, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "@/components/common/ConsultationModal";
import { AnimatedSearchBar } from "@/components/common/AnimatedSearchBar";

const navLinks = [
  // { name: "About", href: "/about" },
  {
    name: "Design Ideas",
    href: "/services/design-ideas",
    submenu: [
      {
        name: "Living Room Designs",
        href: "/services/design-ideas/living-room-design",
      },
      {
        name: "Kids Room Designs",
        href: "/services/design-ideas/kids-room-design",
      },
      { name: "Modular Kitchen Designs", href: "/services/modular-kitchen" },
      { name: "Mandir Designs", href: "/services/design-ideas/mandir-design" },
      {
        name: "Dining Room Designs",
        href: "/services/design-ideas/dining-room-design",
      },
      { name: "Bedroom Design", href: "/services/design-ideas/bedroom-design" },
      {
        name: "Bathroom Designs",
        href: "/services/design-ideas/bathroom-design",
      },
      {
        name: "Home Office Design",
        href: "/services/design-ideas/home-office-design",
      },
      {
        name: "Balcony & Terrace Designs",
        href: "/services/design-ideas/balcony-terrace-design",
      },
    ],
  },
  {
    name: "Modular Kitchen",
    href: "/services/modular-kitchen",
    submenu: [
      { name: "Modular Kitchens", href: "/services/modular-kitchen" },
      { name: "Kitchen Cost Calculator", href: "/kitchen-calculator" },
      { name: "Modular Kitchen Design Ideas", href: "/kitchen-design" },
    ],
  },
  {
    name: "Wardrobes",
    href: "/services/wardrobes",
    submenu: [
      { name: "Custom Wardrobe", href: "/services/wardrobes" },
      // { name: "Wardrobe-Cost Calculator", href: "/wardrobe-cost-calculator" },
    ],
  },
  { name: "Turnkey Project", href: "/services/turnkey-projects" },
  { name: "Lights", href: "/services/lights" },
  { name: "Architecture & Construction", href: "/services/architecture" },
  { name: "Furnitures", href: "/services/furnitures" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const toggleMobileSubmenu = (itemName) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <>
      {/* ── TOP CONTACT BAR - DESKTOP ONLY ── */}
      <div className="hidden lg:block w-full bg-[#F5EBE0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] gap-2 xs:gap-3 sm:gap-0 py-2.5 xs:py-3 sm:py-3.5 items-center">
            {/* LEFT - LOGO */}
            <div className="justify-self-start w-full sm:w-auto h-18">
              <Link
                href="/"
                className="flex items-center gap-2  -mt-6 xs:gap-3 group flex-shrink-0 justify-center sm:justify-start hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Living Space Decor"
                  width={300}
                  height={80}
                  priority
                  className="h-10 sm:h-12 lg:h-28 w-auto object-contain"
                />
              </Link>
            </div>

            {/* CENTER - SEARCH BAR */}
            <div className="justify-self-center hidden sm:block w-full -ml-6 sm:w-auto">
              <AnimatedSearchBar onSearch={handleSearch} />
            </div>

            {/* RIGHT - CTA */}
            <div className="justify-self-end flex items-center gap-4">
                <Link
                  href="/locations"
                  className="flex items-center gap-2 text-[#3D1F0D] hover:text-[#B8851F] transition"
                >
                  <MapPin size={24} />
                  
                </Link>
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="w-full sm:w-auto justify-self-end bg-[#3D1F0D] hover:bg-[#B8851F] text-white text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                >
                  Book Consultation
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={`sticky -mt-8 top-0 z-40 bg-[#F5EBE0] transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(61,31,13,0.12)]"
            : "shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18 lg:h-16">
            {/* ── LOGO - MOBILE & TABLET ── */}
            <div className="lg:hidden ">
              <Link
                href="/"
                className="flex items-center gap-2 group flex-shrink-0 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Living Space Decor"
                  width={300}
                  height={80}
                  priority
                  className="h-18 xs:h-18 sm:h-26 w-auto object-contain"
                />
              </Link>
            </div>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() =>
                    item.submenu && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {!item.submenu ? (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2.5 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 group whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-[#C8972B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  ) : (
                    <>
                      {/* DROPDOWN BUTTON */}
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 whitespace-nowrap group"
                      >
                        {item.name}
                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </Link>

                      {/* DROPDOWN MENU */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-1 min-w-[260px] bg-white rounded-lg shadow-xl border border-[#3D1F0D]/8 overflow-hidden"
                          >
                            {item.submenu.map((subItem, idx) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: idx * 0.04,
                                }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-5 py-3.5 text-[13px] text-[#3D1F0D]/75 hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-all duration-150 border-b border-[#F5EBE0] last:border-b-0"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* ── MOBILE & TABLET HAMBURGER ── */}
              <div className="lg:hidden flex items-center gap-2">
                  <Link
                    href="/locations"
                    className="w-11 h-11 flex items-center justify-center rounded-sm bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/12 text-[#3D1F0D] transition-colors"
                    aria-label="Location"
                  >
                    <MapPin size={20} />
                  </Link>

                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="lg:hidden w-11 h-11 xs:w-12 xs:h-12 flex items-center justify-center rounded-sm bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/12 text-[#3D1F0D] transition-colors"
                  >
                
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X size={22} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu size={22} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
              </div>
          </div>
        </div>

        {/* ── MOBILE & TABLET MENU ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#3D1F0D]/10 bg-white max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              <div className="max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-6 py-4 xs:py-5 flex flex-col gap-2">
                {/* NAVIGATION MENU */}
                <div className="flex flex-col gap-0.5">
                  {navLinks.map((item) => (
                    <div key={item.name}>
                      {!item.submenu ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-4 py-3 xs:py-3.5 rounded-sm text-[#3D1F0D] font-medium text-[13px] xs:text-[14px] hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors duration-150 min-h-[44px] xs:min-h-[48px]"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="px-3 xs:px-4 py-1.5 xs:py-2">
                          <button
                            type="button"
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className="w-full flex items-center justify-between px-1 py-3 xs:py-3.5 text-[#3D1F0D] font-medium text-[13px] xs:text-[14px] hover:text-[#C8972B] transition-colors min-h-[44px] xs:min-h-[48px]"
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{
                                rotate: mobileSubmenuOpen[item.name] ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileSubmenuOpen[item.name] && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "auto",
                                }}
                                exit={{
                                  opacity: 0,
                                  height: 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-1 ml-4 xs:ml-6 flex flex-col gap-1"
                              >
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2.5 xs:py-3 px-2 text-[12px] xs:text-[13px] text-[#3D1F0D]/75 hover:text-[#C8972B] hover:pl-3 xs:hover:pl-4 transition-all duration-150 rounded-sm hover:bg-[#F5EBE0]/50 min-h-[40px] xs:min-h-[44px] flex items-center"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="my-2 xs:my-3 border-t border-[#3D1F0D]/10" />

                {/* CTA */}
                <button
                  onClick={() => {
                    setShowConsultationModal(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-[#3D1F0D] hover:bg-[#3D1F0D] text-white text-[12px] xs:text-[13px] font-semibold uppercase tracking-[0.12em] py-3 xs:py-3.5 rounded-sm transition-all duration-300 hover:shadow-lg min-h-[44px] xs:min-h-[48px] flex items-center justify-center"
                >
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />
    </>
  );
}
