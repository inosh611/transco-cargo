// import Image from "next/image";
// import { HeartHandshake } from "lucide-react";
// import { petRelocationFeatures } from "@/data/relocations";

// export default function RelocationsPetSection() {
//   return (
//     <section className="container-page py-6 md:py-10">
//       <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
//         <div className="overflow-hidden rounded-[10px] bg-slate-950 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] md:p-10">
//           <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
//             Pet Relocation
//           </div>

//           <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
//             We treat pets like family, not cargo
//           </h2>

//           <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
//             Our pet transportation support focuses on careful planning,
//             documentation, travel compliance, and handling that protects the
//             comfort and wellbeing of animals throughout the journey.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             {petRelocationFeatures.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex items-start gap-3 rounded-[10px] border border-white/10 bg-white/5 px-4 py-4"
//               >
//                 <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
//                 <span className="text-sm leading-6 text-slate-200">
//                   {item.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative min-h-[420px] overflow-hidden rounded-[10px] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
//           <Image
//             src="/images/relocations/pet.webp"
//             alt="Pet relocation handled by Transco Relocations"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { petRelocationFeatures } from "@/data/relocations";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RelocationsPetSection() {
  return (
    <section className="container-page py-12 md:py-20 overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        
        {/* TEXT CONTENT CARD - Animated on Scroll */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.25)] md:p-12"
        >
          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F47B20]/10 blur-[80px]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20] backdrop-blur-sm"
            >
              Pet Relocation
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-[1.1]"
            >
              We treat pets like family, <span className="text-[#F47B20]">not cargo</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="mt-6 text-base leading-8 text-slate-300 sm:text-lg opacity-90"
            >
              Our pet transportation support focuses on careful planning,
              documentation, travel compliance, and handling that protects the
              comfort and wellbeing of animals throughout the journey.
            </motion.p>

            {/* FEATURES GRID */}
            <motion.div 
              variants={containerVariants}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {petRelocationFeatures.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 transition-colors"
                >
                  <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-[#F47B20]" />
                  <span className="text-sm font-semibold leading-6 text-slate-200">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* IMAGE BLOCK - Animated from Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-slate-100 shadow-xl"
        >
          <Image
            src="/images/relocations/pet.webp"
            alt="Pet relocation services"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-110"
          />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}