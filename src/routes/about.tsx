import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import StatsSection from "@/components/StatsSection";
import SectionHeader from "@/components/SectionHeader";
import CTABanner from "@/components/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BIG BROKER Enterprises" },
      {
        name: "description",
        content:
          "15+ years of real estate expertise across Vasai-Virar. Meet the team behind 500+ successful property deals.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2010",
    title: "The Beginning",
    text: "Started as a small estate agent office in Nalasopara East with one goal — fair, transparent dealings.",
  },
  {
    year: "2015",
    title: "100 Deals Milestone",
    text: "Crossed 100 successful property transactions and built our first construction project.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    text: "Launched WhatsApp-first customer support and digitised every agreement workflow.",
  },
  {
    year: "2024",
    title: "500+ Properties Sold",
    text: "Crossed half a thousand successful deals across Nalasopara, Vasai, Virar and Palghar.",
  },
  {
    year: "2026",
    title: "Today",
    text: "Trusted by 1000+ families and growing — with new construction projects in Boisar belt.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        accent="Us"
        subtitle="Built on trust, sustained by results — 15 years of real estate in Vasai-Virar."
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-dark"
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=70"
            alt="Office"
            className="w-full h-full object-cover"
          />
          <div className="image-scrim absolute inset-0" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="label-mono mb-3">[ OUR STORY ]</div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            A local agency, <span className="serif-italic">deeply rooted.</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:text-brand-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Founded in 2010 by a Nalasopara native, BIG BROKER Enterprises
            was born from a simple frustration — real estate in suburban Mumbai
            was opaque, exhausting and full of middlemen.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Fifteen years later, we have closed over 500 successful deals,
            completed our own construction projects, and earned a 4.9 average
            rating from 254+ verified clients. We still operate from the same
            neighbourhood, because local knowledge is the only knowledge that
            matters.
          </p>
        </motion.div>
      </section>

      <StatsSection />

      <section className="max-w-5xl mx-auto px-5 lg:px-8 py-24">
        <SectionHeader
          label="JOURNEY"
          title={
            <>
              15 years, <span className="serif-italic">five milestones.</span>
            </>
          }
        />
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-dark hidden md:block" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative grid md:grid-cols-2 gap-6 mb-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div
                className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}
              >
                <div className="font-display text-5xl font-black text-brand-gold">
                  {t.year}
                </div>
              </div>
              <div className="bg-card-dark border border-border-dark rounded-2xl p-6 glow-on-hover">
                <h3 className="font-display font-bold text-xl mb-2">
                  {t.title}
                </h3>
                <p className="text-foreground/70 text-sm">{t.text}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-brand-gold ring-4 ring-brand-dark hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 lg:px-8 py-20">
        <div className="bg-card-dark border border-border-dark rounded-3xl p-10 grid md:grid-cols-[200px_1fr] gap-8 items-center glow-on-hover">
          <div className="aspect-square rounded-2xl overflow-hidden border border-border-dark mx-auto w-40 md:w-full">
            <img
              src="https://api.dicebear.com/7.x/avataaars/png?seed=SeemaRealty"
              alt="BIG BROKER"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="label-mono mb-2">FOUNDER</div>
            <h3 className="font-display text-3xl font-bold">BIG BROKER</h3>
            <div className="font-mono text-xs text-foreground/60 uppercase tracking-widest mt-1">
              Estate Agent · Builder · Founder
            </div>
            <p className="text-foreground/70 mt-4 text-sm leading-relaxed">
              "Real estate is local. We treat every client like a neighbour,
              because in Vasai-Virar — they probably are."
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
