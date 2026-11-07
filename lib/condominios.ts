// Condomínios/edifícios que a Meu Flat na Praia administra.
// Cada item gera uma página em /condominios/[slug] voltada a proprietários
// que buscam administradora para o flat naquele empreendimento.
//
// IMPORTANTE: só inclua aqui fatos confirmados. Para enriquecer uma página
// (endereço, ano, nº de unidades, distância da praia, comodidades) use o campo
// opcional `detalhes` — ele aparece na página e vira conteúdo único.

export type DestinoId =
  | "porto-de-galinhas"
  | "tamandare"
  | "carneiros"
  | "litoral-sul";

export type Destino = {
  id: DestinoId;
  nome: string;
  em: string; // locativo pronto para frases: "em Tamandaré"
  href: string; // página do destino
  foto: string;
  fotoAlt: string;
  pontos: { titulo: string; texto: string }[];
};

export const DESTINOS: Record<DestinoId, Destino> = {
  "porto-de-galinhas": {
    id: "porto-de-galinhas",
    nome: "Porto de Galinhas",
    em: "em Porto de Galinhas",
    href: "/porto-de-galinhas",
    foto: "/photos/destino-porto-de-galinhas.jpg",
    fotoAlt: "Praia de Porto de Galinhas",
    pontos: [
      {
        titulo: "Giro de limpeza acelerado",
        texto:
          "O fluxo turístico intenso o ano inteiro significa estadias mais curtas e check-in e check-out no mesmo dia com frequência. Limpeza e vistoria precisam de uma equipe dimensionada para esse ritmo.",
      },
      {
        titulo: "Concorrência direta por hóspede",
        texto:
          "Porto de Galinhas concentra o maior volume de flats e pousadas anunciados do litoral sul. Destacar o imóvel exige fotografia, texto e preço competitivos em Airbnb, Booking, Decolar e Google ao mesmo tempo.",
      },
      {
        titulo: "Sazonalidade de curtíssimo prazo",
        texto:
          "A demanda oscila por feriado, evento e até por dia da semana. Tarifa fixa deixa dinheiro na mesa nos fins de semana de pico e afasta reservas nos dias de menor procura.",
      },
    ],
  },
  tamandare: {
    id: "tamandare",
    nome: "Tamandaré",
    em: "em Tamandaré",
    href: "/tamandare-e-carneiros",
    foto: "/photos/destino-tamandare.webp",
    fotoAlt: "Praia de Tamandaré",
    pontos: [
      {
        titulo: "Ticket médio mais alto",
        texto:
          "Tamandaré atrai um hóspede disposto a pagar mais por privacidade, paisagem e tranquilidade. A precificação busca captar o valor real que o destino sustenta, e não empilhar reservas a qualquer preço.",
      },
      {
        titulo: "Estadias mais longas",
        texto:
          "O turismo de experiência favorece estadias de vários dias em vez de passagens rápidas de fim de semana. Limpeza e suporte são dimensionados para menos giro e mais atenção a cada estadia.",
      },
      {
        titulo: "Posicionamento de tranquilidade",
        texto:
          "Anúncio, fotografia e comunicação precisam refletir o que o hóspede busca: sossego, natureza preservada e exclusividade.",
      },
    ],
  },
  carneiros: {
    id: "carneiros",
    nome: "Praia dos Carneiros",
    em: "na Praia dos Carneiros",
    href: "/tamandare-e-carneiros",
    foto: "/photos/destino-carneiros.webp",
    fotoAlt: "Praia dos Carneiros",
    pontos: [
      {
        titulo: "Ticket médio mais alto",
        texto:
          "A Praia dos Carneiros atrai um hóspede disposto a pagar mais por privacidade, paisagem e tranquilidade. A precificação busca captar o valor real que o destino sustenta.",
      },
      {
        titulo: "Estadias mais longas",
        texto:
          "O turismo de experiência favorece estadias de vários dias. A operação é pensada para menos giro e mais cuidado com cada hóspede.",
      },
      {
        titulo: "Posicionamento de exclusividade",
        texto:
          "Anúncio e fotografia precisam comunicar o que o hóspede busca nesse destino: natureza preservada, sossego e exclusividade.",
      },
    ],
  },
  "litoral-sul": {
    id: "litoral-sul",
    nome: "Litoral sul de Pernambuco",
    em: "no litoral sul de Pernambuco",
    href: "/gestao-de-imoveis",
    foto: "/photos/hero-jangada.jpg",
    fotoAlt: "Litoral sul de Pernambuco",
    pontos: [
      {
        titulo: "Demanda sazonal",
        texto:
          "A procura varia por feriado, evento e época do ano. Ajustar a tarifa com frequência reduz a vacância sem sacrificar a diária média na alta temporada.",
      },
      {
        titulo: "Concorrência entre anúncios",
        texto:
          "Fotografia, texto e preço competitivos, publicados ao mesmo tempo em Airbnb, Booking, Decolar e Google, fazem diferença na hora da reserva.",
      },
      {
        titulo: "Operação local",
        texto:
          "Equipe de limpeza, manutenção e atendimento presente na região resolve imprevistos no mesmo dia e reduz o tempo entre uma estadia e outra.",
      },
    ],
  },
};

export type Condominio = {
  slug: string;
  nome: string;
  destino: DestinoId;
  /** Fatos confirmados sobre o empreendimento (opcional). Cada item vira um tópico na página. */
  detalhes?: string[];
};

export const CONDOMINIOS: Condominio[] = [
  { slug: "porto-kai-residence", nome: "Porto Kai Residence", destino: "porto-de-galinhas" },
  { slug: "nixxus-ii", nome: "Nixxus II", destino: "porto-de-galinhas" },
  { slug: "paulo-brito-residence", nome: "Paulo Brito Residence", destino: "porto-de-galinhas" },
  { slug: "ora-beach-residence", nome: "Ora Beach Residence", destino: "porto-de-galinhas" },
  { slug: "ocean-blue", nome: "Ocean Blue", destino: "porto-de-galinhas" },
  { slug: "beach-porto", nome: "Beach Porto", destino: "porto-de-galinhas" },
  { slug: "bela-vista", nome: "Bela Vista", destino: "porto-de-galinhas" },
  { slug: "harbor-living", nome: "Harbor Living", destino: "porto-de-galinhas" },
  { slug: "terraza-tamandare", nome: "Terraza Tamandaré", destino: "tamandare" },
  { slug: "prime-beach-carneiros", nome: "Prime Beach Carneiros", destino: "carneiros" },
  { slug: "mare-alta-tamandare", nome: "Maré Alta Tamandaré", destino: "tamandare" },
];

export function getCondominio(slug: string) {
  return CONDOMINIOS.find((c) => c.slug === slug);
}
