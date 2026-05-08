"use client";

interface Brand {
  logo: string;
  name: string;
  service: string;
  pillBg: string;
  pillText: string;
  pill: string;
}

const brands: Brand[] = [
  { logo: "/images/Brand-Logos/a-and-e.png", name: "A&E", service: "Freight", pillBg: "#f0f5fc", pillText: "#2F6DB3", pill: "Global" },
  { logo: "/images/Brand-Logos/Abans.jpg", name: "Abans", service: "Electronics", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Retail" },
  { logo: "/images/Brand-Logos/access.jpg", name: "Access", service: "Logistics", pillBg: "#e6f9f0", pillText: "#00843D", pill: "3PL" },
  { logo: "/images/Brand-Logos/ACL_Cables.png", name: "ACL Cables", service: "Manufacturing", pillBg: "#f3ecff", pillText: "#4D148C", pill: "Land" },
  { logo: "/images/Brand-Logos/analytical-instruments.webp", name: "Analytical Instruments", service: "Instruments", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "B2B" },
  { logo: "/images/Brand-Logos/atlat-axillia.jpeg", name: "Atlat Axillia", service: "Supply Chain", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Sea" },
  { logo: "/images/Brand-Logos/avon.jpg", name: "Avon", service: "FMCG", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Road" },
  { logo: "/images/Brand-Logos/bobin.jpeg", name: "Bobin", service: "Packaging", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Local" },
  { logo: "/images/Brand-Logos/browns.jpeg", name: "Browns", service: "Distribution", pillBg: "#e6f2ff", pillText: "#004080", pill: "Global" },
  { logo: "/images/Brand-Logos/BSH.jpeg", name: "BSH", service: "Appliances", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Air" },
  { logo: "/images/Brand-Logos/ceylon-oxygen.jpg", name: "Ceylon Oxygen", service: "Industrial Gas", pillBg: "#e0f7f0", pillText: "#004d3a", pill: "B2B" },
  { logo: "/images/Brand-Logos/cic.png", name: "CIC", service: "Agri & Health", pillBg: "#e6f9f0", pillText: "#00843D", pill: "Land" },
  { logo: "/images/Brand-Logos/CICT.png", name: "CICT", service: "Container Terminal", pillBg: "#e6f0ff", pillText: "#003594", pill: "Sea" },
  { logo: "/images/Brand-Logos/Cocotana.png", name: "Cocotana", service: "FMCG", pillBg: "#e6f9f0", pillText: "#00843D", pill: "Export" },
  { logo: "/images/Brand-Logos/colombo-dockyard.png", name: "Colombo Dockyard", service: "Marine", pillBg: "#e6f0ff", pillText: "#003594", pill: "Sea" },
  { logo: "/images/Brand-Logos/Damro.jpg", name: "Damro", service: "Furniture", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Road" },
  { logo: "/images/Brand-Logos/DBL.png", name: "DBL", service: "Logistics", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "3PL" },
  { logo: "/images/Brand-Logos/dimo-lanka.jpg", name: "DIMO Lanka", service: "Automotive", pillBg: "#fff0f0", pillText: "#8a0000", pill: "Land" },
  { logo: "/images/Brand-Logos/dinapala-group.png", name: "Dinapala Group", service: "FMCG", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Retail" },
  { logo: "/images/Brand-Logos/DSI.png", name: "DSI", service: "Footwear", pillBg: "#f3ecff", pillText: "#4D148C", pill: "B2B" },
  { logo: "/images/Brand-Logos/dsl.png", name: "DSL", service: "Logistics", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "Road" },
  { logo: "/images/Brand-Logos/econutrena.png", name: "Eco Nutriena", service: "Agri", pillBg: "#e6f9f0", pillText: "#00843D", pill: "Export" },
  { logo: "/images/Brand-Logos/Elcardo.png", name: "Elcardo", service: "Electronics", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Retail" },
  { logo: "/images/Brand-Logos/elephant-house.png", name: "Elephant House", service: "FMCG", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Local" },
  { logo: "/images/Brand-Logos/elsteel.png", name: "Elsteel", service: "Steel", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "B2B" },
  { logo: "/images/Brand-Logos/finex.jpeg", name: "Finex", service: "Finance", pillBg: "#f0f5fc", pillText: "#2F6DB3", pill: "Global" },
  { logo: "/images/Brand-Logos/ford.png", name: "Ford", service: "Automotive", pillBg: "#e6f0ff", pillText: "#003594", pill: "Land" },
  { logo: "/images/Brand-Logos/Gamma.jpg", name: "Gamma", service: "Distribution", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Road" },
  { logo: "/images/Brand-Logos/hela.png", name: "Hela", service: "Apparel", pillBg: "#e0f7f0", pillText: "#004d3a", pill: "Export" },
  { logo: "/images/Brand-Logos/iceman.jpeg", name: "Iceman", service: "Cold Chain", pillBg: "#e6f2ff", pillText: "#004080", pill: "3PL" },
  { logo: "/images/Brand-Logos/jeewa-plastic.jpeg", name: "Jeewa Plastic", service: "Packaging", pillBg: "#fff3e6", pillText: "#8a3000", pill: "B2B" },
  { logo: "/images/Brand-Logos/JK.png", name: "JK", service: "Manufacturing", pillBg: "#fff0f0", pillText: "#8a0000", pill: "Land" },
  { logo: "/images/Brand-Logos/kramski.jpg", name: "Kramski", service: "Precision Parts", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "Export" },
  { logo: "/images/Brand-Logos/kspa.png", name: "KSPA", service: "Port Authority", pillBg: "#e6f0ff", pillText: "#003594", pill: "Sea" },
  { logo: "/images/Brand-Logos/lake-house.png", name: "Lake House", service: "Publishing", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Local" },

  { logo: "/images/Brand-Logos/Lanka_Tiles_logo.jpg", name: "Lanka Tiles", service: "Tiles", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "B2B" },
  { logo: "/images/Brand-Logos/laugh-holdings.jpeg", name: "Laugh Holdings", service: "Corporate", pillBg: "#fff0f0", pillText: "#8a0000", pill: "Global" },
  { logo: "/images/Brand-Logos/mactiles.png", name: "Macktiles", service: "Tiles", pillBg: "#e6f2ff", pillText: "#004080", pill: "Retail" },
  { logo: "/images/Brand-Logos/MAS_Holdings.png", name: "MAS Holdings", service: "Apparel", pillBg: "#e0f7f0", pillText: "#004d3a", pill: "Export" },
  { logo: "/images/Brand-Logos/mazda.jpeg", name: "Mazda", service: "Automotive", pillBg: "#e6f0ff", pillText: "#003594", pill: "Land" },
  { logo: "/images/Brand-Logos/MD.png", name: "MD", service: "Food", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Retail" },
  { logo: "/images/Brand-Logos/medicals.png", name: "Medicals", service: "Healthcare", pillBg: "#e6f9f0", pillText: "#00843D", pill: "B2B" },
  { logo: "/images/Brand-Logos/melchers.png", name: "Melchers", service: "Industrial", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "Global" },
  { logo: "/images/Brand-Logos/mervynsons.png", name: "Mervynsons", service: "Distribution", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Road" },
  { logo: "/images/Brand-Logos/multilac.png", name: "Multilac", service: "Paint", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Retail" },
  { logo: "/images/Brand-Logos/Naturub.jpg", name: "Naturub", service: "Rubber", pillBg: "#e6f9f0", pillText: "#00843D", pill: "Export" },
  { logo: "/images/Brand-Logos/odel.png", name: "Odel", service: "Retail", pillBg: "#f0f5fc", pillText: "#2F6DB3", pill: "Global" },

  { logo: "/images/Brand-Logos/orit.png", name: "Orit", service: "Manufacturing", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "B2B" },
  { logo: "/images/Brand-Logos/printcare.png", name: "Printcare", service: "Printing", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Local" },
  { logo: "/images/Brand-Logos/quantum-fitness.png", name: "Quantum Fitness", service: "Fitness", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Retail" },
  { logo: "/images/Brand-Logos/silvermill.jpeg", name: "Silvermill", service: "Food Export", pillBg: "#e6f9f0", pillText: "#00843D", pill: "Export" },
  { logo: "/images/Brand-Logos/Singhagiri.jpg", name: "Singhagiri", service: "Electronics", pillBg: "#fff8e1", pillText: "#7a4800", pill: "Retail" },
  { logo: "/images/Brand-Logos/Technomedics.png", name: "Technomedics", service: "Healthcare", pillBg: "#e6f2ff", pillText: "#004080", pill: "B2B" },
  { logo: "/images/Brand-Logos/timex.png", name: "Timex", service: "Retail", pillBg: "#f0f5fc", pillText: "#2F6DB3", pill: "Global" },
  { logo: "/images/Brand-Logos/vega.jpeg", name: "Vega", service: "Manufacturing", pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "Land" },
  { logo: "/images/Brand-Logos/venora.png", name: "Venora", service: "Distribution", pillBg: "#fff3e6", pillText: "#8a3000", pill: "Road" },
  { logo: "/images/Brand-Logos/vogue-text.png", name: "Vogue Tex", service: "Textiles", pillBg: "#e0f7f0", pillText: "#004d3a", pill: "Export" },
  { logo: "/images/Brand-Logos/wacoal.png", name: "Wacoal", service: "Apparel", pillBg: "#fff0f2", pillText: "#9a0020", pill: "Global" },
  { logo: "/images/Brand-Logos/WURTH.png", name: "WURTH", service: "Industrial", pillBg: "#fff0f0", pillText: "#8a0000", pill: "B2B" },
  { logo: "/images/Brand-Logos/yamaha-music.jpeg", name: "Yamaha Music", service: "Music", pillBg: "#e6f0ff", pillText: "#003594", pill: "Retail" },
];

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div
      className="group flex items-center gap-4 flex-shrink-0 px-8 py-3 cursor-default"
      style={{
        borderRight: "1px solid #e8eef6",
      }}
    >
      {/* Logo */}
      <div
        className="w-16 h-16 rounded-[14px] flex items-center justify-center flex-shrink-0 border border-black/5 bg-white overflow-hidden"
        style={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-contain p-2"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";

            const parent = target.parentElement;
            if (parent && !parent.querySelector(".fallback-text")) {
              const span = document.createElement("span");
              span.className =
                "fallback-text text-[12px] font-extrabold text-gray-500";
              span.textContent = brand.name.slice(0, 3).toUpperCase();
              parent.appendChild(span);
            }
          }}
        />
      </div>

      {/* Name + Service */}
      <div className="flex flex-col gap-1">
        <span
          className="text-[15px] font-bold whitespace-nowrap leading-tight"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: "#0f2d50",
          }}
        >
          {brand.name}
        </span>

        <span
          className="text-[12px] whitespace-nowrap"
          style={{
            color: "#7a93aa",
          }}
        >
          {brand.service}
        </span>
      </div>

      {/* Pill */}
      <span
        className="text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0"
        style={{
          background: brand.pillBg,
          color: brand.pillText,
        }}
      >
        {brand.pill}
      </span>

      {/* Divider */}
      <div
        className="w-px h-10 flex-shrink-0 ml-2"
        style={{
          background: "#e8eef6",
        }}
      />
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="bg-white overflow-hidden">
      <div
        className="relative py-6"
        style={{
          background: "#fafcff",
          borderTop: "1px solid #edf2f9",
          borderBottom: "1px solid #edf2f9",
          minHeight: "120px",
        }}
      >
        {/* Left Fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #fafcff, rgba(250,252,255,0))",
          }}
        />

        {/* Right Fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #fafcff, rgba(250,252,255,0))",
          }}
        />

        {/* Marquee */}
        <div
          className="brand-marquee flex w-max"
          style={{
            animation: "marquee 200s linear infinite",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <BrandItem key={index} brand={brand} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}