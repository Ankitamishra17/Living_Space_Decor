import { designIdeas } from "@/data/designIdeas";
import { notFound } from "next/navigation";
import DesignHero from "@/components/common/DesignHero";
import MoodBoard from "@/components/common/MoodBoard";
import DesignGallery from "@/components/common/DesignGallery";
import FAQ from "@/components/common/FAQ";
import CTASection from "@/components/common/CTASection";

export function generateStaticParams() {
  return designIdeas.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const design = designIdeas.find((item) => item.slug === slug);

  if (!design) {
    notFound();
  }

  return (
    <>
      <DesignHero data={design} />
      <DesignGallery data={design}/>
      <MoodBoard data={design} />
      <FAQ data={design}/>
      <CTASection data={design}/>
      
    </>
  );
}
