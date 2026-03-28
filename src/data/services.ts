import {
  Plane,
  Ship,
  Warehouse,
  ShieldCheck,
  Download,
  Upload,
  Container,
  Boxes,
  BriefcaseBusiness,
  Truck,
  Network,
  FolderKanban,
  Package,
} from "lucide-react";

export const services = [
  {
    title: "Customs Brokerage",
    slug: "customs-brokerage",
    description: "Smooth customs clearance and documentation support.",
    icon: ShieldCheck,
    intro: "Detailed customs brokerage service description here.",
  },
  {
    title: "Air Freight",
    slug: "air-freight",
    description: "Fast and secure international air cargo solutions.",
    icon: Plane,
    intro: "Detailed air freight description here.",
  },
  {
    title: "Sea Freight",
    slug: "sea-freight",
    description: "Reliable ocean freight services.",
    icon: Ship,
    intro: "Detailed sea freight description here.",
  },
  {
    title: "Warehouse & Storage",
    slug: "warehousing",
    description: "Modern storage and cargo handling support.",
    icon: Warehouse,
    intro: "Detailed warehousing description here.",
  },
  {
    title: "Import Services",
    slug: "import-services",
    description: "Import shipment coordination and support.",
    icon: Download,
    intro: "Detailed import services description here.",
  },
  {
    title: "Export Services",
    slug: "export-services",
    description: "Professional export handling and freight planning.",
    icon: Upload,
    intro: "Detailed export services description here.",
  },
  {
    title: "LCL Console / Deco Sol",
    slug: "lcl-console-deco-sol",
    description: "Efficient LCL consolidation and deconsolidation.",
    icon: Container,
    intro: "Detailed LCL service description here.",
  },
  {
    title: "Break Bulk Cargo",
    slug: "break-bulk-cargo",
    description: "Specialized handling for oversized cargo.",
    icon: Boxes,
    intro: "Detailed break bulk cargo description here.",
  },
  {
    title: "Commercial Cargo",
    slug: "commercial-cargo",
    description: "Flexible cargo solutions for businesses.",
    icon: BriefcaseBusiness,
    intro: "Detailed commercial cargo description here.",
  },
  {
    title: "Personal Effects",
    slug: "personal-effects",
    description: "Safe handling for personal shipment needs.",
    icon: Truck,
    intro: "Detailed personal effects description here.",
  },
  {
    title: "Consolidation",
    slug: "consolidation",
    description: "Combined cargo movement for efficiency.",
    icon: Network,
    intro: "Detailed consolidation description here.",
  },
  {
    title: "Projects",
    slug: "projects",
    description: "Project cargo support and planning.",
    icon: FolderKanban,
    intro: "Detailed project logistics description here.",
  },
  {
    title: "Express Courier",
    slug: "express-courier",
    description: "Fast courier solutions with reliable support.",
    icon: Package,
    intro: "Detailed express courier description here.",
  },
] as const;

export const servicesMap = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<(typeof services)[number]["slug"], (typeof services)[number]>;