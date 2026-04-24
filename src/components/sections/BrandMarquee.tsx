"use client";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Brand {
  initials: string;
  bg: string;
  text: string;
  name: string;
  service: string;
  pillBg: string;
  pillText: string;
  pill: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const brands: Brand[] = [
  { initials: "DHL", bg: "#FFCC00", text: "#7a4800", name: "DHL Express",      service: "Air Express",        pillBg: "#fff8e1", pillText: "#7a4800", pill: "Air"     },
  { initials: "FDX", bg: "#4D148C", text: "#e8d8ff", name: "FedEx Cargo",      service: "Ground & Freight",   pillBg: "#f3ecff", pillText: "#4D148C", pill: "Ground"  },
  { initials: "MSC", bg: "#003594", text: "#b8d0ff", name: "MSC Shipping",     service: "Ocean Freight",      pillBg: "#e6f0ff", pillText: "#003594", pill: "Sea"     },
  { initials: "MAE", bg: "#00843D", text: "#b8f0d4", name: "Maersk Line",      service: "Container Cargo",    pillBg: "#e6f9f0", pillText: "#00843D", pill: "FCL/LCL" },
  { initials: "UPS", bg: "#351C15", text: "#f5c97a", name: "UPS Supply",       service: "Last Mile",          pillBg: "#fdf3e3", pillText: "#7a4000", pill: "B2B"     },
  { initials: "EK",  bg: "#C8102E", text: "#ffe0e5", name: "Emirates SkyCargo",service: "Air Freight",        pillBg: "#fff0f2", pillText: "#9a0020", pill: "Air"     },
  { initials: "CMA", bg: "#E4002B", text: "#ffe3e8", name: "CMA CGM",          service: "Sea & Multimodal",   pillBg: "#fff0f2", pillText: "#9a0020", pill: "Sea"     },
  { initials: "TNT", bg: "#FF6600", text: "#fff3ec", name: "TNT Freight",      service: "Express & Road",     pillBg: "#fff3e6", pillText: "#8a3000", pill: "Road"    },
  { initials: "APL", bg: "#005EB8", text: "#d0e8ff", name: "APL Logistics",    service: "Ocean & Air",        pillBg: "#e6f2ff", pillText: "#004080", pill: "Global"  },
  { initials: "EVA", bg: "#007B5E", text: "#c0f0e0", name: "EVA Airways Cargo",service: "Air Freight",        pillBg: "#e0f7f0", pillText: "#004d3a", pill: "Air"     },
  { initials: "DB",  bg: "#CC0000", text: "#ffe0e0", name: "DB Schenker",      service: "Land & Rail",        pillBg: "#fff0f0", pillText: "#8a0000", pill: "Land"    },
  { initials: "KUE", bg: "#1E3A6E", text: "#c0d4f0", name: "Kuehne+Nagel",    service: "Contract Logistics",  pillBg: "#eaf0fc", pillText: "#1E3A6E", pill: "3PL"     },
];

// ─── Single marquee item ──────────────────────────────────────────────────────
function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div
      className="group flex items-center gap-3 flex-shrink-0 px-7 cursor-default"
      style={{ borderRight: "1px solid #e8eef6" }}
    >
      {/* Logo */}
      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 text-[10px] font-extrabold tracking-tight border border-black/5"
        style={{
          background: brand.bg,
          color: brand.text,
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {brand.initials}
      </div>

      {/* Name + service */}
      <div className="flex flex-col gap-0.5">
        <span
          className="text-[13px] font-bold whitespace-nowrap leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", color: "#0f2d50" }}
        >
          {brand.name}
        </span>
        <span className="text-[11px] whitespace-nowrap" style={{ color: "#7a93aa" }}>
          {brand.service}
        </span>
      </div>

      {/* Pill */}
      <span
        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
        style={{ background: brand.pillBg, color: brand.pillText }}
      >
        {brand.pill}
      </span>

      {/* Vertical divider */}
      <div className="w-px h-8 flex-shrink-0 ml-1" style={{ background: "#e8eef6" }} />
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BrandMarquee() {
  return (
    <section className="bg-white overflow-hidden">
      {/* ── Header ── */}
      <div className="container-page mx-auto max-w-6xl">
        <div className="flex items-start justify-between">
          {/* <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="block w-5 h-0.5 rounded-full bg-[#2F6DB3]" />
              <span
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#2F6DB3" }}
              >
                Global network
              </span>
            </div>
            <h2
              className="text-[1.65rem] font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: "#0f2d50" }}
            >
              Brands we{" "}
              <span style={{ color: "#E06A14" }}>partner</span>{" "}
              with
            </h2>
          </div> */}

          {/* <div
            className="text-[13px] font-medium px-4 py-1.5 rounded-full border mt-1"
            style={{
              background: "#f0f5fc",
              borderColor: "#dce8f7",
              color: "#7a93aa",
            }}
          >
            Serving{" "}
            <span className="font-semibold" style={{ color: "#2F6DB3" }}>
              40+
            </span>{" "}
            brands worldwide
          </div> */}
        </div>
      </div>

      {/* ── Marquee track ── */}
      <div
        className="relative py-3.5"
        style={{
          background: "#fafcff",
          borderTop: "1px solid #edf2f9",
          borderBottom: "1px solid #edf2f9",
        }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fafcff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fafcff, transparent)" }}
        />

        {/* Scrolling row */}
        <div
          className="flex w-max"
          style={{
            animation: "marquee 32s linear infinite",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <BrandItem key={idx} brand={brand} />
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      {/* <div className="container-page mx-auto max-w-6xl px-6 py-3 flex items-center gap-2">
        <span
          className="block w-2 h-2 rounded-full"
          style={{
            background: "#22c55e",
            animation: "pulse-dot 2s ease infinite",
          }}
        />
        <span className="text-xs font-medium" style={{ color: "#7a93aa" }}>
          Live partner network · hover to pause
        </span>
      </div> */}

      {/* ── Keyframes via style tag ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}