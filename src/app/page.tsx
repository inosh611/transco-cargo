import { createMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import BrandMarquee from "@/components/sections/BrandMarquee";
import TrackingSection from "@/components/sections/TrackingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import LatestBlogsSection from "@/components/sections/LatestBlogsSection";
import TeamSection from "@/components/sections/TeamSection";
import RelocationsStats from "@/components/sections/relocations/RelocationsStats";
export const metadata = createMetadata({
  title: "Global Logistics Solutions",
  description:
    "Modern cargo, freight forwarding, warehousing, and shipping solutions for businesses and personal customers.",
  path: "/",
  keywords: [
    "cargo company",
    "logistics services",
    "freight forwarding",
    "air freight",
    "sea freight",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RelocationsStats />
      <AboutSection />
      <BrandMarquee />
      <ServicesSection />
      <TrackingSection />
      <TestimonialsSection />
      <TeamSection/>
      <CtaSection />
      <LatestBlogsSection />
    </>
  );
}