"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DesignGallery({ data }) {
  const images = data?.moodboard || [];
  const heading = data?.heading || "Explore Our Design Collections";
  const description =
    data?.description ||
    "Discover stunning interior designs that blend elegance with functionality.";
  const buttonText = data?.buttonText || "Explore";
  const buttonLink = data?.buttonLink || "/portfolio";

  // ── Responsive visible-slide count ──
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(2);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const hasEnoughImages = images.length > visibleCount;

  // Real gap size in px for each breakpoint (matches gap-4 / md:gap-6 / lg:gap-8).
  // The old mapping only distinguished 16 vs 24, so desktop (visibleCount = 4,
  // gap-8 = 32px) was silently using the wrong value and slides didn't line
  // up with the true 32px gap.
  const currentGapPx = visibleCount === 2 ? 16 : visibleCount === 3 ? 24 : 32;

  // Extend the track with a clone of the leading slides at the end,
  // so we can slide "past" the last real image into a clone, then
  // snap back to index 0 invisibly — no blank space, no visible jump.
  const extendedImages = hasEnoughImages
    ? [...images, ...images.slice(0, visibleCount)]
    : images;

  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const itemWidthPercent = 100 / visibleCount;

  // ── Pixel-accurate slide pitch (item width + gap) ──
  // Percentage-based translateX doesn't know about the flex `gap`, so it
  // consistently undershoots by (gap / visibleCount) on every step, and the
  // error compounds each autoslide tick. Measuring the real distance between
  // two rendered slides gives the exact pitch regardless of gap/width, so
  // each step moves precisely one card — no drift, no misalignment.
  const [slideWidth, setSlideWidth] = useState(0);

  const measureSlideWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return;
    const first = track.children[0];
    const second = track.children[1];
    const pitch = second.offsetLeft - first.offsetLeft;
    if (pitch > 0) setSlideWidth(pitch);
  }, []);

  useLayoutEffect(() => {
    measureSlideWidth();
  }, [measureSlideWidth, visibleCount, images.length]);

  useEffect(() => {
    window.addEventListener("resize", measureSlideWidth);
    return () => window.removeEventListener("resize", measureSlideWidth);
  }, [measureSlideWidth]);

  const goNext = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setWithTransition(true);
    setIndex((prev) => {
      if (prev === 0) {
        // Jump instantly to the "virtual" end, then animate back one step
        setWithTransition(false);
        return images.length;
      }
      return prev - 1;
    });
  }, [images.length]);

  // After jumping instantly to the virtual end (no transition),
  // re-enable transition on next tick and step back by one.
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
        setIndex(images.length - 1);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition, images.length]);

  // When we slide past the last real image (into the cloned set),
  // snap back to index 0 without a visible transition.
  const handleTransitionEnd = () => {
    if (index >= images.length) {
      setWithTransition(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!withTransition && index === 0) {
      const raf = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition, index]);

  // ── Autoslide ──
  const startAutoSlide = useCallback(() => {
    if (!hasEnoughImages) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goNext();
    }, 3200);
  }, [goNext, hasEnoughImages]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, [startAutoSlide]);

  const handleManualNav = (fn) => {
    fn();
    startAutoSlide(); // reset the timer so it doesn't jump right after a manual click
  };

  const ImageCard = ({ src, priority = false }) => (
    <div className="relative overflow-hidden bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-shadow h-[260px] md:h-[300px] w-full">
      <Image
        src={src}
        alt="Design"
        fill
        priority={priority}
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <section className="py-24 bg-[#3D1F0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl sm:text-xl lg:text-5xl font-serif text-white leading-tight mb-4">
              {heading}
            </h2>
            <p className="text-sm text-[#ddd8ce] mb-2 max-w-xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arrows */}
          {hasEnoughImages && (
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => handleManualNav(goPrev)}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-[#C8972B]/40 flex items-center justify-center text-[#C8972B] hover:bg-[#C8972B] hover:text-[#3D1F0D] transition-colors duration-300"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                onClick={() => handleManualNav(goNext)}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-[#C8972B]/40 flex items-center justify-center text-[#C8972B] hover:bg-[#C8972B] hover:text-[#3D1F0D] transition-colors duration-300"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>
          )}
        </div>

        {/* Sliding Gallery */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex gap-4 md:gap-6 lg:gap-8"
            style={{
              transform: slideWidth
                ? `translateX(-${index * slideWidth}px)`
                : `translateX(-${index * itemWidthPercent}%)`,
              transition: withTransition ? "transform 0.6s ease" : "none",
            }}
          >
            {extendedImages.map((image, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  width: `calc(${itemWidthPercent}% - ${
                    ((visibleCount - 1) / visibleCount) * currentGapPx
                  }px)`,
                }}
              >
                <ImageCard src={image} priority={i < visibleCount} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
