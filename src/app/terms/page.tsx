// import { createMetadata } from "@/lib/seo";

// export const metadata = createMetadata({
//   title: "Terms & Conditions",
//   description:
//     "Read the TranscoCargo website terms and conditions for general use, service inquiries, and logistics-related information.",
//   path: "/terms",
//   keywords: [
//     "terms and conditions",
//     "logistics website terms",
//     "cargo service terms",
//     "shipping website terms",
//   ],
// });

// const sections = [
//   {
//     title: "1. General Use",
//     content:
//       "These Terms & Conditions apply to the use of the TranscoCargo website and the information, forms, and service inquiry features made available through it.",
//   },
//   {
//     title: "2. Website Information",
//     content:
//       "The content on this website is provided for general informational and business inquiry purposes. While we aim to keep information accurate and useful, content may be updated, changed, or expanded over time.",
//   },
//   {
//     title: "3. Service Inquiries",
//     content:
//       "Submitting a contact form, quote request, or shipment inquiry does not automatically create a binding logistics agreement. Final service arrangements should be confirmed through direct communication and formal business approval.",
//   },
//   {
//     title: "4. Quotes and Estimates",
//     content:
//       "Any quote, estimate, or service indication provided through the website or follow-up communication may depend on shipment details, route conditions, handling needs, documentation, and business review.",
//   },
//   {
//     title: "5. User Responsibility",
//     content:
//       "Users are responsible for ensuring that the information they submit through forms or inquiries is accurate, relevant, and complete enough for service review and communication purposes.",
//   },
//   {
//     title: "6. Intellectual Property",
//     content:
//       "Website design, branding, layout, written content, and visual materials should not be copied, reused, or redistributed without proper authorization from the business owner.",
//   },
//   {
//     title: "7. External Links",
//     content:
//       "This website may include links to external services, maps, or third-party resources. We do not control all external content and cannot guarantee third-party availability or updates.",
//   },
//   {
//     title: "8. Limitation of Liability",
//     content:
//       "The website is intended as a business and information platform. Any final service obligations, legal responsibilities, and operational commitments should be defined in formal agreements outside the website itself.",
//   },
//   {
//     title: "9. Changes to Terms",
//     content:
//       "These Terms & Conditions may be updated from time to time to reflect changes to the website, business process, or service structure.",
//   },
//   {
//     title: "10. Contact",
//     content:
//       "If you have any questions about these terms, please contact us through the contact page before using the service inquiry features.",
//   },
// ];

// export default function TermsPage() {
//   return (
//     <>
//       <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
//         <div className="container-page py-16 md:py-20">
//           <div className="max-w-3xl">
//             <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
//               Legal Information
//             </div>

//             <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
//               Terms & Conditions
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               These terms explain the general use of the TranscoCargo website,
//               service inquiry process, and business information presented online.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-white">
//         <div className="container-page">
//           <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
//             <div className="space-y-10">
//               {sections.map((section) => (
//                 <section key={section.title}>
//                   <h2 className="text-2xl font-bold tracking-tight text-slate-900">
//                     {section.title}
//                   </h2>
//                   <p className="mt-4 leading-8 text-slate-600">
//                     {section.content}
//                   </p>
//                 </section>
//               ))}
//             </div>

//             <div className="mt-10 rounded-[1.5rem] border border-[#2F6DB3]/20 bg-white p-5">
//               <p className="text-sm leading-7 text-slate-500">
//                 <span className="font-semibold text-slate-700">Important:</span>{" "}
//                 This is a development-ready starter terms page. Before launch,
//                 you should review and update it according to your real business
//                 workflow, operational policies, and legal requirements.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { createMetadata} from "@/lib/seo";

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
    transition: { staggerChildren: 0.08 }
  }
};

const sections = [
  {
    title: "1. General Use",
    content: "These Terms & Conditions apply to the use of the TranscoCargo website and the information, forms, and service inquiry features made available through it.",
  },
  {
    title: "2. Website Information",
    content: "The content on this website is provided for general informational and business inquiry purposes. While we aim to keep information accurate and useful, content may be updated, changed, or expanded over time.",
  },
  {
    title: "3. Service Inquiries",
    content: "Submitting a contact form, quote request, or shipment inquiry does not automatically create a binding logistics agreement. Final service arrangements should be confirmed through direct communication and formal business approval.",
  },
  {
    title: "4. Quotes and Estimates",
    content: "Any quote, estimate, or service indication provided through the website or follow-up communication may depend on shipment details, route conditions, handling needs, documentation, and business review.",
  },
  {
    title: "5. User Responsibility",
    content: "Users are responsible for ensuring that the information they submit through forms or inquiries is accurate, relevant, and complete enough for service review and communication purposes.",
  },
  {
    title: "6. Intellectual Property",
    content: "Website design, branding, layout, written content, and visual materials should not be copied, reused, or redistributed without proper authorization from the business owner.",
  },
  {
    title: "7. External Links",
    content: "This website may include links to external services, maps, or third-party resources. We do not control all external content and cannot guarantee third-party availability or updates.",
  },
  {
    title: "8. Limitation of Liability",
    content: "The website is intended as a business and information platform. Any final service obligations, legal responsibilities, and operational commitments should be defined in formal agreements outside the website itself.",
  },
  {
    title: "9. Changes to Terms",
    content: "These Terms & Conditions may be updated from time to time to reflect changes to the website, business process, or service structure.",
  },
  {
    title: "10. Contact",
    content: "If you have any questions about these terms, please contact us through the contact page before using the service inquiry features.",
  },
];

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(47,109,179,0.12),_transparent_30%),linear-gradient(135deg,#f8fbff,#ffffff)]">
        <div className="container-page py-20 md:py-28">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]"
            >
              Legal Information
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl"
            >
              Terms & Conditions
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              These terms explain the general use of the TranscoCargo website,
              service inquiry process, and business information presented online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- TERMS CONTENT --- */}
      <section className="section-space bg-white">
        <div className="container-page">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-14"
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {sections.map((section, index) => (
                <motion.section 
                  key={section.title}
                  variants={fadeInUp}
                  className="relative group border-l-2 border-transparent hover:border-[#2F6DB3] pl-6 transition-colors duration-300"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#2F6DB3] transition-colors">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-600 text-justify">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </motion.div>

            {/* --- IMPORTANT NOTICE BOX --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 rounded-[1.75rem] border border-[#2F6DB3]/20 bg-white p-6 md:p-8 shadow-inner"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F6DB3] text-xs font-bold text-white">
                  i
                </div>
                <p className="text-sm leading-7 text-slate-500 italic">
                  <span className="font-bold text-slate-800 not-italic uppercase tracking-wider">Important:</span> This
                  is a development-ready starter terms page. Before launch,
                  you should review and update it according to your real business
                  workflow, operational policies, and legal requirements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}