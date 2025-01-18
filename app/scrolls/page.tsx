"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Scrolls() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ["#F4F4F4", "rgb(253 224 71)"])

  return (
    <>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          background
        }}
        className="sticky origin-left top-0 w-full h-5"
      ></motion.div>
      <div className="grid place-content-center gap-[0.8rem] p-10">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="bg-faded-grey h-40 w-[700px] rounded-lg"
          ></div>
        ))}
      </div>
    </>
  );
}
