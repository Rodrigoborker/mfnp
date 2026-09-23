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
        <div className="absolute inset-0 bg-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/35 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/10 to-transparent" />
        <div className="relative flex h-full items-end">{children}</div>
      </div>
    </section>
  );
}
