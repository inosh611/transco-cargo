import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";

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
      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group rounded-[1.75rem] border border-slate-200 bg-white p-7  transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/30 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg transition duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] transition group-hover:text-[#F47B20]"
                  >
                    View Service Details
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space bg-white">
        <div className="container-page">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                  Need a Custom Solution?
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Let’s Build the Right Logistics Plan
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Tell us about your shipment requirements, and our team will
                  recommend the most efficient service for your needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/quote"
                  className="rounded-full bg-[#F47B20] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#de6f1d]"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}