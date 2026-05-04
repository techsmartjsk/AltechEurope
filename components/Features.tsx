"use client";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Wallet, Zap, Globe, LineChart } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "OTC & Liquidity",
    body: "Tight spreads and same-day settlement up to $10M per trade across majors, stables and select altcoins.",
  },
  {
    icon: ShieldCheck,
    title: "Qualified Custody",
    body: "Offline multi-sig vaults with segregated accounts and audited proof-of-reserves. No rehypothecation.",
  },
  {
    icon: Zap,
    title: "Payment Rails",
    body: "Fiat ↔ digital asset corridors with programmatic settlement. SEPA, SWIFT and on-chain in one API.",
  },
  {
    icon: Layers,
    title: "Wallet Infrastructure",
    body: "Launch a white-label wallet or treasury in under 30 days. Scale from 100 to millions of endpoints.",
  },
  {
    icon: LineChart,
    title: "Market Making",
    body: "24/7 two-sided quoting with programmatic risk controls. Deep books across CEXs and DEXs.",
  },
  {
    icon: Globe,
    title: "Regulated in Europe",
    body: "Operating under EU digital asset frameworks with local partnerships across DACH and Benelux.",
  },
];

export default function Features() {
  return (
    <section className="relative section-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mint-400">
              / What we build
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-black tracking-tight text-ink-950 md:text-5xl">
              Full-stack digital asset plumbing.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm font-light text-ink-900/60 md:block">
            Six products. One platform. Built for banks, funds and serious
            builders — the counterparty you quietly rely on.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-50 transition hover:border-mint-400/40 hover:shadow-md hover:shadow-blue-100"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-primary/5 blur-3xl transition group-hover:bg-blue-primary/15" />
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-pale">
                <f.icon className="text-mint-400" size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-950">
                {f.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ink-900/60">
                {f.body}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-mint-400 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
