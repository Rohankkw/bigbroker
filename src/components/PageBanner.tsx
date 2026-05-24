import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export default function PageBanner({ title, subtitle, accent }: { title: string; subtitle?: string; accent?: string }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden border-b border-border-dark">
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="font-mono text-xs text-foreground/50 mb-4 tracking-widest uppercase">
          <Link to="/" className="hover:text-brand-gold">Home</Link> <span className="text-brand-gold mx-2">/</span> {title}
        </div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-7xl font-black leading-none">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 && accent
              ? <span key={i} className="serif-italic"> {accent}</span>
              : <span key={i}>{i > 0 ? " " : ""}{w}</span>
          )}
        </motion.h1>
        {subtitle && <p className="text-foreground/70 mt-5 max-w-2xl text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
