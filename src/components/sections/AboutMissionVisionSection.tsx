import { Target, Eye } from "lucide-react";

export default function AboutMissionVisionSection() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-page">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Our Purpose
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Driving Logistics with Vision & Purpose
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We are committed to building reliable logistics solutions that empower businesses
            and create seamless global connectivity.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* MISSION */}
          <div className="group relative overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-sm bg-[#F47B20]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#F47B20] text-white shadow-lg">
                <Target size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To deliver fast, reliable, and innovative logistics solutions that simplify
                global trade, enhance operational efficiency, and build long-term trust
                with our clients.
              </p>
            </div>
          </div>

          {/* VISION */}
          <div className="group relative overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            
            {/* Glow */}
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#2F6DB3]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#2F6DB3] text-white shadow-lg">
                <Eye size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become a globally recognized logistics partner by leveraging technology,
                innovation, and operational excellence to connect businesses across the world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}