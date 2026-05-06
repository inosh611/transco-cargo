"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
// අවශ්‍ය සියලුම icons සහ components import කරගන්න
import { Ship, Airplay, Warehouse, ShieldCheck, Truck, Globe, ArrowRight } from "lucide-react";
import WorkTogether from "@/components/sections/WorkTogether";

// --- Icons Map ---
// Server එකේ ඉඳන් icons එවන්න බැරි නිසා slug එක අනුව මෙතනින් icon එක තෝරාගන්නවා
const iconMap: Record<string, any> = {
  "air-freight": Airplay,
  "sea-freight": Ship,
  "warehousing": Warehouse,
  "customs-brokerage": ShieldCheck,
  "land-transport": Truck,
  "global-logistics": Globe,
};

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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

export default function ServiceDetailClient({ service }: { service: any }) {
  const Icon = iconMap[service.slug as keyof typeof iconMap] || Globe;

  return (
    <main className="min-h-screen bg-slate-50/50">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/service-hero.webp"
            alt="TranscoCargo Team"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.85)_35%,rgba(15,23,42,0.6)_65%,rgba(15,23,42,0.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.2),transparent_30%)]" />
        </motion.div>

        <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-md">
              Our Services
            </motion.div>
            <motion.h1 variants={fadeInUp} className="mt-8 text-5xl font-black tracking-tight text-white md:text-7xl leading-[1.1]">
              End-to-End Logistics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Services for Businesses
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-200/90">
              We provide dependable freight, storage, and specialized cargo
              services designed to help businesses move faster, operate smarter.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="section-space">
        <div className="container-page">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/services" className="group mb-8 inline-flex items-center text-sm font-bold text-[#2F6DB3] transition-colors hover:text-[#F47B20]">
              <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
              Back to Services
            </Link>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-200/60 bg-white p-8 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
            <div className="absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 -z-10 h-96 w-96 rounded-full bg-orange-50/50 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
              {/* LEFT SIDE */}
              <div className="lg:col-span-5 lg:sticky lg:top-8">
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: -3 }} className="inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#2F6DB3] to-[#3f89dd] text-white shadow-2xl">
                  <Icon size={42} strokeWidth={1.5} />
                </motion.div>
                <motion.div variants={itemVariants} className="mt-12">
                  <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#2F6DB3]">Service Excellence</span>
                  <h2 className="text-3xl font-black leading-tight text-slate-900">{service.title}</h2>
                  <div className="mt-10 flex items-center gap-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" />
                      ))}
                    </div>
                    <p className="text-sm font-bold text-slate-500">Trusted by 500+ Businesses</p>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE */}
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <div className="group relative rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 md:p-14 transition-colors hover:bg-slate-50">
                  <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900">Service Overview</h2>
                    <div className="h-px flex-1 bg-slate-200 mx-6 hidden md:block" />
                  </div>
                  <div className="prose prose-slate prose-xl max-w-none font-medium leading-relaxed text-slate-600"
                    dangerouslySetInnerHTML={{ __html: service.description }} 
                  />
                  <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { label: "Execution", val: "Precision" },
                      { label: "Support", val: "24/7 Global" },
                      { label: "Security", val: "Tier-1 Insured" },
                      { label: "Tracking", val: "Real-time" }
                    ].map((stat, i) => (
                      <div key={i} className="rounded-2xl border border-slate-200/60 bg-white/60 p-5 backdrop-blur-sm">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                        <p className="mt-1 font-bold text-slate-900">{stat.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <WorkTogether />
    </main>
  );
}