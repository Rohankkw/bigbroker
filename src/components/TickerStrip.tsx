const items1 = [
  "500+ Properties Sold","Flats & Shops Available","Nalasopara","Vasai","Virar","Palghar","Boisar","Trusted Since 2010",
];
const items2 = [
  "Sale · Purchase · Rent","Heavy Deposit Available","Notary & Agreement","Loan & Insurance","New Construction","Legal Chawl",
];

function Row({ items, dir, bg }: { items: string[]; dir: "left" | "right"; bg: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-border-dark ${bg}`}>
      <div className={`flex whitespace-nowrap py-4 ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-mono text-sm text-foreground/80">
            <span className="text-brand-gold text-lg leading-none">{i % 2 === 0 ? "◈" : "◎"}</span>
            <span className="uppercase tracking-widest">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TickerStrip() {
  return (
    <section className="relative">
      <Row items={items1} dir="left" bg="bg-card-dark" />
      <Row items={items2} dir="right" bg="bg-card-elevated" />
    </section>
  );
}
