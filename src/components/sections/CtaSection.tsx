import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[0.5rem] bg-gradient-to-r from-[#F47B20] to-[#ff9b51] px-6 py-14 text-white shadow-2xl sm:px-8 lg:px-12">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
              Let’s Work Together
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Ready to Move Your Cargo with Confidence?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
              Build a stronger logistics experience with dependable freight,
              secure cargo handling, and responsive customer support tailored to
              your business needs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#F47B20] shadow-lg transition hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}