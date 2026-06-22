'use client';

import HeroSection from '@/components/service/wardrobes/HeroSection';
import WardrobeShowcaseSection from '@/components/service/wardrobes/WardrobeShowcaseSection';import DesignVariations from '@/components/service/wardrobes/Accessories';
import MaterialsAndFinishes from '@/components/service/wardrobes/MaterialsAndFinishes';
import OurProject from '@/components/service/wardrobes/OurProject';
import CTASection from '@/components/service/wardrobes/CTASection';
import Accessories from '@/components/service/wardrobes/Accessories';
import FAQSection from '@/components/service/wardrobes/FAQSection';
export default function Home() {
  return (
    <main>
      
      <HeroSection />   
      <WardrobeShowcaseSection />    
      <MaterialsAndFinishes />
      <Accessories />
      <OurProject /> 
      <CTASection />
      <FAQSection/>
    </main>
  );
}