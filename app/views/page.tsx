"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function Views() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("is in view", isInView);
  }, [isInView]);

  return (
    <div className="grid place-content-center gap-[0.8rem]">
      <div className="h-[150dvh] text-center pt-80">Scroll ⏤ 🤸</div>
      <motion.div
        variants={{
          initial: { opacity: 0 },
        }}
        initial="initial"
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-80 h-96 bg-faded-grey"
      ></motion.div>
      <div
        ref={ref}
        className="h-[150dvh] w-80 bg-faded-grey transition duration-0"
      ></div>
    </div>
  );
}
