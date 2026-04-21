"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, HeartHandshake, Microscope, Users } from "lucide-react";

const values = [
  {
    icon: Microscope,
    t: "Rigor",
    d: "Every trade, every line of code, every compliance review — checked twice, monitored live.",
  },
  {
    icon: HeartHandshake,
    t: "Trust",
    d: "Segregated accounts, audited reserves, transparent pricing. The boring parts done right.",
  },
  {
    icon: Compass,
    t: "Direction",
    d: "We don't chase narratives. We build infrastructure that outlasts cycles.",
  },
  {
    icon: Users,
    t: "People",
    d: "Ex-bank, ex-exchange, ex-founders. A small team that answers the phone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 pt-40 pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-mint-400"
          >
            / About Altech Europe
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            We build the rails.{" "}
            <span className="glow-text">You run the business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg text-white/60"
          >
            Altech Europe was founded in 2021 by a group of traders, engineers
            and compliance operators who were tired of the gap between
            traditional finance and digital assets. We built what we wished
            existed: institutional-grade infrastructure without the
            institutional-grade friction.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              A desk, a vault, and an API.
            </h2>
            <p className="mt-6 text-white/60">
              We started with one OTC desk in Amsterdam and a handful of fund
              clients. Today, Altech Europe processes billions in annualised
              flow across custody, settlement and payments — powering some of
              the most quietly ambitious funds and fintechs in Europe.
            </p>
            <p className="mt-4 text-white/60">
              Everything we ship is owned and operated in-house: no white-label
              counterparties, no pass-through desks. If something breaks, we
              fix it. If something wins, you win.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-border relative rounded-3xl p-8"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mint-400/5 to-transparent" />
            <dl className="relative grid grid-cols-2 gap-6">
              {[
                { k: "2021", v: "Founded" },
                { k: "42", v: "Engineers & ops" },
                { k: "3", v: "European HQs" },
                { k: "A+", v: "Compliance rating" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-4xl font-semibold text-mint-400">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-sm text-white/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
            / Principles
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            What we optimise for.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 backdrop-blur-md transition hover:border-mint-400/50"
              >
                <v.icon className="text-mint-400" size={26} />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {v.t}
                </h3>
                <p className="mt-2 text-sm text-white/60">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Want the longer story?
          </h2>
          <p className="mt-4 text-white/60">
            Book an intro call — we'll walk you through architecture,
            compliance, and pricing in one sitting.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-mint-400 px-6 py-3 font-semibold text-ink-950 transition hover:bg-glow"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
