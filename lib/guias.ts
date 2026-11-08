// Conteúdo das páginas de guia voltadas a proprietários e investidores.
// IMPORTANTE: só inclua fatos confirmados pela operação. Números de ocupação,
// diária média e rendimento NÃO são divulgados (decisão do proprietário do
// site), então nenhuma página pode afirmar ou sugerir rentabilidade.

export type GuiaSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  after?: string[];
};

export type Guia = {
  slug: string;
  path: string;
  kind: "service" | "article";
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: GuiaSection[];
  faqs: { id: string; question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappText: string;
  related: string[]; // slugs
  published: string;
};

export const GUIAS: Guia[] = [
  {
    slug: "administradora-de-airbnb-em-porto-de-galinhas",
    path: "/administradora-de-airbnb-em-porto-de-galinhas",
    kind: "service",
    eyebrow: "Administradora de Airbnb",
    metaTitle: "Administradora de Airbnb em Porto de Galinhas",
    metaDescription:
      "Administração de flats e Airbnb em Porto de Galinhas, Tamandaré e Carneiros: 20% sobre o valor líquido, sem fidelidade, com repasse direto ao proprietário.",
    h1: "Administradora de Airbnb em Porto de Galinhas",
    intro:
      "A Meu Flat na Praia administra flats e apartamentos de temporada em Porto de Galinhas, Muro Alto, Tamandaré e Praia dos Carneiros. Cuidamos de tudo o que acontece entre o anúncio e o repasse: reservas, preço, atendimento, limpeza, vistoria e prestação de contas. Aqui estão as regras do jogo, com a taxa e o contrato abertos.",
    sections: [
      {
        id: "o-que-faz",
        title: "O que uma administradora de Airbnb faz pelo seu flat",
        paragraphs: [
          "Anunciar um flat é a parte fácil. O trabalho está em manter o imóvel reservado, bem avaliado e conservado, todos os dias, sem que o proprietário precise estar presente. Na gestão comercial e operacional entram:",
        ],
        bullets: [
          "Anúncios profissionais em Airbnb, Booking.com, Decolar/Despegar e Google Vacation Rentals, com calendário unificado entre os canais.",
          "Precificação dinâmica: a diária é ajustada todos os dias conforme demanda, feriados, eventos e concorrência direta.",
          "Atendimento ao hóspede do primeiro contato ao check-out, com suporte 24 horas.",
          "Limpeza, enxoval e vistoria fotográfica de entrada e saída em toda estadia.",
          "Manutenção preventiva contra os efeitos da maresia, para preservar o valor do imóvel.",
          "Área exclusiva do proprietário com reservas, ocupação, receitas e repasses em tempo real.",
        ],
      },
      {
        id: "taxa",
        title: "Quanto custa: 20% sobre o valor líquido",
        paragraphs: [
          "A taxa de administração é de 20% sobre o valor líquido da reserva, calculado depois que o canal (Airbnb, Booking e similares) retira a taxa dele. Ela cobre toda a gestão comercial e operacional. A taxa de limpeza é paga pelo hóspede, não pelo proprietário.",
          "Exemplo ilustrativo, com números fictícios apenas para mostrar a conta: uma reserva de R$ 1.000, da qual o canal desconta R$ 150 (o percentual real depende do canal), deixa um líquido de R$ 850. Sobre esses R$ 850 incide a nossa taxa de 20%, ou R$ 170, e o restante, R$ 680, vai direto para a conta do proprietário. Este exemplo não indica rendimento de nenhum imóvel.",
          "Montagem, decoração e reformas pontuais não fazem parte da taxa de administração e são orçadas à parte, com aprovação do proprietário antes da execução.",
        ],
      },
      {
        id: "contrato",
        title: "Contrato sem fidelidade, com exclusividade",
        paragraphs: [
          "Não existe contrato de fidelidade: o proprietário não fica preso por um prazo mínimo. Em contrapartida, a gestão é em regime de exclusividade, ou seja, o flat não é anunciado em paralelo por outra administradora nem pelo próprio dono.",
          "A exclusividade existe por um motivo operacional. Com um único responsável pelo calendário e pelo preço, não há reserva em duplicidade, diária concorrendo contra ela mesma nem hóspede recebendo informações diferentes. O uso próprio continua garantido: as datas são bloqueadas pela área exclusiva, sem multa.",
        ],
      },
      {
        id: "selecao",
        title: "Nem todo flat entra na nossa carteira",
        paragraphs: [
          "Antes de qualquer proposta, analisamos o imóvel. Os três pontos que decidem são:",
        ],
        bullets: [
          "Localização: distância da praia, entorno e perfil de hóspede que o ponto atrai.",
          "Estrutura do imóvel: condições do apartamento e do condomínio.",
          "Decoração: o padrão de acabamento, mobiliário e enxoval que o hóspede encontra.",
        ],
        after: [
          "Se o imóvel está dentro do nosso critério, o anúncio entra no ar em até uma semana. Se precisa de adequação, apresentamos o que falta, e a montagem pode ser feita por nós, como explicamos no guia sobre o turnkey.",
        ],
      },
      {
        id: "publico",
        title: "Para quem administramos",
        paragraphs: [
          "Atendemos todos os perfis de proprietário: investidor que mora em outro estado ou país, herdeiro de um imóvel que não usa, quem compra na planta para rentabilizar e quem usa o flat parte do ano e quer que ele trabalhe no resto do tempo.",
        ],
      },
      {
        id: "avaliacao-hospedes",
        title: "O que os hóspedes dizem",
        paragraphs: [
          "As notas atuais dos imóveis que administramos são 9,5 de 10 no Booking.com e 4,8 de 5 no Airbnb. A nota é consequência de um processo repetido a cada estadia: limpeza conferida, comunicação rápida, imóvel como aparece nas fotos. Ela também melhora a posição do anúncio nos canais.",
        ],
      },
    ],
    faqs: [
      {
        id: "taxa",
        question: "Qual a taxa de uma administradora de Airbnb em Porto de Galinhas?",
        answer:
          "Na Meu Flat na Praia a taxa de administração é de 20% sobre o valor líquido da reserva, depois de descontada a taxa do canal (Airbnb, Booking e similares). Ela cobre a gestão comercial e operacional. A limpeza é cobrada do hóspede.",
      },
      {
        id: "fidelidade",
        question: "Existe fidelidade ou multa para encerrar a gestão?",
        answer:
          "Não há contrato de fidelidade. A gestão é em regime de exclusividade enquanto o contrato estiver vigente, para manter calendário e preço sob um único comando.",
      },
      {
        id: "tempo",
        question: "Quanto tempo leva para o meu flat entrar no ar?",
        answer:
          "Depois da análise de localização, estrutura e decoração, se o imóvel estiver dentro do nosso critério, o anúncio entra no ar em até uma semana.",
      },
      {
        id: "repasse",
        question: "Como recebo o dinheiro das reservas?",
        answer:
          "O valor de cada reserva é pago direto na conta cadastrada pelo proprietário. A Meu Flat na Praia não recebe nem retém o dinheiro das hospedagens, e a taxa fica registrada por reserva na área exclusiva.",
      },
      {
        id: "aceitam",
        question: "Vocês administram qualquer flat?",
        answer:
          "Não. Analisamos localização, estrutura do imóvel e decoração, e só entram na carteira os imóveis dentro do nosso critério. É o que protege a nota dos anúncios e o resultado de todos os proprietários.",
      },
    ],
    ctaTitle: "Quer saber se o seu flat entra na nossa carteira?",
    ctaText:
      "Fazemos uma avaliação do imóvel antes de qualquer proposta, sem compromisso.",
    whatsappText:
      "Olá! Tenho um flat em Porto de Galinhas e quero saber como funciona a administração e a taxa.",
    related: [
      "turnkey-como-funciona",
      "flat-ou-pousada-em-porto-de-galinhas",
      "como-comprar-um-flat-em-porto-de-galinhas",
    ],
    published: "2026-11-07",
  },
  {
    slug: "flat-ou-pousada-em-porto-de-galinhas",
    path: "/guias/flat-ou-pousada-em-porto-de-galinhas",
    kind: "article",
    eyebrow: "Guia para investidores",
    metaTitle: "Flat ou pousada em Porto de Galinhas: qual escolher?",
    metaDescription:
      "Comparativo prático entre investir em flat ou em pousada em Porto de Galinhas: operação, risco, controle, uso próprio e o papel da administradora.",
    h1: "Flat ou pousada em Porto de Galinhas: qual faz mais sentido para você?",
    intro:
      "Quem pensa em investir em hospedagem em Porto de Galinhas costuma comparar duas rotas: comprar um flat e entregar a operação a uma administradora, ou montar uma pousada e tocar o negócio. Não existe resposta universal, e este guia não promete que uma rota renda mais que a outra. Ele mostra o que muda em cada uma para você decidir pelo seu perfil.",
    sections: [
      {
        id: "dois-negocios",
        title: "São dois tipos de investimento",
        paragraphs: [
          "O flat é um imóvel: você compra a unidade, e uma administradora opera o aluguel por temporada. A pousada é um negócio: além do imóvel, existe uma empresa, uma equipe e uma rotina de hotelaria para gerir.",
          "Essa diferença responde à maior parte da pergunta. Flat se aproxima de um investimento imobiliário com operação terceirizada. Pousada se aproxima de abrir e dirigir uma empresa de hospitalidade.",
        ],
      },
      {
        id: "comparativo",
        title: "O que muda na prática",
        bullets: [
          "Dedicação: no flat, o proprietário acompanha resultados e aprova decisões; na pousada, a gestão do dia a dia (equipe, compras, recepção, manutenção) é sua ou de um gerente que você contrata.",
          "Estrutura legal e equipe: pousada exige empresa, funcionários, alvarás e cadastros do setor de turismo; o flat usa a estrutura da administradora.",
          "Escala: um flat é uma unidade e pode ser replicado aos poucos, comprando outras; a pousada concentra o investimento em um único negócio.",
          "Controle: na pousada você decide tudo, de posicionamento a cardápio de café da manhã; no flat você delega a operação e define as regras gerais no contrato.",
          "Uso próprio: o flat pode ser usado por você nos períodos que reservar; na pousada o uso próprio disputa espaço com a operação.",
          "Saída: o flat é um imóvel que pode ser vendido ou herdado como qualquer outro; a pousada é negociada como negócio, o que costuma ser mais complexo.",
        ],
        after: [
          "Esses pontos valem para qualquer destino. Em Porto de Galinhas, a concorrência entre anúncios é alta e a demanda varia por feriado e evento, o que pesa em ambos os casos e favorece quem tem preço e distribuição bem trabalhados.",
        ],
      },
      {
        id: "quando-flat",
        title: "Quando o flat costuma fazer mais sentido",
        bullets: [
          "Você mora longe ou não quer rotina de operação.",
          "Prefere comprar um imóvel e manter a opção de usá-lo.",
          "Quer começar com uma unidade e crescer com cautela.",
          "Valoriza poder vender ou herdar um imóvel convencional.",
        ],
      },
      {
        id: "quando-pousada",
        title: "Quando a pousada pode ser a melhor rota",
        bullets: [
          "Você tem experiência em hotelaria ou quer trabalhar no negócio.",
          "Quer controle total sobre a experiência do hóspede e a marca.",
          "Está disposto a assumir os riscos e a rotina de uma empresa.",
        ],
      },
      {
        id: "papel-gestao",
        title: "O papel da gestão profissional no flat",
        paragraphs: [
          "No modelo de flat, a administradora decide o resultado em boa parte: foto, texto, preço diário, distribuição, limpeza e nota do anúncio. Por isso vale escolher quem administra antes de escolher o imóvel. Na Meu Flat na Praia, a taxa é de 20% sobre o valor líquido, sem fidelidade, e o repasse vai direto ao proprietário. Os detalhes estão na página da administradora de Airbnb em Porto de Galinhas.",
        ],
      },
      {
        id: "como-decidir",
        title: "Perguntas para você decidir",
        bullets: [
          "Quantas horas por semana eu quero dedicar à hospedagem?",
          "Quero um imóvel ou um negócio?",
          "Pretendo usar o espaço pessoalmente em algum período?",
          "Quanto do meu patrimônio posso concentrar em uma única operação?",
          "Se eu precisar vender, qual saída é mais simples?",
        ],
        after: [
          "Se as respostas apontam para um imóvel com operação terceirizada, o próximo passo é escolher bem o flat. O guia sobre como comprar um flat em Porto de Galinhas mostra o que verificar antes de fechar.",
        ],
      },
    ],
    faqs: [
      {
        id: "qual-rende-mais",
        question: "Flat ou pousada: qual rende mais em Porto de Galinhas?",
        answer:
          "Não há resposta única. O resultado depende de localização, padrão do imóvel, qualidade da operação e do preço praticado. Flat e pousada são modelos diferentes: um é imóvel com operação terceirizada, o outro é um negócio de hospitalidade. A comparação honesta passa por dedicação, risco e perfil do investidor, não só por uma porcentagem.",
      },
      {
        id: "precisa-experiencia",
        question: "Preciso ter experiência em hotelaria para ter um flat?",
        answer:
          "Não. Com administradora, a operação (anúncios, preço, atendimento, limpeza e vistoria) fica a cargo dela, e o proprietário acompanha os resultados pela área exclusiva.",
      },
      {
        id: "uso-proprio",
        question: "Posso usar meu flat em algumas datas?",
        answer:
          "Sim. Na Meu Flat na Praia o proprietário reserva as datas de uso próprio pela área exclusiva, sem multa. Em datas de alta demanda há custo de oportunidade, e orientamos sobre isso.",
      },
    ],
    ctaTitle: "Já decidiu pelo flat? Vamos avaliar o seu imóvel.",
    ctaText:
      "Analisamos localização, estrutura e decoração antes de qualquer proposta.",
    whatsappText:
      "Olá! Li o guia flat ou pousada e quero conversar sobre administração de um flat em Porto de Galinhas.",
    related: [
      "como-comprar-um-flat-em-porto-de-galinhas",
      "administradora-de-airbnb-em-porto-de-galinhas",
      "turnkey-como-funciona",
    ],
    published: "2026-11-07",
  },
  {
    slug: "como-comprar-um-flat-em-porto-de-galinhas",
    path: "/guias/como-comprar-um-flat-em-porto-de-galinhas",
    kind: "article",
    eyebrow: "Guia para investidores",
    metaTitle: "Como comprar um flat em Porto de Galinhas: guia passo a passo",
    metaDescription:
      "O que verificar antes de comprar um flat em Porto de Galinhas: localização, documentação, convenção do condomínio, custos além do preço e compra na planta.",
    h1: "Como comprar um flat em Porto de Galinhas: o que verificar antes de fechar",
    intro:
      "Comprar um flat para aluguel por temporada pede um olhar diferente do de comprar para morar. O imóvel precisa ser bom para o hóspede, permitido pelo condomínio e viável de operar. Este guia reúne os pontos que um comprador deve checar, em ordem. Ele não substitui a análise de um advogado ou corretor para o seu caso.",
    sections: [
      {
        id: "objetivo",
        title: "1. Defina o objetivo da compra",
        paragraphs: [
          "Comece pela pergunta de uso: o flat será só para locação, para uso próprio parcial ou para ambos? A resposta influencia o tamanho, a localização e o padrão que vale a pena buscar. Se ainda está em dúvida entre flat e outro modelo de hospedagem, veja o comparativo entre flat e pousada.",
        ],
      },
      {
        id: "localizacao",
        title: "2. Escolha a localização",
        paragraphs: [
          "Em hospedagem, a localização pesa mais do que em quase qualquer outro imóvel. Compare com calma:",
        ],
        bullets: [
          "Distância da praia: do pé na areia a cerca de 600 metros a pé, como nos condomínios que administramos em Porto de Galinhas.",
          "Entorno: proximidade de restaurantes, comércio e passeios, e o perfil da região (centro movimentado ou área mais residencial).",
          "Destino: Porto de Galinhas e Muro Alto têm fluxo turístico intenso; Tamandaré e Praia dos Carneiros atraem hóspedes que buscam tranquilidade e estadias mais longas.",
        ],
        after: [
          "Veja como é cada destino nas páginas de Porto de Galinhas e de Tamandaré e Carneiros, e os empreendimentos na lista de condomínios que administramos.",
        ],
      },
      {
        id: "documentacao",
        title: "3. Confira a documentação",
        bullets: [
          "Matrícula atualizada do imóvel, para confirmar proprietário, ônus e situação registral.",
          "Convenção e regimento interno do condomínio: verifique se a locação por temporada é permitida e quais regras valem para hóspedes.",
          "Habite-se e regularidade da construção.",
          "Taxa de condomínio, débitos e IPTU em dia.",
          "No caso de empreendimento novo, o registro da incorporação e o histórico da construtora.",
        ],
        after: [
          "Peça tudo por escrito e leve a um advogado imobiliário de sua confiança antes de assinar.",
        ],
      },
      {
        id: "custos",
        title: "4. Some os custos além do preço",
        paragraphs: [
          "O preço do imóvel é só uma parte do investimento. Considere também:",
        ],
        bullets: [
          "ITBI, escritura e registro em cartório.",
          "Mobília, decoração, enxoval e equipamentos, se o imóvel não for entregue montado.",
          "Taxa de condomínio e IPTU, que continuam com o proprietário.",
          "Taxa de administração: na Meu Flat na Praia, 20% sobre o valor líquido da reserva, depois da taxa dos canais.",
        ],
      },
      {
        id: "planta-ou-pronto",
        title: "5. Imóvel na planta ou pronto",
        paragraphs: [
          "Comprar na planta costuma permitir escolher a unidade com antecedência e acompanhar a obra, mas o imóvel só gera renda depois da entrega, e é preciso conferir prazos e a situação da incorporação. Comprar pronto permite ver o apartamento e o condomínio funcionando, e começar a operar mais cedo.",
          "Para quem compra na planta, a Meu Flat na Praia faz o acompanhamento até a entrega das chaves e a transição para a operação, como detalhamos no guia do turnkey.",
        ],
      },
      {
        id: "operacao",
        title: "6. Pense na operação antes de comprar",
        paragraphs: [
          "O melhor momento para escolher quem vai administrar é antes da compra. Uma administradora séria analisa localização, estrutura e decoração e diz com franqueza se o imóvel entra na carteira. Conversar com ela antes de fechar evita comprar uma unidade que não se encaixa na operação.",
        ],
      },
    ],
    faqs: [
      {
        id: "pode-alugar",
        question: "Posso alugar por temporada qualquer flat que eu comprar?",
        answer:
          "Depende da convenção e do regimento interno do condomínio, que definem se a locação por temporada é permitida e sob quais regras. Confira esses documentos antes de comprar.",
      },
      {
        id: "custos-extras",
        question: "Quais custos além do preço do imóvel?",
        answer:
          "ITBI, escritura e registro, mobília e decoração (quando o imóvel não é entregue montado), taxa de condomínio e IPTU, além da taxa da administradora, no nosso caso 20% sobre o valor líquido das reservas.",
      },
      {
        id: "planta",
        question: "Vale a pena comprar na planta?",
        answer:
          "Depende do seu horizonte. Na planta você escolhe a unidade antes e acompanha a obra, mas só recebe renda após a entrega. É importante conferir a situação da incorporação, os prazos e as condições do contrato com um advogado.",
      },
      {
        id: "acompanhamento",
        question: "A Meu Flat na Praia acompanha quem compra na planta?",
        answer:
          "Sim. Acompanhamos da venda e da obra ao registro em cartório, decoração e início da operação.",
      },
    ],
    ctaTitle: "Vai comprar um flat? Fale com a gente antes de fechar.",
    ctaText:
      "Opinamos sobre localização, estrutura e se o imóvel se encaixa na operação.",
    whatsappText:
      "Olá! Estou pensando em comprar um flat em Porto de Galinhas e queria conversar antes de fechar.",
    related: [
      "flat-ou-pousada-em-porto-de-galinhas",
      "turnkey-como-funciona",
      "administradora-de-airbnb-em-porto-de-galinhas",
    ],
    published: "2026-11-07",
  },
  {
    slug: "turnkey-como-funciona",
    path: "/guias/turnkey-como-funciona",
    kind: "article",
    eyebrow: "Guia para proprietários",
    metaTitle: "Turnkey para flats: como funciona, etapa por etapa",
    metaDescription:
      "Como funciona o turnkey da Meu Flat na Praia: avaliação, projeto, montagem, decoração, fotos e anúncio, para você entregar as chaves e receber o flat pronto.",
    h1: "Turnkey para flats: como funciona do imóvel vazio à primeira reserva",
    intro:
      "Turnkey significa entregar as chaves e receber o imóvel pronto para operar. No aluguel por temporada, isso quer dizer que o proprietário não precisa projetar, comprar móveis, contratar obra nem montar anúncio: a Meu Flat na Praia faz o caminho completo e passa a administrar o flat.",
    sections: [
      {
        id: "etapas",
        title: "As etapas do turnkey",
        steps: [
          {
            title: "Avaliação do imóvel",
            text: "Analisamos localização, estrutura e decoração. É aqui que definimos se o flat entra na carteira e o que precisa ser feito para chegar ao padrão de operação.",
          },
          {
            title: "Projeto de arquitetura e ambientação",
            text: "O projeto pensa o espaço para a hospedagem: circulação, número de hóspedes, conforto e durabilidade dos materiais, com o olhar de quem vive a operação.",
          },
          {
            title: "Obra e marcenaria sob medida",
            text: "Instalação elétrica, pintura e marcenaria sob medida, executadas por uma equipe mista, formada por profissionais próprios e parceiros.",
          },
          {
            title: "Decoração e enxoval",
            text: "Mobiliário, decoração e enxoval escolhidos para resistir ao uso intenso e à maresia, e entregar a experiência que o hóspede espera.",
          },
          {
            title: "Fotografia profissional e anúncio",
            text: "Fotos profissionais e anúncios em Airbnb, Booking.com, Decolar/Despegar e Google Vacation Rentals, com precificação dinâmica desde o primeiro dia.",
          },
          {
            title: "Gestão do dia a dia",
            text: "Com o imóvel pronto, começamos a administração: reservas, atendimento, limpeza, vistoria e prestação de contas na área exclusiva do proprietário.",
          },
        ],
      },
      {
        id: "prazo-custo",
        title: "Prazos e custos",
        paragraphs: [
          "Prazo e custo variam com o tamanho do imóvel, o estado em que ele está e o padrão desejado. Por isso não trabalhamos com valor de tabela: fazemos a avaliação e apresentamos um orçamento sob medida, que o proprietário aprova antes de qualquer execução.",
          "A montagem não está incluída na taxa de administração de 20% sobre o valor líquido, e é tratada como um orçamento à parte.",
        ],
      },
      {
        id: "na-planta",
        title: "Quem compra na planta",
        paragraphs: [
          "O turnkey também vale para quem compra um imóvel na planta. Acompanhamos desde a venda e a obra, passando pelo registro em cartório, até a decoração e o início da operação, para que o flat seja entregue e já esteja pronto para receber o primeiro hóspede.",
        ],
      },
      {
        id: "ja-montado",
        title: "E se o imóvel já estiver mobiliado?",
        paragraphs: [
          "Os flats que montamos já estão no nosso padrão de operação. Se o imóvel foi montado por outra pessoa, fazemos a mesma análise de localização, estrutura e decoração e dizemos com clareza o que precisa mudar, se for o caso, para ele entrar na carteira.",
        ],
      },
      {
        id: "proprietario",
        title: "O que o proprietário faz",
        bullets: [
          "Aprova o orçamento e as principais escolhas do projeto.",
          "Entrega as chaves e a documentação do imóvel.",
          "Acompanha reservas, ocupação, receitas e repasses pela área exclusiva.",
          "Reserva as datas de uso próprio, quando quiser.",
        ],
        after: [
          "O repasse de cada reserva vai direto para a conta do proprietário. A taxa de administração é de 20% sobre o valor líquido, depois da taxa dos canais, sem fidelidade e com exclusividade durante o contrato.",
        ],
      },
    ],
    faqs: [
      {
        id: "o-que-e",
        question: "O que é turnkey em imóvel de temporada?",
        answer:
          "É o serviço em que o proprietário entrega as chaves e recebe o imóvel pronto para operar: projeto, obra, decoração, fotos, anúncio e gestão, tudo conduzido pela administradora.",
      },
      {
        id: "quanto-custa",
        question: "Quanto custa o turnkey?",
        answer:
          "Depende do imóvel e do padrão desejado, por isso o orçamento é feito sob medida depois da avaliação e aprovado pelo proprietário antes da execução. A montagem é cobrada à parte da taxa de administração.",
      },
      {
        id: "equipe",
        question: "Quem executa a obra e a decoração?",
        answer:
          "Uma equipe mista, com profissionais próprios e parceiros. A decoração tem projeto da equipe da Meu Flat na Praia.",
      },
      {
        id: "planta",
        question: "O turnkey vale para imóvel na planta?",
        answer:
          "Sim. Acompanhamos a obra, o registro em cartório, a decoração e o início da operação.",
      },
      {
        id: "prazo-anuncio",
        question: "Em quanto tempo o anúncio vai ao ar?",
        answer:
          "Se o imóvel está dentro do nosso critério de seleção, o anúncio entra no ar em até uma semana depois da análise. Quando há obra e montagem, o prazo depende do escopo, apresentado no orçamento.",
      },
    ],
    ctaTitle: "Tem um imóvel vazio ou comprou na planta?",
    ctaText:
      "Fazemos a avaliação e apresentamos o orçamento do turnkey, sem compromisso.",
    whatsappText:
      "Olá! Tenho um imóvel e quero saber como funciona o turnkey (montagem + gestão) da Meu Flat na Praia.",
    related: [
      "administradora-de-airbnb-em-porto-de-galinhas",
      "como-comprar-um-flat-em-porto-de-galinhas",
      "flat-ou-pousada-em-porto-de-galinhas",
    ],
    published: "2026-11-07",
  },
];

export function getGuia(slug: string) {
  return GUIAS.find((g) => g.slug === slug);
}

/** Guias publicados em /guias/[slug] (a administradora tem rota própria). */
export const GUIAS_ARTIGOS = GUIAS.filter((g) => g.kind === "article");
