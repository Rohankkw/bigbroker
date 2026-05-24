import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/data/mockData";
import SectionHeader from "./SectionHeader";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-card-dark border-y border-border-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          label="CLIENT STORIES"
          title={<>They Found Their Home. <span className="serif-italic">You Can Too.</span></>}
        />
      </div>
      <div className="overflow-x-auto pb-4 scrollbar-none">
        <div className="flex gap-5 px-5 lg:px-8 min-w-max">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-[340px] md:w-[400px] shrink-0 bg-card-elevated border border-border-dark rounded-2xl p-7 glow-on-hover"
            >
              <FaQuoteLeft className="text-brand-gold text-4xl opacity-60 mb-4" />
              <p className="font-display text-lg italic leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-dark">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-border-dark" />
                <div className="flex-1">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{t.location}</div>
                </div>
                <div className="flex text-brand-gold text-xs">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
