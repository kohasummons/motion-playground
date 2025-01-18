"use client";

import { motion, useAnimationControls } from "motion/react";

export default function Controls() {
  const animController = useAnimationControls();

  const handleClick = () => {
    animController.start("flip");
  };

  return (
    <div className="grid place-content-center h-screen gap-[0.8rem]">
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={handleClick}
        className="bg-faded-grey rounded-xl px-4 py-[10px]"
      >
        Click ⏤ ✦
      </motion.button>
      <motion.div
        variants={{
          initial: { rotate: "0deg" },
          flip: { rotate: "360deg" },
        }}
        initial="initial"
        animate={animController}
        className="w-40 h-40 bg-faded-grey"
      ></motion.div>
    </div>
  );
}
