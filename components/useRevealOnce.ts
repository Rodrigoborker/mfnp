"use client";

import { useEffect, useRef } from "react";

/**
 * Marca o elemento com data-revealed na primeira vez que ele entra na
 * viewport (margem de -80px). O estado inicial e a transição ficam no CSS
 * (.reveal em globals.css), sem biblioteca de animação no bundle inicial.
 */
export function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.revealed = "";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.revealed = "";
          io.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
