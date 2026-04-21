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
          <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
            / Ecosystem
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Three platforms. One infrastructure layer.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/60">
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
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-6 backdrop-blur-md transition hover:border-mint-400/50"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-mint-400/10 blur-3xl transition group-hover:bg-mint-400/25" />

              {/* Icon + Arrow */}
              <div className="flex items-center justify-between">
                <product.icon className="text-mint-400" size={28} />
                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition group-hover:text-mint-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              {/* Tag */}
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-mint-400">
                {product.tag}
              </p>

              {/* Name */}
              <h3 className="mt-2 font-display text-xl font-semibold transition group-hover:text-mint-400">
                {product.name}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-grow text-sm leading-relaxed text-white/60">
                {product.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-2 border-t border-white/5 pt-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-white/40"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-mint-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Visit label */}
              <div className="mt-6 flex items-center gap-2 text-xs text-mint-400 opacity-0 transition group-hover:opacity-100">
                Visit platform →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
