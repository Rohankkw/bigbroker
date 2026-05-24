import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { projects } from "@/data/mockData";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-5 lg:px-8">
      <SectionHeader
        label="OUR PROJECTS"
        title={
          <>
            Properties We've <span className="serif-italic">Built & Sold</span>
          </>
        }
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group glow-on-hover bg-card-dark border border-border-dark rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="image-scrim-soft absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg">
                  {p.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider ${
                    p.status === "Completed"
                      ? "bg-brand-green/20 text-brand-green border border-brand-green/40"
                      : "bg-brand-amber/20 text-brand-amber border border-brand-amber/40"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-foreground/60 mb-3">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-brand-gold" /> {p.location}
                </span>
                <span className="text-border-dark">·</span>
                <span>{p.type}</span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                {p.description}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:gap-3 transition-all">
                Know More <FaArrowRight />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
