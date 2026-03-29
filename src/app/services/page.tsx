import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkTogether from "@/components/sections/WorkTogether";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore TranscoCargo logistics services including air freight, sea freight, road transport, warehousing, commercial cargo, and automobile logistics.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Our Services
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              End-to-End Logistics Services for Modern Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We provide dependable freight, storage, and specialized cargo
              services designed to help businesses move faster, operate smarter,
              and build trust across every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <ServicesSection />
      
      {/* CTA */}
      <WorkTogether/>
    </>
  );
}