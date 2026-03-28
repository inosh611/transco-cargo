import { createMetadata } from "@/lib/seo";

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
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(244,123,32,0.14),_transparent_28%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="absolute left-10 top-24 h-36 w-36 rounded-full bg-[#2F6DB3]/10 blur-3xl" />
        <div className="absolute right-10 top-10 h-44 w-44 rounded-full bg-[#F47B20]/10 blur-3xl" />

        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2F6DB3]/15 bg-white px-4 py-2 text-sm font-medium text-[#2F6DB3] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#F47B20]" />
              Trusted Global Logistics Partner
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Professional Cargo & Logistics Solutions Built for Modern Business
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We help businesses move goods faster with dependable freight forwarding, warehousing, customs support, and modern shipment visibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/quote"
                className="rounded-full bg-[#2F6DB3] px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-[#275c98]"
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-[#F47B20] hover:text-[#F47B20]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div>
                <div className="text-4xl font-black tracking-tight text-slate-900">25K+</div>
                <div className="mt-1 text-base text-slate-500">Shipments delivered</div>
              </div>
              <div>
                <div className="text-4xl font-black tracking-tight text-slate-900">120+</div>
                <div className="mt-1 text-base text-slate-500">Global destinations</div>
              </div>
              <div>
                <div className="text-4xl font-black tracking-tight text-slate-900">99%</div>
                <div className="mt-1 text-base text-slate-500">On-time delivery</div>
              </div>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(15,23,42,0.08)),linear-gradient(135deg,#dbeafe,#ffffff)] md:min-h-[540px]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
                <div className="absolute left-6 top-6 z-10 max-w-[220px] rounded-[1.5rem] border border-white/60 bg-white/80 p-5 shadow-lg backdrop-blur-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2F6DB3]">
                    Premium Logistics
                  </div>
                  <div className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                    Smooth Cargo Experience
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Clean design, modern trust signals, and elegant motion for a stronger first impression.
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="rounded-[1.5rem] border border-white/20 bg-slate-950/55 px-5 py-4 text-white backdrop-blur-md">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Live Operations
                    </div>
                    <div className="mt-2 text-2xl font-bold">Container in Transit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-page text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Our Services
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Complete Logistics Services for Every Shipment
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Designed for businesses that need speed, reliability, and full operational visibility.
          </p>
        </div>
      </section>
    </>
  );
}