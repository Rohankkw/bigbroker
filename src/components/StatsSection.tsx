import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/mockData";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  const isFloat = to % 1 !== 0;
  return (
    <span ref={ref}>
      {isFloat ? n.toFixed(1) : Math.round(n)}
      <span className="text-brand-gold">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 border-y border-border-dark bg-card-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border-dark">
        {stats.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card-dark p-8 text-center"
          >
            <div className="font-display text-5xl md:text-6xl font-bold text-foreground">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/60 mt-3">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
