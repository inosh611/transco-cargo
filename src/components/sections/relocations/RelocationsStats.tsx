import { relocationStats } from "@/data/relocations";

export default function RelocationsStats() {
  return (
    <section className="relative z-10 -mt-10 md:-mt-5">
      <div className="container-page">
        <div className="grid gap-4 rounded-[5px] border border-white/60 bg-white/95 p-6 shadow-sm backdrop-blur md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10">
          {relocationStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-sm border border-slate-200/80 bg-slate-50/80 px-5 py-6 text-center"
            >
              <div className="text-3xl font-black text-[#2F6DB3]">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}