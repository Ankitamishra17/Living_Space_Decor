"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-[#F8F6F1] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-sm bg-[#F2EBD9]">
          <div className="grid lg:grid-cols-2">
            {/* Content Side */}
            <div className="flex items-center order-2 lg:order-1">
              <div className="w-full px-6 sm:px-8 lg:px-20 py-12 md:py-16 lg:py-24">
                {/* Eyebrow */}
                <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-5 mb-8 md:mb-10">
                  <div className="h-px w-8 md:w-16 bg-[#B8954A]" />

                  <span className="uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em] text-[#B8954A] text-[10px] sm:text-xs text-center">
                    Begin Your Journey
                  </span>

                  <div className="h-px w-8 md:w-16 bg-[#B8954A]" />
                </div>

                {/* Heading */}
                <h2 className="font-serif text-[#231A14] text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-tight text-center lg:text-left">
                  Ready to{" "}
                  <span className="italic text-[#C59A43]">Transform</span>
                  <br />
                  Your Space?
                </h2>

                {/* Description */}
                <p className="mt-6 md:mt-8 text-[#6A5F55] leading-7 md:leading-8 max-w-xl text-sm sm:text-base text-center lg:text-left">
                  Schedule a complimentary consultation and let’s begin crafting
                  an interior that reflects your lifestyle, personality, and
                  aspirations.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start items-center gap-6 md:gap-8 mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[#DCCFAF]">
                  <div className="text-center">
                    <h3 className="text-[#C59A43] text-3xl md:text-4xl font-light">
                      250+
                    </h3>

                    <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-[#9A8D7E] mt-2">
                      Projects
                    </p>
                  </div>

                  <div className="hidden md:block h-14 w-px bg-[#DCCFAF]" />

                  <div className="text-center">
                    <h3 className="text-[#C59A43] text-3xl md:text-4xl font-light">
                      15+
                    </h3>

                    <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-[#9A8D7E] mt-2">
                      Years
                    </p>
                  </div>

                  <div className="hidden md:block h-14 w-px bg-[#DCCFAF]" />

                  <div className="text-center">
                    <h3 className="text-[#C59A43] text-3xl md:text-4xl font-light">
                      40+
                    </h3>

                    <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs text-[#9A8D7E] mt-2">
                      Awards
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-12">
                  <button
                    className="
                      group
                      w-full sm:w-auto
                      bg-[#2B1A0D]
                      text-white
                      px-6 md:px-8
                      py-4
                      uppercase
                      tracking-[0.08em] md:tracking-[0.1em]
                      text-[11px] md:text-xs
                      transition
                      hover:bg-[#3A2412]
                    "
                  >
                    Book Free Consultation
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <button
                    className="
                      w-full sm:w-auto
                      border
                      border-[#D7C8A3]
                      text-[#B8954A]
                      px-6
                      py-4
                      uppercase
                      tracking-[0.08em] md:tracking-[0.1em]
                      text-[11px] md:text-sm
                      transition
                      hover:bg-white
                    "
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1800"
                alt="Luxury Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F2EBD9]/70" />

              {/* Decorative Frame */}
              <div className="absolute inset-4 md:inset-8 border border-white/20" />

              {/* Year Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 border border-[#D7C8A3] bg-[#F4EFE4]/80 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3">
                <span className="tracking-[0.2em] md:tracking-[0.35em] text-[10px] md:text-xs text-[#B8954A] uppercase">
                  Est. 2008
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
