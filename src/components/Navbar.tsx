import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { PHONE, WHATSAPP } from "@/data/mockData";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  const handleEMIClick = () => {
    const section = document.getElementById("emi-calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else if (path !== "/") {
      // If not on home page, navigate to home first
      window.location.href = "/#emi-calculator";
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/80 backdrop-blur-xl border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full text-brand-gold"
            >
              <polygon
                points="50,4 92,28 92,72 50,96 8,72 8,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <span className="font-display font-black text-brand-gold text-base">
              JB
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground text-base">
              BIG BROKER
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-brand-gold uppercase">
              Enterprises
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-brand-gold"
                    : "text-foreground/80 hover:text-brand-gold"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold" />
                )}
              </Link>
            );
          })}
          <button
            onClick={handleEMIClick}
            className="relative text-sm font-medium text-foreground/80 hover:text-brand-gold transition cursor-pointer"
          >
            EMI Calculator
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-dark text-xs font-mono text-foreground/80 hover:border-brand-gold hover:text-brand-gold transition"
          >
            <FaPhoneAlt className="w-3 h-3" /> {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-gold text-brand-dark font-bold text-sm hover:bg-brand-gold-bright transition"
          >
            <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle compact />
          <button
            onClick={() => setOpen(true)}
            className="text-foreground p-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-brand-dark/98 backdrop-blur-2xl flex flex-col">
          <div className="flex justify-between items-center px-5 h-20 border-b border-border-dark">
            <span className="font-display font-bold">Menu</span>
            <div className="flex items-center gap-2">
              <ThemeToggle compact />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold hover:text-brand-gold transition"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={handleEMIClick}
              className="font-display text-4xl font-bold hover:text-brand-gold transition"
            >
              EMI Calculator
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-7 py-3 rounded-full bg-brand-gold text-brand-dark font-bold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
