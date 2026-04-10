import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Static export සඳහා මෙය අනිවාර්යයෙන්ම අවශ්‍ය වේ
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f6db3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
    ],
  };
}