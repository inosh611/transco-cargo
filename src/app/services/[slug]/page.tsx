import { notFound } from "next/navigation";
import Link from "next/link";
import { services, servicesMap } from "@/data/services";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesMap[slug as keyof typeof servicesMap];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <section className="section-space bg-white">
      <div className="container-page">
        <Link
          href="/services"
          className="mb-6 inline-block text-sm font-semibold text-[#2F6DB3]"
        >
          ← Back to Services
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6DB3] to-[#F47B20] text-white shadow-lg">
            <Icon size={30} />
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
            {service.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {service.description}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Service Overview
            </h2>
            <p className="mt-3 leading-8 text-slate-600">
              {service.intro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}