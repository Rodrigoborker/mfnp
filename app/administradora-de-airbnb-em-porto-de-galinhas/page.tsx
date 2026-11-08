import type { Metadata } from "next";
import GuiaPage from "@/components/GuiaPage";
import { getGuia } from "@/lib/guias";

const guia = getGuia("administradora-de-airbnb-em-porto-de-galinhas")!;

export const metadata: Metadata = {
  title: guia.metaTitle,
  description: guia.metaDescription,
  alternates: { canonical: guia.path },
};

export default function AdministradoraAirbnbPage() {
  return <GuiaPage guia={guia} />;
}
