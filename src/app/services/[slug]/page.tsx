import { notFound } from "next/navigation";
import { services, servicesMap } from "@/data/services";
import ServiceDetailClient from "@/components/sections/ServiceDetailClient";
import React from "react";

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
  
  const serviceData = servicesMap[slug as keyof typeof servicesMap];

  if (!serviceData) {
    notFound();
  }


  const { icon, ...serviceWithoutIcon } = serviceData;

  return (
    <ServiceDetailClient 
      service={{ ...serviceWithoutIcon, slug }} 
    />
  );
}