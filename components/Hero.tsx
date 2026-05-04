"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient px-6 pt-36 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-primary/20 bg-blue-pale px-4 py-1.5 text-xs font-bold text-mint-400"
        >
          <Sparkles size={14} />
          Licensed · EU-regulated · Institutional only
        </motion.div>

        <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink-950 md:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block"
          >
            The quiet engine
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block glow-text"
          >
            behind digital capital.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg font-light text-ink-900/60"
        >
          Altech Europe delivers liquidity, custody and payment rails for
          institutions moving seriously into digital assets. Low spreads.
          Same-day settlement. Zero drama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-primary/30 transition hover:bg-mint-500 hover:shadow-blue-primary/40"
          >
            Start onboarding
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-normal text-ink-900/70 transition hover:border-mint-400 hover:text-mint-400"
          >
            How we work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid gap-4 md:grid-cols-4"
        >
          {[
            { k: "$4.2B+", v: "Annualised flow" },
            { k: "<200ms", v: "Quote streaming" },
            { k: "30+", v: "Jurisdictions" },
            { k: "24/7", v: "Market making" },
          ].map((s) => (
            <motion.div
              key={s.k}
              whileHover={{ y: -4 }}
              className="card-border rounded-2xl bg-white p-5 shadow-sm shadow-blue-100"
            >
              <p className="font-display text-2xl font-black text-mint-400">
                {s.k}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-ink-900/50">
                {s.v}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
