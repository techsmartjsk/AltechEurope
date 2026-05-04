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
    <div className="relative overflow-hidden border-y border-blue-100 bg-blue-subtle py-3.5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="font-display font-bold text-ink-950">{t.s}</span>
            <span
              className={
                t.v.startsWith("+")
                  ? "font-normal text-mint-400"
                  : t.v.startsWith("-")
                  ? "font-normal text-rose-500"
                  : "font-normal text-ink-900/50"
              }
            >
              {t.v}
            </span>
            <span className="text-ink-900/20">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
