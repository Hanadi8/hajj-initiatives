import { Hero } from "@/sections/Hero";
import { KpiStrip } from "@/sections/KpiStrip";
import { InitiativesSection } from "@/sections/InitiativesSection";
import { FeaturedInitiative } from "@/sections/FeaturedInitiative";
import { ImpactSection } from "@/sections/ImpactSection";
import { StatisticsPreview } from "@/sections/StatisticsPreview";
import { GallerySection } from "@/sections/GallerySection";
import { NewsSection } from "@/sections/NewsSection";
import { CTA } from "@/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <KpiStrip />
      <InitiativesSection />
      <FeaturedInitiative />
      <ImpactSection />
      <StatisticsPreview />
      <GallerySection />
      {/* <NewsSection /> */}
      <CTA />
    </>
  );
}
