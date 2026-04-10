// import SectionHeading from "@/components/shared/SectionHeading";
// import { relocationProcessSteps } from "@/data/relocations";

// export default function RelocationsProcess() {
//   return (
//     <section className="container-page py-20 md:py-24">
//       <SectionHeading
//         eyebrow="How It Works"
//         title="A simple relocation process with expert guidance throughout"
//         description="Every move begins with understanding your requirements, followed by structured planning, coordinated execution, and dependable delivery support."
//       />

//       <div className="mt-14 grid gap-6 lg:grid-cols-5">
//         {relocationProcessSteps.map((step) => (
//           <article
//             key={step.step}
//             className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
//           >
//             <div className="text-sm font-black tracking-[0.2em] text-[#F47B20]">
//               {step.step}
//             </div>

//             <h3 className="mt-4 text-lg font-bold text-slate-900">
//               {step.title}
//             </h3>

//             <p className="mt-3 text-sm leading-7 text-slate-600">
//               {step.description}
//             </p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { relocationProcessSteps } from "@/data/relocations";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // සෑම පියවරක්ම තත්පර 0.2 ක පරතරයකින් මතු වේ
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function RelocationsProcess() {
  return (
    <section className="container-page py-20 md:py-24 overflow-hidden">
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading
          eyebrow="How It Works"
          title="A simple relocation process with expert guidance throughout"
          description="Every move begins with understanding your requirements, followed by structured planning, coordinated execution, and dependable delivery support."
        />
      </motion.div>

      {/* Steps Grid - ඇනිමේෂන් එක පටන් ගන්නේ මේ කන්ටේනරය ස්ක්‍රීන් එකට ආවමයි */}
      <motion.div 
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {relocationProcessSteps.map((step, index) => (
          <motion.article
            key={step.step}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              backgroundColor: "#fcfcfc",
              transition: { duration: 0.3 } 
            }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_14px_32px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
          >
            {/* Step Number with Glow effect */}
            <div className="relative inline-block">
              <span className="relative z-10 text-sm font-black tracking-[0.2em] text-[#F47B20]">
                {step.step}
              </span>
              <div className="absolute -bottom-1 left-0 h-1 w-full scale-x-0 bg-[#F47B20]/20 transition-transform duration-300 group-hover:scale-x-100" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-[#2F6DB3] transition-colors">
              {step.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 font-medium">
              {step.description}
            </p>

            {/* Connecting Line for Desktop (Optional Visual Polish) */}
            {index < relocationProcessSteps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-12 w-[1px] -translate-y-1/2 bg-slate-100 lg:block" />
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}