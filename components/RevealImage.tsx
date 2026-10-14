"use client";

import type { ReactNode } from "react";
import { useRevealOnce } from "./useRevealOnce";

export default function RevealImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRevealOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className ? `reveal-image ${className}` : "reveal-image"}
    >
      {children}
    </div>
  );
}
