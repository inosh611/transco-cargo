import Image from "next/image";
import { Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Perera",
    role: "Managing Director",
    image: "/team/member-1.jpg",
  },
  {
    name: "Sarah Fernando",
    role: "Operations Manager",
    image: "/team/member-2.jpg",
  },
  {
    name: "Daniel Silva",
    role: "Freight Specialist",
    image: "/team/member-3.jpg",
  },
  {
    name: "Nadeesha Kumar",
    role: "Customer Support Lead",
    image: "/team/member-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#F47B20]">
            Our Team
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Meet Our Experts
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Dedicated professionals delivering reliable logistics solutions
            with precision, care, and experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="cursor-pointer group overflow-hidden rounded-[0.5rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#F47B20]">
                  {member.role}
                </p>

                {/* EMAIL ICON */}
                <div className="mt-4 flex justify-center">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#2F6DB3] hover:text-[#2F6DB3]">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}