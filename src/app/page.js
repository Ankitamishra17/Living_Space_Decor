import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import TrustStrip from "@/components/home/TrustStrip";
import CTASection from "@/components/home/CTASection";
import WhyChoose from "@/components/home/WhyChoose";
import UpcomingProjects from "@/components/home/UpcomingProjects";


export const metadata = {
  title: "Interior Designer | Living Space Decor",

  description:
    "Living Space Decor is a leading interior design company in Noida specializing in modular kitchens, wardrobes, living rooms, bedrooms, turnkey interiors, furniture design, and complete home renovation services.",

  keywords: [
    "Interior Designers in Noida",
    "Interior Design Company",
    "Home Interior Design",
    "Modular Kitchen Design",
    "Wardrobe Design",
    "Living Room Interior",
    "Bedroom Interior Design",
    "Turnkey Interior Solutions",
    "Furniture Design",
    "Interior Decorators Noida",
    "Luxury Home Interiors",
    "Living Space Decor",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Interior Designers in Noida | Living Space Decor",
    description:
      "Transform your dream home with expert interior design solutions. Modular kitchens, wardrobes, furniture, turnkey interiors, and complete home renovation services.",
    url: "https://livingspacedecor.in/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <UpcomingProjects/>
      <Portfolio />
      <WhyChoose />
      <TrustStrip />
      <CTASection />
      <Testimonials />
    </>
  );
}
