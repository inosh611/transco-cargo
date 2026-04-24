

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Package,
  MapPinned,
  Truck,
  ShipWheel,
  Plane,
  ClipboardList,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import WorkTogether from "@/components/sections/WorkTogether";
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const quoteSteps = [
  {
    title: "Share Shipment Details",
    description: "Tell us your cargo type, origin, destination, and preferred shipping mode.",
    icon: ClipboardList,
  },
  {
    title: "We Review Requirements",
    description: "Our team evaluates your logistics needs and recommends the best service route.",
    icon: Package,
  },
  {
    title: "Receive a Tailored Quote",
    description: "Get a professional logistics quote aligned with your business or personal shipping needs.",
    icon: Truck,
  },
];

export default function QuotePage() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-20 md:py-28">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <Image
                        src="/images/hero/service-hero.webp"
                        alt="TranscoCargo Team"
                        fill
                        priority
                        className="object-cover object-center"
                      />
            <motion.div variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
              Request a Quote
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-7xl leading-[1.1]">
              Get a Tailored Logistics Quote for Your Shipment
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us about your cargo requirements and our team will prepare a
              professional quote based on your service type, route, and handling
              needs.
            </motion.p>
          </motion.div>
        </div>
      </section> */}
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
                  src="/images/hero/qouate.webp"
                  alt="TranscoCargo Team"
                  fill
                  priority
                  className="object-cover object-center"
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.85)_35%,rgba(15,23,42,0.6)_65%,rgba(15,23,42,0.55)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,123,32,0.2),transparent_30%)]" />
              </motion.div>
      
              <div className="relative z-10 container-page py-28 md:py-36 lg:py-44" style={{ marginLeft: "15%" }}>
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
      {/* --- FORM & INFO SECTION --- */}
      <section className="section-space bg-white">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT SIDE: INFO & STEPS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Why Request a Quote with Us?
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-slate-600">
              We make it easier for businesses and individuals to understand the
              right logistics option before shipping.
            </motion.p>

            {/* Steps with staggered entry */}
            <div className="mt-12 grid gap-6">
              {quoteSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="flex gap-5 rounded-[2rem] border border-slate-100 bg-slate-50/50 p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#3f89dd] text-white shadow-lg">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Service types banner */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-[#F47B20]/20 blur-3xl group-hover:bg-[#F47B20]/40 transition-colors" />
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47B20]">Available Service Types</div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Air Freight", icon: Plane },
                    { label: "Sea Freight", icon: ShipWheel },
                    { label: "Road Freight", icon: Truck },
                    { label: "Specialized Cargo", icon: Package }
                  ].map((service) => (
                    <div key={service.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors">
                      <service.icon size={18} className="text-[#F47B20]" />
                      <span className="text-sm font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: THE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 shadow-2xl shadow-slate-200/50"
          >
            <h2 className="text-2xl font-black text-slate-900">Quote Request Form</h2>
            <p className="mt-2 text-slate-500">Fill in the details below to get started.</p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                  <input type="text" placeholder="Your company" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input type="text" placeholder="+61 X XXX XXX" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Origin</label>
                  <div className="relative">
                    <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="City or Port" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Destination</label>
                  <div className="relative">
                    <MapPinned className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="City or Port" className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Shipment Type</label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all appearance-none cursor-pointer">
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                    <option>Road Freight</option>
                    <option>Warehousing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Cargo Type</label>
                  <input type="text" placeholder="e.g. Electronics" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Shipment Details</label>
                <textarea rows={4} placeholder="Dimensions, weight, quantity..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-[#2F6DB3]/20 focus:border-[#2F6DB3] transition-all" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#F47B20] py-5 font-bold text-white shadow-xl shadow-orange-500/20 transition-all hover:bg-[#de6f1d]"
              >
                Submit Quote Request
                <ArrowRight size={20} />
              </motion.button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Need support first?{" "}
              <Link href="/contact" className="font-bold text-[#2F6DB3] hover:underline">
                Contact our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
       <WorkTogether />
    </main>
  );
}