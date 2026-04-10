// import SectionHeading from "@/components/shared/SectionHeading";
// import { relocationServices } from "@/data/relocations";

// export default function RelocationsServices() {
//   return (
//     <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20 md:py-24">
//       <div className="container-page">
//         <SectionHeading
//           eyebrow="International Services"
//           title="Relocation services designed around real moving needs"
//           description="From international shipping and household storage to corporate moves, pet transport, and visa support, each service is structured to make relocation simpler and more manageable."
//         />

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {relocationServices.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className="group rounded-[10px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6DB3]/10 text-[#2F6DB3]">
//                   <Icon className="h-7 w-7" />
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-slate-900">
//                   {service.title}
//                 </h3>

//                 <p className="mt-3 text-base leading-7 text-slate-600">
//                   {service.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { relocationServices } from "@/data/relocations";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // කාඩ්පත් එකින් එක එන පරතරය
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function RelocationsServices() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20 md:py-24 overflow-hidden">
      <div className="container-page">
        {/* Section Heading with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="International Services"
            title="Relocation services designed around real moving needs"
            description="From international shipping and household storage to corporate moves, pet transport, and visa support, each service is structured to make relocation simpler and more manageable."
          />
        </motion.div>

        {/* Services Grid - ස්ක්‍රෝල් කරද්දී ඇනිමේට් වේ */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {relocationServices.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]"
              >
                {/* Icon Container with subtle animation */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F6DB3]/5 text-[#2F6DB3] transition-colors duration-300 group-hover:bg-[#2F6DB3] group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-xl font-extrabold text-slate-900 group-hover:text-[#2F6DB3] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-4 text-base font-medium leading-8 text-slate-600 opacity-90">
                  {service.description}
                </p>

                {/* Decorative element - corner accent */}
                <div className="absolute right-6 bottom-6 h-2 w-2 rounded-full bg-slate-100 transition-all duration-300 group-hover:scale-[3] group-hover:bg-[#F47B20]/20" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}