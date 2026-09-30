import { useState } from "react";
import { menuItems, categories, type CategoryFilter } from "../data/menu";

export default function Menu() {
  const [active, setActive] = useState<CategoryFilter>("All");

  const filtered = menuItems.filter((item) => {
    if (active === "All") return true;
    if (active === "Burgers") return item.category === "burger";
    if (active === "Fries") return item.category === "fries";
    return true;
  });

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Page header */}
      <div className="bg-[#D41717] pt-10 pb-0 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="font-condensed text-xs tracking-[0.4em] text-white/60 mb-2 uppercase">KSTVET, Gigiri, Nairobi</p>
          <h1 className="font-display text-[clamp(4rem,14vw,10rem)] leading-[0.85] text-white">
            THE<br />MENU
          </h1>
          <p className="font-condensed font-600 text-white/70 text-base mt-4 mb-8">
            Order at the counter · Prices in KES
          </p>

          {/* Category filter */}
          <div className="flex gap-1 -mb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-condensed font-700 text-sm tracking-[0.1em] px-6 py-3 border-t border-x transition-colors duration-200 ${
                  active === cat
                    ? "bg-[#0A0A0A] text-white border-white/20"
                    : "bg-transparent text-white/60 border-transparent hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Torn edge into black */}
        <div className="w-full overflow-hidden" style={{ height: "32px", marginTop: "0" }}>
          <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-full" fill="#0A0A0A">
            <path d="M0,32 L0,16 C30,26 60,6 90,14 C120,22 150,4 180,12 C210,20 240,2 270,10 C300,18 330,8 360,16 C390,24 420,6 450,14 C480,22 510,4 540,12 C570,20 600,2 630,10 C660,18 690,8 720,16 C750,24 780,6 810,14 C840,22 870,4 900,12 C930,20 960,2 990,10 C1020,18 1050,8 1080,16 C1110,24 1140,6 1170,14 C1200,22 1230,4 1260,12 C1290,20 1320,2 1350,10 C1380,18 1410,8 1440,16 L1440,32 Z" />
          </svg>
        </div>
      </div>

      {/* Menu grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#111111] border border-white/10 overflow-hidden hover:border-[#D41717]/50 transition-colors duration-300"
            >
              <div className="relative overflow-hidden aspect-square bg-[#1A1A1A]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.tag && (
                  <div className="absolute top-3 left-3 bg-[#D41717] px-3 py-1">
                    <span className="font-condensed font-700 text-xs tracking-[0.15em] text-white">{item.tag}</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-condensed font-700 text-xl tracking-tight text-white leading-tight">{item.name}</h3>
                  <span className="font-display text-xl text-[#D41717] shrink-0">
                    {item.price.toLocaleString()}
                  </span>
                </div>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-xs tracking-[0.2em] text-white/30 uppercase">
                    KES {item.price.toLocaleString()}
                  </span>
                  <span className="font-condensed text-xs tracking-widest text-white/30 uppercase">
                    {item.category === "burger" ? "Burger" : "Fries"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-white/20 text-center mt-16 max-w-md mx-auto">
          Menu items and prices are placeholders — real menu and confirmed pricing will be updated by the client.
        </p>
      </div>
    </div>
  );
}
