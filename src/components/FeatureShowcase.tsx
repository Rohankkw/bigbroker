import { motion } from "framer-motion";
import { FaCheck, FaWhatsapp, FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const card = "glow-on-hover bg-card-dark border border-border-dark rounded-2xl p-7";

export default function FeatureShowcase() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-5 lg:px-8">
      <SectionHeader
        label="WHY CHOOSE US"
        title={<>Complete Real Estate <span className="serif-italic">Solutions</span></>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`${card} md:col-span-2 flex flex-col md:flex-row gap-6 justify-between`}>
          <div className="max-w-md">
            <div className="label-mono mb-2">[ EXPERTISE ]</div>
            <h3 className="font-display text-3xl font-bold mb-3">Local Market Expertise</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              We've been operating exclusively in the Vasai-Virar belt for over 15 years.
              We know every street, every project, every fair price.
            </p>
            <span className="inline-block mt-4 font-mono text-xs px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/30">
              15+ Years
            </span>
          </div>
          <div className="relative w-full md:w-64 h-40 md:h-auto rounded-xl overflow-hidden border border-border-dark bg-grid">
            <div className="absolute inset-0 mesh-bg opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-foreground/60 text-center">
              <div>
                <div className="text-brand-gold text-2xl mb-1">📍</div>
                NALASOPARA · VASAI<br/>VIRAR · PALGHAR · BOISAR
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={card}>
          <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center text-brand-dark mb-4">
            <FaCheck className="text-xl" />
          </div>
          <h3 className="font-display text-xl font-bold mb-2">Transparent Dealings</h3>
          <p className="text-foreground/60 text-sm">No hidden charges. No surprises. Every rupee accounted for.</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={card}>
          <div className="label-mono mb-3">[ JOURNEY ]</div>
          <h3 className="font-display text-xl font-bold mb-4">End-to-End Support</h3>
          <div className="space-y-2 font-mono text-[11px] text-foreground/70">
            {["Search","Visit","Agreement","Registration"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-[9px] text-brand-gold">{i+1}</div>
                <span className="uppercase tracking-wider">{s}</span>
                <div className="flex-1 h-px bg-border-dark" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`${card} md:col-span-1`}>
          <div className="flex items-center gap-1 text-brand-gold text-xl mb-3">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <h3 className="font-display text-xl font-bold mb-2">254+ Verified Reviews</h3>
          <p className="text-foreground/60 text-sm italic">"Smooth, transparent, no nonsense."</p>
          <div className="font-mono text-[10px] mt-3 text-foreground/50 uppercase tracking-widest">4.9 avg from Google</div>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`${card} md:col-span-1 flex flex-col items-start`}>
          <div className="w-14 h-14 rounded-2xl bg-brand-green/15 border border-brand-green/40 flex items-center justify-center mb-4">
            <FaWhatsapp className="text-brand-green text-3xl" />
          </div>
          <h3 className="font-display text-xl font-bold mb-1">WhatsApp First Response</h3>
          <p className="text-foreground/60 text-sm">Usually replies within 30 minutes during business hours.</p>
        </motion.div>
      </div>
    </section>
  );
}
