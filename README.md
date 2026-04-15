# Altech Europe

A creative Next.js 14 marketing site inspired by limitlesscapital.io, home.waltrex.io and 3techcapital.com — built with the App Router, Tailwind CSS and Framer Motion.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom dark theme (ink + mint palette)
- **Framer Motion** for page and scroll animations
- **lucide-react** for icons

## Pages

- `/` — Home: animated hero, marquee ticker, feature grid, onboarding steps, CTA
- `/about` — About: story, stats, principles, team
- `/contact` — Contact: animated form with success state

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Notes

- Global ambient orbs + grid are in `components/OrbBackground.tsx`
- Brand tokens live in `tailwind.config.ts` (`ink`, `mint`, `glow`)
- Custom gradient text + shimmer defined in `app/globals.css`
