import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ArrowRight, Globe2, MapPinned, ShipWheel, Plane, Truck } from "lucide-react";

export const metadata = createMetadata({
  title: "Destinations",
  description:
    "Explore TranscoCargo destination coverage for international cargo, freight forwarding, and logistics support across key regions.",
  path: "/destinations",
  keywords: [
    "shipping destinations",
    "cargo destinations",
    "international freight routes",
    "global logistics coverage",
  ],
});

const destinations = [
  {
    name: "Sri Lanka",
    description:
      "Reliable cargo movement and logistics coordination for personal and commercial shipments to Sri Lanka.",
    services: ["Air Freight", "Sea Freight", "Commercial Cargo"],
  },
  {
    name: "India",
    description:
      "Scalable logistics services for business shipments, freight forwarding, and specialized cargo to India.",
    services: ["Air Freight", "Sea Freight", "Road Support"],
  },
  {
    name: "Fiji",
    description:
      "Coordinated cargo support for island freight routes, commercial shipments, and selected personal cargo needs.",
    services: ["Sea Freight", "Air Freight", "Warehouse Coordination"],
  },
  {
    name: "Middle East",
    description:
      "Modern freight forwarding support for cargo movement across key commercial routes in the Middle East.",
    services: ["Air Freight", "Sea Freight", "Commercial Cargo"],
  },
  {
    name: "South East Asia",
    description:
      "Efficient cargo logistics for regional supply movement, international trade, and time-sensitive shipments.",
    services: ["Air Freight", "Sea Freight", "Warehousing"],
  },
  {
    name: "Rest of the World",
    description:
      "Flexible logistics planning and global freight coordination for businesses shipping across international markets.",
    services: ["Air Freight", "Sea Freight", "Specialized Cargo"],
  },
];

const strengths = [
  {
    title: "International Reach",
    description:
      "We support shipments across multiple international destinations with practical logistics coordination.",
    icon: Globe2,
  },
  {
    title: "Flexible Freight Options",
    description:
      "Choose from air, sea, and supporting logistics services based on route and cargo needs.",
    icon: ShipWheel,
  },
  {
    title: "Reliable Route Planning",
    description:
      "Our team helps align destination, service type, and shipping priorities for better outcomes.",
    icon: MapPinned,
  },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Destination Coverage
            </div>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Global Destinations for Modern Cargo Movement
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore our destination coverage and discover how TranscoCargo
              supports businesses and individuals with dependable shipping
              across key international routes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Where We Ship
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Key Shipping Destinations
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our logistics network supports a range of international cargo
              routes with flexible freight and shipment coordination options.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/30 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
                  <MapPinned size={28} />
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                  {destination.name}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {destination.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {destination.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Why Destination Planning Matters
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Better Route Planning, Better Delivery Experience
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#2F6DB3] to-[#1f4f84] p-8 text-white shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
                  Planning an International Shipment?
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Let’s Find the Right Route for Your Cargo
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                  Our team can help you choose the right freight service and
                  destination planning approach for your shipment requirements.
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

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Plane className="text-orange-200" size={22} />
                <div className="mt-3 text-lg font-semibold">Air Freight</div>
                <p className="mt-1 text-sm text-blue-100">
                  Fast shipping support for urgent international cargo.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <ShipWheel className="text-orange-200" size={22} />
                <div className="mt-3 text-lg font-semibold">Sea Freight</div>
                <p className="mt-1 text-sm text-blue-100">
                  Cost-efficient cargo movement for larger shipments.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Truck className="text-orange-200" size={22} />
                <div className="mt-3 text-lg font-semibold">Road Support</div>
                <p className="mt-1 text-sm text-blue-100">
                  Better inland movement and final delivery coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}