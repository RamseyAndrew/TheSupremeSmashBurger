import { Link } from "react-router";
import brand from "../brand";
import heroVideo from "../imports/hero.mp4";
import screenshot1 from "../imports/1.png";
import screenshot3 from "../imports/2.png";

const TornDivider = ({ flip = false }: { flip?: boolean }) => (
  <div
    className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
    style={{ height: "40px", marginTop: flip ? "-1px" : undefined, marginBottom: flip ? undefined : "-1px" }}
  >
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#0A0A0A">
      <path d="M0,40 L0,20 C30,32 60,8 90,18 C120,28 150,6 180,16 C210,26 240,4 270,14 C300,24 330,10 360,20 C390,30 420,8 450,18 C480,28 510,6 540,16 C570,26 600,4 630,14 C660,24 690,10 720,20 C750,30 780,8 810,18 C840,28 870,6 900,16 C930,26 960,4 990,14 C1020,24 1050,10 1080,20 C1110,30 1140,8 1170,18 C1200,28 1230,6 1260,16 C1290,26 1320,4 1350,14 C1380,24 1410,10 1440,20 L1440,40 Z" />
    </svg>
  </div>
);

const TornDividerRed = ({ flip = false }: { flip?: boolean }) => (
  <div
    className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
    style={{ height: "40px", marginTop: flip ? "-1px" : undefined, marginBottom: flip ? undefined : "-1px" }}
  >
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" fill="#D41717">
      <path d="M0,40 L0,22 C24,34 48,10 72,20 C96,30 120,7 150,17 C180,27 210,5 240,15 C270,25 300,12 330,22 C360,32 390,9 420,19 C450,29 480,7 510,17 C540,27 570,5 600,15 C630,25 660,12 690,22 C720,32 750,9 780,19 C810,29 840,7 870,17 C900,27 930,5 960,15 C990,25 1020,12 1050,22 C1080,32 1110,9 1140,19 C1170,29 1200,7 1230,17 C1260,27 1290,5 1320,15 C1350,25 1380,12 1410,22 C1430,29 1440,25 1440,22 L1440,40 Z" />
    </svg>
  </div>
);

const testimonials = [
  {
    handle: "@sandra_nzioki",
    quote: "Accompanied my burger with the flamin Cajun fries! An all time favorite! 🔥",
    platform: "Instagram Stories",
  },
  {
    handle: "@thekenyanfoodie",
    quote: "The Supreme Smash Burger hits different. That crispy sear, the sauce ratio — absolutely undefeated. #DareToSmash",
    platform: "Instagram",
  },
  {
    handle: "@nairobi.eats",
    quote: "Caught them at Bizarre Bazaar and honestly queued twice. No cap — best smash burger in Nairobi right now.",
    platform: "Instagram",
  },
  {
    handle: "@gigiri_grub",
    quote: "The packaging alone is giving fashion week. And the burger inside? Even better. @tastethesupreme stays winning.",
    platform: "TikTok",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
         src="https://res.cloudinary.com/dmd3p6kkt/video/upload/v1790778652/hero_r5mttp.mp4"
        />
      </section>

      {/* TORN DIVIDER */}
      <TornDivider />

      {/* CAMPAIGN VISUAL */}
      <section className="bg-[#D41717] py-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
            <img
              src="https://res.cloudinary.com/dmd3p6kkt/image/upload/v1790778744/1_udjqco.png"
              alt="Fashion-campaign poster — model in red puffer holding The Supreme Smash Burger"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: "500px" }}
            />
          </div>
          <div className="flex flex-col justify-center px-8 sm:px-16 py-16">
            <p className="font-condensed font-600 tracking-[0.4em] text-white/60 text-xs uppercase mb-4">The ethos</p>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-white mb-8">
              DARE<br />TO<br />SMASH
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed max-w-md mb-8">
              We don't do ordinary. Every patty is pressed to the griddle with intention — crispy edges, juicy center, layered with flavour that hits from the first bite to the last. This is streetwear energy applied to a burger.
            </p>
            <Link
              to="/about"
              className="inline-block font-condensed font-700 text-sm tracking-[0.15em] border border-white text-white px-6 py-3 hover:bg-white hover:text-[#D41717] transition-colors duration-200 self-start"
            >
              OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      <TornDividerRed />

      {/* FEATURED ITEM CALLOUT */}
      <section className="py-24 px-4 sm:px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-condensed font-700 text-xs tracking-[0.4em] text-[#D41717] uppercase">Fan Favourite</span>
              <h2 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.85] text-white mt-4 mb-6">
                FLAMIN<br />CAJUN<br />FRIES
              </h2>
              <p className="font-body text-white/70 text-base leading-relaxed mb-4">
                Seasoned crispy fries with a fiery kick. Paired with any burger or standing alone as a legend.
              </p>
              <p className="font-condensed font-700 text-3xl text-[#D41717] tracking-tight mb-8">KES 250</p>
              <Link
                to="/menu"
                className="inline-block font-condensed font-700 text-sm tracking-[0.15em] bg-[#D41717] text-white px-8 py-4 hover:bg-[#FF2626] transition-colors duration-200 uppercase"
              >
                VIEW FULL MENU
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#1A1A1A] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dmd3p6kkt/image/upload/v1790778745/3_juczxa.png"
                  alt="@sandra_nzioki holding the Supreme Smash Burger packaging and Flamin Cajun Fries"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* UGC badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#D41717] px-4 py-3">
                <p className="font-condensed font-700 text-xs tracking-[0.15em] text-white">@sandra_nzioki on Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TORN DIVIDER into red section */}
      <div className="w-full overflow-hidden" style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" style={{ fill: "#D41717" }}>
          <path d="M0,0 L0,20 C30,8 60,32 90,22 C120,12 150,34 180,24 C210,14 240,36 270,26 C300,16 330,30 360,20 C390,10 420,32 450,22 C480,12 510,34 540,24 C570,14 600,36 630,26 C660,16 690,30 720,20 C750,10 780,32 810,22 C840,12 870,34 900,24 C930,14 960,36 990,26 C1020,16 1050,30 1080,20 C1110,10 1140,32 1170,22 C1200,12 1230,34 1260,24 C1290,14 1320,36 1350,26 C1380,16 1410,30 1440,20 L1440,0 Z" />
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section className="bg-[#D41717] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-condensed text-xs tracking-[0.4em] text-white/60 mb-2">STRAIGHT FROM THE PEOPLE</p>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-white">
                THE STREET<br />SPEAKS
              </h2>
            </div>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-condensed font-700 text-sm tracking-[0.15em] border border-white text-white px-6 py-3 hover:bg-white hover:text-[#D41717] transition-colors duration-200 self-end"
            >
              {brand.handle}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.handle}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:bg-white/15 transition-colors duration-200"
              >
                <p className="font-body text-white/90 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-condensed font-700 text-white text-sm">{t.handle}</p>
                  <p className="font-condensed text-xs text-white/50 tracking-wider mt-0.5">{t.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TORN divider back to black */}
      <div className="w-full overflow-hidden rotate-180" style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" style={{ fill: "#D41717" }}>
          <path d="M0,0 L0,20 C30,8 60,32 90,22 C120,12 150,34 180,24 C210,14 240,36 270,26 C300,16 330,30 360,20 C390,10 420,32 450,22 C480,12 510,34 540,24 C570,14 600,36 630,26 C660,16 690,30 720,20 C750,10 780,32 810,22 C840,12 870,34 900,24 C930,14 960,36 990,26 C1020,16 1050,30 1080,20 C1110,10 1140,32 1170,22 C1200,12 1230,34 1260,24 C1290,14 1320,36 1350,26 C1380,16 1410,30 1440,20 L1440,0 Z" />
        </svg>
      </div>

      {/* CTA STRIP */}
      <section className="py-24 px-4 sm:px-6 bg-[#0A0A0A] text-center">
        <p className="font-condensed text-xs tracking-[0.5em] text-white/40 mb-4 uppercase">Catch us live</p>
        <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.85] text-white mb-8">
          FIND US<br />AT EVENTS
        </h2>
        <p className="font-body text-white/60 max-w-lg mx-auto mb-10">
          We vendor at rotating pop-ups and markets across Nairobi — including Bizarre Bazaar by Biz Baz Events. Follow us for drop announcements.
        </p>
        <Link
          to="/find-us"
          className="inline-block font-condensed font-700 text-base tracking-[0.15em] bg-[#D41717] text-white px-10 py-5 hover:bg-[#FF2626] transition-colors duration-200 uppercase"
        >
          SEE UPCOMING EVENTS
        </Link>
      </section>
    </div>
  );
}
