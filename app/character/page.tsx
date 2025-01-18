"use client";

import { motion } from "motion/react";

export default function Character() {
  return (
    <div className="grid place-content-center h-screen gap-[0.8rem]">
      <FlipLink href="#">Dong ⏤ ✦</FlipLink>
      <FlipLink href="#">Dong ⏤ ☘︎</FlipLink>
    </div>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative blog overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.78
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                delay: STAGGER * i,
                duration: DURATION,
                ease: "easeInOut",
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              transition={{
                delay: STAGGER * i,
                duration: DURATION,
                ease: "easeInOut",
              }}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};
