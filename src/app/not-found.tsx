// import Link from "next/link";
// import { SearchX, ArrowRight } from "lucide-react";

// export default function NotFound() {
//   return (
//     <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.10),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
//       <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
//         <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-xl">
//           <SearchX size={36} />
//         </div>

//         <div className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//           Page Not Found
//         </div>

//         <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
//           Sorry, we couldn’t find the page you’re looking for
//         </h1>

//         <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//           The page may have been moved, renamed, or may not exist anymore.
//           You can return to the homepage or explore our services.
//         </p>

//         <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 rounded-full bg-[#2F6DB3] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#275c98]"
//           >
//             Go to Home
//             <ArrowRight size={18} />
//           </Link>

//           <Link
//             href="/services"
//             className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-[#F47B20] hover:text-[#F47B20]"
//           >
//             View Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Compass, Home, Briefcase } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white selection:bg-blue-100">
      {/* Background Smart Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-orange-50/50 blur-[100px]" />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%232F6DB3\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }} 
        />
      </div>

      <div className="container-page relative z-10 flex min-h-screen flex-col items-center justify-center py-20 text-center">
        
        {/* Animated Icon Box */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/10" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-[3rem] bg-white shadow-[0_20px_50px_rgba(47,109,179,0.15)] ring-1 ring-slate-100">
            <Compass size={56} className="text-[#2F6DB3] animate-[spin_10s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
            Error 404 • Lost in Transit
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-[1000] tracking-tighter text-slate-950 sm:text-7xl">
            This path leads <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F6DB3] to-[#F47B20]">elsewhere.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-500">
            The page you are looking for might have been relocated or is temporarily unavailable. 
            Don't worry, your journey doesn't end here.
          </p>
        </motion.div>

        {/* Smart Interactive Navigation Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="my-14 w-full max-w-2xl"
        >
          <div className="relative flex items-center justify-between px-2">
            {/* Background Line */}
            <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-slate-100" />
            
            {/* Navigation Nodes */}
            {[
              { label: "Home", href: "/", icon: <Home size={14} /> },
              { label: "Lost", active: true },
              { label: "Services", href: "/services", icon: <Briefcase size={14} /> },
            ].map((node, i) => (
              <div key={i} className="relative flex flex-col items-center">
                {node.href ? (
                  <Link href={node.href} className="group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-50 text-slate-400 shadow-sm transition-all hover:border-[#2F6DB3] hover:text-[#2F6DB3] hover:scale-110">
                      {node.icon}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                      {node.label}
                    </span>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full border-4 border-white bg-[#F47B20] shadow-[0_0_20px_rgba(244,123,32,0.4)] ring-2 ring-[#F47B20]" />
                    <span className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-widest text-[#F47B20]">
                      {node.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-2xl bg-[#2F6DB3] px-10 py-5 font-bold text-white shadow-[0_20px_40px_-10px_rgba(47,109,179,0.3)] transition-all hover:-translate-y-1 hover:bg-[#2F6DB3]/90"
          >
            Back to Home
            <MoveRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-slate-200 bg-white px-10 py-5 font-bold text-slate-700 transition-all hover:border-[#F47B20]/30 hover:bg-orange-50/50 hover:text-[#F47B20]"
          >
            Contact Support
          </Link>
        </motion.div>

      </div>
    </section>
  );
}