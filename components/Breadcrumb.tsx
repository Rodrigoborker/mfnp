import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumb({
  current,
  href,
  parent,
}: {
  current: string;
  href: string;
  parent?: { name: string; href: string };
}) {
  const trail = [
    { name: "Home", href: "/" },
    ...(parent ? [parent] : []),
    { name: current, href },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: i === 0 ? SITE_URL : `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav
        aria-label="breadcrumb"
        className="mx-auto max-w-brand px-6 pt-5 text-[20px] text-ink-soft"
      >
        <Link href="/" className="text-ink-soft hover:text-navy">
          Home
        </Link>{" "}
        <span className="mx-1.5">›</span>{" "}
        {parent && (
          <>
            <Link href={parent.href} className="text-ink-soft hover:text-navy">
              {parent.name}
            </Link>{" "}
            <span className="mx-1.5">›</span>{" "}
          </>
        )}
        {current}
      </nav>
    </>
  );
}
