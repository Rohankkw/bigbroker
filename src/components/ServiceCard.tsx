import { motion } from "framer-motion";

export default function ServiceCard({
  icon, title, description, index = 0,
}: { icon: string; title: string; description: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="glow-on-hover bg-card-dark border border-border-dark rounded-2xl p-7"
    >
      <div className="w-14 h-14 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}
