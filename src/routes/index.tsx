import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import TickerStrip from "@/components/TickerStrip";
import StatsSection from "@/components/StatsSection";
import PropertyCard from "@/components/PropertyCard";
import SectionHeader from "@/components/SectionHeader";
import FeatureShowcase from "@/components/FeatureShowcase";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EMICalculator from "@/components/EMICalculator";
import CTABanner from "@/components/CTABanner";
import { properties, services } from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIG BROKER Enterprises — Real Estate in Vasai-Virar" },
      { name: "description", content: "Find your dream property in Nalasopara, Vasai, Virar. Sale, purchase, rent and heavy deposit. 500+ properties sold. Trusted since 2010." },
    ],
  }),
  component: Home,
});

const filters = ["All", "For Sale", "For Rent", "Heavy Deposit", "New Construction"] as const;
type Filter = typeof filters[number];

function Home() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = properties.filter((p) => {
    if (filter === "All") return true;
    if (filter === "For Sale") return p.transaction === "Sale";
    if (filter === "For Rent") return p.transaction === "Rent";
    if (filter === "Heavy Deposit") return p.transaction === "Heavy Deposit";
    if (filter === "New Construction") return p.isNew && p.transaction === "Sale";
    return true;
  }).slice(0, 6);

  return (
    <>
      <HeroSection />
      <TickerStrip />
      <StatsSection />

      {/* Featured Properties */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          label="LATEST LISTINGS"
          title={<>Properties in <span className="serif-italic">Vasai-Virar</span></>}
          right={
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider border transition ${
                    filter === f
                      ? "bg-brand-gold text-brand-dark border-brand-gold"
                      : "border-border-dark text-foreground/70 hover:border-brand-gold hover:text-brand-gold"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/properties" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-dark text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-dark transition">
            View All Properties <FaArrowRight />
          </Link>
        </div>
      </section>

      <FeatureShowcase />

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          label="OUR SERVICES"
          title={<>Everything You Need, <span className="serif-italic">Under One Roof</span></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <ProjectsSection />
      <EMICalculator />
      <CTABanner />
    </>
  );
}
