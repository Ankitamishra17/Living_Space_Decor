"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function DesignHero({ data }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Build breadcrumb trail from the URL: Home / Design Ideas / Living Room
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      const isLast = idx === segments.length - 1;
      const label =
        isLast && data?.title
          ? data.title
          : seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return { label, href };
    }),
  ];

  return (
    <section>
      <div className="mx-auto">
        {/* Hero Image */}
        <div className="relative min-h-screen overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#3D1F0D]/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center mt-34 lg:mt-6 text-center px-4">
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] md:text-xs tracking-[0.15em] uppercase">
                  {breadcrumbs.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;
                    return (
                      <li
                        key={crumb.href}
                        className="flex items-center gap-1.5"
                      >
                        {isLast ? (
                          <span className="text-[#C8972B] font-medium">
                            {crumb.label}
                          </span>
                        ) : (
                          <Link
                            href={crumb.href}
                            className="text-[#F5EBE0]/75 hover:text-[#C8972B] transition-colors duration-300"
                          >
                            {crumb.label}
                          </Link>
                        )}
                        {!isLast && (
                          <ChevronRight
                            size={12}
                            className="text-[#F5EBE0]/40"
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>

              <p className="text-[#F5EBE0] uppercase tracking-[2px] text-xs md:text-sm mb-4">
                Interior Design Studio
              </p>

              <h1 className="text-[#F5EBE0] font-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
                {data.title}
              </h1>

              <p className="text-[#F5EBE0]/90 mt-4 text-sm md:text-lg font-serif  tracking-[1.5px]">
                {data.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
