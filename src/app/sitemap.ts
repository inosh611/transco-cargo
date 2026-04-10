import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";


export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/tracking",
    "/quote",
    "/contact",
    "/blog",
    "/faq",
    "/testimonials",
    "/destinations",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}