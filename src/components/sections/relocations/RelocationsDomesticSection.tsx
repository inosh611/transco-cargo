// import Image from "next/image";
// import { Truck } from "lucide-react";
// import { domesticRelocationFeatures } from "@/data/relocations";

// export default function RelocationsDomesticSection() {
//   return (
//     <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-20 md:py-24">
//       <div className="container-page">
//         <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//           <div>
//             <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
//               Local & Domestic Moves
//             </div>

//             <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
//               Local expertise for moves of every size and complexity
//             </h2>

//             <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//               From high-rise buildings to limited-access locations, our local
//               relocation team creates practical moving plans, competitive
//               quotations, and safe handling strategies that fit your timeline,
//               property, and budget.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {domesticRelocationFeatures.map((item) => (
//                 <div
//                   key={item.title}
//                   className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
//                 >
//                   <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
//                   <span className="text-sm leading-6 text-slate-700">
//                     {item.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
//             <Image
//               src="/images/relocations/local-moving.webp"
//               alt="Domestic relocation by Transco Relocations"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Truck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { domesticRelocationFeatures } from "@/data/relocations";

const containerVariants = {
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RelocationsDomesticSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] py-20 md:py-24 overflow-hidden">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          
          
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
              Local & Domestic Moves
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Local expertise for moves of every size and complexity
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              From high-rise buildings to limited-access locations, our local
              relocation team creates practical moving plans, competitive
              quotations, and safe handling strategies.
            </motion.p>

            {/* ෆීචර් කාඩ් ටික එකින් එක ස්ක්‍රෝල් එකත් එක්ක එයි */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {domesticRelocationFeatures.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all"
                >
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                  <span className="text-sm font-semibold text-slate-700">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[420px] lg:min-h-[520px] overflow-hidden rounded-[40px] shadow-2xl"
          >
            <Image
              src="/images/relocations/local-moving.webp"
              alt="Domestic relocation"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}