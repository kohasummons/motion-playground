"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Basics() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="grid place-content-center h-screen gap-[0.8rem]">
      <motion.button
        layout
        onClick={handleClick}
        className="bg-faded-grey rounded-xl px-4 py-[10px]"
      >
        Show ⏤ Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1]
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            className="w-40 h-40 bg-faded-grey"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
