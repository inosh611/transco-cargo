// import Image from "next/image";
// import { Building2 } from "lucide-react";
// import { officeRelocationFeatures } from "@/data/relocations";

// export default function RelocationsOfficeSection() {
//   return (
//     <section className="container-page py-20 md:py-24">
//       <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
//         <div className="relative order-2 min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:order-1">
//           <Image
//             src="/images/relocations/office.webp"
//             alt="Office relocation services by Transco Relocations"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="order-1 rounded-[10px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10 lg:order-2">
//           <div className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
//             Office Relocations
//           </div>

//           <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
//             Move offices with less downtime and better control
//           </h2>

//           <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//             Office moves require structured planning, fast coordination, and
//             flexible execution. Our team helps organize timelines, crew
//             requirements, equipment needs, and supplies so your business can
//             continue operating with minimal interruption.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             {officeRelocationFeatures.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex items-start gap-3 rounded-[10px] bg-slate-50 px-4 py-4"
//               >
//                 <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6DB3]" />
//                 <span className="text-sm leading-6 text-slate-700">
//                   {item.title}
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
import { Building2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { officeRelocationFeatures } from "@/data/relocations";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RelocationsOfficeSection() {
  return (
    <section className="container-page py-20 md:py-24 overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        
        {/* IMAGE BLOCK - Animated from Left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 min-h-[420px] overflow-hidden rounded-[24px] bg-slate-100 shadow-xl lg:order-1"
        >
          <Image
            src="/images/relocations/office.webp"
            alt="Office relocation services"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-slate-900/5 transition-opacity hover:opacity-0" />
        </motion.div>

        {/* CONTENT CARD - Animated from Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 flex flex-col justify-center rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-12 lg:order-2"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex rounded-full border border-[#2F6DB3]/15 bg-[#2F6DB3]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]"
            >
              Office Relocations
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl leading-[1.2]"
            >
              Move offices with less downtime and better control
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base leading-8 text-slate-600 sm:text-lg"
            >
              Office moves require structured planning, fast coordination, and
              flexible execution. Our team helps organize timelines, crew
              requirements, and equipment needs so your business can
              continue operating with minimal interruption.
            </motion.p>

            {/* FEATURES GRID - Staggered Reveal */}
            <motion.div 
              variants={containerVariants}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {officeRelocationFeatures.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "#f8fafc" }}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 px-5 py-5 transition-all border border-transparent hover:border-slate-200 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#2F6DB3] shadow-sm">
                    <Building2 size={18} />
                  </div>
                  <span className="text-sm font-bold leading-6 text-slate-700">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}