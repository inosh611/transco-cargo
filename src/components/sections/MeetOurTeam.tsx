// import Image from "next/image";
// import Script from "next/script";

// export type TeamMember = {
//   id: string;
//   name: string;
//   role: string;
//   image: string;
//   imageAlt: string;
//   profileUrl?: string;
//   paragraphs: string[];
// };

// type MeetOurTeamProps = {
//   title?: string;
//   subtitle?: string;
//   members: TeamMember[];
//   organizationName?: string;
// };

// export default function MeetOurTeam({
//   title = "Meet Our Team",
//   subtitle = "Get to know the people behind our work. Each team member brings a unique perspective, deep expertise, and a strong commitment to delivering meaningful results.",
//   members,
//   organizationName = "Your Company",
// }: MeetOurTeamProps) {
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: organizationName,
//     employee: members.map((member) => ({
//       "@type": "Person",
//       name: member.name,
//       jobTitle: member.role,
//       image: member.image,
//       url: member.profileUrl || undefined,
//       description: member.paragraphs.join(" "),
//     })),
//   };

//   return (
//     <>
//       <Script
//         id="team-structured-data"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(organizationSchema),
//         }}
//       />

//       <section
//         aria-labelledby="meet-our-team-title"
//         className="bg-white py-16 sm:py-20 lg:py-24"
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="inline-flex rounded-full border border-[#F47B20] px-4 py-1 text-sm font-medium text-gray-600">
//               Our People
//             </span>

//             <h2
//               id="meet-our-team-title"
//               className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
//             >
//               {title}
//             </h2>

//             <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
//               {subtitle}
//             </p>
//           </div>

//           <div className="mt-14 space-y-8 md:mt-16 lg:space-y-10">
//             {members.map((member, index) => (
//               <article
//                 key={member.id}
//                 className="relative overflow-hidden rounded-[10px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 lg:p-10"
//                 itemScope
//                 itemType="https://schema.org/Person"
//               >
//                 <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,250,252,0.9),rgba(255,255,255,1))]" />

//                 <div className="relative flex flex-col gap-8 md:flex-row md:items-start lg:gap-12">
//                   <div className="flex w-full shrink-0 justify-center md:w-[220px] md:justify-start">
//                     <div className="flex flex-col items-center text-center md:items-center">
//                       <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-md sm:h-44 sm:w-44">
//                         <Image
//                           src={member.image}
//                           alt={member.imageAlt}
//                           fill
//                           priority={index < 2}
//                           sizes="176px"
//                           className="object-cover object-center"
//                           itemProp="image"
//                         />
//                       </div>

//                       <div className="mt-4 max-w-[220px]">
//                         <h3
//                           className="text-lg font-semibold text-gray-900"
//                           itemProp="name"
//                         >
//                           {member.name}
//                         </h3>
//                         <p
//                           className="mt-1 text-sm font-medium text-sky-700"
//                           itemProp="jobTitle"
//                         >
//                           {member.role}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex-1">
//                     <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
//                       Team Member
//                     </p>

//                     <div className="mt-5 space-y-4 text-base leading-8 text-gray-700 text-justify">
//                       {member.paragraphs.map((paragraph, paragraphIndex) => (
//                         <p
//                           key={paragraphIndex}
//                           itemProp={
//                             paragraphIndex === 0 ? "description" : undefined
//                           }
//                         >
//                           {paragraph}
//                         </p>
//                       ))}
//                     </div>

//                     {member.profileUrl ? (
//                       <div className="mt-6">
//                         <a
//                           href={member.profileUrl}
//                           className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
//                           aria-label={`Learn more about ${member.name}`}
//                           itemProp="url"
//                         >
//                           View Profile
//                         </a>
//                       </div>
//                     ) : null}
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
import Image from "next/image";
import Script from "next/script";
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
  { name: "Irosh Hettiarachchi", role: "Manager – Pricing Strategy & Analysis", image: "/images/team/irosh-hettiarachchi.webp" },
  { name: "Asanka Darshana", role: "Asst Manager – IT", image: "/images/team/asanka-darshana.webp" },
  { name: "Amila Wijesekara", role: "Assistant Accountant", image: "/images/team/amila-wijesekara.webp" },
  { name: "Ramya Perera", role: "Credit Controller", image: "/images/team/ramya-perera.webp" },
  { name: "Chanuri Amarasinghe", role: "Asst Manager – Customer Service", image: "/images/team/chanuri-amarasinghe.webp" },
  { name: "Methani Senarath", role: "Asst Manager – Sales & Customer Service", image: "/images/team/methani-senarath.webp" },
  { name: "Madhushani", role: "Asst Manager – Customer Service", image: "/images/team/madhushani.webp" },
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

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  profileUrl?: string;
  paragraphs: string[];
  tags?: string[];
};

type MeetOurTeamProps = {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  organizationName?: string;
};

export default function MeetOurTeam({
  title = "Meet Our Team",
  subtitle = "Get to know the people behind our work. Each team member brings a unique perspective, deep expertise, and a strong commitment to delivering meaningful results.",
  members,
  organizationName = "Your Company",
}: MeetOurTeamProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationName,
    employee: members.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      url: member.profileUrl || undefined,
      description: member.paragraphs.join(" "),
    })),
  };

  /** Derive initials from a full name */
  function getInitials(name: string): string {
    const parts = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s*/i, "").split(" ");
    return parts
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");
  }

  return (
    <>
      <Script
        id="team-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section
        aria-labelledby="meet-our-team-title"
        className="bg-[#F8F7F4] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* ── SECTION HEADER ── */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-[#F47B20]/25 bg-[#FFF6EE] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F47B20]">
              Our People
            </span>
            <h2
              id="meet-our-team-title"
              className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[42px]"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              {subtitle}
            </p>
          </div>

          {/* ── MEMBER CARDS ── */}
          <div className="space-y-7">
            {members.map((member, index) => (
              <article
                key={member.id}
                className="group overflow-hidden rounded-[20px] border border-[#E4E2DC] bg-white shadow-[0_1px_4px_rgba(15,23,42,0.06),0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(15,23,42,0.08),0_8px_32px_rgba(15,23,42,0.09)]"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="flex flex-col md:grid md:grid-cols-[260px_1fr]">

                  {/* ── PHOTO PANE ── */}
                  <div className="relative flex flex-col items-center justify-center gap-5 overflow-hidden bg-[linear-gradient(160deg,#1a2840_0%,#0f172a_100%)] px-7 py-10">
                    {/* Orange radial glow */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_180px_180px_at_50%_35%,rgba(244,123,32,0.13),transparent_65%)]" />

                    {/* Avatar */}
                    <div className="relative z-10 flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(244,123,32,0.4)] bg-[linear-gradient(135deg,rgba(244,123,32,0.25),rgba(244,123,32,0.08))] font-serif text-4xl font-bold leading-none text-[#F47B20]">
                      <Image
                        src={member.image}
                        alt={member.imageAlt}
                        fill
                        priority={index < 2}
                        sizes="120px"
                        className="object-cover object-center"
                        itemProp="image"
                      />
                      {/* Fallback initials (shown while image loads or on error) */}
                      <span aria-hidden="true">{getInitials(member.name)}</span>
                    </div>

                    {/* Name + role */}
                    <div className="relative z-10 text-center">
                      <h3
                        className="font-serif text-[15.5px] font-bold leading-snug text-white"
                        itemProp="name"
                      >
                        {member.name}
                      </h3>
                      <span
                        className="mt-2.5 inline-block rounded-full border border-[rgba(244,123,32,0.35)] bg-[rgba(244,123,32,0.18)] px-3 py-1 text-[10.5px] font-semibold leading-tight text-[#F47B20]"
                        itemProp="jobTitle"
                      >
                        {/* Show first segment of role before the em-dash */}
                        {member.role.split("–")[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* ── CONTENT PANE ── */}
                  <div className="relative flex flex-col justify-center px-9 py-10 md:px-11">
                    {/* Decorative open-quote */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-7 top-4 font-serif text-[80px] leading-none text-[#F47B20]/10"
                    >
                      &ldquo;
                    </span>

                    {/* Eyebrow — secondary role text */}
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {member.role.includes("–")
                        ? member.role.split("–").slice(1).join("–").trim()
                        : "Executive Director"}
                    </p>

                    {/* Bio paragraphs */}
                    <div
                      className="space-y-3"
                      itemProp="description"
                    >
                      {member.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className={
                            i === 0
                              ? "text-[14.5px] font-medium leading-[1.85] text-slate-700"
                              : "text-sm leading-[1.85] text-slate-500"
                          }
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Tag pills */}
                    {member.tags && member.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {member.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#E4E2DC] bg-[#F8F7F4] px-3 py-1 text-[11.5px] font-medium text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Profile CTA */}
                    {member.profileUrl && (
                      <div className="mt-6">
                        <a
                          href={member.profileUrl}
                          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[12.5px] font-semibold text-white transition hover:-translate-y-px hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                          aria-label={`View the profile of ${member.name}`}
                          itemProp="url"
                        >
                          View Profile
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 6h10M7 2l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
          {/* <Link href="/management-team">
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
          </Link> */}
        </motion.div>

      </div>
    </section>
    </>
  );
}