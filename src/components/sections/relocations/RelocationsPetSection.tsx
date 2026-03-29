import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { petRelocationFeatures } from "@/data/relocations";

export default function RelocationsPetSection() {
  return (
    <section className="container-page py-6 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[10px] bg-slate-950 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] md:p-10">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
            Pet Relocation
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
            We treat pets like family, not cargo
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Our pet transportation support focuses on careful planning,
            documentation, travel compliance, and handling that protects the
            comfort and wellbeing of animals throughout the journey.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {petRelocationFeatures.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-[10px] border border-white/10 bg-white/5 px-4 py-4"
              >
                <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                <span className="text-sm leading-6 text-slate-200">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <Image
            src="/images/relocations/pet.webp"
            alt="Pet relocation handled by Transco Relocations"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}