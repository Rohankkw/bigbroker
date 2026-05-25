import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PageBanner from "@/components/PageBanner";
import PropertyCard from "@/components/PropertyCard";
import PropertyDetailsModal from "@/components/PropertyDetailsModal";
import { properties, type Property } from "@/data/mockData";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "All Properties — Jay Bholenath Enterprises" },
      { name: "description", content: "Browse all flats, shops, bungalows and plots for sale, rent and heavy deposit across Vasai-Virar." },
    ],
  }),
  component: PropertiesPage,
});

const TYPES = ["Flat", "Shop", "Bungalow", "Plot", "Office"];
const TXNS = ["Sale", "Rent", "Heavy Deposit"];
const BHKS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];

function PropertiesPage() {
  const [type, setType] = useState<string[]>([]);
  const [txn, setTxn] = useState<string[]>([]);
  const [bhk, setBhk] = useState<string[]>([]);
  const [budget, setBudget] = useState(50000000);
  const [shown, setShown] = useState(9);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const activeFiltersCount = type.length + txn.length + bhk.length + (budget < 50000000 ? 1 : 0);

  const handleApplyFilters = () => {
    setShown(9);
    document.querySelector('[data-results-section]')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = useMemo(() => properties.filter(p => {
    if (type.length && !type.includes(p.type)) return false;
    if (txn.length && !txn.includes(p.transaction)) return false;
    if (bhk.length && !bhk.includes(p.bhk)) return false;
    if (p.transaction === "Sale" && p.price > budget) return false;
    return true;
  }), [type, txn, bhk, budget]);

  const Check = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
    <label className="flex items-center gap-3 cursor-pointer group py-1.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className={`w-4 h-4 rounded border flex items-center justify-center transition pointer-events-none ${
        checked ? "bg-brand-gold border-brand-gold" : "border-border-dark group-hover:border-brand-gold"
      }`}>
        {checked && <span className="text-brand-dark text-[10px] font-black">✓</span>}
      </span>
      <span className="text-sm text-foreground/80 group-hover:text-foreground">{label}</span>
    </label>
  );

  return (
    <>
      <PageBanner title="All Properties" subtitle="12 verified listings across Nalasopara, Vasai, Virar, Palghar and Boisar." />
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="bg-card-dark border border-border-dark rounded-2xl p-6 h-fit lg:sticky lg:top-28">
          <div className="label-mono mb-4 flex items-center justify-between">
            <span>[ FILTERS ]</span>
            {activeFiltersCount > 0 && (
              <span className="text-xs font-bold bg-brand-gold text-brand-dark px-2 py-1 rounded-full">
                {activeFiltersCount} Active
              </span>
            )}
          </div>
          <div className="mb-6">
            <div className="font-display font-bold mb-2 text-sm">Property Type</div>
            {TYPES.map(t => <Check key={t} label={t} checked={type.includes(t)} onChange={() => toggle(type, setType, t)} />)}
          </div>
          <div className="mb-6">
            <div className="font-display font-bold mb-2 text-sm">Transaction</div>
            {TXNS.map(t => <Check key={t} label={t} checked={txn.includes(t)} onChange={() => toggle(txn, setTxn, t)} />)}
          </div>
          <div className="mb-6">
            <div className="font-display font-bold mb-2 text-sm">BHK</div>
            {BHKS.map(t => <Check key={t} label={t} checked={bhk.includes(t)} onChange={() => toggle(bhk, setBhk, t)} />)}
          </div>
          <div className="mb-6">
            <div className="font-display font-bold mb-2 text-sm">Max Budget (Sale)</div>
            <input type="range" min={1000000} max={50000000} step={500000} value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-brand-gold" />
            <div className="font-mono text-xs text-brand-gold mt-1">₹ {(budget/100000).toFixed(0)} Lakh</div>
          </div>
          <button onClick={() => { setType([]); setTxn([]); setBhk([]); setBudget(50000000); }}
            className="w-full py-2.5 rounded-lg border border-border-dark text-xs font-mono uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition mb-2">
            Reset
          </button>
          <button onClick={handleApplyFilters} className="w-full py-2.5 rounded-lg bg-brand-gold text-brand-dark font-bold text-sm hover:bg-brand-gold/90 transition">
            View Results
          </button>
        </aside>

        <div data-results-section>
          <div className="flex items-center justify-between mb-6 font-mono text-xs text-foreground/60">
            <span>Showing {Math.min(shown, filtered.length)} of {filtered.length}</span>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-foreground/60">No properties match your filters.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.slice(0, shown).map((p, i) => <PropertyCard key={p.id} p={p} index={i} onPropertyClick={handlePropertyClick} />)}
            </div>
          )}
          {shown < filtered.length && (
            <div className="text-center mt-12">
              <button onClick={() => setShown(s => s + 6)}
                className="px-7 py-3 rounded-full border border-border-dark text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-dark transition">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
      <PropertyDetailsModal 
        property={selectedProperty} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
