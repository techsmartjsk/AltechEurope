"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Globe, Workflow } from "lucide-react";

const products = [
  {
    name: "Limitless Asset Management",
    tag: "Digital Asset Infrastructure",
    description:
      "Seamless conversions for fiat and digital assets. End-to-end infrastructure for large trades, fast settlements, and digital currency escrow.",
    features: ["Market Making", "Custody Solutions", "Fast Settlements", "Deep Liquidity"],
    href: "https://limitlesscapital.io",
    icon: Lock,
  },
  {
    name: "Waltrex",
    tag: "Payment Infrastructure",
    description:
      "Wallet & payment infrastructure tailored for digital platforms — intuitive design, real-time monitoring and sophisticated user management.",
    features: ["Intuitive Design", "Reporting Tools", "Real-Time Monitoring", "User Management"],
    href: "https://home.waltrex.io",
    icon: Globe,
  },
  {
    name: "3Tech Capital",
    tag: "Next-Gen Technology Fund",
    description:
      "An innovative fund at the forefront of next-generation technology. Deploying capital where deep tech meets transformational progress.",
    features: ["Strategic Enablers", "Global Portfolio", "Our Edge"],
    href: "https://3techcapital.com",
    icon: Workflow,
  },
];

export default function PartnerProducts() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-mint-400">
            / Ecosystem
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink-950 md:text-5xl">
            Three platforms. One infrastructure layer.
          </h2>
          <p className="mt-4 max-w-xl text-sm font-light text-ink-900/60">
            Our ecosystem combines asset management, payment rails and deep-tech
            investing under a unified institutional framework.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-50 transition hover:border-mint-400/40 hover:shadow-md hover:shadow-blue-100"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-primary/5 blur-3xl transition group-hover:bg-blue-primary/15" />

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-pale">
                  <product.icon className="text-mint-400" size={22} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-900/20 transition group-hover:text-mint-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-mint-400">
                {product.tag}
              </p>

              <h3 className="mt-2 font-display text-xl font-bold text-ink-950 transition group-hover:text-mint-400">
                {product.name}
              </h3>

              <p className="mt-3 flex-grow text-sm font-light leading-relaxed text-ink-900/60">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-blue-50 pt-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs font-normal text-ink-900/50"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-mint-400 opacity-0 transition group-hover:opacity-100">
                Visit platform →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
