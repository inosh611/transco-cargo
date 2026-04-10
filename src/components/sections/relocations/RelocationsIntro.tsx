// import Image from "next/image";
// import { CheckCircle2 } from "lucide-react";

// const introPoints = [
//   "Global coordination from start to finish",
//   "Professionally trained packing teams",
//   "Dedicated customer care support",
//   "Solutions for personal and business moves",
// ];

// export default function RelocationsIntro() {
//   return (
//     <section className="container-page py-20 md:py-24">
//       <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//         <div className="relative min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-md">
//           <Image
//             src="/images/relocations/relocation-intro.webp"
//             alt="Family relocation planning with Transco Relocations"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div>
//           <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
//             End-to-End Support
//           </div>

//           <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
//             Moving internationally does not have to feel overwhelming
//           </h2>

//           <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//             Our dedicated mobility team helps customers coordinate the many
//             moving parts of relocation, from planning tools and trained packing
//             support to customer care and destination assistance.
//           </p>

//           <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//             With headquarters in Australia, strong coverage across Sri Lanka and
//             Maldives, and a global office network, we oversee the moving
//             process from initial planning through to the unpacking of your final
//             box.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             {introPoints.map((item) => (
//               <div
//                 key={item}
//                 className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
//               >
//                 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
//                 <span className="text-sm font-medium text-slate-700">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const introPoints = [
  "Global coordination from start to finish",
  "Professionally trained packing teams",
  "Dedicated customer care support",
  "Solutions for personal and business moves",
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RelocationsIntro() {
  return (
    <section className="container-page py-20 md:py-24 overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* IMAGE BOX - ස්ක්‍රෝල් කරද්දී වම් පසින් මතු වේ */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[420px] lg:min-h-[500px] overflow-hidden rounded-[24px] bg-slate-100 shadow-xl group"
        >
          <Image
            src="/images/relocations/relocation-intro.webp"
            alt="Family relocation planning"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* අලංකාර Border එකක් */}
          <div className="absolute inset-0 rounded-[24px] border border-black/5" />
        </motion.div>

        {/* CONTENT BOX - අනුපිළිවෙළින් මතු වේ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]"
          >
            End-to-End Support
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-[1.2]"
          >
            Moving internationally does not have to feel overwhelming
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
          >
            Our dedicated mobility team helps customers coordinate the many
            moving parts of relocation, from planning tools and trained packing
            support to customer care and destination assistance.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="mt-4 text-base leading-8 text-slate-600 sm:text-lg"
          >
            With headquarters in Australia, strong coverage across Sri Lanka and
            Maldives, we oversee the moving process from initial planning through to the unpacking.
          </motion.p>

          {/* CHECK POINTS - පියවරෙන් පියවර මතු වේ */}
          <motion.div 
            variants={containerVariants}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {introPoints.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "#f1f5f9" }}
                className="flex items-center gap-3 rounded-xl bg-slate-50 px-5 py-4 transition-colors border border-slate-100"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#F47B20]" />
                </div>
                <span className="text-sm font-bold text-slate-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}