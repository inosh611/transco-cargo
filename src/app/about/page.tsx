import Link from "next/link";
import { CheckCircle2, ArrowRight, Globe2, ShieldCheck, Clock3 } from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn more about TranscoCargo, our mission, logistics expertise, and commitment to reliable freight and cargo solutions.",
  path: "/about",
  keywords: [
    "about transcocargo",
    "logistics company",
    "cargo experts",
    "freight forwarding company",
  ],
});

const values = [
  {
    title: "Reliable Operations",
    description:
      "We focus on dependable cargo movement with better coordination, professional handling, and timely updates.",
    icon: ShieldCheck,
  },
  {
    title: "Global Connectivity",
    description:
      "Our logistics network supports international shipments with scalable service and efficient route planning.",
    icon: Globe2,
  },
  {
    title: "Fast Response",
    description:
      "We aim to provide clear communication, responsive support, and quick action across every shipment stage.",
    icon: Clock3,
  },
];

const highlights = [
  "Modern logistics workflows for businesses and personal shipping needs",
  "Strong focus on trust, speed, and operational transparency",
  "Scalable services across freight, warehousing, and specialized cargo",
  "Customer-first approach backed by practical industry experience",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              About Us
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Delivering Confidence Across Every Mile
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              TranscoCargo is a modern logistics company focused on reliable
              cargo solutions, better customer experience, and strong operational
              support for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Who We Are
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help clients move cargo with greater confidence through
              dependable freight forwarding, warehousing support, and tailored
              logistics planning. Our goal is to combine modern service quality
              with practical shipping expertise.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether the shipment is commercial, personal, urgent, or
              specialized, we work to ensure smoother coordination, safer
              handling, and better visibility from origin to destination.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-[#2F6DB3]" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] p-1 shadow-2xl">
              <div className="rounded-[1.8rem] bg-white p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#2F6DB3] p-6 text-white shadow-lg">
                    <div className="text-sm text-white/80">Coverage</div>
                    <div className="mt-2 text-3xl font-extrabold">120+ Destinations</div>
                  </div>

                  <div className="rounded-3xl bg-[#F47B20] p-6 text-white shadow-lg">
                    <div className="text-sm text-white/80">Support</div>
                    <div className="mt-2 text-3xl font-extrabold">24/7 Team</div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:col-span-2">
                    <div className="text-sm text-slate-500">Why clients choose us</div>
                    <div className="mt-3 text-lg font-semibold text-slate-900">
                      Professional cargo handling, better communication, and a
                      modern logistics experience built on trust.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Our Core Values
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Built on Trust, Service, and Performance
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                  Let’s Work Together
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Need a Reliable Logistics Partner?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Talk to our team about your cargo requirements and discover a
                  smarter logistics experience built around your needs.
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