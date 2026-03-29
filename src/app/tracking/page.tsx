import Link from "next/link";
import Image from "next/image";

import { createMetadata } from "@/lib/seo";
import {
  Search,
  PackageCheck,
  Clock3,
  MapPinned,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = createMetadata({
  title: "Track Shipment",
  description:
    "Track your shipment with TranscoCargo and view the latest cargo movement, delivery progress, and logistics support options.",
  path: "/tracking",
  keywords: [
    "track shipment",
    "cargo tracking",
    "freight tracking",
    "shipment status",
    "logistics tracking",
  ],
});

const trackingSteps = [
  {
    title: "Enter Tracking ID",
    description:
      "Use your shipment reference to access the latest cargo movement details.",
    icon: Search,
  },
  {
    title: "Check Live Status",
    description:
      "View the most recent transit update, current stage, and delivery progress.",
    icon: PackageCheck,
  },
  {
    title: "Get Support if Needed",
    description:
      "If you need help, contact our support team for shipment assistance.",
    icon: ShieldCheck,
  },
];

const shipmentTimeline = [
  { label: "Shipment Booked", status: "completed" },
  { label: "Cargo Received at Warehouse", status: "completed" },
  { label: "In Transit", status: "active" },
  { label: "Arrival at Destination Hub", status: "pending" },
  { label: "Out for Delivery", status: "pending" },
];

export default function TrackingPage() {
  return (
    <>
      {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Tracking Portal
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Track Your Shipment in Real Time
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Stay informed with shipment progress, current transit stage, and
              delivery updates through our modern tracking experience.
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-slate-950">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/hero/tracking.webp"
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
                    Tracking Portal
                  </div>
      
                  <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
                    Track Your Shipment in Real Time
                  </h1>
      
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                    Stay informed with shipment progress, current transit stage, and
                    delivery updates through our modern tracking experience.
                  </p>
                </div>
              </div>
            </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              How Tracking Works
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our shipment tracking process is designed to give clients better
              visibility and confidence throughout the delivery journey.
            </p>

            <div className="mt-10 grid gap-5">
              {trackingSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2F6DB3] text-white shadow-lg">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Shipment Lookup
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Tracking ID
                </label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Enter your shipment code"
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-[#2F6DB3]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#2F6DB3]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F47B20] px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#de6f1d]"
              >
                Track Now
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#F47B20]">
                    Latest Demo Status
                  </div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    In Transit
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Shipment ID: TRK-45892
                  </p>
                </div>

                <div className="rounded-full bg-[#2F6DB3]/10 px-4 py-2 text-sm font-semibold text-[#2F6DB3]">
                  Active
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <MapPinned size={16} className="text-[#2F6DB3]" />
                    Current Location
                  </div>
                  <p className="mt-2 text-slate-600">Melbourne Transit Hub</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Clock3 size={16} className="text-[#F47B20]" />
                    Estimated Arrival
                  </div>
                  <p className="mt-2 text-slate-600">Within 24 - 48 hours</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-lg font-bold tracking-tight text-slate-900">
                  Shipment Timeline
                </div>

                <div className="mt-5 space-y-4">
                  {shipmentTimeline.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div
                        className={`mt-1 h-3.5 w-3.5 rounded-full ${
                          item.status === "completed"
                            ? "bg-[#2F6DB3]"
                            : item.status === "active"
                            ? "bg-[#F47B20]"
                            : "bg-slate-300"
                        }`}
                      />
                      <div>
                        <div className="font-semibold text-slate-900">
                          {item.label}
                        </div>
                        <div className="mt-1 text-sm capitalize text-slate-500">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-slate-500">
              Need help with your shipment?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
              >
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}