"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#F7F2EB] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* FORM */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 shadow-sm">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#C8972B] text-[11px] md:text-xs mb-3">
              Contact Us
            </p>

            <h2 className="font-[Cormorant_Garamond,serif] text-[38px] sm:text-[44px] md:text-5xl text-[#2A1506] mb-8 leading-tight">
              Start Your Project
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#D9CBB8] px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#C8972B] text-sm"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#D9CBB8] px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#C8972B] text-sm"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border border-[#D9CBB8] px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#C8972B] text-sm"
              />

              <select className="w-full border border-[#D9CBB8] px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[#C8972B] text-sm">
                <option>Select Project Type</option>
                <option>Interior Design</option>
                <option>Modular Kitchen</option>
                <option>Turnkey Project</option>
                <option>Architecture</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border border-[#D9CBB8] px-4 sm:px-5 py-3 sm:py-4 outline-none resize-none focus:border-[#C8972B] text-sm"
              />

              <button
                type="submit"
                className="
                  bg-[#C8972B]
                  hover:bg-[#3D1F0D]
                  text-white
                  px-6 sm:px-8
                  py-3 sm:py-4
                  uppercase
                  tracking-[0.15em]
                  text-xs sm:text-sm
                  transition-colors
                  duration-300
                "
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center lg:pl-8">
            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#C8972B] text-[11px] md:text-xs mb-3">
              Contact Details
            </p>

            <h2 className="font-[Cormorant_Garamond,serif] text-[38px] sm:text-[44px] md:text-5xl text-[#2A1506] mb-8 leading-tight">
              Let's Talk
            </h2>

            <p className="text-[#6E6258] leading-7 md:leading-8 mb-10 text-sm md:text-base max-w-lg">
              Ready to transform your space? Contact us today for a free
              consultation and let's create something beautiful together.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#C8972B]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#C8972B]" />
                </div>

                <div>
                  <p className="font-semibold text-[#2A1506] mb-1">Phone</p>

                  <p className="text-[#6E6258] text-sm md:text-base">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#C8972B]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-[#C8972B]" />
                </div>

                <div>
                  <p className="font-semibold text-[#2A1506] mb-1">WhatsApp</p>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6E6258] text-sm md:text-base hover:text-[#C8972B] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#C8972B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#C8972B]" />
                </div>

                <div>
                  <p className="font-semibold text-[#2A1506] mb-1">Address</p>

                  <p className="text-[#6E6258] text-sm md:text-base">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
