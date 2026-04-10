// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function CtaSection() {
//   return (
//     <section className="section-space bg-slate-50">
//       <div className="container-page">
//         <div className="relative overflow-hidden rounded-[0.5rem] bg-gradient-to-r from-[#F47B20] to-[#ff9b51] px-6 py-14 text-white shadow-2xl sm:px-8 lg:px-12">
//           <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
//           <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

//           <div className="relative z-10 mx-auto max-w-3xl text-center">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100">
//               Let’s Work Together
//             </div>

//             <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
//               Ready to Move Your Cargo with Confidence?
//             </h2>

//             <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">
//               Build a stronger logistics experience with dependable freight,
//               secure cargo handling, and responsive customer support tailored to
//               your business needs.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//               <Link
//                 href="/quote"
//                 className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#F47B20] shadow-lg transition hover:-translate-y-1"
//               >
//                 Request a Quote
//                 <ArrowRight size={18} />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, TargetAndTransition } from "framer-motion";

export default function CtaSection() {
  const vibrateAnimation: TargetAndTransition = {
  x: [0, -2, 2, -2, 2, 0],
  transition: {
    duration: 0.4,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut"
  }
  };

  return (
    <section className="section-space bg-slate-50 overflow-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[0.5rem] bg-gradient-to-r from-[#F47B20] to-[#ff9b51] px-6 py-14 text-white shadow-2xl sm:px-8 lg:px-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          />
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-bold uppercase tracking-[0.25em] text-orange-100"
            >
              Let’s Work Together
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-black tracking-tight md:text-5xl"
            >
              Ready to Move Your Cargo with Confidence?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50"
            >
              Build a stronger logistics experience with dependable freight,
              secure cargo handling, and responsive customer support tailored to
              your business needs.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.div animate={vibrateAnimation}>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#F47B20] shadow-lg transition hover:bg-orange-50 active:scale-95"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
