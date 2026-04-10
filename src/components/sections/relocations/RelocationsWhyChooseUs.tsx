// import SectionHeading from "@/components/shared/SectionHeading";
// import { relocationReasons } from "@/data/relocations";

// export default function RelocationsWhyChooseUs() {
//   return (
//     <section className="container-page py-20 md:py-24">
//       <SectionHeading
//         eyebrow="Why Choose Transco"
//         title="A relocation partner built for clarity, speed, and confidence"
//         description="Our approach is centered on global reach, transparent planning, careful coordination, and flexible services that adapt to the complexity of each move."
//       />

//       <div className="mt-14 grid gap-6 lg:grid-cols-2">
//         {relocationReasons.map((reason) => {
//           const Icon = reason.icon;

//           return (
//             <article
//               key={reason.title}
//               className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-sm"
//             >
//               <div className="flex items-start gap-5">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F47B20]/10 text-[#F47B20]">
//                   <Icon className="h-7 w-7" />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-slate-900">
//                     {reason.title}
//                   </h3>

//                   <p className="mt-3 text-base leading-7 text-slate-600">
//                     {reason.description}
//                   </p>
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import { relocationReasons } from "@/data/relocations";
import { motion } from "framer-motion";

export default function RelocationsWhyChooseUs() {
  return (
    <section className="container-page py-20 md:py-24 overflow-hidden">
      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          eyebrow="Why Choose Transco"
          title="A relocation partner built for clarity, speed, and confidence"
          description="Our approach is centered on global reach, transparent planning, careful coordination, and flexible services that adapt to the complexity of each move."
        />
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {relocationReasons.map((reason, index) => {
          const Icon = reason.icon;
          // ඔත්තේ සංඛ්‍යා (Index: 0, 2) වමෙන්ද, ඉරට්ටේ සංඛ්‍යා (Index: 1, 3) දකුණෙන්ද ඇතුළට එයි
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ scale: 1.02 }}
              className="group rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-[#F47B20]/30 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-5">
                {/* Icon Container with pop animation */}
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F47B20]/10 text-[#F47B20] transition-colors group-hover:bg-[#F47B20] group-hover:text-white"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#2F6DB3] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600 font-medium opacity-90">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}