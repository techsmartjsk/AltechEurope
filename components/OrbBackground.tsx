"use client";
import { motion } from "framer-motion";

export default function OrbBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-lines" />
      <motion.div
        className="absolute -top-60 -left-40 h-[600px] w-[600px] rounded-full bg-blue-primary/10 blur-[160px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-52 h-[500px] w-[500px] rounded-full bg-cyan-accent/10 blur-[140px]"
        animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] left-1/3 h-[400px] w-[400px] rounded-full bg-mint-400/8 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
