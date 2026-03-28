import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { Star, ArrowRight, Quote } from "lucide-react";

export const metadata = createMetadata({
  title: "Testimonials",
  description:
    "Read what clients say about TranscoCargo logistics services, shipment reliability, and customer support.",
  path: "/testimonials",
  keywords: [
    "logistics testimonials",
    "cargo company reviews",
    "freight forwarding reviews",
    "client feedback",
  ],
});

const testimonials = [
  {
    name: "James Carter",
    role: "Operations Manager",
    company: "Global Imports Ltd.",
    text: "TranscoCargo transformed our logistics operations. Deliveries are faster, communication is clearer, and the entire process feels more professional.",
  },
  {
    name: "Sarah Mitchell",
    role: "Supply Chain Lead",
    company: "Ecom Supply Co.",
    text: "Reliable, efficient, and extremely professional. Their team handles every shipment with great care and keeps us updated throughout.",
  },
  {
    name: "Daniel Wong",
    role: "Export Coordinator",
    company: "Asia Trade Hub",
    text: "We have worked with several logistics providers, but TranscoCargo stands out for consistency, responsiveness, and trust.",
  },
  {
    name: "Amina Rahman",
    role: "Procurement Head",
    company: "Metro Retail Group",
    text: "Their commercial cargo support helped us improve planning and reduce delays across our supply chain.",
  },
  {
    name: "Liam Foster",
    role: "Business Owner",
    company: "Foster Trading",
    text: "Professional service, helpful communication, and a much smoother shipping experience than we expected.",
  },
  {
    name: "Naveen Perera",
    role: "Warehouse Supervisor",
    company: "Southern Distribution",
    text: "Their warehousing and freight coordination support made a big difference to our day-to-day operations.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Client Feedback
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Trusted by Businesses and Clients Worldwide
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              See how our clients describe their experience with TranscoCargo,
              from freight handling and cargo visibility to customer support and
              delivery confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={`${item.name}-${item.company}`}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-[#F47B20]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} fill="#F47B20" />
                    ))}
                  </div>

                  <Quote className="text-slate-300" size={24} />
                </div>

                <p className="mt-5 leading-7 text-slate-600">“{item.text}”</p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    {item.role} · {item.company}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                  Work With Us
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Ready for a Better Logistics Experience?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Let our team support your cargo operations with professional
                  service, modern workflows, and dependable shipment handling.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F47B20] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#de6f1d]"
                >
                  Request Quote
                  <ArrowRight size={16} />
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