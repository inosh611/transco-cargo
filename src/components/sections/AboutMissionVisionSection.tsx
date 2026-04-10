// import { Target, Eye } from "lucide-react";

// export default function AboutMissionVisionSection() {
//   return (
//     <section className="section-space bg-slate-50">
//       <div className="container-page">

//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//             Our Purpose
//           </div>

//           <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Driving Logistics with Vision & Purpose
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-slate-600">
//             We are committed to building reliable logistics solutions that empower businesses
//             and create seamless global connectivity.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-14 grid gap-8 md:grid-cols-2">

//           {/* MISSION */}
//           <div className="group relative overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            
//             {/* Glow */}
//             <div className="absolute -right-10 -top-10 h-40 w-40 rounded-sm bg-[#F47B20]/10 blur-3xl" />

//             <div className="relative z-10">
//               <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#F47B20] text-white shadow-lg">
//                 <Target size={28} />
//               </div>

//               <h3 className="mt-6 text-2xl font-bold text-slate-900">
//                 Our Mission
//               </h3>

//               <p className="mt-4 leading-8 text-slate-600">
//                 To deliver fast, reliable, and innovative logistics solutions that simplify
//                 global trade, enhance operational efficiency, and build long-term trust
//                 with our clients.
//               </p>
//             </div>
//           </div>

//           {/* VISION */}
//           <div className="group relative overflow-hidden rounded-[0.5rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            
//             {/* Glow */}
//             <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#2F6DB3]/10 blur-3xl" />

//             <div className="relative z-10">
//               <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#2F6DB3] text-white shadow-lg">
//                 <Eye size={28} />
//               </div>

//               <h3 className="mt-6 text-2xl font-bold text-slate-900">
//                 Our Vision
//               </h3>

//               <p className="mt-4 leading-8 text-slate-600">
//                 To become a globally recognized logistics partner by leveraging technology,
//                 innovation, and operational excellence to connect businesses across the world.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { Target, Eye } from "lucide-react";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutMissionVisionSection() {
  return (
    <section className="section-space overflow-hidden bg-slate-50">
      <div className="container-page">

        {/* --- Heading Section --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]"
          >
            Our Purpose
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl"
          >
            Driving Logistics with Vision & Purpose
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            We are committed to building reliable logistics solutions that empower businesses
            and create seamless global connectivity.
          </motion.p>
        </motion.div>

        {/* --- Cards Section --- */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-shadow hover:shadow-2xl"
          >
            {/* Glow Effect */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F47B20]/5 blur-3xl transition-colors group-hover:bg-[#F47B20]/10" />

            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F47B20] text-white shadow-lg"
              >
                <Target size={30} />
              </motion.div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                To deliver fast, reliable, and innovative logistics solutions that simplify
                global trade, enhance operational efficiency, and build long-term trust
                with our clients.
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-[#F47B20]/20 group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-sm transition-shadow hover:shadow-2xl"
          >
            {/* Glow Effect */}
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-[#2F6DB3]/5 blur-3xl transition-colors group-hover:bg-[#2F6DB3]/10" />

            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F6DB3] text-white shadow-lg"
              >
                <Eye size={30} />
              </motion.div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                To become a globally recognized logistics partner by leveraging technology,
                innovation, and operational excellence to connect businesses across the world.
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-[#2F6DB3]/20 group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}