// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import ConsultationModal from "@/components/common/ConsultationModal";
// import { AnimatedSearchBar } from "@/components/common/AnimatedSearchBar";



// const navLinks = [
//   { name: "Home", href: "/" },

//   { name: "About", href: "/about" },

//   {
//     name: "Services",
//     submenu: [
//       {
//         name: "Design Ideas",
//         href: "/interior-design-ideas",
//         submenu: [
//           {
//             name: "Living Room Interior Designs",
//             href: "/interior-design-ideas/living-room",
//           },
//           {
//             name: "Bedroom Interior Designs",
//             href: "/interior-design-ideas/bedroom",
//           },
//           {
//             name: "Kids Room Interior Designs",
//             href: "/interior-design-ideas/kids-room",
//           },
          
         
//           {
//             name: "Pooja Room Designs",
//             href: "/interior-design-ideas/pooja-room",
//           },
//           {
//             name: "Dining Room Interior Designs",
//             href: "/interior-design-ideas/dining-room",
//           },
//           {
//             name: "Bathroom Interior Designs",
//             href: "/interior-design-ideas/bathroom",
//           },
//           {
//             name: "Home Office Interior Designs",
//             href: "/interior-design-ideas/home-office",
//           },
//           {
//             name: "Balcony & Terrace Designs",
//             href: "/interior-design-ideas/balcony-terrace",
//           },
//         ],
//       },

//       {
//         name: "Modular Kitchen",
//         href: "/services/modular-kitchen",
//         submenu: [
//           {
//             name: "Modular Kitchen Designs",
//             href: "/services/modular-kitchen/designs",
//           },
//           {
//             name: "Kitchen Cost Calculator",
//             href: "/services/modular-kitchen/cost-calculator",
//           },
//           {
//             name: "Modern Kitchen Design Ideas",
//             href: "/services/modular-kitchen/design-ideas",
//           },
//         ],
//       },

//       {
//         name: "Wardrobes",
//         href: "/services/wardrobes",
//         submenu: [
//           {
//             name: "Custom Wardrobe Designs",
//             href: "/services/wardrobes/custom-designs",
//           },
//           {
//             name: "Wardrobe Cost Calculator",
//             href: "/services/wardrobes/cost-calculator",
//           },
//         ],
//       },

//       {
//         name: "Lights",
//         href: "/services/lights",
//       },

//       {
//         name: "Turnkey Projects",
//         href: "/services/turnkey-projects",
//       },

//       {
//         name: "Architecture & Construction",
//         href: "/services/architecture-construction",
//       },

//       {
//         name: "Furniture",
//         href: "/services/furniture",
//       },
//     ],
//   },

//   {
//     name: "Portfolio",
//     href: "/portfolio",
//   },

//   {
//     name: "Blog",
//     href: "/blog",
//   },

//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showConsultationModal, setShowConsultationModal] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleSearch = (query) => {
//     console.log("Searching for:", query);
//   };

//   return (
//     <>
//       {/* ── TOP CONTACT BAR WITH ANIMATED SEARCH ── */}
//       <div className="w-full bg-[#2c2c2c] border-b border-[#F5EBE0]/5">
//         <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-[1fr_auto_1fr] items-center h-10 text-xs text-[#F5EBE0]/80">
//             {" "}
//             {/* tagline */}
//             {/* <span className="sm:block tracking-widest  text-[10px] lg:text-[12px] text-[#C8972B]/80 font-medium whitespace-nowrap flex-shrink-0">
//               livingdecor@gmail.com
//             </span> */}
//             <div className="justify-self-start">
//               <span className="tracking-widest text-[10px] lg:text-[12px] text-[#C8972B]/80 font-medium whitespace-nowrap">
//                 info@livingspacedecor.com
//               </span>
//             </div>
//             {/* Animated Search Bar */}
//             <div className="justify-self-center">
//               <AnimatedSearchBar onSearch={handleSearch} />
//             </div>
//             {/* contact links */}
//             <div className="flex items-center gap-1 ml-auto flex-shrink-0">
//               <a
//                 href="tel:+918826606869"
//                 className="flex items-center gap-1.5 ml-8 px-3 py-1 rounded hover:bg-white/10 transition-colors duration-200 text-[#C8972B]"
//               >
//                 <Phone size={10} className="text-[#C8972B]" />
//                 <span className=" lg:inline text-[8px] lg:text-[12px]">
//                   +91 8826606869
//                 </span>
//               </a>

//               <span className="hidden sm:block text-white/20 select-none">
//                 |
//               </span>

//               <a
//                 href="https://wa.me/+918826606869"
//                 target="_blank"
//                 rel="noreferrer"
//                 className=" hidden sm:flex  items-center gap-1.5 px-3 py-1 rounded hover:bg-white/10 transition-colors duration-200 text-[#25D366]"
//               >
//                 <FaWhatsapp size={13} />
//                 <span className="lg:inline text-[8px] lg:text-[12px]">
//                   +91 8826606869
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN NAVBAR ── */}
//       <header
//         className={`sticky top-0 z-50 bg-[#F5EBE0] transition-shadow duration-300 ${
//           scrolled ? "shadow-[0_2px_24px_rgba(61,31,13,0.10)]" : "shadow-none"
//         }`}
//       >
//         <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
//           <div className="flex items-center justify-between h-[62px]">
//             {/* ── LOGO ── */}
//             <Link
//               href="/"
//               className="flex items-center gap-3 group flex-shrink-0"
//             >
//               <Image
//                 src="/logo.png"
//                 alt="Living Space Decor"
//                 width={300}
//                 height={80}
//                 priority
//                 className="h-30 w-auto object-contain"
//               />
//             </Link>

//             {/* ── DESKTOP NAV ── */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {navLinks.map((item) => (
//                 <div key={item.name} className="relative group">
//                   {!item.submenu ? (
//                     <Link
//                       href={item.href}
//                       className="relative px-4 py-2 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 group whitespace-nowrap"
//                     >
//                       {item.name}
//                       <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#C8972B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                     </Link>
//                   ) : (
//                     <>
//                       {/* Dropdown Button */}
//                       <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 whitespace-nowrap">
//                         {item.name}
//                         <ChevronDown size={14} />
//                       </button>

//                       {/* Dropdown Menu */}
//                      <div className="absolute left-0 top-full hidden group-hover:block min-w-[260px] bg-white shadow-xl rounded-md border border-[#3D1F0D]/10 z-50">
//   {item.submenu.map((subItem) => (
//     <div key={subItem.name} className="relative group/submenu">
//       <Link
//         href={subItem.href}
//         className="flex items-center justify-between px-5 py-3 text-[13px] text-[#3D1F0D]/80 hover:bg-[#F5EBE0] hover:text-[#C8972B]"
//       >
//         {subItem.name}

//         {subItem.submenu && (
//           <ChevronDown
//             size={14}
//             className="-rotate-90"
//           />
//         )}
//       </Link>

//       {/* Child Menu */}
//       {subItem.submenu && (
//         <div className="absolute left-full top-0 hidden group-hover/submenu:block min-w-[320px] bg-white shadow-xl rounded-md border border-[#3D1F0D]/10">
//           {subItem.submenu.map((child) => (
//             <Link
//               key={child.name}
//               href={child.href}
//               className="block px-5 py-3 text-[13px] text-[#3D1F0D]/80 hover:bg-[#F5EBE0] hover:text-[#C8972B]"
//             >
//               {child.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* ── DESKTOP SEARCH + CTA ── */}
//             <div className="hidden lg:flex items-center  gap-3 flex-shrink-0">
//               {/* CTA Button */}
//               <button
//                 onClick={() => setShowConsultationModal(true)}
//                 className="flex items-center gap-2 bg-[#3D1F0D] hover:bg-[#C8972B] text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-4 py-2.5 rounded-[3px] transition-colors whitespace-nowrap"
//               >
//                 Book Free Consultation
//               </button>
//             </div>

//             {/* ── MOBILE RIGHT ── */}
//             <div className="flex lg:hidden items-center gap-2">
//               {/* Mobile Search Icon */}
//               {/* <button
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 className="w-9 h-9 flex items-center justify-center rounded-[3px] bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/15 text-[#3D1F0D] transition-colors"
//                 aria-label="Search"
//               >
//                 <Search size={18} />
//               </button> */}

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label="Toggle menu"
//                 className="w-9 h-9 flex items-center justify-center rounded-[3px] bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/15 text-[#3D1F0D] transition-colors"
//               >
//                 {isOpen ? <X size={20} /> : <Menu size={20} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ── MOBILE MENU ── */}
//         {isOpen && (
//           <div
//             className="lg:hidden overflow-hidden"
//             style={{
//               animation: "slideDown 0.3s ease-out forwards",
//             }}
//           >
//             <div className="border-t border-[#3D1F0D]/10 bg-white">
//               <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-0.5">
//                 {navLinks.map((item) => (
//                   <div key={item.name}>
//                     {!item.submenu ? (
//                       <Link
//                         href={item.href}
//                         onClick={() => {
//                           setIsOpen(false);
//                           setMobileServicesOpen(false);
//                         }}
//                         className="flex items-center justify-between px-3 py-3 rounded-[4px] text-[#3D1F0D] font-medium text-[14px] hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors duration-150"
//                       >
//                         {item.name}
//                       </Link>
//                     ) : (
//                       <div className="px-3 py-3">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             setMobileServicesOpen(!mobileServicesOpen)
//                           }
//                           className="w-full flex items-center justify-between text-[#3D1F0D] font-medium text-[14px]"
//                         >
//                           <span>{item.name}</span>

//                           <ChevronDown
//                             size={14}
//                             className={`transition-transform duration-300 ${
//                               mobileServicesOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>

//                         <div
//                           className={`overflow-hidden transition-all duration-300 ${
//                             mobileServicesOpen
//                               ? "max-h-[300px] opacity-100 mt-3"
//                               : "max-h-0 opacity-0"
//                           }`}
//                         >
//                           <div className="ml-3 flex flex-col">
//                             {item.submenu.map((subItem) => (
//                               <Link
//                                 key={subItem.name}
//                                 href={subItem.href}
//                                 onClick={() => {
//                                   setIsOpen(false);
//                                   setMobileServicesOpen(false);
//                                 }}
//                                 className="py-2 text-[13px] text-[#3D1F0D]/70 hover:text-[#C8972B]"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {/* divider */}
//                 <div className="my-2 border-t border-[#3D1F0D]/10" />

//                 {/* contact actions */}
//                 <a
//                   href="tel:+918826606869"
//                   className="flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] text-[#3D1F0D]/75 text-sm hover:bg-[#F5EBE0] transition-colors"
//                 >
//                   <Phone size={16} className="text-[#C8972B]" />
//                   +918826606869
//                 </a>

//                 <a
//                   href="https://wa.me/+918826606869"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] text-[#25D366] text-sm hover:bg-[#F5EBE0] transition-colors"
//                 >
//                   <FaWhatsapp size={16} />
//                   Chat on WhatsApp
//                 </a>

//                 {/* full-width CTA */}
//                 <button
//                   onClick={() => {
//                     setShowConsultationModal(true);
//                     setIsOpen(false);
//                   }}
//                   className="mt-2 w-full text-center bg-[#3D1F0D] hover:bg-[#C8972B] text-white text-[12px] font-semibold uppercase tracking-[0.1em] py-3 rounded-[3px] transition-colors"
//                 >
//                   Book Free Consultation
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//       <ConsultationModal
//         isOpen={showConsultationModal}
//         onClose={() => setShowConsultationModal(false)}
//       />

//       <style jsx>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </>
//   );
// }




"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "@/components/common/ConsultationModal";
import { AnimatedSearchBar } from "@/components/common/AnimatedSearchBar";

const navLinks = [
  // { name: "About", href: "/about" },
  {
    name: "Design Ideas",
    href: "/services/interior-design",
    submenu: [
      { name: "Living Room Designs", href: "/modular-kitchen" },
      { name: "Kids Room Designs", href: "/modular-kitchen-ideas" },
      { name: "Modular Kitchen Designs", href: "/kitchen-cost-calculator" },
      { name: "Mandir Designs", href: "/modular-kitchen" },
      { name: "Dining Room Designs", href: "/kitchen-cost-calculator" },
      { name: "Bedroom Design", href: "/modular-kitchen" },
      { name: "Bathroom Designs", href: "/modular-kitchen-ideas" },
      { name: "Home Office Design", href: "/kitchen-cost-calculator" },
      { name: "Balcony & Terrace Designs", href: "/modular-kitchen-ideas" },
    ],
  },
  {
    name: "Modular Kitchen",
    href: "/services/modular-kitchen",
    submenu: [
      { name: "Modular Kitchens", href: "/modular-kitchen" },
      { name: "Kitchen Cost Calculator", href: "/kitchen-cost-calculator" },
      { name: "Modular Kitchen Design Ideas", href: "/modular-kitchen-ideas" },
    ],
  },
  {
    name: "Wardrobes",
    href: "/services/wardrobes",
    submenu: [
      { name: "Custom Wardrobe", href: "/custom-wardrobe" },
      { name: "Wardrobe-Cost Calculator", href: "/wardrobe-cost-calculator" },
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
      {/* ── TOP CONTACT BAR ── */}
      <div className="w-full bg-[#F5EBE0]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] h-20 -mb-2 -mt-4 items-center gap-3 sm:gap-0 py-3 sm:py-3.5">
            {/* LEFT - LOGO */}
            <div className="justify-self-start w-full sm:w-auto h-18">
              <Link
                href="/"
                className="flex items-center gap-3 group flex-shrink-0 justify-center sm:justify-start hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="Living Space Decor"
                  width={300}
                  height={80}
                  priority
                  className="h-10 sm:h-22 lg:h-30 -mt-6 w-auto object-contain"
                />
              </Link>
            </div>

            {/* CENTER - SEARCH BAR DESKTOP */}
            <div className="justify-self-center hidden sm:block w-full -ml-6 sm:w-auto">
              <AnimatedSearchBar onSearch={handleSearch} />
            </div>

            {/* RIGHT - CTA */}
            <button
              onClick={() => setShowConsultationModal(true)}
              className="w-full sm:w-auto justify-self-end bg-[#3D1F0D]  hover:bg-[#B8851F] text-white text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* SEARCH BAR MOBILE */}
          <div className="sm:hidden pb-3">
            <AnimatedSearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={`sticky top-0 z-40 bg-[#F5EBE0] transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(61,31,13,0.12)]"
            : "shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-16">
            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
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
                      <button className="flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium text-[#3D1F0D]/75 hover:text-[#C8972B] transition-colors duration-200 whitespace-nowrap group">
                        {item.name}
                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </button>

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
                                transition={{ duration: 0.2, delay: idx * 0.04 }}
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

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D1F0D]/8 hover:bg-[#3D1F0D]/12 text-[#3D1F0D] transition-colors"
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
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#3D1F0D]/10"
            >
              <div className="bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
                  {navLinks.map((item) => (
                    <div key={item.name}>
                      {!item.submenu ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-4 py-3.5 rounded-sm text-[#3D1F0D] font-medium text-[14px] hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors duration-150"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="px-4 py-3.5">
                          <button
                            type="button"
                            onClick={() => toggleMobileSubmenu(item.name)}
                            className="w-full flex items-center justify-between text-[#3D1F0D] font-medium text-[14px] hover:text-[#C8972B] transition-colors"
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{
                                rotate: mobileSubmenuOpen[item.name] ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileSubmenuOpen[item.name] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-2 ml-4 flex flex-col gap-0.5"
                              >
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2.5 text-[13px] text-[#3D1F0D]/70 hover:text-[#C8972B] hover:pl-2 transition-all duration-150"
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

                  {/* DIVIDER */}
                  <div className="my-3 border-t border-[#3D1F0D]/10" />

                  {/* CONTACT ACTIONS */}
                  <a
                    href="tel:+918826606869"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm text-[#3D1F0D]/75 text-[13px] hover:bg-[#F5EBE0] hover:text-[#C8972B] transition-colors"
                  >
                    <Phone size={18} className="text-[#C8972B] flex-shrink-0" />
                    <span className="truncate font-medium">+918826606869</span>
                  </a>

                  <a
                    href="https://wa.me/+918826606869"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm text-[#25D366] text-[13px] hover:bg-[#F5EBE0] transition-colors"
                  >
                    <FaWhatsapp size={18} className="flex-shrink-0" />
                    <span className="truncate font-medium">Chat on WhatsApp</span>
                  </a>

                  {/* CTA */}
                  <button
                    onClick={() => {
                      setShowConsultationModal(true);
                      setIsOpen(false);
                    }}
                    className="mt-2 w-full bg-[#C8972B] hover:bg-[#B8851F] text-white text-[12px] font-semibold uppercase tracking-[0.12em] py-3.5 rounded-sm transition-all duration-300 hover:shadow-lg"
                  >
                    Book Free Consultation
                  </button>
                </div>
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