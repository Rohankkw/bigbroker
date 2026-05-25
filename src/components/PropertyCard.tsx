import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import type { Property } from "@/data/mockData";

export default function PropertyCard({
  p,
  index = 0,
  onPropertyClick,
}: {
  p: Property;
  index?: number;
  onPropertyClick?: (property: Property) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      onClick={() => onPropertyClick?.(p)}
      className="group glow-on-hover bg-card-dark border border-border-dark rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all hover:border-brand-gold hover:shadow-lg hover:shadow-brand-gold/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.imageUrl}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="image-scrim absolute inset-0" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-gold text-brand-dark text-[11px] font-bold tracking-wider uppercase">
          For {p.transaction}
        </span>
        {p.isNew && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-blue text-white text-[11px] font-bold tracking-wider uppercase">
            New
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-foreground">
          {p.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-foreground/60 mt-1">
          <FaMapMarkerAlt className="text-brand-gold" /> {p.location}
        </div>
        <div className="font-display text-2xl font-bold text-brand-gold mt-3">
          {p.priceLabel}
        </div>
        <div className="font-mono text-[11px] text-foreground/60 mt-2 tracking-wider">
          {p.bhk} · {p.area} · {p.floor}
        </div>
        <div className="border-t border-border-dark mt-4 pt-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onPropertyClick?.(p);
            }}
            className="w-full py-2.5 rounded-lg border border-border-dark text-sm font-semibold text-foreground/80 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}
