import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RelocationsCTA() {
  return (
    <section className="container-page pb-20 md:pb-24">
      <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a,#16345c)] px-8 py-12 text-center text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)] md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
            Ready to Move?
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Start your relocation with a team that plans every detail
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Whether you are relocating a family, an employee, an office, or a
            pet, Transco Relocations is ready to help you move with clarity,
            care, and confidence.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#F47B20] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#df6c15]"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}