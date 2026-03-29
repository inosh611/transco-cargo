import Image from "next/image";
import { Building2 } from "lucide-react";
import { officeRelocationFeatures } from "@/data/relocations";

export default function RelocationsOfficeSection() {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:order-1">
          <Image
            src="/images/relocations/office.webp"
            alt="Office relocation services by Transco Relocations"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 rounded-[10px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10 lg:order-2">
          <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
            Office Relocations
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Move offices with less downtime and better control
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Office moves require structured planning, fast coordination, and
            flexible execution. Our team helps organize timelines, crew
            requirements, equipment needs, and supplies so your business can
            continue operating with minimal interruption.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {officeRelocationFeatures.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-[10px] bg-slate-50 px-4 py-4"
              >
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6DB3]" />
                <span className="text-sm leading-6 text-slate-700">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}