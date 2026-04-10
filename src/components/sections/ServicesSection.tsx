// import Link from "next/link";
// import {
//   ArrowRight,
//   Plane,
//   Ship,
//   Warehouse,
//   ShieldCheck,
//   Download,
//   Upload,
//   Container,
//   Boxes,
//   BriefcaseBusiness,
//   Truck,
//   Network,
//   FolderKanban,
//   Package,
// } from "lucide-react";

// const offerServices = [
//   {
//     title: "Customs Brokerage",
//     slug: "customs-brokerage",
//     icon: ShieldCheck,
//     desc: "Smooth customs clearance, documentation support, and reliable freight compliance handling.",
//   },
//   {
//     title: "Air Freight",
//     slug: "air-freight",
//     icon: Plane,
//     desc: "Fast and secure international air cargo solutions for urgent and time-sensitive shipments.",
//   },
//   {
//     title: "Sea Freight",
//     slug: "sea-freight",
//     icon: Ship,
//     desc: "Cost-effective ocean freight services for global cargo movement and bulk shipping needs.",
//   },
//   {
//     title: "Warehouse & Storage",
//     slug: "warehousing",
//     icon: Warehouse,
//     desc: "Safe storage, inventory support, and efficient handling for modern logistics operations.",
//   },
//   {
//     title: "Import Services",
//     slug: "import-services",
//     icon: Download,
//     desc: "Professional import handling with shipment coordination and documentation assistance.",
//   },
//   {
//     title: "Export Services",
//     slug: "export-services",
//     icon: Upload,
//     desc: "Reliable export freight solutions with proper planning, compliance, and delivery flow.",
//   },
//   {
//     title: "LCL Console / Deco Sol",
//     slug: "lcl-console-deco-sol",
//     icon: Container,
//     desc: "Efficient less-than-container-load consolidation and deconsolidation support services.",
//   },
//   {
//     title: "Break Bulk Cargo",
//     slug: "break-bulk-cargo",
//     icon: Boxes,
//     desc: "Specialized freight handling for oversized, heavy, and non-containerized cargo shipments.",
//   },
// ];

// const valueAddedServices = [
//   {
//     title: "Commercial Cargo",
//     slug: "commercial-cargo",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Personal Effects",
//     slug: "personal-effects",
//     icon: Truck,
//   },
//   {
//     title: "Consolidation",
//     slug: "consolidation",
//     icon: Network,
//   },
//   {
//     title: "Projects",
//     slug: "projects",
//     icon: FolderKanban,
//   },
//   {
//     title: "Express Courier",
//     slug: "express-courier",
//     icon: Package,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <>
//       <section className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
//         <div className="container-page">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               What We Offer
//             </div>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//               Complete Logistics Services for Every Business Need
//             </h2>
//             <p className="mt-5 text-lg leading-8 text-slate-600">
//               Modern cargo solutions designed for speed, security, visibility,
//               and smooth logistics coordination across every shipment stage.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//             {offerServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.title}
//                   href={`/services/${service.slug}`}
//                   className="group block"
//                 >
//                   <article className="cursor-pointer relative overflow-hidden rounded-[0.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/20 hover:shadow-xl">
//                     <div className="absolute right-0 top-0 h-24 w-24 rounded-sm bg-[#2F6DB3]/5 blur-2xl transition duration-300 group-hover:bg-[#F47B20]/10" />

//                     <div className="relative z-10">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-to-br from-[#2F6DB3] to-[#3f89dd] text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:from-[#F47B20] group-hover:to-[#ff9f43]">
//                         <Icon size={28} strokeWidth={1.8} />
//                       </div>

//                       <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
//                         {service.title}
//                       </h3>

//                       <p className="mt-3 text-sm leading-7 text-slate-600">
//                         {service.desc}
//                       </p>

//                       <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] transition group-hover:text-[#F47B20]">
//                         Read More
//                         <ArrowRight size={16} />
//                       </div>
//                     </div>
//                   </article>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden bg-gradient-to-r from-[#F47B20] to-[#ff9a2f] py-16">
//         <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

//         <div className="container-page relative z-10">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
//               Value Added Services
//             </div>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
//               Flexible Support Beyond Core Freight Services
//             </h2>
//           </div>

//           <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
//             {valueAddedServices.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <Link
//                   key={service.title}
//                   href={`/services/${service.slug}`}
//                   className="group block"
//                 >
//                   <div className="cursor-pointer rounded-[0.5rem] border border-white/20 bg-white/10 p-6 text-center text-white shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
//                     <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-white/15 text-white transition duration-300 group-hover:scale-110 group-hover:bg-white/20">
//                       <Icon size={30} strokeWidth={1.8} />
//                     </div>

//                     <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-white">
//                       {service.title}
//                     </h3>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Import motion
import {
  ArrowRight,
  Plane,
  Ship,
  Warehouse,
  ShieldCheck,
  Download,
  Upload,
  Container,
  Boxes,
  BriefcaseBusiness,
  Truck,
  Network,
  FolderKanban,
  Package,
} from "lucide-react";

const offerServices = [
  { title: "Customs Brokerage", slug: "customs-brokerage", icon: ShieldCheck, desc: "Smooth customs clearance, documentation support, and reliable freight compliance handling." },
  { title: "Air Freight", slug: "air-freight", icon: Plane, desc: "Fast and secure international air cargo solutions for urgent and time-sensitive shipments." },
  { title: "Sea Freight", slug: "sea-freight", icon: Ship, desc: "Cost-effective ocean freight services for global cargo movement and bulk shipping needs." },
  { title: "Warehouse & Storage", slug: "warehousing", icon: Warehouse, desc: "Safe storage, inventory support, and efficient handling for modern logistics operations." },
  { title: "Import Services", slug: "import-services", icon: Download, desc: "Professional import handling with shipment coordination and documentation assistance." },
  { title: "Export Services", slug: "export-services", icon: Upload, desc: "Reliable export freight solutions with proper planning, compliance, and delivery flow." },
  { title: "LCL Console / Deco Sol", slug: "lcl-console-deco-sol", icon: Container, desc: "Efficient less-than-container-load consolidation and deconsolidation support services." },
  { title: "Break Bulk Cargo", slug: "break-bulk-cargo", icon: Boxes, desc: "Specialized freight handling for oversized, heavy, and non-containerized cargo shipments." },
];

const valueAddedServices = [
  { title: "Commercial Cargo", slug: "commercial-cargo", icon: BriefcaseBusiness },
  { title: "Personal Effects", slug: "personal-effects", icon: Truck },
  { title: "Consolidation", slug: "consolidation", icon: Network },
  { title: "Projects", slug: "projects", icon: FolderKanban },
  { title: "Express Courier", slug: "express-courier", icon: Package },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 }, 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <>
      {/* Main Services Section */}
      <section className="section-space bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] overflow-hidden">
        <div className="container-page">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              What We Offer
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              Complete Logistics Services for Every Business Need
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Modern cargo solutions designed for speed, security, visibility,
              and smooth logistics coordination.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {offerServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={cardVariants}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <article className="h-full cursor-pointer relative overflow-hidden rounded-[0.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/20 hover:shadow-xl">
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-sm bg-[#2F6DB3]/5 blur-2xl transition duration-300 group-hover:bg-[#F47B20]/10" />
                      <div className="relative z-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-to-br from-[#2F6DB3] to-[#3f89dd] text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:from-[#F47B20] group-hover:to-[#ff9f43]">
                          <Icon size={28} strokeWidth={1.8} />
                        </div>
                        <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] transition group-hover:text-[#F47B20]">
                          Read More <ArrowRight size={16} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Value Added Services Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F47B20] to-[#ff9a2f] py-16">
        <div className="container-page relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
              Value Added Services
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Flexible Support Beyond Core Freight
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {valueAddedServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={cardVariants}>
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div className="cursor-pointer rounded-[0.5rem] border border-white/20 bg-white/10 p-6 text-center text-white shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-white/15 text-white transition duration-300 group-hover:scale-110 group-hover:bg-white/20">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-white">{service.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}