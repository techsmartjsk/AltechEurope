"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 pt-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-blue-100 bg-white/90 px-6 py-3 shadow-sm shadow-blue-100/50 backdrop-blur-xl">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Altech Europe"
            width={130}
            height={38}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative text-sm font-normal text-ink-900/70 transition hover:text-ink-950"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-mint-400 transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-mint-400 px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:bg-mint-500 md:inline-block"
        >
          Get in touch →
        </Link>

        <button
          className="md:hidden text-ink-950"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-lg md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-normal text-ink-900/70 hover:text-mint-400"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-mint-400 px-4 py-2.5 text-center text-sm font-bold text-white"
          >
            Get in touch →
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
