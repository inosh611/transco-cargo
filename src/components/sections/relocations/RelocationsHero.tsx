import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RelocationsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relocations/hero-relocation.webp"
          alt="TranscoCargo Team"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
      </div>

      <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
            Transco Relocations
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
             Seamless Relocations for Families, Individuals & Businesses
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            With over 30 years of experience in international moving, Transco 
            Relocations delivers planning, packing, transport, storage, and 
            on-the-ground coordination to make every move more confident and 
            less stressful.
          </p>
        </div>
      </div>
    </section>
  );
}
