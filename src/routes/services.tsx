import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";
import { services, faqs } from "@/data/mockData";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jay Bholenath Enterprises" },
      { name: "description", content: "Sale, purchase, rent, heavy deposit, loans, insurance, notary and new construction across Vasai-Virar." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageBanner title="Our Services" accent="Services" subtitle="Nine end-to-end real estate services delivered in-house — no chasing, no surprises." />
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-5 lg:px-8">
        <SectionHeader label="FAQ" title={<>Questions, <span className="serif-italic">Answered.</span></>} />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`bg-card-dark border rounded-2xl overflow-hidden transition ${isOpen ? "border-brand-gold" : "border-border-dark"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-display font-bold text-lg">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-foreground/70 text-sm leading-relaxed border-t border-border-dark pt-4">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
