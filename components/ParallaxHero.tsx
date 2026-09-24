import type { ReactNode } from "react";

export default function ParallaxHero({
  video,
  children,
}: {
  video: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">{video}</div>
      <div className="absolute inset-0 bg-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/35 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/10 to-transparent" />
      <div className="relative flex h-full items-end pb-24 sm:pb-28">{children}</div>
    </section>
  );
}
