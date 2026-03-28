"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    badge: "Trusted Global Logistics Partner",
    title: "Providing the Safest Logistics Solutions with Integrity",
    description:
      "Cargo efficiency, connectivity, and global reach ensure seamless logistics and timely deliveries.",
    stats: [
      { value: "3.5x", label: "Faster" },
      { value: "30%", label: "Cheaper" },
      { value: "10+", label: "Experience" },
    ],
  },
  {
    badge: "Modern Freight Forwarding",
    title: "Global Cargo Movement Built for Speed and Trust",
    description:
      "Simplify freight forwarding with better visibility and stronger coordination.",
    stats: [
      { value: "120+", label: "Destinations" },
      { value: "99%", label: "On-time" },
      { value: "24/7", label: "Support" },
    ],
  },
  {
    badge: "Reliable Shipment Operations",
    title: "Smart Logistics Services for Growing Businesses",
    description:
      "Improve efficiency and reduce delays with our modern logistics systems.",
    stats: [
      { value: "25K+", label: "Shipments" },
      { value: "85%", label: "Clients" },
      { value: "15+", label: "Sectors" },
    ],
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-main.mp4" type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 container-page flex h-full items-center">
        <div className="max-w-4xl text-white">
          
          <div
            key={`badge-${activeSlide}`}
            className="animate-fadeIn inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest backdrop-blur"
          >
            {slide.badge}
          </div>

          <h1
            key={`title-${activeSlide}`}
            className="animate-slideUp mt-6 text-4xl font-black leading-tight sm:text-1xl lg:text-7xl"
          >
            {slide.title}
          </h1>

          <p
            key={`desc-${activeSlide}`}
            className="animate-slideUp mt-6 text-lg text-white/80"
          >
            {slide.description}
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/quote"
              className="rounded-full bg-[#F47B20] px-7 py-4 font-semibold text-white transition hover:bg-[#de6f1d]"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10"
            >
              Explore
            </Link>
          </div>

          {/* STATS */}
          <div
            key={`stats-${activeSlide}`}
            className="animate-fadeIn mt-10 flex gap-8"
          >
            {slide.stats.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm text-white/70">{item.label}</div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="mt-8 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition ${
                  activeSlide === index
                    ? "w-10 bg-[#F47B20]"
                    : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}