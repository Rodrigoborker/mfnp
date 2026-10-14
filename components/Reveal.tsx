"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRevealOnce } from "./useRevealOnce";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: RevealProps) {
  const ref = useRevealOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={
        {
          "--reveal-y": `${y}px`,
          "--reveal-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
