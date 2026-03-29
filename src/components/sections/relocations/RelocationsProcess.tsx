import SectionHeading from "@/components/shared/SectionHeading";
import { relocationProcessSteps } from "@/data/relocations";

export default function RelocationsProcess() {
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeading
        eyebrow="How It Works"
        title="A simple relocation process with expert guidance throughout"
        description="Every move begins with understanding your requirements, followed by structured planning, coordinated execution, and dependable delivery support."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {relocationProcessSteps.map((step) => (
          <article
            key={step.step}
            className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.05)]"
          >
            <div className="text-sm font-black tracking-[0.2em] text-[#F47B20]">
              {step.step}
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}