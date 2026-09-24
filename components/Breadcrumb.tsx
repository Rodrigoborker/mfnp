import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumb({
  current,
  href,
}: {
  current: string;
  href: string;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: current,
        item: `${SITE_URL}${href}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav
        aria-label="breadcrumb"
        className="mx-auto max-w-brand px-6 pt-5 text-[18px] text-ink-soft"
      >
        <Link href="/" className="text-ink-soft hover:text-navy">
          Home
        </Link>{" "}
        <span className="mx-1.5">›</span> {current}
      </nav>
    </>
  );
}
