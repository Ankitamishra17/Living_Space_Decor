import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import TrustStrip from "@/components/home/TrustStrip";
import CTASection from "@/components/home/CTASection";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <TrustStrip />
      <Portfolio />
      <Services />
      <CTASection />
      <Testimonials />
    </>
  );
}
