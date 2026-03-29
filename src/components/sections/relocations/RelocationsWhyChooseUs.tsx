import SectionHeading from "@/components/shared/SectionHeading";
import { relocationReasons } from "@/data/relocations";

export default function RelocationsWhyChooseUs() {
  return (
    <section className="container-page py-20 md:py-24">
      <SectionHeading
        eyebrow="Why Choose Transco"
        title="A relocation partner built for clarity, speed, and confidence"
        description="Our approach is centered on global reach, transparent planning, careful coordination, and flexible services that adapt to the complexity of each move."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {relocationReasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <article
              key={reason.title}
              className="rounded-[10px] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F47B20]/10 text-[#F47B20]">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}