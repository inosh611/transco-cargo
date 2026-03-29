export const siteConfig = {
  name: "TranscoCargo",
  shortName: "TranscoCargo",
  title: "TranscoCargo | Global Logistics Solutions",
  description:
    "Professional cargo, freight forwarding, warehousing, and logistics solutions for commercial and personal shipping needs.",
  url: "https://www.transcocargo.com",
  ogImage: "/og/og-home.jpg",
  email: "info@transcocargo.com",
  phone: "+61 3 9703 2255",
  address: "Melbourne, Australia",
  links: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
  nav: [
     { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/management-team" },
  // { label: "Destinations", href: "/destinations" },
  { label: "Personal Effects", href: "/personal-effects" },
  { label: "Tracking", href: "/tracking" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  ],
  footerServices: [
    { label: "Air Freight", href: "/services/air-freight" },
    { label: "Sea Freight", href: "/services/sea-freight" },
    { label: "Road Freight", href: "/services/road-freight" },
    { label: "Warehousing", href: "/services/warehousing" },
  ],
} as const;