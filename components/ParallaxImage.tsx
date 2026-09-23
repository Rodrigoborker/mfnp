"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className || "relative"}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[40%] h-[180%]">
        {children}
      </motion.div>
    </div>
  );
}
