import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const introPoints = [
  "Global coordination from start to finish",
  "Professionally trained packing teams",
  "Dedicated customer care support",
  "Solutions for personal and business moves",
];

export default function RelocationsIntro() {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-md">
          <Image
            src="/images/relocations/relocation-intro.webp"
            alt="Family relocation planning with Transco Relocations"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
            End-to-End Support
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Moving internationally does not have to feel overwhelming
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Our dedicated mobility team helps customers coordinate the many
            moving parts of relocation, from planning tools and trained packing
            support to customer care and destination assistance.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            With headquarters in Australia, strong coverage across Sri Lanka and
            Maldives, and a global office network, we oversee the moving
            process from initial planning through to the unpacking of your final
            box.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {introPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}