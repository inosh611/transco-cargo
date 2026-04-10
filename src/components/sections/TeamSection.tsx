// import Image from "next/image";
// import { Mail } from "lucide-react";

// const teamMembers = [
//   {
//     name: "Michael Perera",
//     role: "Managing Director",
//     image: "/images/user-place-holder.webp",
//   },
//   {
//     name: "Sarah Fernando",
//     role: "Operations Manager",
//     image: "/images/user-place-holder.webp",
//   },
//   {
//     name: "Daniel Silva",
//     role: "Freight Specialist",
//     image: "/images/user-place-holder.webp",
//   },
//   {
//     name: "Nadeesha Kumar",
//     role: "Customer Support Lead",
//     image: "/images/user-place-holder.webp",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="section-space bg-slate-50">
//       <div className="container-page">
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//             Our Team
//           </div>

//           <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//             Meet Our Experts
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-slate-600">
//             Dedicated professionals delivering reliable logistics solutions
//             with precision, care, and experience.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {teamMembers.map((member) => (
//             <div
//               key={member.name}
//               className="cursor-pointer group overflow-hidden rounded-[0.5rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
//             >
//               {/* IMAGE */}
//               <div className="relative h-64 w-full overflow-hidden">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-100"
//                 />

//                 {/* overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               </div>

//               {/* CONTENT */}
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-slate-900">
//                   {member.name}
//                 </h3>

//                 <p className="mt-2 text-sm font-semibold text-[#F47B20]">
//                   {member.role}
//                 </p>

//                 {/* EMAIL ICON */}
//                 <div className="mt-4 flex justify-center">
//                   <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#2F6DB3] hover:text-[#2F6DB3]">
//                     <Mail size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";

const teamMembers = [
  { name: "Michael Perera", role: "Managing Director", image: "/images/user-place-holder.webp" },
  { name: "Sarah Fernando", role: "Operations Manager", image: "/images/user-place-holder.webp" },
  { name: "Daniel Silva", role: "Freight Specialist", image: "/images/user-place-holder.webp" },
  { name: "Nadeesha Kumar", role: "Customer Support Lead", image: "/images/user-place-holder.webp" },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // එකින් එක cards පේන්න
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <section className="section-space bg-slate-50 overflow-hidden">
      <div className="container-page">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Our Team
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Meet Our Experts
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Dedicated professionals delivering reliable logistics solutions
            with precision, care, and experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Card එක උඩට move වෙනවා
              className="group overflow-hidden rounded-[0.5rem] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* IMAGE AREA */}
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }} // Image එක zoom වෙනවා
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay with subtle animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2F6DB3] transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#F47B20]">
                  {member.role}
                </p>

                {/* EMAIL ICON with Motion */}
                <div className="mt-4 flex justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: "#2F6DB3", color: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors"
                  >
                    <Mail size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}