import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            About Us
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Reliable Logistics Partner for Modern Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
            Transco Cargo has been successfully trading since 1991. Our
            continued growth is attributable to our total commitment to services
            and outcome level. Our emphasis on cost-effectiveness has
            established us as a competent and reliable freight forwarding and
            logistics provider.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
            As a freight forwarding company with a global coverage network,
            Transco Cargo Colombo offers a range of logistics management
            services that assists our corporate clientele reduce cycle time in
            order to maximise supply chain efficiency for improved customer
            satisfaction.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Fast and secure global delivery",
              "End-to-end logistics solutions",
              "Real-time shipment tracking",
              "Dedicated customer support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 text-[#2F6DB3]" size={20} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#2F6DB3] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#275c98]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[0.3rem] border border-white/60 bg-white/70 p-0.4 shadow-1xl backdrop-blur-xl">
            <div className="relative h-[420px] overflow-hidden rounded-[0.5rem] bg-gradient-to-br from-[#2f6db300] to-[#3f89dd]">
              {/* World map background */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-500 mix-blend-screen"
                style={{ backgroundImage: "url('/images/world-map.webp')" }}
              />

              {/* Decorative Grid */}
              <div className="absolute inset-0 grid grid-cols-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white/15" />
                ))}
              </div>

              {/* Soft overlay for premium depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_28%)]" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/92 p-5 shadow-lg backdrop-blur">
                <div className="text-sm font-semibold text-[#2F6DB3]">
                  10+ Years Experience
                </div>
                <div className="mt-2 text-xl font-bold text-slate-900">
                  Trusted by Businesses Worldwide
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Delivering consistent logistics performance with reliability
                  and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
