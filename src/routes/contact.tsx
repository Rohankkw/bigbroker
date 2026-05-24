import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Clock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { PHONE, WHATSAPP } from "@/data/mockData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jay Bholenath Enterprises" },
      {
        name: "description",
        content:
          "Reach us on WhatsApp or call at 000033002. Office in Nalasopara East, open 9 AM – 9:30 PM all 7 days.",
      },
    ],
  }),
  component: ContactPage,
});

function Field({
  label,
  type = "text",
  name,
  placeholder,
  textarea,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="label-mono mb-2 block">[ {label} ]</span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required
          className="w-full bg-card-elevated border border-border-dark rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="w-full bg-card-elevated border border-border-dark rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
        />
      )}
    </label>
  );
}

function ContactPage() {
  const [toast, setToast] = useState(false);
  return (
    <>
      <PageBanner
        title="Get In Touch"
        accent="Touch"
        subtitle="WhatsApp is fastest. We typically reply within 30 minutes during business hours."
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setToast(true);
            setTimeout(() => setToast(false), 3500);
            (e.target as HTMLFormElement).reset();
          }}
          className="bg-card-dark border border-border-dark rounded-3xl p-8 space-y-5"
        >
          <div className="label-mono">[ INQUIRY FORM ]</div>
          <h2 className="font-display text-3xl font-bold">
            Tell us what you're{" "}
            <span className="serif-italic">looking for.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+91 ..."
            />
          </div>
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          <label className="block">
            <span className="label-mono mb-2 block">[ PROPERTY TYPE ]</span>
            <select
              name="type"
              className="w-full bg-card-elevated border border-border-dark rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-gold transition"
            >
              <option>Flat for Sale</option>
              <option>Flat for Rent</option>
              <option>Heavy Deposit</option>
              <option>Shop / Commercial</option>
              <option>Bungalow</option>
              <option>Open Plot</option>
              <option>New Construction</option>
            </select>
          </label>
          <Field
            label="Message"
            name="message"
            placeholder="Tell us your budget, location preference and timeline..."
            textarea
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-brand-gold text-brand-dark font-bold hover:bg-brand-gold-bright transition"
          >
            Send Inquiry →
          </button>
        </motion.form>

        <div className="space-y-4">
          {[
            {
              Icon: FaMapMarkerAlt,
              color: "text-brand-gold",
              label: "Address",
              value: "Nalasopara East, Vasai-Virar, Maharashtra 401209",
              href: "https://maps.google.com/?q=Nalasopara+East",
            },
            {
              Icon: FaPhoneAlt,
              color: "text-brand-gold",
              label: "Phone",
              value: PHONE,
              href: `tel:${PHONE.replace(/\s/g, "")}`,
            },
            {
              Icon: FaWhatsapp,
              color: "text-brand-green",
              label: "WhatsApp",
              value: "Chat with us instantly",
              href: WHATSAPP,
            },
            {
              Icon: Clock,
              color: "text-brand-gold",
              label: "Hours",
              value: "Mon – Sun · 9:00 AM – 9:30 PM",
            },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 bg-card-dark border border-border-dark rounded-2xl p-5 glow-on-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-card-elevated border border-border-dark flex items-center justify-center text-xl ${c.color}`}
              >
                <c.Icon />
              </div>
              <div>
                <div className="label-mono mb-1">
                  [ {c.label.toUpperCase()} ]
                </div>
                <div className="font-display font-bold text-lg">{c.value}</div>
              </div>
            </motion.a>
          ))}
          <div className="rounded-2xl overflow-hidden border border-border-dark aspect-video">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Nalasopara+East,+Vasai-Virar,+Maharashtra&output=embed"
              className="h-full w-full grayscale-[0.15] contrast-105 dark:grayscale dark:invert-[0.92] dark:hue-rotate-180 dark:contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-24 right-6 z-50 bg-card-dark border border-brand-gold rounded-xl px-5 py-4 shadow-2xl flex items-center gap-3 max-w-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
          <div>
            <div className="font-bold text-sm">Inquiry Received</div>
            <div className="text-xs text-foreground/60">
              We'll reach you on WhatsApp soon!
            </div>
          </div>
        </div>
      )}
    </>
  );
}
