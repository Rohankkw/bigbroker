import { Link } from "@tanstack/react-router";
import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { PHONE, WHATSAPP } from "@/data/mockData";

export default function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-border-dark mt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 text-brand-gold">
                <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
              <span className="font-display font-black text-brand-gold text-sm">JB</span>
            </div>
            <div>
              <div className="font-display font-bold">BIG BROKER</div>
              <div className="text-[10px] tracking-[0.2em] font-mono text-brand-gold uppercase">Enterprises</div>
            </div>
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Your trusted real estate partner in Vasai-Virar since 2010.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border-dark flex items-center justify-center hover:border-brand-green hover:text-brand-green transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border-dark flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <div className="label-mono mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/" className="hover:text-brand-gold">Home</Link></li>
            <li><Link to="/properties" className="hover:text-brand-gold">Properties</Link></li>
            <li><Link to="/services" className="hover:text-brand-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="label-mono mb-4">Services</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>Sale & Purchase</li>
            <li>Rent & Heavy Deposit</li>
            <li>Notary & Registration</li>
            <li>Home Loans</li>
            <li>New Construction</li>
          </ul>
        </div>

        <div>
          <div className="label-mono mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-brand-gold mt-1 shrink-0" /> Nalasopara East, Vasai-Virar, Maharashtra</li>
            <li className="flex items-start gap-2"><FaPhoneAlt className="text-brand-gold mt-1 shrink-0" /> {PHONE}</li>
            <li className="font-mono text-xs">Mon–Sun · 9:00 AM – 9:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-mono text-foreground/50">
          <span>© 2026 BIG BROKER Enterprises · All Rights Reserved</span>
          <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-gold" /> Nalasopara East, Vasai-Virar</span>
        </div>
      </div>
    </footer>
  );
}
