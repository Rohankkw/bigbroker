import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeader({
  label, title, right,
}: { label: string; title: ReactNode; right?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
    >
      <div>
        <div className="label-mono mb-3">[ {label} ]</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">{title}</h2>
      </div>
      {right}
    </motion.div>
  );
}
