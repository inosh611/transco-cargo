"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock3, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import WorkTogether from "@/components/sections/WorkTogether";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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
    transition: { staggerChildren: 0.1 }
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

export default function BlogDetailClient({ post, relatedPosts }: { post: any, relatedPosts: any[] }) {
  return (
    <main className="overflow-hidden bg-white">
      {/* --- FIXED HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-950">
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
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9)_0%,rgba(15,23,42,0.7)_40%,rgba(15,23,42,0.3)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.15),transparent_35%)]" />
        </motion.div>

        <div className="relative z-10 container-page py-20 md:py-32">
          {/* Back Button - White version for dark hero */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#F47B20] transition-colors"
            >
              <ArrowLeft size={18} /> Back to Blog
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="mt-10 max-w-4xl"
          >
            {/* Category Badge */}
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F47B20] backdrop-blur-md"
            >
              {post.category}
            </motion.div>

            {/* Title - Changed to White */}
            <motion.h1 
              variants={fadeInUp} 
              className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info - Changed to Light/Slate colors */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-10 flex flex-wrap items-center gap-8 text-sm font-bold text-slate-300"
            >
              <div className="flex items-center gap-2.5">
                <CalendarDays size={18} className="text-[#F47B20]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock3 size={18} className="text-[#2F6DB3]" />
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* --- CONTENT & SIDEBAR SECTION --- */}
      <section className="section-space">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_400px]">
          <motion.article 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            variants={staggerContainer} 
            className="max-w-3xl"
          >
            <div className="space-y-8">
              {post.content.map((paragraph: string, index: number) => (
                <motion.p 
                  key={index} 
                  variants={fadeInUp} 
                  className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.article>

          <aside className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-900">Related Articles</h2>
              <div className="mt-8 space-y-5">
                {relatedPosts.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/blog/${item.slug}`} 
                    className="group block rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F47B20]">
                      {item.category}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-[#2F6DB3] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
     <WorkTogether/>
    </main>
  );
}