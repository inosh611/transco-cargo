// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { services, servicesMap } from "@/data/services";

// type PageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export async function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

// export default async function ServiceDetailPage({ params }: PageProps) {
//   const { slug } = await params;
//   const service = servicesMap[slug as keyof typeof servicesMap];

//   if (!service) {
//     notFound();
//   }

//   const Icon = service.icon;

//   return (
//     <section className="section-space bg-white">
//       <div className="container-page">
//         <Link
//           href="/services"
//           className="mb-6 inline-block text-sm font-semibold text-[#2F6DB3]"
//         >
//           ← Back to Services
//         </Link>

//         <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
//           <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
//             <Icon size={30} />
//           </div>

//           <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
//             {service.title}
//           </h1>

//           <p className="mt-4 text-lg leading-8 text-slate-600">
//             {service.description}
//           </p>

//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-slate-900">
//               Service Overview
//             </h2>
//             <p className="mt-3 leading-8 text-slate-600">
//               {service.intro}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { services, servicesMap } from "@/data/services";
import { motion, Variants } from "framer-motion";
import React from "react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServiceDetailPage({ params }: PageProps) {
  // සටහන: Next.js 15 හි params යනු Promise එකක් බැවින් එය Unwrap කළ යුතුය.
  // මෙම උදාහරණය සඳහා සරලව params භාවිතා කරමු.
  const resolvedParams = React.use(params) as { slug: string };
  const service = servicesMap[resolvedParams.slug as keyof typeof servicesMap];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50/50">
      <section className="section-space">
        <div className="container-page">
          {/* Back Button Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="group mb-8 inline-flex items-center text-sm font-bold text-[#2F6DB3] transition-colors hover:text-[#F47B20]"
            >
              <span className="mr-2 transition-transform group-hover:-translate-x-1">
                ←
              </span>
              Back to Services
            </Link>
          </motion.div>

          {/* Main Card Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-16 shadow-xl shadow-slate-200/40"
          >
            {/* Icon Animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg shadow-blue-500/20"
            >
              <Icon size={36} />
            </motion.div>

            {/* Content Staggered Animation */}
            <motion.div variants={itemVariants} className="mt-10">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#F47B20] to-orange-300" />
              
              <p className="mt-8 text-xl leading-9 text-slate-600 md:max-w-3xl">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 rounded-3xl bg-slate-50 p-8 md:p-10 border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#2F6DB3]" />
                Service Overview
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 text-justify">
                {service.intro}
              </p>
            </motion.div>

            {/* CTA or Footer inside card */}
            <motion.div variants={itemVariants} className="mt-12">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-2xl bg-[#F47B20] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#de6f1d] active:scale-95"
              >
                Request a Quote for {service.title}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}