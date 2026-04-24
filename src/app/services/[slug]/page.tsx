
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { services, servicesMap } from "@/data/services";
import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import WorkTogether from "@/components/sections/WorkTogether";

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
  const resolvedParams = React.use(params) as { slug: string };
  const service = servicesMap[resolvedParams.slug as keyof typeof servicesMap];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50/50">
       {/* --- HERO SECTION --- */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
              {/* Background Image with Scale Animation */}
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
                {/* Gradients */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.85)_35%,rgba(15,23,42,0.6)_65%,rgba(15,23,42,0.55)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.2),transparent_30%)]" />
              </motion.div>
      
              <div className="relative z-10 container-page py-28 md:py-36 lg:py-44">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="max-w-4xl"
                >
                  {/* Badge */}
                  <motion.div 
                    variants={fadeInUp}
                    className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-md"
                  >
                    Our Services
                  </motion.div>
      
                  {/* Title */}
                  <motion.h1 
                    variants={fadeInUp}
                    className="mt-8 text-5xl font-black tracking-tight text-white md:text-7xl leading-[1.1]"
                  >
                    End-to-End Logistics <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                      Services for Businesses
                    </span>
                  </motion.h1>
      
                  {/* Description */}
                  <motion.p 
                    variants={fadeInUp}
                    className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-200/90"
                  >
                    We provide dependable freight, storage, and specialized cargo
                    services designed to help businesses move faster, operate smarter,
                    and build trust across every shipment.
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Bottom Decorative Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" 
              />
            </section>
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
  className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-200/60 bg-white p-8 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
>
  {/* Ambient Background Accents */}
  <div className="absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />
  <div className="absolute -right-24 -bottom-24 -z-10 h-96 w-96 rounded-full bg-orange-50/50 blur-3xl" />

  <div className="relative z-10 grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
    
    {/* LEFT SIDE: Identity & Branding */}
    <div className="lg:col-span-5 lg:sticky lg:top-8">
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, rotate: -3 }}
        className="inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#2F6DB3] to-[#3f89dd] text-white shadow-2xl shadow-slate-900/20"
      >
        <Icon size={42} strokeWidth={1.5} className="text-white" />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12">
        <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#2F6DB3]">
          Service Excellence
        </span>
        <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-3xl">
          {service.title}
        </h2>
        
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

    {/* RIGHT SIDE: Narrative & Detail */}
    <motion.div 
      variants={itemVariants}
      className="lg:col-span-7"
    >
      <div className="group relative rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 md:p-14 transition-colors hover:bg-slate-50">
        <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Service Overview
            </h2>
            <div className="h-px flex-1 bg-slate-200 mx-6 hidden md:block" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F47B20] shadow-sm">
                <div className="h-2 w-2 rounded-full bg-current" />
            </div>
        </div>
        
        <div 
          className="prose prose-slate prose-xl max-w-none font-medium leading-relaxed text-slate-600"
          dangerouslySetInnerHTML={{ __html: service.description }} 
        />

        {/* Feature Grid Inside Content */}
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