// // import { relocationStats } from "@/data/relocations";

// // export default function RelocationsStats() {
// //   return (
// //     <section className="relative z-10 -mt-10 md:-mt-5">
// //       <div className="container-page">
// //         <div className="grid gap-4 rounded-[5px] border border-white/60 bg-white/95 p-6 shadow-sm backdrop-blur md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10">
// //           {relocationStats.map((stat) => (
// //             <div
// //               key={stat.label}
// //               className="rounded-sm border border-slate-200/80 bg-slate-50/80 px-5 py-6 text-center"
// //             >
// //               <div className="text-3xl font-black text-[#2F6DB3]">
// //                 {stat.value}
// //               </div>
// //               <p className="mt-2 text-sm font-medium text-slate-600">
// //                 {stat.label}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { relocationStats } from "@/data/relocations";
// import { motion, Variants } from "framer-motion";

// // --- Animation Variants ---
// const containerVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.9, y: 15 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" } 
//   },
// };

// export default function RelocationsStats() {
//   return (
//     <section className="relative z-20 -mt-12 md:-mt-16">
//       <div className="container-page">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid gap-4 rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)] backdrop-blur-xl md:grid-cols-2 md:p-8 lg:grid-cols-4 lg:p-10"
//         >
//           {relocationStats.map((stat) => (
//             <motion.div
//               key={stat.label}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -5, 
//                 backgroundColor: "rgba(255, 255, 255, 1)",
//                 transition: { duration: 0.2 } 
//               }}
//               className="group rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-8 text-center transition-all hover:shadow-md"
//             >
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="text-4xl font-black tracking-tight text-[#2F6DB3] lg:text-5xl"
//               >
//                 {stat.value}
//               </motion.div>
              
//               <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-[#F47B20]/20 transition-all group-hover:w-12 group-hover:bg-[#F47B20]" />
              
//               <p className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-500">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";
import { relocationStats } from "@/data/relocations";
import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Smooth Counter ───────────────────────────────────────────────────────────
function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { damping: 25, stiffness: 80 });
  const displayValue = useTransform(smoothCount, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [numericValue, count]);

  return (
    <span className="inline-flex items-baseline gap-0.5">
      <motion.span>{displayValue}</motion.span>
      <span
        style={{
          color: "#E06A14",
          fontSize: "2.1rem",
          fontWeight: 800,
        }}
      >
        {suffix}
      </span>
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RelocationsStats() {
  const [hovered, setHovered] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }[]>(
    relocationStats.map(() => ({ x: 50, y: 50 }))
  );

  const handleMouseMove = (e: React.MouseEvent, idx: number) => {
    const rect = cardRefs.current[idx]?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos((prev) => {
      const next = [...prev];
      next[idx] = { x, y };
      return next;
    });
  };

  return (
    <section className="relative z-30 -mt-20 px-6">
      <div className="container-page mx-auto max-w-6xl">

        {/* ── Gradient border wrapper ── */}
        <div
          style={{
            borderRadius: 28,
            padding: 3,
            background:
              "linear-gradient(135deg, rgba(47,109,179,0.6) 0%, rgba(244,123,32,0.4) 50%, rgba(47,109,179,0.5) 100%)",
            boxShadow: "0 24px 80px -12px rgba(47,109,179,0.18)",
          }}
        >
          {/* ── Card grid ── */}
          <div
            style={{
              borderRadius: 26,
              background: "#f0f5fc",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              overflow: "hidden",
            }}
          >
            {relocationStats.map((stat, idx) => (
              <motion.div
                key={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  padding: "2.25rem 1.75rem",
                  background: hovered === idx ? "#ffffff" : "#f0f5fc",
                  borderRight:
                    idx < relocationStats.length - 1
                      ? "1px solid rgba(47,109,179,0.12)"
                      : "none",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "background 0.35s ease",
                }}
              >
                {/* Magnetic spotlight */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: hovered === idx ? 1 : 0,
                    transition: "opacity 0.3s",
                    background: `radial-gradient(circle at ${mousePos[idx].x}% ${mousePos[idx].y}%, rgba(47,109,179,0.09) 0%, transparent 65%)`,
                  }}
                />

                <div style={{ position: "relative", zIndex: 10 }}>

                  {/* ── Index tag ── */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#2F6DB3",
                        opacity: 0.5,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#2F6DB3",
                        opacity: 0.6,
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* ── Animated number ── */}
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "3rem",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#0f2d50",
                      display: "flex",
                      alignItems: "baseline",
                      marginBottom: "0.85rem",
                    }}
                  >
                    <Counter value={stat.value} />
                  </div>

                  {/* ── Label ── */}
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: hovered === idx ? "#1e3a5a" : "#4a6080",
                      lineHeight: 1.55,
                      margin: 0,
                      transition: "color 0.3s",
                    }}
                  >
                    {stat.label}
                  </p>

                  {/* ── Animated bar indicator ── */}
                  <div
                    style={{
                      marginTop: "1.6rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    {/* Track + fill */}
                    <div
                      style={{
                        height: 2,
                        borderRadius: 99,
                        background: "rgba(47,109,179,0.12)",
                        width: 56,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: hovered === idx ? "100%" : "55%" }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.1 + 0.4,
                          duration: 0.9,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          borderRadius: 99,
                          background: hovered === idx ? "#1a5299" : "#2F6DB3",
                          transition: "background 0.3s",
                        }}
                      />
                    </div>

                    {/* Dot */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1 + 0.9,
                        duration: 0.4,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      animate={{ scale: hovered === idx ? 1.5 : 1 }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: hovered === idx ? "#c05a08" : "#E06A14",
                        transition: "background 0.3s",
                      }}
                    />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}