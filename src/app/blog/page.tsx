// import Link from "next/link";
// import { createMetadata } from "@/lib/seo";
// import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
// import Image from "next/image";

// export const metadata = createMetadata({
//   title: "Blog",
//   description:
//     "Read logistics insights, shipping guides, freight tips, and industry updates from TranscoCargo.",
//   path: "/blog",
//   keywords: [
//     "logistics blog",
//     "shipping guide",
//     "freight tips",
//     "cargo insights",
//     "supply chain articles",
//   ],
// });

// const posts = [
//   {
//     title: "How Air Freight Helps Businesses Move Faster",
//     slug: "how-air-freight-helps-businesses-move-faster",
//     excerpt:
//       "Discover how air freight supports urgent shipments, reduces delays, and helps businesses improve delivery speed.",
//     date: "March 2026",
//     readTime: "5 min read",
//     category: "Air Freight",
//   },
//   {
//     title: "Sea Freight vs Air Freight: Which One Is Better?",
//     slug: "sea-freight-vs-air-freight",
//     excerpt:
//       "Understand the difference between sea freight and air freight so you can choose the right shipping method for your cargo.",
//     date: "March 2026",
//     readTime: "6 min read",
//     category: "Shipping Guide",
//   },
//   {
//     title: "Why Warehousing Matters in Modern Logistics",
//     slug: "why-warehousing-matters-in-modern-logistics",
//     excerpt:
//       "Learn how warehousing improves inventory control, order fulfillment, and logistics efficiency for growing businesses.",
//     date: "March 2026",
//     readTime: "4 min read",
//     category: "Warehousing",
//   },
//   {
//     title: "What Businesses Should Know Before Requesting a Freight Quote",
//     slug: "what-businesses-should-know-before-requesting-a-freight-quote",
//     excerpt:
//       "A practical guide to preparing shipment information before requesting a quote from a logistics provider.",
//     date: "March 2026",
//     readTime: "5 min read",
//     category: "Business Tips",
//   },
//   {
//     title: "Best Practices for Smooth International Cargo Handling",
//     slug: "best-practices-for-smooth-international-cargo-handling",
//     excerpt:
//       "Explore practical steps that improve shipment handling, documentation readiness, and delivery consistency.",
//     date: "March 2026",
//     readTime: "7 min read",
//     category: "Cargo Handling",
//   },
//   {
//     title: "How Real-Time Tracking Improves Customer Confidence",
//     slug: "how-real-time-tracking-improves-customer-confidence",
//     excerpt:
//       "See why shipment visibility and modern tracking tools are important for service quality and customer trust.",
//     date: "March 2026",
//     readTime: "4 min read",
//     category: "Tracking",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <>
//       {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
//         <div className="container-page py-16 md:py-20">
//           <div className="max-w-3xl">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               Insights & Articles
//             </div>

//             <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
//               Logistics Insights for Modern Businesses
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               Explore guides, practical tips, and logistics knowledge designed
//               to help businesses make smarter shipping decisions.
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <section className="relative overflow-hidden bg-slate-950">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/hero/blog.webp"
//             alt="TranscoCargo Team"
//             fill
//             priority
//             className="object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />

//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
//         </div>

//         <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
//           <div className="max-w-3xl">
//             <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
//               Insights & Articles
//             </div>

//             <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
//               Logistics Insights for Modern Businesses
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
//               Explore guides, practical tips, and logistics knowledge designed
//               to help businesses make smarter shipping decisions.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-white">
//         <div className="container-page">
//           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {posts.map((post) => (
//               <article
//                 key={post.slug}
//                 className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F6DB3]/30 hover:shadow-2xl"
//               >
//                 <div className="inline-flex rounded-full bg-[#2F6DB3]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6DB3]">
//                   {post.category}
//                 </div>

//                 <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
//                   {post.title}
//                 </h2>

//                 <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>

//                 <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
//                   <div className="flex items-center gap-2">
//                     <CalendarDays size={16} className="text-[#F47B20]" />
//                     <span>{post.date}</span>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Clock3 size={16} className="text-[#2F6DB3]" />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>

//                 <Link
//                   href={`/blog/${post.slug}`}
//                   className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2F6DB3] transition group-hover:text-[#F47B20]"
//                 >
//                   Read Article
//                   <ArrowRight size={16} />
//                 </Link>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const heroImageEffect: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
};

const posts = [
  {
    title: "How Air Freight Helps Businesses Move Faster",
    slug: "how-air-freight-helps-businesses-move-faster",
    excerpt: "Discover how air freight supports urgent shipments, reduces delays, and helps businesses improve delivery speed.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Air Freight",
  },
  {
    title: "Sea Freight vs Air Freight: Which One Is Better?",
    slug: "sea-freight-vs-air-freight",
    excerpt: "Understand the difference between sea freight and air freight so you can choose the right shipping method for your cargo.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Shipping Guide",
  },
  {
    title: "Why Warehousing Matters in Modern Logistics",
    slug: "why-warehousing-matters-in-modern-logistics",
    excerpt: "Learn how warehousing improves inventory control, order fulfillment, and logistics efficiency for growing businesses.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Warehousing",
  },
  {
    title: "What Businesses Should Know Before Requesting a Freight Quote",
    slug: "what-businesses-should-know-before-requesting-a-freight-quote",
    excerpt: "A practical guide to preparing shipment information before requesting a quote from a logistics provider.",
    date: "March 2026",
    readTime: "5 min read",
    category: "Business Tips",
  },
  {
    title: "Best Practices for Smooth International Cargo Handling",
    slug: "best-practices-for-smooth-international-cargo-handling",
    excerpt: "Explore practical steps that improve shipment handling, documentation readiness, and delivery consistency.",
    date: "March 2026",
    readTime: "7 min read",
    category: "Cargo Handling",
  },
  {
    title: "How Real-Time Tracking Improves Customer Confidence",
    slug: "how-real-time-tracking-improves-customer-confidence",
    excerpt: "See why shipment visibility and modern tracking tools are important for service quality and customer trust.",
    date: "March 2026",
    readTime: "4 min read",
    category: "Tracking",
  },
];

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-950">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroImageEffect}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/blog.webp"
            alt="TranscoCargo Blog Hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.82)_35%,rgba(15,23,42,0.58)_65%,rgba(15,23,42,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.18),transparent_25%)]" />
        </motion.div>

        <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-sm">
              Insights & Articles
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl leading-[1.1]">
              Logistics Insights for Modern Businesses
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Explore guides, practical tips, and logistics knowledge designed
              to help businesses make smarter shipping decisions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- ARTICLES GRID --- */}
      <section className="section-space bg-white">
        <div className="container-page">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#2F6DB3]/30 hover:shadow-2xl"
              >
                <div className="inline-flex w-fit rounded-full bg-[#2F6DB3]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2F6DB3]">
                  {post.category}
                </div>

                <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#2F6DB3] transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="mt-4 flex-grow leading-relaxed text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-6 text-xs font-bold text-slate-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-[#F47B20]" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} className="text-[#2F6DB3]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#2F6DB3] group-hover:text-[#F47B20] transition-colors"
                >
                  Read Article
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}