"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Marquee from "@/components/Marquee";
import PartnerProducts from "@/components/PartnerProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <PartnerProducts/>
      <Features />
      {/* Process */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              / Onboarding
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              From intro call to first trade in a week.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Introduction", d: "A 30-minute call to understand your flow, volume and jurisdiction." },
              { n: "02", t: "KYC & KYB", d: "Digital compliance review with our in-house team. Typically <72h." },
              { n: "03", t: "Accounts", d: "Segregated fiat and digital asset accounts are provisioned and funded." },
              { n: "04", t: "Go live", d: "Trade via RFQ, API or portal. 24/7 support from a named dealer." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-6 backdrop-blur-md transition hover:border-mint-400/50"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mint-400/10 blur-3xl transition group-hover:bg-mint-400/25" />
                <p className="font-display text-sm font-semibold text-mint-400">{s.n}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-border relative overflow-hidden rounded-3xl p-12 md:p-20"
          >
            <div className="absolute -top-40 -right-20 h-[400px] w-[400px] rounded-full bg-mint-400/10 blur-[120px]" />
            <div className="relative">
              <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Ready to move <span className="glow-text">institutional capital</span>?
              </h2>
              <p className="mt-6 max-w-xl text-white/60">
                Our desk is open 24/7. Meet the team that settles nine figures
                while you sleep.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-full bg-mint-400 px-8 py-4 font-semibold text-ink-950 transition hover:bg-glow"
              >
                Book a call →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
