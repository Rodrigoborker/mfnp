"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxHero({
  video,
  children,
}: {
  video: ReactNode;
  children: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute -top-[12%] inset-x-0 h-[130%]">
          {video}
        </motion.div>
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/20 to-transparent" />
        <div className="relative flex h-full items-end">{children}</div>
      </div>
    </section>
  );
}
