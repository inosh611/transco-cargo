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
    description: "Customs clearance facilitation is one of our fortes; sign us on for your customs brokerage requirements. Let our dedicated team of Customs Brokerage Consultants assist you through the each step, as well as with the necessary shipping document filling including understanding the correct tariff codes to swiftly clear your cargo.",
    icon: ShieldCheck,
    intro: "Detailed customs brokerage service description here.",
  },
  {
    title: "Air Freight",
    slug: "air-freight",
    description: "n need of urgent cargo imported or exported, give Transco Cargo Colombo a call for speedy and easy air freight services. Our Air Freight Forwarding Services include the likes of Airport to Airport and Door to Door deliveries, and not to mention air cargo consolidation, and dangerous goods handling. Stay updated with our continuous real-time updates for all imports and exports being handled by Transco Cargo Colombo.",
    icon: Plane,
    intro: "Detailed air freight description here.",
  },
  {
    title: "Sea Freight",
    slug: "sea-freight",
    description: "Transco Cargo Colombo are experts in sea freight forwarding for LCL and FCL container shipments with swift ease. Our range of sea freight forwarding services include the likes of Port-to-Port and Door-to-Door deliveries, Supply chain solutions, FCL and LCL for Import/Export, Issuance/Verification of Shipping Documentation, Export/Import Customs Clearance, Certified Industrial Packing/Crating, Transport/Marine Insurance, and Warehousing Logistics. Apart from the above, Transco Cargo Colombo will also undertake all sea transportation operations, and not to mention sea/road intermodal services too.",
    icon: Ship,
    intro: "Detailed sea freight description here.",
  },
  {
    title: "Warehouse & Storage",
    slug: "warehousing",
    description: "With logistical and supply chain solutions being one of our core services, our warehousing & storage facilities are fully equipped. The warehouses are manned 24/7, along with property and security management measures are in place from 24-hour CCTV, and back-to-base monitoring measures for necessary protection.",
    icon: Warehouse,
    intro: "Detailed warehousing description here.",
  },
  {
    title: "Import Services",
    slug: "import-services",
    description: "Import goods into Sri Lanka with ease, with our import facilitation and guidance services on the various processes involved. Let us at Transco Cargo Colombo take care of all your requirements in terms of importing freight into Sri Lanka from overseas. Whether you are opting to import goods via air freight or sea freight, we are able to assist you in ensuring that your shipping documentation has been filled out and proceed through customs clearance with hassle.",
    icon: Download,
    intro: "Detailed import services description here.",
  },
  {
    title: "Export Services",
    slug: "export-services",
    description: "Export goods from Sri Lanka successfully and efficiently with Transco Cargo Colombo as your logistics partner. With our global coverage of likeminded partners and agents, we are able to efficiently and diligently assist you in your export shipping processes.",
    icon: Upload,
    intro: "Detailed export services description here.",
  },
  {
    title: "LCL Console / Deco Sol",
    slug: "lcl-console-deco-sol",
    description: "LCL consolidation and deconsolidation done efficiently with planning and management saves time and money. Let us at Transco Cargo Colombo handle your LCL freight forwarding requirements down to the letter for efficient, swift and hassle-free transits.",
    icon: Container,
    intro: "Detailed LCL service description here.",
  },
  {
    title: "Break Bulk Cargo",
    slug: "break-bulk-cargo",
    description: "Specialized handling for oversized cargo.",
    icon: Boxes,
    intro: "Transco Cargo Colombo handles Break Bulk Goods that are transported in individual form to get them to its destination safely. We are able to organise not sea freight forwarding for this type of cargo which are usually included in crates, barrels, bags, boxes, or drums based on the type of commodity it is. These are then placed and secured onto a pallet for transportation and ease of loading and unloading. Transco Cargo is able to handle break bulk cargo handling on your behalf depending on your requirements.",
  },
  {
    title: "Commercial Cargo",
    slug: "commercial-cargo",
    description: "Transco Cargo offers its esteemed clientele a range of core freight services to facilitate their business growth including Commercial Cargo services. Let us help you grow when you pair up with us at your logistics partner. With our global coverage network of agents, Transco Cargo offers the most competitive rates for import and export commercial shipping.",
    icon: BriefcaseBusiness,
    intro: "Detailed commercial cargo description here.",
  },
  {
    title: "Personal Effects",
    slug: "personal-effects",
    description: "Transco Relocation has been completing international moves for over 30years and understands how stressful the process can be for a family, individual, corporation or even the family pet – regardless of how many times someone has been through it. Our dedicated mobility team provides planning tools and on-the ground support for our customers who need to move to a new, foreign environment or even back home. We understand the challenges that you are faced with when having to coordinate all the aspects of your relocation (or the relocation process for your employees). Our professionally trained packers and experienced customer care team work together to help alleviate any uncertainties and navigate the process for you. With our HQ based in Australia in 4 locations, Sri Lanka & Maldives well covered will everylocation in the globe and 100+ full-time employees, we are overseeing every aspect of your moving process from the initial planning stages to the unpacking of your last box.",
    icon: Truck,
    intro: "Detailed personal effects description here.",
  },
  {
    title: "Consolidation",
    slug: "consolidation",
    description: `
      <p>Transco Consolidation is a company mainly focused on LCL cargo consolidation/de-consolidation including Transshipments via Colombo hub port.</p>
      
      <p>The services offer in Colombo are as follows:</p>
      
      <ul class="list-disc ml-6 ">
        <li>LCL Cargo consolidations/de-consolidations</li>
        <li>LCLs & Sea to Air Transshipments via Colombo</li>
        <li>General Freight Forwarding</li>
        <li>Warehousing</li>
        <li>Customs clearance</li>
        <li>Transportation services</li>
        <li>Handling of OOG</li>
        <li>Personal Effects</li>
      </ul>

      <p class="mt-6">We have a wide range of Ocean Freight Services offered by Transco Consolidation to cater our customers economical alternatives & cost-effective solutions.</p>
    `,
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