import Link from "next/link";
import { Search, ShieldCheck, Clock3, Globe2 } from "lucide-react";

export default function TrackingSection() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-page">
        <div className="overflow-hidden rounded-[0.5rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-2xl lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                Tracking Portal
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Track Your Shipment in Real Time
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Enter your shipment details to check the latest status, estimated
                arrival, and cargo movement information with a clean, modern user
                experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <ShieldCheck className="text-orange-200" size={22} />
                  <div className="mt-3 text-lg font-semibold">Secure Tracking</div>
                  <p className="mt-1 text-sm text-blue-100">
                    Reliable shipment status with operational transparency.
                  </p>
                </div>

                <div className="rounded-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <Clock3 className="text-orange-200" size={22} />
                  <div className="mt-3 text-lg font-semibold">Fast Updates</div>
                  <p className="mt-1 text-sm text-blue-100">
                    Get timely updates as your cargo progresses.
                  </p>
                </div>

                <div className="rounded-sm border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <Globe2 className="text-orange-200" size={22} />
                  <div className="mt-3 text-lg font-semibold">Global Coverage</div>
                  <p className="mt-1 text-sm text-blue-100">
                    Stay informed across international routes and destinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[0.75rem] bg-white p-5 text-slate-900 shadow-2xl">
              <div className="mb-4">
                <label
                  htmlFor="tracking-id"
                  className="mb-3 block text-sm font-semibold text-slate-600"
                >
                  Tracking ID
                </label>
                <input
                  id="tracking-id"
                  type="text"
                  placeholder="Enter your shipment code"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#F47B20] focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="tracking-email"
                  className="mb-3 block text-sm font-semibold text-slate-600"
                >
                  Email Address
                </label>
                <input
                  id="tracking-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-[#F47B20] focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F47B20] px-5 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#de6f1d]">
                <Search size={18} />
                Track Now
              </button>

              <div className="mt-5 text-center text-sm text-slate-500">
                Need help?{" "}
                <Link href="/contact" className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]">
                  Contact our support team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}