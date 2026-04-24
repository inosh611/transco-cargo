// import Link from "next/link";
// import { createMetadata } from "@/lib/seo";
// import ServicesSection from "@/components/sections/ServicesSection";
// import WorkTogether from "@/components/sections/WorkTogether";
// import Image from "next/image";

// export const metadata = createMetadata({
//   title: "Services",
//   description:
//     "Explore TranscoCargo logistics services including air freight, sea freight, road transport, warehousing, commercial cargo, and automobile logistics.",
//   path: "/services",
// });

// export default function ServicesPage() {
//   return (
//     <>
//       {/* HERO */}
//       {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
//         <div className="container-page py-16 md:py-20">
//           <div className="max-w-3xl">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               Our Services
//             </div>

//             <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
//               End-to-End Logistics Services for Modern Businesses
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               We provide dependable freight, storage, and specialized cargo
//               services designed to help businesses move faster, operate smarter,
//               and build trust across every shipment.
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <section className="relative overflow-hidden bg-slate-950">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/hero/service-hero.webp"
//             alt="TranscoCargo Team"
//             fill
//             priority
//             className="object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
//         </div>

//         <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
//           <div className="max-w-3xl">
//             <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
//               Our Services
//             </div>

//             <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
//               End-to-End Logistics Services for Modern Businesses
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
//               We provide dependable freight, storage, and specialized cargo
//               services designed to help businesses move faster, operate smarter,
//               and build trust across every shipment.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}
//       <ServicesSection />

//       {/* CTA */}
//       <WorkTogether />
//     </>
//   );
// }

"use client";

import { createMetadata } from "@/lib/seo";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkTogether from "@/components/sections/WorkTogether";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Image with Scale Animation */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/service-hero.webp"
            alt="TranscoCargo Team"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.85)_35%,rgba(15,23,42,0.6)_65%,rgba(15,23,42,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.2),transparent_30%)]" />
        </motion.div>

        <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-md"
            >
              Our Services
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="mt-8 text-5xl font-black tracking-tight text-white md:text-7xl leading-[1.1]"
            >
              End-to-End Logistics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Services for Businesses
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-200/90"
            >
              We provide dependable freight, storage, and specialized cargo
              services designed to help businesses move faster, operate smarter,
              and build trust across every shipment.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Bottom Decorative Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" 
        />
      </section>

      {/* --- SERVICES GRID --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ServicesSection />
      </motion.div>

      {/* --- CTA SECTION --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <WorkTogether />
      </motion.div>
    </main>
  );
}