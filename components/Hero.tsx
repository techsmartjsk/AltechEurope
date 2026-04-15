"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/5 px-4 py-1.5 text-xs text-mint-400"
        >
          <Sparkles size={14} />
          Licensed · EU-regulated · Institutional only
        </motion.div>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
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
          className="mt-6 max-w-xl text-lg text-white/60"
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
            className="group inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-glow"
          >
            Start onboarding
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:border-mint-400 hover:text-mint-400"
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
          ].map((s, i) => (
            <motion.div
              key={s.k}
              whileHover={{ y: -4 }}
              className="card-border rounded-2xl p-5"
            >
              <p className="font-display text-2xl font-semibold text-white">
                {s.k}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/50">
                {s.v}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
