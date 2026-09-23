import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mx-auto max-w-brand px-6 pt-5 text-[18px] text-ink-soft"
    >
      <Link href="/" className="text-ink-soft hover:text-navy">
        Home
      </Link>{" "}
      <span className="mx-1.5">›</span> {current}
    </nav>
  );
}
