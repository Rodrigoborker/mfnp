import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BookingWidget from "@/components/BookingWidget";
import { booking, IS_MOCK } from "@/lib/ayrton";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return (await booking.listFlats()).map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/hospedagem/[slug]">,
): Promise<Metadata> {
  const flat = await booking.getFlat((await params).slug);
  if (!flat) return {};
  return {
    title: `${flat.name} | Aluguel por temporada`,
    description: `${flat.tagline}. ${flat.description}`.slice(0, 160),
    alternates: { canonical: `/hospedagem/${flat.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function FlatPage({ params }: PageProps<"/hospedagem/[slug]">) {
  const flat = await booking.getFlat((await params).slug);
  if (!flat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: flat.name,
    description: flat.description,
    url: `${SITE_URL}/hospedagem/${flat.slug}`,
    image: flat.photos.map((p) => `${SITE_URL}${p.src}`),
    brand: { "@type": "Brand", name: "Meu Flat na Praia" },
    containsPlace: {
      "@type": "Accommodation",
      occupancy: { "@type": "QuantitativeValue", maxValue: flat.maxGuests },
      numberOfBedrooms: flat.bedrooms,
      amenityFeature: flat.amenities.map((a) => ({
        "@type": "LocationFeatureSpecification", name: a, value: true,
      })),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: flat.destination === "tamandare" ? "Tamandaré" : "Ipojuca",
      addressRegion: "PE",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <Header />
      <main>
        <Breadcrumb current={flat.name} href={`/hospedagem/${flat.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="mx-auto grid max-w-brand gap-10 px-6 pb-20 pt-8 lg:grid-cols-[1fr_400px]">
          <div>
            {IS_MOCK && (
              <p className="mb-6 border border-orange bg-orange/10 px-4 py-3 text-[18px] text-ink">
                <strong>Protótipo:</strong> dados de exemplo.
              </p>
            )}
            <div className="relative mb-8 aspect-[16/10] overflow-hidden">
              <Image src={flat.photos[0].src} alt={flat.photos[0].alt} fill priority
                sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>
            <h1 className="font-heading text-[38px] leading-[1.15] text-navy sm:text-[46px]">{flat.name}</h1>
            <p className="mt-2 text-[22px] text-ink-soft">{flat.tagline}</p>
            <p className="mt-6 text-[20px] leading-relaxed">{flat.description}</p>
            <h2 className="mb-4 mt-10 font-heading text-[28px] text-navy">Comodidades</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {flat.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-[19px]">
                  <Check className="h-5 w-5 text-orange" aria-hidden /> {a}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <BookingWidget flatId={flat.id} flatName={flat.name} maxGuests={flat.maxGuests} />
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
