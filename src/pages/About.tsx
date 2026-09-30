import { Link } from "react-router";
import brand from "../brand";
import screenshot1 from "../imports/Screenshot_2026-09-30_152459.png";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Page header — split canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Text side */}
        <div className="bg-[#D41717] flex flex-col justify-end p-8 sm:p-16 py-16">
          <p className="font-condensed text-xs tracking-[0.4em] text-white/60 mb-4 uppercase">{brand.est} · {brand.parentCompany}</p>
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.85] text-white">
            BORN TO<br />DOMINATE<br />THE BURGER<br />SCENE
          </h1>
          <p className="font-condensed font-600 text-white/80 text-xl mt-6 max-w-sm">
            A Nairobi-born brand rewriting what a burger can look like.
          </p>
        </div>

        {/* Image side */}
        <div className="relative overflow-hidden bg-[#111]" style={{ minHeight: "400px" }}>
          <img
            src={screenshot1}
            alt="The Supreme Smash Burger — fashion campaign visual"
            className="w-full h-full object-cover object-top"
            style={{ minHeight: "400px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Brand story */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <div className="sticky top-24">
              <p className="font-condensed text-xs tracking-[0.4em] text-[#D41717] mb-4 uppercase">Our Story</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white">
                THE<br />ETHOS
              </h2>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div className="border-l-2 border-[#D41717] pl-8">
              <h3 className="font-condensed font-700 text-xl text-white mb-3">Why The Smash Burger?</h3>
              <p className="font-body text-white/70 text-base leading-relaxed">
                Smash burgers aren't just a cooking technique — they're a statement. When you press a patty hard against a screaming-hot griddle, you force the Maillard reaction into overdrive. Every square centimetre of crust. Every edge crispy. Every bite a hit. That's not an accident; it's a deliberate act of flavour.
              </p>
            </div>

            <div className="border-l-2 border-[#D41717]/40 pl-8">
              <h3 className="font-condensed font-700 text-xl text-white mb-3">Nairobi, Gigiri — 2024</h3>
              <p className="font-body text-white/70 text-base leading-relaxed">
                We launched out of KSTVET on UN Avenue Road, Gigiri — a corner of Nairobi that moves at its own pace and doesn't apologise for it. A product of Tasty Grubs, the brand was built from scratch with one question: why does street food have to look like street food? We applied fashion-campaign thinking to a foil bag and a smash patty, and something clicked.
              </p>
            </div>

            <div className="border-l-2 border-[#D41717]/40 pl-8">
              <h3 className="font-condensed font-700 text-xl text-white mb-3">Pop-Up Culture</h3>
              <p className="font-body text-white/70 text-base leading-relaxed">
                We don't sit still. We show up at markets, festivals, and third-party events across Nairobi — Bizarre Bazaar included — and each time, the queue gets longer and the reposted stories get louder. We earn our space by being worth the detour.
              </p>
            </div>

            <div className="border-l-2 border-[#D41717]/40 pl-8">
              <h3 className="font-condensed font-700 text-xl text-white mb-3">#DareToSmash</h3>
              <p className="font-body text-white/70 text-base leading-relaxed">
                The hashtag is the manifesto. Don't settle for a burger that looks fine and tastes average. Dare to go harder. Dare to demand more. Dare to smash. That's the energy we bring to every event, every batch of Flamin Cajun Fries, every foil bag with our name on it.
              </p>
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

      {/* Tasty Grubs credit */}
      <section className="bg-[#D41717] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-condensed text-xs tracking-[0.4em] text-white/60 mb-4 uppercase">Part of a bigger family</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-white mb-6">
              A PRODUCT<br />OF TASTY<br />GRUBS
            </h2>
            <p className="font-body text-white/80 text-base leading-relaxed">
              The Supreme Smash Burger sits under the Tasty Grubs umbrella — a parent company built around the belief that good food should be worth photographing, sharing, and queueing for.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white/10 border border-white/20 p-8">
              <p className="font-condensed font-700 text-2xl text-white mb-1">{brand.handle}</p>
              <p className="font-body text-white/60 text-sm mb-4">Instagram · TikTok · Facebook</p>
              <div className="flex gap-3">
                <a href={brand.social.instagram} target="_blank" rel="noreferrer"
                  className="font-condensed font-700 text-xs tracking-widest text-white border border-white/40 px-4 py-2 hover:bg-white hover:text-[#D41717] transition-colors">
                  INSTAGRAM
                </a>
                <a href={brand.social.tiktok} target="_blank" rel="noreferrer"
                  className="font-condensed font-700 text-xs tracking-widest text-white border border-white/40 px-4 py-2 hover:bg-white hover:text-[#D41717] transition-colors">
                  TIKTOK
                </a>
                <a href={brand.social.facebook} target="_blank" rel="noreferrer"
                  className="font-condensed font-700 text-xs tracking-widest text-white border border-white/40 px-4 py-2 hover:bg-white hover:text-[#D41717] transition-colors">
                  FACEBOOK
                </a>
              </div>
            </div>

            <Link
              to="/menu"
              className="font-condensed font-700 text-base tracking-[0.15em] bg-[#0A0A0A] text-white px-8 py-5 hover:bg-black transition-colors duration-200 uppercase text-center"
            >
              VIEW THE MENU →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
