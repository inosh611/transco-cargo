import {
  Briefcase,
  Building2,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Home,
  Languages,
  Package,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";

export type IconType = React.ComponentType<{ className?: string }>;

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type ReasonItem = {
  title: string;
  description: string;
  icon: IconType;
};

export type FeatureBullet = {
  title: string;
};

export type StepItem = {
  step: string;
  title: string;
  description: string;
};

export const relocationStats: StatItem[] = [
  { value: "30+", label: "Years of relocation experience" },
  { value: "100+", label: "Full-time employees" },
  { value: "100+", label: "Global network locations" },
  { value: "40+", label: "Languages across our network" },
];

export const relocationServices: ServiceItem[] = [
  {
    title: "International Shipping",
    description:
      "Reliable global moving support with careful planning, shipment coordination, and door-to-door visibility.",
    icon: Globe2,
  },
  {
    title: "Household Goods Storage",
    description:
      "Flexible short-term and long-term storage options to keep belongings protected throughout the move.",
    icon: Warehouse,
  },
  {
    title: "Personal Relocation",
    description:
      "Support for individuals and families moving abroad or returning home, with expert guidance at every step.",
    icon: Home,
  },
  {
    title: "Corporate Relocation",
    description:
      "Structured relocation services for employees and leadership teams, built to reduce disruption and stress.",
    icon: Briefcase,
  },
  {
    title: "Pet Transportation",
    description:
      "Specialized pet relocation planning with documentation support, crate coordination, and safe travel handling.",
    icon: PawPrint,
  },
  {
    title: "Visa & Immigration Support",
    description:
      "Practical assistance to help manage key documentation and compliance needs connected to international moves.",
    icon: FileCheck2,
  },
];

export const relocationReasons: ReasonItem[] = [
  {
    title: "A Truly International Network",
    description:
      "With broad global office coverage and multilingual support, we can manage complex relocation requirements quickly and efficiently.",
    icon: Languages,
  },
  {
    title: "Clear, Transparent Quotations",
    description:
      "We provide service options and help outline anticipated charges, so you can plan your move with confidence and fewer surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Tracking Every Step of the Move",
    description:
      "Our centralized move coordinators monitor air, sea, and road transit and keep you updated throughout the relocation journey.",
    icon: Package,
  },
  {
    title: "Tailor-Made Moving Services",
    description:
      "From packing and custom crating to furniture handling, electronics setup, storage, and debris disposal, services are adapted to your needs.",
    icon: Sparkles,
  },
];

export const petRelocationFeatures: FeatureBullet[] = [
  { title: "Animal import and export regulation guidance" },
  { title: "Veterinary and travel document compliance review" },
  { title: "Documentation preparation and submission support" },
  { title: "Comfortable travel crate coordination" },
  { title: "Airport delivery, customs clearance, and home delivery" },
  { title: "Boarding, kenneling, and quarantine coordination when required" },
];

export const officeRelocationFeatures: FeatureBullet[] = [
  { title: "Careful pre-planning with your office point of contact" },
  { title: "Minimal disruption to daily business operations" },
  { title: "Expert packing, unpacking, and crate supply" },
  { title: "Furniture installation or re-assembly support" },
  { title: "Assistance with disposal and recycling of office items" },
  { title: "IT and communications support when needed" },
];

export const domesticRelocationFeatures: FeatureBullet[] = [
  { title: "Solutions tailored to your budget and moving requirements" },
  { title: "Single point of contact until final delivery" },
  { title: "Detailed inventory and pre-move estimating support" },
  { title: "Protection for carpets, flooring, stairs, and furniture" },
  { title: "Flexible self-packing or full-packing options" },
  { title: "Short-term and long-term storage support" },
];

export const relocationProcessSteps: StepItem[] = [
  {
    step: "01",
    title: "Request a Pre-Move Survey",
    description:
      "Choose an in-person visit, a video walkthrough, or a live webcam survey so the team can understand what needs to be moved.",
  },
  {
    step: "02",
    title: "Receive a Clear Quotation",
    description:
      "Get service options and a relocation plan designed around your origin, destination, timeline, and budget.",
  },
  {
    step: "03",
    title: "Plan the Move",
    description:
      "Your coordinator helps organize the schedule, packing requirements, transport flow, and any special handling needs.",
  },
  {
    step: "04",
    title: "Packing & Transport",
    description:
      "Professionally trained teams prepare, protect, and move your shipment with care across air, sea, or road transit.",
  },
  {
    step: "05",
    title: "Delivery & Settling In",
    description:
      "From customs clearance to unpacking support, the move is managed through to your new home or destination.",
  },
];