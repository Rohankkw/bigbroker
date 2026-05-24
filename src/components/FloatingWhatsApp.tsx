import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP } from "@/data/mockData";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="hidden group-hover:flex items-center px-4 py-2 rounded-full bg-card-dark border border-border-dark text-sm font-medium text-foreground shadow-xl">
        Chat with us 💬
      </span>
      <span className="relative">
        <span className="absolute inset-0 rounded-full bg-brand-green/40 animate-ping" />
        <span className="relative w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white text-2xl shadow-2xl border-2 border-brand-green">
          <FaWhatsapp />
        </span>
      </span>
    </a>
  );
}
