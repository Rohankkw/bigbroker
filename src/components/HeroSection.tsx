import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FaWhatsapp, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { WHATSAPP } from "@/data/mockData";

const phrases = [
  "Trusted. Transparent. Local.",
  "500+ Properties Delivered.",
  "15 Years of Real Estate Expertise.",
];

function Typewriter() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % phrases.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-7 overflow-hidden">
      <motion.div
        key={i}
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -28, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm uppercase tracking-[0.25em] text-brand-gold"
      >
        {phrases[i]}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="hero-fade absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center w-full py-20">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-dark bg-card-dark/60 backdrop-blur"
          >
            <FaMapMarkerAlt className="text-brand-gold text-xs" />
            <span className="label-mono !text-[10px] !text-foreground/70">
              [ NALASOPARA EAST · VASAI-VIRAR · MAHARASHTRA ]
            </span>
          </motion.div>

          <div className="mt-6">
            <Typewriter />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mt-5"
          >
            Find Your{" "}
            <span className="serif-italic text-6xl md:text-7xl lg:text-8xl">
              Dream
            </span>{" "}
            Property,
            <br />
            Without the Hassle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-foreground/70 text-lg mt-6 max-w-xl leading-relaxed"
          >
            Sale, purchase, rent, and heavy deposit — flats, shops, bungalows,
            and open plots across Vasai-Virar. No middlemen. Just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-brand-dark font-bold hover:bg-brand-gold-bright transition group"
            >
              Explore Properties
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-dark text-foreground font-semibold hover:bg-brand-green hover:border-brand-green transition"
            >
              <FaWhatsapp /> WhatsApp Us Now
            </a>
          </motion.div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 font-mono text-xs text-foreground/60">
            <span>✓ Verified Agent</span>
            <span className="text-border-dark">|</span>
            <span>✓ 254+ Reviews</span>
            <span className="text-border-dark">|</span>
            <span>✓ Since 2010</span>
          </div>
        </div>

        {/* RIGHT - floating cards */}
        <div className="relative h-[520px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute inset-0 animate-float"
          >
            <div className="bg-card-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-border-dark flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-70" />
                    <span className="relative rounded-full w-2.5 h-2.5 bg-brand-green" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/80">
                    Live · New Listing Alert
                  </span>
                </div>
                <span className="font-mono text-[10px] text-foreground/50">
                  JBE-002
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs label-mono mb-2">[ FEATURED ]</div>
                <h3 className="font-display font-bold text-2xl">
                  2BHK Flat — Nalasopara East
                </h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-4xl font-black text-brand-gold">
                    ₹ 32,00,000
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[11px] text-foreground/70">
                  <div className="rounded-lg border border-border-dark p-3 text-center">
                    <div className="text-brand-gold text-base">📍</div>
                    Near Station
                  </div>
                  <div className="rounded-lg border border-border-dark p-3 text-center">
                    <div className="text-brand-gold text-base">📐</div>
                    650 sq.ft
                  </div>
                  <div className="rounded-lg border border-border-dark p-3 text-center">
                    <div className="text-brand-gold text-base">🔑</div>
                    Ready
                  </div>
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-gold text-brand-dark font-bold hover:bg-brand-gold-bright transition"
                >
                  Enquire Now <FaArrowRight />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-4 -left-6 bg-card-elevated border border-border-dark rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl"
          >
            <span className="text-lg">🏠</span>
            <span className="font-mono text-xs">3 New Listings Today</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-4 -right-2 bg-card-elevated border border-border-dark rounded-xl px-4 py-3 flex items-center gap-2 shadow-xl"
          >
            <span className="text-brand-gold">⭐</span>
            <span className="font-mono text-xs">4.9 / 5 Rating</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
