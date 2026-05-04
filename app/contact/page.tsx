"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="hero-gradient px-6 pt-40 pb-24">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-mint-400">
            / Let's talk
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight text-ink-950 md:text-6xl">
            Start a <span className="glow-text">conversation.</span>
          </h1>
          <p className="mt-6 max-w-md font-light text-ink-900/60">
            Whether you're onboarding a fund, launching a product, or just want
            a second opinion on settlement — reach out. We read every message.
          </p>

          <div className="mt-12 space-y-4">
            {[
              { i: Mail, l: "Email", v: "hello@altech.eu" },
              { i: Phone, l: "Dealing desk", v: "+31 20 000 0000" },
              { i: MapPin, l: "Offices", v: "Amsterdam · Zürich · London" },
            ].map((x) => (
              <div
                key={x.l}
                className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-pale text-mint-400">
                  <x.i size={18} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-ink-900/40">
                    {x.l}
                  </p>
                  <p className="text-sm font-normal text-ink-950">{x.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="card-border rounded-3xl bg-white p-8 shadow-md">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="text-mint-400" size={56} />
              <h3 className="mt-6 font-display text-2xl font-black text-ink-950">
                Message received.
              </h3>
              <p className="mt-2 max-w-sm font-light text-ink-900/60">
                A member of our desk will reply within one business day. For
                urgent dealing inquiries, call us directly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl font-black text-ink-950">
                Send us a message
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="First name" name="first" placeholder="Alex" />
                <Field label="Last name" name="last" placeholder="Mercier" />
              </div>

              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="alex@yourfund.com"
              />
              <Field
                label="Company"
                name="company"
                placeholder="Mercier Capital"
              />

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink-900/50">
                  Interest
                </label>
                <select className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-mint-400 focus:ring-2 focus:ring-mint-400/10">
                  <option>OTC & Liquidity</option>
                  <option>Custody</option>
                  <option>Payment rails</option>
                  <option>Wallet infrastructure</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink-900/50">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your flow, timelines, or questions."
                  className="w-full resize-none rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-900/30 outline-none transition focus:border-mint-400 focus:ring-2 focus:ring-mint-400/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-mint-400/30 transition hover:bg-mint-500 hover:scale-[1.01] active:scale-[0.98]"
              >
                <Send size={16} />
                Send message
              </button>

              <p className="text-center text-xs font-light text-ink-900/40">
                By submitting, you agree to our processing of the data
                provided. Institutional inquiries only.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink-900/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-ink-950 placeholder:text-ink-900/30 outline-none transition focus:border-mint-400 focus:ring-2 focus:ring-mint-400/10"
      />
    </div>
  );
}
