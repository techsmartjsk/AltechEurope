import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/10 bg-ink-950/60 px-6 py-12 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mint-400 to-glow font-display text-sm font-bold text-ink-950">
              A
            </span>
            <span className="font-display text-lg font-semibold">
              Altech <span className="text-mint-400">Europe</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Digital asset infrastructure, liquidity and payments — engineered in
            Europe, deployed globally.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mint-400">
            Navigate
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mint-400">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>hello@altech.eu</li>
            <li>+31 20 000 0000</li>
            <li>Amsterdam · Zürich · London</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-white/5 pt-6 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Altech Europe. All rights reserved.</p>
        <p>Made with motion ✦ in the EU</p>
      </div>
    </footer>
  );
}
