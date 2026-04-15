"use client";

const tokens = [
  { s: "BTC", v: "+2.41%" },
  { s: "ETH", v: "+1.08%" },
  { s: "SOL", v: "+5.62%" },
  { s: "USDC", v: "Stable" },
  { s: "EUR/USDC", v: "1.08" },
  { s: "AVAX", v: "-0.34%" },
  { s: "ARB", v: "+3.19%" },
  { s: "MATIC", v: "+0.77%" },
];

export default function Marquee() {
  const items = [...tokens, ...tokens, ...tokens];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-900/40 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="font-display font-semibold text-white">{t.s}</span>
            <span
              className={
                t.v.startsWith("+")
                  ? "text-mint-400"
                  : t.v.startsWith("-")
                  ? "text-rose-400"
                  : "text-white/60"
              }
            >
              {t.v}
            </span>
            <span className="text-white/20">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
