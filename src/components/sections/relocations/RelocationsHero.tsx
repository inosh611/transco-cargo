// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function RelocationsHero() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/relocations/hero-relocation.webp"
//           alt="TranscoCargo Team"
//           fill
//           priority
//           className="object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
//       </div>

//       <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
//         <div className="max-w-3xl">
//           <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
//             Transco Relocations
//           </div>

//           <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
//              Seamless Relocations for Families, Individuals & Businesses
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
//             With over 30 years of experience in international moving, Transco 
//             Relocations delivers planning, packing, transport, storage, and 
//             on-the-ground coordination to make every move more confident and 
//             less stressful.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function RelocationsHero() {
  const containerRef = useRef(null);
  
  // ස්ක්‍රෝල් කරන විට බැක්ග්‍රවුන්ඩ් එක මදක් පල්ලෙහාට යන ඉෆෙක්ට් එක (Parallax)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // අකුරු එකින් එක එන්න Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] overflow-hidden bg-slate-950 flex items-center"
    >
      <motion.div 
        style={{ y }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/relocations/hero-relocation.webp"
          alt="Relocation Services"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.85)_35%,rgba(15,23,42,0.6)_65%,rgba(15,23,42,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.2),transparent_35%)]" />
      </motion.div>

      <div className="relative z-10 container-page py-28 md:py-36 lg:py-44" style={{ marginLeft: "15%" }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }} 
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
              Transco Relocations
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]"
          >
            Seamless Relocations for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
              Families & Businesses
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl opacity-90"
          >
            With over 30 years of experience in international moving, we deliver
            expert planning, packing, and on-the-ground coordination to make 
            every move more confident and less stressful.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#F47B20] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#df6c15] hover:shadow-[0_10px_20px_rgba(244,123,32,0.3)]">
              Start Your Move
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10">
              Our Process
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-white/20 flex justify-center p-1"
        >
          <div className="h-2 w-1 rounded-full bg-[#F47B20]" />
        </motion.div>
      </motion.div>
    </section>
  );
}