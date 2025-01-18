"use client";

import { motion, MotionConfig } from "motion/react";

export default function Gestures() {
  return (
    <div className="grid place-content-center h-screen gap-[0.8rem]">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="bg-faded-grey rounded-xl px-4 py-[10px]"
        >
          Click ⏤ ✦
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.85,
          }}
          whileTap={{
            scale: 0.25,
          }}
          className="bg-faded-grey rounded-xl px-4 py-[10px]"
        >
          Click ⏤ ☁︎
        </motion.button>
      </MotionConfig>
    </div>
  );
}
