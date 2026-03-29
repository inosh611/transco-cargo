import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function WorkTogether() {
  return (
    <>
      <section className="section-space bg-white">
        <div className="container-page">
          <div className="rounded-[0.5rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                  Let’s Work Together
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Need a Reliable Logistics Partner?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Talk to our team about your cargo requirements and discover a
                  smarter logistics experience built around your needs.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F47B20] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#de6f1d]"
                >
                  Request Quote
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
