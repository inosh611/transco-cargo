import { createMetadata } from "@/lib/seo";
import RelocationsHero from "@/components/sections/relocations/RelocationsHero";
import RelocationsStats from "@/components/sections/relocations/RelocationsStats";
import RelocationsIntro from "@/components/sections/relocations/RelocationsIntro";
import RelocationsServices from "@/components/sections/relocations/RelocationsServices";
import RelocationsWhyChooseUs from "@/components/sections/relocations/RelocationsWhyChooseUs";
import RelocationsPetSection from "@/components/sections/relocations/RelocationsPetSection";
import RelocationsOfficeSection from "@/components/sections/relocations/RelocationsOfficeSection";
import RelocationsDomesticSection from "@/components/sections/relocations/RelocationsDomesticSection";
import RelocationsProcess from "@/components/sections/relocations/RelocationsProcess";
import WorkTogether from "@/components/sections/WorkTogether";

export const metadata = createMetadata({
  title: "Transco Relocations | International & Domestic Moving Solutions",
  description:
    "Transco Relocations delivers international shipping, corporate relocation, pet transport, storage, visa support, office moves, and domestic relocation solutions with expert planning and end-to-end care.",
  path: "/transco-relocations",
});

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <RelocationsHero />
      <RelocationsStats />
      <RelocationsIntro />
      <RelocationsServices />
      <RelocationsWhyChooseUs />
      <RelocationsPetSection />
      <RelocationsOfficeSection />
      <RelocationsDomesticSection />
      <RelocationsProcess />
      <WorkTogether/>
    </main>
  );
}