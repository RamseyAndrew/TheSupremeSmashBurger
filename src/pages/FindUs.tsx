import brand from "../brand";
import screenshot1 from "../imports/1.png";
import screenshot2 from "../imports/2.png";

const upcomingEvents = [
  {
    id: "biz-baz-oct",
    name: "BIZARRE BAZAAR",
    organiser: "Biz Baz Events",
    dates: "TBA — Watch our socials",
    location: "Nairobi",
    description: "The recurring multi-vendor market we pop up at every season. Follow @tastethesupreme for exact dates.",
    status: "upcoming" as const,
  },
];

const pastEvents = [
  {
    id: "biz-baz-sept-26",
    name: "Bizarre Bazaar",
    dates: "Sat 26th & Sun 27th Sept 2026",
    location: "Nairobi",
  },
  {
    id: "biz-baz-jul-4",
    name: "Bizarre Bazaar Summer Festival",
    dates: "Sat 4th & Sun 5th July 2026",
    location: "Nairobi",
  },
];

export default function FindUs() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Page header */}
      <div className="pt-12 pb-16 px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <p className="font-condensed text-xs tracking-[0.4em] text-white/40 mb-2 uppercase">Where to find us</p>
          <h1 className="font-display text-[clamp(4rem,14vw,10rem)] leading-[0.85] text-white mb-2">
            FIND US
          </h1>
        </div>
      </div>

      {/* Home base */}
      <section className="px-4 sm:px-6 pb-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="border border-white/10 p-8 sm:p-12">
              <span className="font-condensed font-700 text-xs tracking-[0.4em] text-[#D41717] uppercase">Home base</span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] text-white mt-4 mb-6">KSTVET<br />GIGIRI</h2>
              <p className="font-condensed font-600 text-white/80 text-lg mb-2">
                Off UN Avenue Road
              </p>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                Gigiri, Nairobi — our permanent base of operations. Walk-in when we're open. Check our socials for operating hours.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://maps.google.com/?q=KSTVET+Gigiri+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-condensed font-700 text-sm tracking-[0.1em] bg-[#D41717] text-white px-6 py-3 hover:bg-[#FF2626] transition-colors duration-200 uppercase"
                >
                  GET DIRECTIONS
                </a>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-condensed font-700 text-sm tracking-[0.1em] border border-white/30 text-white/70 px-6 py-3 hover:border-white hover:text-white transition-colors duration-200 uppercase"
                >
                  FOLLOW FOR HOURS
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative bg-[#111111] border border-white/10 overflow-hidden" style={{ minHeight: "360px" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-px h-16 bg-[#D41717]" />
                <p className="font-condensed font-700 text-white text-2xl">KSTVET, GIGIRI</p>
                <p className="font-body text-white/50 text-sm">Off UN Avenue Road, Nairobi</p>
                <a
                  href="https://maps.google.com/?q=KSTVET+Gigiri+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-condensed text-xs tracking-widest text-[#D41717] hover:underline"
                >
                  VIEW ON GOOGLE MAPS →
                </a>
              </div>
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TORN into red */}
      <div className="w-full overflow-hidden" style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#D41717">
          <path d="M0,0 L0,22 C24,34 48,10 72,20 C96,30 120,7 150,17 C180,27 210,5 240,15 C270,25 300,12 330,22 C360,32 390,9 420,19 C450,29 480,7 510,17 C540,27 570,5 600,15 C630,25 660,12 690,22 C720,32 750,9 780,19 C810,29 840,7 870,17 C900,27 930,5 960,15 C990,25 1020,12 1050,22 C1080,32 1110,9 1140,19 C1170,29 1200,7 1230,17 C1260,27 1290,5 1320,15 C1350,25 1380,12 1410,22 C1430,29 1440,25 1440,22 L1440,0 Z" />
        </svg>
      </div>

      {/* UPCOMING EVENTS */}
      <section className="bg-[#D41717] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-condensed text-xs tracking-[0.4em] text-white/60 mb-2 uppercase">Catch us at</p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-white mb-12">UPCOMING<br />POP-UPS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Event poster 1 */}
            <div className="relative overflow-hidden bg-black/20">
              <img
                src="https://res.cloudinary.com/dmd3p6kkt/image/upload/v1790778744/1_udjqco.png"
                alt="The Supreme Smash Burger at Bizarre Bazaar — Sat 26th and Sun 27th Sept"
                className="w-full object-cover"
                style={{ maxHeight: "600px" }}
              />
            </div>
            <div className="relative overflow-hidden bg-black/20">
              <img
                src="https://res.cloudinary.com/dmd3p6kkt/image/upload/v1790779410/2_visfzx.png"
                alt="The Supreme Smash Burger at Bizarre Bazaar Summer Festival — Sat 4th and Sun 5th July"
                className="w-full object-cover"
                style={{ maxHeight: "600px" }}
              />
            </div>
          </div>

          {upcomingEvents.map((event) => (
            <div key={event.id} className="border border-white/30 p-8 sm:p-12">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <span className="font-condensed font-700 text-xs tracking-[0.3em] text-white/60 uppercase">
                    {event.organiser}
                  </span>
                  <h3 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[0.9] text-white mt-2 mb-4">
                    {event.name}
                  </h3>
                  <p className="font-condensed font-600 text-white/80 text-lg mb-2">{event.dates}</p>
                  <p className="font-body text-white/60 text-sm max-w-md">{event.description}</p>
                </div>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-condensed font-700 text-sm tracking-[0.15em] border border-white text-white px-6 py-4 hover:bg-white hover:text-[#D41717] transition-colors duration-200 uppercase self-start"
                >
                  FOLLOW FOR DATES
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TORN back to black */}
      <div className="w-full overflow-hidden rotate-180" style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#D41717">
          <path d="M0,0 L0,22 C24,34 48,10 72,20 C96,30 120,7 150,17 C180,27 210,5 240,15 C270,25 300,12 330,22 C360,32 390,9 420,19 C450,29 480,7 510,17 C540,27 570,5 600,15 C630,25 660,12 690,22 C720,32 750,9 780,19 C810,29 840,7 870,17 C900,27 930,5 960,15 C990,25 1020,12 1050,22 C1080,32 1110,9 1140,19 C1170,29 1200,7 1230,17 C1260,27 1290,5 1320,15 C1350,25 1380,12 1410,22 C1430,29 1440,25 1440,22 L1440,0 Z" />
        </svg>
      </div>

      {/* Past events */}
      <section className="bg-[#0A0A0A] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-condensed text-xs tracking-[0.4em] text-white/40 mb-8 uppercase">We've been at</p>
          <div className="space-y-px">
            {pastEvents.map((event, i) => (
              <div
                key={event.id}
                className="flex items-center justify-between gap-6 py-5 border-b border-white/10 group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-condensed text-xs text-white/20 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-condensed font-700 text-lg text-white group-hover:text-[#D41717] transition-colors">
                      {event.name}
                    </p>
                    <p className="font-body text-sm text-white/40">{event.location}</p>
                  </div>
                </div>
                <p className="font-condensed text-sm text-white/40 text-right shrink-0">{event.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
