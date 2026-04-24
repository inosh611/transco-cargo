// import Link from "next/link";
// import { Mail, Phone, MapPin, ArrowRight, Building2 } from "lucide-react";
// import { createMetadata } from "@/lib/seo";
// import Image from "next/image";

// export const metadata = createMetadata({
//   title: "Contact Us",
//   description:
//     "Get in touch with TranscoCargo for logistics services, shipment inquiries, and customer support.",
//   path: "/contact",
//   keywords: [
//     "contact logistics company",
//     "cargo support",
//     "freight inquiry",
//     "shipping contact",
//   ],
// });

// const offices = [
//   {
//     title: "Campbellfield Office / Warehouse",
//     addressLine1: "45 Adrian Road",
//     addressLine2: "Campbellfield VIC 3061",
//     country: "Australia",
//     phone: "+61 3 9357 7228",
//     fax: "+61 3 9357 7229",
//     email: "info@transcocargo.com.au",
//     mapSrc:
//       "https://www.google.com/maps?q=45%20Adrian%20Road%2C%20Campbellfield%20VIC%203061%2C%20Australia&z=15&output=embed",
//   },
//   {
//     title: "Dandenong South Office / Warehouse",
//     addressLine1: "206-208 Discovery Road",
//     addressLine2: "Dandenong South VIC 3175",
//     country: "Australia",
//     phone: "+61 3 9703 2255",
//     fax: "+61 3 9790 0677",
//     email: "info@transcocargo.com.au",
//     mapSrc:
//       "https://www.google.com/maps?q=206-208%20Discovery%20Road%2C%20Dandenong%20South%20VIC%203175%2C%20Australia&z=15&output=embed",
//   },
// ];

// export default function ContactPage() {
//   return (
//     <>
//       {/* <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
//         <div className="container-page py-16 md:py-20">
//           <div className="max-w-3xl">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               Contact Us
//             </div>

//             <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
//               Let’s Talk About Your Shipment
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               Have questions about logistics services, pricing, or shipment
//               tracking? Our team is ready to help you with reliable support and
//               professional guidance.
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <section className="relative overflow-hidden bg-slate-950">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/hero/contact.webp"
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
//               Contact Us
//             </div>

//             <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
//               Let’s Talk About Your Shipment
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
//               Have questions about logistics services, pricing, or shipment
//               tracking? Our team is ready to help you with reliable support and
//               professional guidance.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="section-space bg-white">
//         <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr]">
//           <div>
//             <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
//               Get in Touch
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-slate-600">
//               Reach out to our logistics team for inquiries, quotes, or support.
//               We respond quickly and provide clear guidance for your cargo
//               needs.
//             </p>

//             <div className="mt-10 space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="rounded-xl bg-[#2F6DB3] p-3 text-white">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-900">Email</div>
//                   <p className="text-slate-600">info@transcocargo.com.au</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="rounded-xl bg-[#F47B20] p-3 text-white">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-900">Phone</div>
//                   <p className="text-slate-600">+61 3 9703 2255</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="rounded-xl bg-slate-900 p-3 text-white">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-slate-900">
//                     Main Location
//                   </div>
//                   <p className="text-slate-600">Melbourne, Australia</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
//             <h3 className="text-2xl font-bold text-slate-900">
//               Send Us a Message
//             </h3>

//             <form className="mt-6 space-y-5">
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-600">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-600">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-slate-600">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   placeholder="Write your message"
//                   className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2F6DB3]"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F47B20] px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#de6f1d]"
//               >
//                 Send Message
//                 <ArrowRight size={18} />
//               </button>
//             </form>

//             <p className="mt-4 text-center text-sm text-slate-500">
//               Or request a{" "}
//               <Link
//                 href="/quote"
//                 className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
//               >
//                 custom quote
//               </Link>
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-slate-50">
//         <div className="container-page">
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               Our Locations
//             </div>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
//               Offices & Warehouses
//             </h2>
//             <p className="mt-5 text-lg text-slate-600">
//               Visit our operational locations or contact the nearest office for
//               shipment support.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-8 lg:grid-cols-2">
//             {offices.map((office) => (
//               <article
//                 key={office.title}
//                 className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
//               >
//                 <div className="p-7">
//                   <div className="flex items-start gap-4">
//                     <div className="rounded-2xl bg-[#2F6DB3] p-3 text-white shadow-lg">
//                       <Building2 size={22} />
//                     </div>

//                     <div>
//                       <h3 className="text-2xl font-bold tracking-tight text-slate-900">
//                         {office.title}
//                       </h3>
//                       <div className="mt-4 space-y-1 text-slate-600">
//                         <p>{office.addressLine1}</p>
//                         <p>{office.addressLine2}</p>
//                         <p>{office.country}</p>
//                       </div>

//                       <div className="mt-5 space-y-1 text-slate-700">
//                         <p>
//                           <span className="font-semibold">Phone:</span>{" "}
//                           {office.phone}
//                         </p>
//                         <p>
//                           <span className="font-semibold">Fax:</span>{" "}
//                           {office.fax}
//                         </p>
//                         <p>
//                           <span className="font-semibold">Email:</span>{" "}
//                           <a
//                             href={`mailto:${office.email}`}
//                             className="font-semibold text-[#2F6DB3] hover:text-[#F47B20]"
//                           >
//                             {office.email}
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-slate-200 bg-slate-100 p-4">
//                   <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
//                     <iframe
//                       src={office.mapSrc}
//                       width="100%"
//                       height="360"
//                       style={{ border: 0 }}
//                       loading="lazy"
//                       allowFullScreen
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title={office.title}
//                     />
//                   </div>
//                 </div>
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
import { Mail, Phone, MapPin, ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const imageScale: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
};

const offices = [
  {
    title: "Campbellfield Office / Warehouse",
    addressLine1: "45 Adrian Road",
    addressLine2: "Campbellfield VIC 3061",
    country: "Australia",
    phone: "+61 3 9357 7228",
    fax: "+61 3 9357 7229",
    email: "info@transcocargo.com.au",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.0326!2d144.9535!3d-37.6635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM5JzQ4LjYiUyAxNDTCsDU3JzEyLjYiRQ!5e0!3m2!1sen!2sau!4v123456789",
  },
  {
    title: "Dandenong South Office / Warehouse",
    addressLine1: "206-208 Discovery Road",
    addressLine2: "Dandenong South VIC 3175",
    country: "Australia",
    phone: "+61 3 9703 2255",
    fax: "+61 3 9790 0677",
    email: "info@transcocargo.com.au",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5!2d145.2!3d-38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzhCsDAwJzAwLjAiUyAxNDXCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v123456789",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-950">
        <motion.div 
          variants={imageScale}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero/contact.webp"
            alt="TranscoCargo Support Team"
            fill
            priority
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 container-page py-28 md:py-40">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20] backdrop-blur-md">
              Contact Us
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mt-6 text-5xl font-black tracking-tight text-white md:text-7xl leading-[1.1]">
              Let’s Talk About Your Shipment
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Have questions about logistics services, pricing, or shipment
              tracking? Our team is ready to help you with reliable support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- FORM & INFO SECTION --- */}
      <section className="section-space bg-white">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-black tracking-tight text-slate-900">
              Get in Touch
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-slate-600">
              Reach out to our logistics team for inquiries, quotes, or support.
              We respond quickly to your cargo needs.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-12 space-y-8">
              {[
                { icon: <Mail />, color: "bg-[#2F6DB3]", label: "Email", value: "info@transcocargo.com.au" },
                { icon: <Phone />, color: "bg-[#F47B20]", label: "Phone", value: "+61 3 9703 2255" },
                { icon: <MapPin />, color: "bg-slate-900", label: "Main Location", value: "Melbourne, Australia" }
              ].map((item, i) => (
                <motion.div variants={fadeInUp} key={i} className="flex items-center gap-5">
                  <div className={`rounded-2xl ${item.color} p-4 text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[3rem] border border-slate-200 bg-slate-50 p-10 shadow-xl"
          >
            <h3 className="text-3xl font-black text-slate-900">Send Us a Message</h3>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-2xl border-none bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-[#2F6DB3] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full rounded-2xl border-none bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-[#2F6DB3] transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 ml-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full rounded-2xl border-none bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 outline-none focus:ring-2 focus:ring-[#2F6DB3] transition-all" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#F47B20] py-5 font-bold text-white shadow-lg transition-colors hover:bg-[#de6f1d]"
              >
                Send Message
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- LOCATIONS SECTION --- */}
      <section className="section-space bg-slate-50">
        <div className="container-page">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">Our Locations</motion.div>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">Offices & Warehouses</motion.h2>
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {offices.map((office, idx) => (
              <motion.article
                key={office.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-fit rounded-2xl bg-[#2F6DB3] p-4 text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <Building2 size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-slate-900 leading-tight">{office.title}</h3>
                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="space-y-1 text-slate-500 font-medium">
                          <p className="flex items-center gap-2"><MapPin size={14} className="text-[#F47B20]"/> {office.addressLine1}</p>
                          <p className="ml-5">{office.addressLine2}</p>
                          <p className="ml-5">{office.country}</p>
                        </div>
                        <div className="space-y-2 text-sm text-slate-600">
                          <p><span className="font-bold text-slate-900">Phone:</span> {office.phone}</p>
                          <p><span className="font-bold text-slate-900">Email:</span> <span className="text-[#2F6DB3]">{office.email}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <div className="overflow-hidden rounded-[2rem] grayscale-[0.5] hover:grayscale-0 transition-all duration-700 h-[300px]">
                    <iframe
                      src={office.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title={office.title}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
       <WorkTogether />
    </main>
    
  );
}
