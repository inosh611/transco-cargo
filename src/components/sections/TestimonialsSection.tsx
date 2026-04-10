// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "James Carter",
//     company: "Global Imports Ltd.",
//     text: "TranscoCargo transformed our logistics operations. Deliveries are faster, and communication is always clear and professional.",
//   },
//   {
//     name: "Sarah Mitchell",
//     company: "Ecom Supply Co.",
//     text: "Reliable, efficient, and extremely professional. Their team handles everything smoothly from pickup to delivery.",
//   },
//   {
//     name: "Daniel Wong",
//     company: "Asia Trade Hub",
//     text: "We’ve worked with many logistics providers, but TranscoCargo stands out for their consistency and customer support.",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="section-space bg-white">
//       <div className="container-page">
//         <div className="mx-auto max-w-2xl text-center">
//           <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//             Testimonials
//           </div>
//           <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//             What Our Clients Say
//           </h2>
//           <p className="mt-5 text-lg text-slate-600">
//             Trusted by businesses around the world for reliable logistics services.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {testimonials.map((item) => (
//             <div
//               key={item.name}
//               className="rounded-[0.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
//             >
//               <div className="flex gap-1 text-[#F47B20]">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} size={18} fill="#F47B20" />
//                 ))}
//               </div>

//               <p className="mt-5 text-slate-600 leading-7">“{item.text}”</p>

//               <div className="mt-6">
//                 <div className="font-semibold text-slate-900">{item.name}</div>
//                 <div className="text-sm text-slate-500">{item.company}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion"; 

const testimonials = [
  {
    name: "James Carter",
    company: "Global Imports Ltd.",
    text: "TranscoCargo transformed our logistics operations. Deliveries are faster, and communication is always clear and professional.",
  },
  {
    name: "Sarah Mitchell",
    company: "Ecom Supply Co.",
    text: "Reliable, efficient, and extremely professional. Their team handles everything smoothly from pickup to delivery.",
  },
  {
    name: "Daniel Wong",
    company: "Asia Trade Hub",
    text: "We’ve worked with many logistics providers, but TranscoCargo stands out for their consistency and customer support.",
  },
];

// Animation Variants
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cards අතර පරතරය
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="section-space bg-white overflow-hidden">
      <div className="container-page">
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Testimonials
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Trusted by businesses around the world for reliable logistics services.
          </p>
        </motion.div>

        {/* Testimonials Grid Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="rounded-[0.5rem] border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              // CSS transition එක hover එකට පමණක් තබා animation එක Motion එකෙන් කරනවා
            >
              <div className="flex gap-1 text-[#F47B20]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }} // තරු ටික එකින් එක පේන්න
                  >
                    <Star size={18} fill="#F47B20" />
                  </motion.div>
                ))}
              </div>

              <p className="mt-5 text-slate-600 leading-7">“{item.text}”</p>

              <div className="mt-6">
                <div className="font-semibold text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}