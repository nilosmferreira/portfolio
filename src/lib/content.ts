// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar textos,
// projetos e experiências sem mexer nos componentes.

export const profile = {
  name: "Nilo Ferreira",
  role: "Desenvolvedor full stack",
  city: "Recife, PE",
  email: "nilo_ferreira@hotmail.com",
  intro:
    "Comecei em 1997 configurando internet discada em Belém. Hoje desenvolvo sistemas em C#, React, React Native e Node.js, e cuido dos bancos de dados e da nuvem da Monte Carlo's, onde estou desde 2005.",
};

export type Project = {
  name: string;
  url?: string;
  domain?: string;
  description: string;
  stack?: string[];
};

export const projects: Project[] = [
  {
    name: "MC Esportes",
    url: "https://www.mcesportes.com",
    domain: "mcesportes.com",
    description: "Site da Monte Carlo's Esportes.",
  },
  {
    name: "Saúde Basquete Master",
    url: "https://saude.niloferreira.dev",
    domain: "saude.niloferreira.dev",
    description:
      "Ficha de saúde dos atletas do basquete master de Pernambuco, com contatos de emergência e histórico de lesões.",
  },
  {
    name: "Em breve",
    description: "Um novo projeto está sendo construído.",
  },
  {
    name: "Em breve",
    description: "Mais um projeto a caminho.",
  },
];

export type Job = {
  start: string;
  end: string;
  company: string;
  city: string;
  title: string;
  points: string[];
};

// Ordem cronológica: da linha discada até a nuvem.
export const jobs: Job[] = [
  {
    start: "1997",
    end: "2000",
    company: "Canal 13 Planejamento em Informática",
    city: "Belém",
    title: "Representante técnico",
    points: [
      "Instalação e configuração de internet discada",
      "Representante comercial, técnico e implantador da RM Sistemas",
      "Aulas de informática: básico, manutenção de PC, Office e Delphi",
    ],
  },
  {
    start: "2000",
    end: "2003",
    company: "Líder Supermercados e Magazine",
    city: "Belém",
    title: "Técnico em informática",
    points: [
      "Suporte aos ERPs da RM Sistemas: Labore, Nucleus, Liber, Chronus e Saldus",
      "Administração de banco de dados",
    ],
  },
  {
    start: "2003",
    end: "2005",
    company: "MDA",
    city: "Recife",
    title: "Programador",
    points: ["Desenvolvimento de sistemas em ASP.NET"],
  },
  {
    start: "2005",
    end: "hoje",
    company: "Monte Carlo's",
    city: "Olinda",
    title: "Analista",
    points: [
      "Migrou um sistema legado de linha discada (LP) para TCP/IP",
      "Desenvolve os sistemas administrativos da empresa em C#, React, React Native e Node.js",
      "Mantém os bancos de dados da empresa",
      "Mantém a infraestrutura em nuvem: Azure, SQL Server e Oracle",
    ],
  },
];

export const skills = [
  {
    area: "Desenvolvimento",
    items: ["C#", "ASP.NET", "JavaScript", "React", "React Native", "Node.js", "Java"],
  },
  {
    area: "Bancos de dados",
    items: ["SQL Server", "PostgreSQL", "MySQL", "Firebird", "Oracle"],
  },
  {
    area: "Nuvem",
    items: ["Azure", "Oracle Cloud", "AWS"],
  },
];

export const education = [
  {
    school: "ETFPA",
    city: "Belém",
    course: "Técnico em Mineração",
    period: "1994 – 1997",
  },
  {
    school: "Escola Técnica Visconde de Mauá",
    city: "Rio de Janeiro",
    course: "Técnico em Edificações",
    period: "1992 – 1994",
  },
];
