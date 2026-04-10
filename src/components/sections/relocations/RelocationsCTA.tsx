// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function RelocationsCTA() {
//   return (
//     <section className="container-page pb-20 md:pb-24">
//       <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a,#16345c)] px-8 py-12 text-center text-white shadow-[0_20px_50px_rgba(15,23,42,0.2)] md:px-12 md:py-16">
//         <div className="mx-auto max-w-3xl">
//           <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20]">
//             Ready to Move?
//           </div>

//           <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
//             Start your relocation with a team that plans every detail
//           </h2>

//           <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
//             Whether you are relocating a family, an employee, an office, or a
//             pet, Transco Relocations is ready to help you move with clarity,
//             care, and confidence.
//           </p>

//           <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full bg-[#F47B20] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#df6c15]"
//             >
//               Get a Free Quote
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>

//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
//             >
//               Speak to Our Team
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function RelocationsCTA() {
//   return (
//     <section className="container-page pb-20 md:pb-24">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ 
//           duration: 0.8, 
//           ease: [0.22, 1, 0.36, 1] 
//         }}
//         className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a,#16345c)] px-8 py-12 text-center text-white shadow-[0_20px_50px_rgba(15,23,42,0.3)] md:px-12 md:py-16"
//       >
//         {/* අලංකාර පසුබිම් ආලෝක (Background Glows) */}
//         <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F47B20]/10 blur-[80px]" />
//         <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#2F6DB3]/20 blur-[80px]" />

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="relative z-10 mx-auto max-w-3xl"
//         >
//           {/* Badge Animation */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#F47B20] backdrop-blur-sm"
//           >
//             Ready to Move?
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h2 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="mt-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:leading-[1.1]"
//           >
//             Start your relocation with a <br className="hidden md:block" /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
//               team that plans every detail
//             </span>
//           </motion.h2>

//           {/* Description */}
//           <motion.p 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-6 text-base leading-8 text-slate-300 sm:text-lg"
//           >
//             Whether you are relocating a family, an employee, an office, or a
//             pet, Transco Relocations is ready to help you move with clarity,
//             care, and confidence.
//           </motion.p>

//           {/* Buttons Animation */}
//           <motion.div 
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.6 }}
//             className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/contact"
//                 className="group inline-flex w-full items-center justify-center rounded-full bg-[#F47B20] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#df6c15] sm:w-auto"
//               >
//                 Get a Free Quote
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Link>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href="/contact"
//                 className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
//               >
//                 Speak to Our Team
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- මව් කන්ටේනරය සඳහා Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12, // ඇතුළත දේවල් එකින් එක එන පරතරය
      delayChildren: 0.1,
    },
  },
};

// --- ඇතුළත මූලද්‍රව්‍ය සඳහා Variants ---
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RelocationsCTA() {
  return (
    <section className="container-page pb-20 md:pb-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // 20%ක් ස්ක්‍රීන් එකට ආවම පටන් ගනී
        className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,#0f172a,#16345c)] px-8 py-14 text-center text-white shadow-[0_30px_60px_rgba(15,23,42,0.3)] md:px-12 md:py-20"
      >
        {/* අලංකාර පසුබිම් ආලෝක (Decorative Glows) */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#F47B20]/10 blur-[90px]" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#2F6DB3]/20 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.3em] text-[#F47B20] backdrop-blur-md">
              Ready to Move?
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="mt-8 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl leading-[1.1]"
          >
            Start your relocation with a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              team that plans every detail
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base leading-8 text-slate-300 sm:text-xl font-medium opacity-90"
          >
            Whether you are relocating a family, an employee, an office, or a
            pet, Transco Relocations is ready to help you move with clarity,
            care, and confidence.
          </motion.p>

          {/* Buttons Group */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center rounded-full bg-[#F47B20] px-10 py-4.5 text-base font-bold text-white shadow-[0_10px_20px_rgba(244,123,32,0.3)] transition-all hover:bg-[#df6c15] sm:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4.5 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/15 sm:w-auto"
              >
                Speak to Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}