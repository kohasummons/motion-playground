"use client";

import { motion } from "motion/react";

export default function Stagger() {
  return (
    <div className="grid place-content-center h-screen gap-[0.8rem]">
      <FlipLink href="#">Dong ⏤ ✦</FlipLink>
      <FlipLink href="#">Dong ⏤ 🦄</FlipLink>
    </div>
  );
}

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative blog overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};
