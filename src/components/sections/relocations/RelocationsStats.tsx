// import { relocationStats } from "@/data/relocations";

// export default function RelocationsStats() {
//   return (
//     <section className="relative z-10 -mt-10 md:-mt-5">
//       <div className="container-page">
//         <div className="grid gap-4 rounded-[5px] border border-white/60 bg-white/95 p-6 shadow-sm backdrop-blur md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10">
//           {relocationStats.map((stat) => (
//             <div
//               key={stat.label}
//               className="rounded-sm border border-slate-200/80 bg-slate-50/80 px-5 py-6 text-center"
//             >
//               <div className="text-3xl font-black text-[#2F6DB3]">
//                 {stat.value}
//               </div>
//               <p className="mt-2 text-sm font-medium text-slate-600">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { relocationStats } from "@/data/relocations";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function RelocationsStats() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16">
      <div className="container-page">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-4 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10"
        >
          {relocationStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(255, 255, 255, 1)",
                transition: { duration: 0.2 } 
              }}
              className="group rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-8 text-center transition-all hover:shadow-md"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl font-black tracking-tight text-[#2F6DB3] lg:text-5xl"
              >
                {stat.value}
              </motion.div>
              
              <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-[#F47B20]/20 transition-all group-hover:w-12 group-hover:bg-[#F47B20]" />
              
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}