import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkTogether from "@/components/sections/WorkTogether";
import Image from "next/image";

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
      {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
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
      </section> */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/service-hero.webp"
            alt="TranscoCargo Team"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
        </div>

        <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
              Our Services
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              End-to-End Logistics Services for Modern Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
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
      <WorkTogether />
    </>
  );
}
