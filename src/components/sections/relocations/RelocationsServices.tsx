import SectionHeading from "@/components/shared/SectionHeading";
import { relocationServices } from "@/data/relocations";

export default function RelocationsServices() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="International Services"
          title="Relocation services designed around real moving needs"
          description="From international shipping and household storage to corporate moves, pet transport, and visa support, each service is structured to make relocation simpler and more manageable."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relocationServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-[10px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F6DB3]/10 text-[#2F6DB3]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}