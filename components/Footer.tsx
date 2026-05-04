import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-blue-100 bg-ink-950 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/logo.png"
              alt="Altech Europe"
              width={140}
              height={40}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm font-light text-white/60">
            Digital asset infrastructure, liquidity and payments — engineered in
            Europe, deployed globally.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-glow">
            Navigate
          </h4>
          <ul className="mt-3 space-y-2 text-sm font-light text-white/60">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-glow">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm font-light text-white/60">
            <li>hello@altech.eu</li>
            <li>+31 20 000 0000</li>
            <li>Amsterdam · Zürich · London</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between border-t border-white/10 pt-6 text-xs font-light text-white/30">
        <p>© {new Date().getFullYear()} Altech Europe. All rights reserved.</p>
        <p>Made with motion ✦ in the EU</p>
      </div>
    </footer>
  );
}
