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
      <section className="relative section-alt px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-mint-400">
              / Onboarding
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink-950 md:text-5xl">
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
                className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-50 transition hover:border-mint-400/40 hover:shadow-md hover:shadow-blue-100"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-primary/5 blur-3xl transition group-hover:bg-blue-primary/15" />
                <p className="font-display text-sm font-black text-mint-400">{s.n}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-950">{s.t}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-ink-900/60">{s.d}</p>
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
            className="relative overflow-hidden rounded-3xl bg-ink-950 p-12 md:p-20"
          >
            <div className="absolute -top-40 -right-20 h-[400px] w-[400px] rounded-full bg-mint-400/20 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-glow/10 blur-[100px]" />
            <div className="relative">
              <h2 className="max-w-2xl font-display text-4xl font-black tracking-tight text-white md:text-6xl">
                Ready to move <span className="glow-text">institutional capital</span>?
              </h2>
              <p className="mt-6 max-w-xl font-light text-white/60">
                Our desk is open 24/7. Meet the team that settles nine figures
                while you sleep.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex rounded-full bg-mint-400 px-8 py-4 font-bold text-white shadow-lg shadow-blue-primary/30 transition hover:bg-mint-500"
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
