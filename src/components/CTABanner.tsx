import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE, WHATSAPP } from "@/data/mockData";

export default function CTABanner() {
  return (
    <section className="py-24 px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-brand-gold/40 bg-gradient-to-br from-card-dark via-card-elevated to-brand-dark p-12 md:p-16 text-center"
      >
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative">
          <div className="label-mono mb-4">[ READY WHEN YOU ARE ]</div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight">
            Ready to Find Your <span className="serif-italic">Dream Property?</span>
          </h2>
          <p className="text-foreground/70 mt-5 font-mono text-sm tracking-wider uppercase">
            7 days a week · 9 AM – 9:30 PM · Nalasopara East
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={`tel:${PHONE.replace(/\s/g,"")}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark border border-border-dark text-foreground font-bold hover:border-brand-gold transition">
              <FaPhoneAlt /> Call Now
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-brand-dark font-bold hover:bg-brand-gold-bright transition">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
