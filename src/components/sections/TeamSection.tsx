"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Shanaka Dias", role: "Joint Managing Director", image: "/images/team/shanaka-dias.webp" },
  { name: "Dr. Charitha Perera", role: "Group CEO", image: "/images/team/dr-charitha-perera.webp" },
  { name: "Swairee Rathnasiri", role: "Head of HR", image: "/images/team/swairee-rathnasiri.webp" },
  { name: "Shiran Chathuranga", role: "Senior Accountant", image: "/images/team/shiran-chathuranga.webp" },
  { name: "Shanel Suraweera", role: "Asst General Manager – Import Cluster", image: "/images/team/shanel-suraweera.webp" },
  { name: "Shan Perera", role: "Operations Manager", image: "/images/team/shan-perera.webp" },
  { name: "Dilshan Jayawardena", role: "Senior Manager – Customer Service", image: "/images/team/dilshan-jayawardena.webp" },
  { name: "Nisalka Perera", role: "Manager – Sales & Business Development", image: "/images/team/nisalka-perera.webp" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TeamSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#f7f6f2]">

      {/* ── Soft decorative blobs ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-orange-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-amber-100/80 blur-[100px]" />

      {/* ── Subtle dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #d1c9b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[2px] w-10 bg-orange-400 rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500">
              Our People
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.05] tracking-tight max-w-lg">
              The Faces Behind{" "}
              <span className="relative inline-block">
                Every Mile
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q55 3 110 8 Q165 13 218 6"
                    stroke="#f97316"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed md:text-right">
              Dedicated professionals driving excellence in every shipment we handle.
            </p>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ alignItems: "stretch" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.28, ease: "easeOut" } }}
              className="group relative flex"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-sm group-hover:shadow-xl group-hover:shadow-orange-100/60 transition-all duration-400 flex flex-col w-full">

                {/* ── Image ── */}
                <div className="relative w-full h-60 flex-shrink-0 overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{
                      objectPosition: "center 15%",
                      transform: "translateZ(0)",
                      WebkitTransform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t  to-transparent" />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[11px] font-bold text-gray-400 border border-gray-200/60">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="px-5 pb-5 pt-2 flex flex-col flex-grow">
                  <h3 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[12px] font-semibold tracking-widest uppercase text-gray-400 min-h-[2.5rem] leading-tight">
                    {member.role}
                  </p>
                  <div className="mt-auto pt-3 flex items-center gap-2">
                    <div className="h-[2px] w-0 group-hover:w-80 bg-orange-400 transition-all duration-500 ease-out rounded-full" />
                    <div className="h-[2px] flex-1 bg-gray-100 rounded-full" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Meet the Full Team Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-14 flex justify-center"
        >
          <Link href="/management-team">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-orange-200 cursor-pointer"
            >
              Meet the Full Team
              <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}