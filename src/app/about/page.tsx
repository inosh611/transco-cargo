import Link from "next/link";
import AboutMissionVisionSection from "@/components/sections/AboutMissionVisionSection";
import WorkTogether from "@/components/sections/WorkTogether";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  Globe2,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn more about TranscoCargo, our mission, logistics expertise, and commitment to reliable freight and cargo solutions.",
  path: "/about",
  keywords: [
    "about transcocargo",
    "logistics company",
    "cargo experts",
    "freight forwarding company",
  ],
});

const values = [
  {
    title: "Reliable Operations",
    description:
      "We focus on dependable cargo movement with better coordination, professional handling, and timely updates.",
    icon: ShieldCheck,
  },
  {
    title: "Global Connectivity",
    description:
      "Our logistics network supports international shipments with scalable service and efficient route planning.",
    icon: Globe2,
  },
  {
    title: "Fast Response",
    description:
      "We aim to provide clear communication, responsive support, and quick action across every shipment stage.",
    icon: Clock3,
  },
];

const highlights = [
  "Modern logistics workflows for businesses and personal shipping needs",
  "Strong focus on trust, speed, and operational transparency",
  "Scalable services across freight, warehousing, and specialized cargo",
  "Customer-first approach backed by practical industry experience",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/about.webp"
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
              About Us
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Delivering Confidence Across Every Mile
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              TranscoCargo is a modern logistics company focused on reliable
              cargo solutions, better customer experience, and strong
              operational support for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Who We Are
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
              Transco Cargo (Pvt) Ltd is the Sri Lankan counterpart of the
              premier freight forwarding and turnkey logistics provider, Transco
              Cargo Australia (Pty) Ltd, with headquarters in Melbourne,
              Victoria. With a plethora of high-level logistics and shipping
              solutions and services offered to clients, Transco Cargo has a
              professional network of global agents to facilitate end-to-end
              freight forwarding and logistics operations via air, sea and road
              freight. Resilient to our motto, “We Love to Deliver”, our
              experiences, resources and technologies have made us an efficient
              and trustworthy logistics partner to our clients. Regardless of
              the origin or destination of your freight, our total logistics
              solutions are reliable and affordable to ensure safe and speedy
              delivery from origin to destination.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 text-justify">
              Our core logistics and shipping services include freight
              forwarding via sea, air and land, as well as customs brokerage
              services, haulage and warehousing solutions, as well as imports
              and exports to/from Sri Lanka any global destination.
            </p>
          </div>
        </div>
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
              With our network of overseas agents, Transco Cargo offers
              importers and exporters to and from Sri Lanka, the most favourable
              rates and routing options to benefit our clientele’s needs and
              requirements. From the moment a shipment order has been placed
              with Transco Cargo, we as your trusted freight forwarding partner,
              will work diligently to fast track the processes and monitor the
              progress from moving your cargo from suppliers to the final point
              of delivery.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-[#2F6DB3]" size={20} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[0.5rem] bg-[#2F6DB3] p-0.5 shadow-1xl">
              <div className="rounded-[0.5rem] bg-white p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-1xl bg-[#2F6DB3] p-6 text-white shadow-sm">
                    <div className="text-sm text-white/80">Coverage</div>
                    <div className="mt-2 text-3xl font-extrabold">
                      120+ Destinations
                    </div>
                  </div>

                  <div className="rounded-1xl bg-[#F47B20] p-6 text-white shadow-lg">
                    <div className="text-sm text-white/80">Support</div>
                    <div className="mt-2 text-3xl font-extrabold">
                      24/7 Team
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:col-span-2">
                    <div className="text-sm text-slate-500">
                      Why clients choose us
                    </div>
                    <div className="mt-3 text-lg font-semibold text-slate-900">
                      Professional cargo handling, better communication, and a
                      modern logistics experience built on trust.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutMissionVisionSection />

      <section className="section-space bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Our Core Values
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Built on Trust, Service, and Performance
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[0.5rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F6DB3] text-white shadow-sm">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 text-justify">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <WorkTogether />
    </>
  );
}
