import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Home,
  Languages,
  Package,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Transco Relocations | International & Domestic Moving Solutions",
  description:
    "Transco Relocations delivers international shipping, corporate relocation, pet transport, storage, visa support, office moves, and domestic relocation solutions with expert planning and end-to-end care.",
  path: "/transco-relocations",
  keywords: [
    "Transco Relocations",
    "international relocation",
    "corporate relocation",
    "domestic relocation",
    "pet transportation",
    "office relocation",
    "household goods storage",
    "visa and immigration services",
    "international shipping",
    "moving company",
  ],
});

type ServiceItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type ReasonItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type FeatureBullet = {
  title: string;
};

type StepItem = {
  step: string;
  title: string;
  description: string;
};

const stats = [
  { value: "30+", label: "Years of relocation experience" },
  { value: "100+", label: "Full-time employees" },
  { value: "100+", label: "Global network locations" },
  { value: "40+", label: "Languages across our network" },
];

const services: ServiceItem[] = [
  {
    title: "International Shipping",
    description:
      "Reliable global moving support with careful planning, shipment coordination, and door-to-door visibility.",
    icon: Globe2,
  },
  {
    title: "Household Goods Storage",
    description:
      "Flexible short-term and long-term storage options to keep belongings protected throughout the move.",
    icon: Warehouse,
  },
  {
    title: "Personal Relocation",
    description:
      "Support for individuals and families moving abroad or returning home, with expert guidance at every step.",
    icon: Home,
  },
  {
    title: "Corporate Relocation",
    description:
      "Structured relocation services for employees and leadership teams, built to reduce disruption and stress.",
    icon: Briefcase,
  },
  {
    title: "Pet Transportation",
    description:
      "Specialized pet relocation planning with documentation support, crate coordination, and safe travel handling.",
    icon: PawPrint,
  },
  {
    title: "Visa & Immigration Support",
    description:
      "Practical assistance to help manage key documentation and compliance needs connected to international moves.",
    icon: FileCheck2,
  },
];

const reasons: ReasonItem[] = [
  {
    title: "A Truly International Network",
    description:
      "With broad global office coverage and multilingual support, we can manage complex relocation requirements quickly and efficiently.",
    icon: Languages,
  },
  {
    title: "Clear, Transparent Quotations",
    description:
      "We provide service options and help outline anticipated charges, so you can plan your move with confidence and fewer surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Tracking Every Step of the Move",
    description:
      "Our centralized move coordinators monitor air, sea, and road transit and keep you updated throughout the relocation journey.",
    icon: Package,
  },
  {
    title: "Tailor-Made Moving Services",
    description:
      "From packing and custom crating to furniture handling, electronics setup, storage, and debris disposal, services are adapted to your needs.",
    icon: Sparkles,
  },
];

const petFeatures: FeatureBullet[] = [
  { title: "Animal import and export regulation guidance" },
  { title: "Veterinary and travel document compliance review" },
  { title: "Documentation preparation and submission support" },
  { title: "Comfortable travel crate coordination" },
  { title: "Airport delivery, customs clearance, and home delivery" },
  { title: "Boarding, kenneling, and quarantine coordination when required" },
];

const officeFeatures: FeatureBullet[] = [
  { title: "Careful pre-planning with your office point of contact" },
  { title: "Minimal disruption to daily business operations" },
  { title: "Expert packing, unpacking, and crate supply" },
  { title: "Furniture installation or re-assembly support" },
  { title: "Assistance with disposal and recycling of office items" },
  { title: "IT and communications support when needed" },
];

const domesticFeatures: FeatureBullet[] = [
  { title: "Solutions tailored to your budget and moving requirements" },
  { title: "Single point of contact until final delivery" },
  { title: "Detailed inventory and pre-move estimating support" },
  { title: "Protection for carpets, flooring, stairs, and furniture" },
  { title: "Flexible self-packing or full-packing options" },
  { title: "Short-term and long-term storage support" },
];

const processSteps: StepItem[] = [
  {
    step: "01",
    title: "Request a Pre-Move Survey",
    description:
      "Choose an in-person visit, a video walkthrough, or a live webcam survey so the team can understand what needs to be moved.",
  },
  {
    step: "02",
    title: "Receive a Clear Quotation",
    description:
      "Get service options and a relocation plan designed around your origin, destination, timeline, and budget.",
  },
  {
    step: "03",
    title: "Plan the Move",
    description:
      "Your coordinator helps organize the schedule, packing requirements, transport flow, and any special handling needs.",
  },
  {
    step: "04",
    title: "Packing & Transport",
    description:
      "Professionally trained teams prepare, protect, and move your shipment with care across air, sea, or road transit.",
  },
  {
    step: "05",
    title: "Delivery & Settling In",
    description:
      "From customs clearance to unpacking support, the move is managed through to your new home or destination.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/relocations/hero-relocation.jpg"
            alt="Transco Relocations international moving support"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.86)_38%,rgba(15,23,42,0.55)_70%,rgba(15,23,42,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.22),transparent_24%)]" />
        </div>

        <div className="container-page relative z-10 py-24 md:py-32 lg:min-h-[760px] lg:flex lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#F47B20] backdrop-blur-sm">
              Transco Relocations
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Seamless Relocations for Families, Individuals & Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              With over 30 years of experience in international moving, Transco
              Relocations delivers planning, packing, transport, storage, and
              on-the-ground coordination to make every move more confident and
              less stressful.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F47B20] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F47B20]/25 transition hover:-translate-y-0.5 hover:bg-[#df6c15]"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Talk to a Move Coordinator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 md:-mt-14">
        <div className="container-page">
          <div className="grid gap-4 rounded-[32px] border border-white/60 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-5 py-6 text-center"
              >
                <div className="text-3xl font-black text-[#2F6DB3]">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] min-h-[420px]">
            <Image
              src="/images/relocations/relocation-intro.jpg"
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
              moving parts of relocation, from planning tools and trained
              packing support to customer care and destination assistance.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              With headquarters in Australia, strong coverage across Sri Lanka
              and Maldives, and a global office network, we oversee the moving
              process from initial planning through to the unpacking of your
              final box.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Global coordination from start to finish",
                "Professionally trained packing teams",
                "Dedicated customer care support",
                "Solutions for personal and business moves",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="International Services"
            title="Relocation services designed around real moving needs"
            description="From international shipping and household storage to corporate moves, pet transport, and visa support, each service is structured to make relocation simpler and more manageable."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_14px_32px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6DB3]/10 text-[#2F6DB3]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="Why Choose Transco"
          title="A relocation partner built for clarity, speed, and confidence"
          description="Our approach is centered on global reach, transparent planning, careful coordination, and flexible services that adapt to the complexity of each move."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F47B20]/10 text-[#F47B20]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-page py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] md:p-10">
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
              {petFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                  <span className="text-sm leading-6 text-slate-200">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-slate-100 min-h-[420px] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <Image
              src="/images/relocations/pet-relocation.jpg"
              alt="Pet relocation handled by Transco Relocations"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative order-2 overflow-hidden rounded-[32px] bg-slate-100 min-h-[420px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:order-1">
            <Image
              src="/images/relocations/office-relocation.jpg"
              alt="Office relocation services by Transco Relocations"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10 lg:order-2">
            <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
              Office Relocations
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Move offices with less downtime and better control
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Office moves require structured planning, fast coordination, and
              flexible execution. Our team helps organize timelines, crew
              requirements, equipment needs, and supplies so your business can
              continue operating with minimal interruption.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {officeFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6DB3]" />
                  <span className="text-sm leading-6 text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
                Local & Domestic Moves
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Local expertise for moves of every size and complexity
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                From high-rise buildings to limited-access locations, our local
                relocation team creates practical moving plans, competitive
                quotations, and safe handling strategies that fit your timeline,
                property, and budget.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {domesticFeatures.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                    <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                    <span className="text-sm leading-6 text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] bg-slate-100 min-h-[420px] shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <Image
                src="/images/relocations/domestic-relocation.jpg"
                alt="Domestic relocation by Transco Relocations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple relocation process with expert guidance throughout"
          description="Every move begins with understanding your requirements, followed by structured planning, coordinated execution, and dependable delivery support."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
            >
              <div className="text-sm font-black tracking-[0.2em] text-[#F47B20]">
                {step.step}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

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
    </main>
  );
}
