import {
  Profile,
  SkillCategory,
  Experience,
  Education,
  Project,
} from "../types";

export const profileData: Profile = {
  name: "Gustavo Berny",
  title: "Desenvolvedor Fullstack",
  summary:
    "Com 9 anos de experiência na indústria de tecnologia, desenvolvi habilidades como Desenvolvedor Backend e Frontend, com especial foco em soluções de Inteligência Artificial. Tenho paixão por criar sistemas inteligentes que utilizam IA para resolver problemas complexos e otimizar processos. Profissionalmente, no meu último emprego, desenvolvi chatbots com IA e sistemas que aproveitam o poder da inteligência artificial para entregar valor aos usuários. Para mim, o equilíbrio entre vida profissional e pessoal é fundamental - acredito que os momentos com a família são essenciais para renovar energias e inspirar criatividade no trabalho. Este balanço me permite estar constantemente explorando novas possibilidades no campo da IA enquanto mantenho uma perspectiva humana e centrada em valores. Busco ativamente projetos que me permitam expandir meu conhecimento nessa área revolucionária, ao mesmo tempo que valorizo a flexibilidade para estar presente com meus entes queridos. Acredito que a IA é o futuro da tecnologia e estou comprometido em ser parte dessa transformação digital, construindo soluções que beneficiem não apenas empresas, mas também as pessoas e famílias.",
  image: "/images/profile-photo.jpg",
  contact: {
    email: "poleba.berny93@gmail.com",
    phone: "+55 55 9815-8112",
    linkedin: "www.linkedin.com/in/gustavo-berny",
    github: "https://github.com/gutobjerky",
    website: "www.gustavoberny.com",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Linguagens & Frameworks",
    skills: [
      { name: "Node.js" },
      { name: "ReactJS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Jest" },
      { name: "REST API" },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Git" },
      { name: "BitBucket" },
      { name: "OS X" },
      { name: "Linux" },
      { name: "AI Integration" },
      { name: "TensorFlow" },
      { name: "ChatGPT API" },
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Computer Vision" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Fullstack Pleno",
    company: "SelfFizz",
    location: "Santa Cruz do Sul - RS, Brasil",
    period: "2023-09 - 2025-01",
    description: [
      "Liderei o desenvolvimento de soluções avançadas com inteligência artificial, incluindo um chatbot que utiliza NLP para compreender e responder a consultas de clientes com alta precisão.",
      "Implementei modelos de machine learning para análise preditiva de comportamentos de usuários, aumentando a retenção de clientes em 35%.",
      "Integrei APIs de IA generativa para automatizar a criação de conteúdo personalizado para diferentes segmentos de usuários.",
      "Utilizei Node.js com Express para o backend e implementei testes automatizados usando Jest, garantindo a robustez das integrações com serviços de IA.",
      "Desenvolvi interfaces frontend responsivas e intuitivas com React, criando experiências interativas para usuários interagirem com os sistemas de IA.",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "React",
      "Jest",
      "AI/ML",
      "NLP",
      "TensorFlow",
    ],
  },
  {
    title: "Desenvolvedor Backend",
    company: "Imply",
    location: "Santa Cruz do Sul - RS, Brasil",
    period: "2021-08 - 2023-09",
    description: [
      "Liderei o desenvolvimento de um sistema abrangente de controle de cobrança de associados, aplicando padrões de futebol.",
      "Supervisionei com sucesso um sistema de débito em conta para 107.000 membros, gerenciando transações mensais que superavam R$ 4 milhões.",
      "Inovou no controle de fluxo de caixa e nas funcionalidades de impressão de documentos utilizando JavaScript e PHP.",
      "Projetei uma dinâmica de emissão de bilhetes sem interrupções por meio da integração com APIs externas.",
      "Supervisionei um sistema dinâmico de gestão de estacionamento, lidando de forma eficiente com a logística de mais de 4.000 veículos diariamente.",
      "Executei sofisticadas regras de gestão de acesso e cobrança através de PHP e desenvolveu perfis de acesso detalhados e funcionalidades de geração de notas de serviço.",
    ],
    technologies: ["PHP", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Analista de Suporte Técnico",
    company: "RM Software",
    location: "Santa Cruz do Sul - RS, Brasil",
    period: "2015-02 - 2020-04",
    description: [
      "Operou um sistema abrangente para gerenciamento de contas, faturas, documentos fiscais, cálculos de impostos e importação de arquivos XML.",
      "Instalei e forneci treinamento em sistemas ERP para novos clientes.",
      "Analisei o feedback e as necessidades dos usuários para impulsionar melhorias no sistema.",
    ],
    technologies: ["XML", "ERP", "Suporte Técnico"],
  },
];

export const education: Education[] = [
  {
    degree: "Engenharia de Software",
    institution: "UNINTER",
    location: "Santa Cruz do Sul, RS",
    period: "2016-02 - 2018-12",
  },
  {
    degree: "Técnico em Informática",
    institution: "UNISC",
    location: "Santa Cruz do Sul, RS",
    period: "2018-01 - 2018-12",
  },
  {
    degree: "Curso de Inglês",
    institution: "Schulz & Karomata",
    location: "Santa Cruz do Sul, Rio Grande do Sul",
    period: "2018-01 - 2018-12",
  },
];

export const languages = [
  { language: "Inglês", level: "Avançado" },
  { language: "Português", level: "Nativo" },
];

export const projects: Project[] = [
  {
    id: "chatbot-ia",
    title: "Chatbot com IA",
    description:
      "Desenvolvimento de um chatbot utilizando inteligência artificial, PostgreSQL e React.",
    image: "/images/project1.jpg",
    technologies: ["Node.js", "PostgreSQL", "React", "Jest", "IA"],
    githubUrl: "https://github.com/gutobjerky/chatbot-ia",
  },
  {
    id: "ia-vision-analytics",
    title: "Sistema de Análise Visual com IA",
    description:
      "Plataforma que utiliza visão computacional e algoritmos de aprendizado de máquina para analisar imagens e extrair informações relevantes para negócios.",
    image: "/images/project4.jpg",
    technologies: ["Python", "TensorFlow", "Computer Vision", "React", "Flask"],
    githubUrl: "https://github.com/gutobjerky/ia-vision-analytics",
  },
  {
    id: "sistema-cobranca",
    title: "Sistema de Controle de Cobrança",
    description:
      "Sistema abrangente para gerenciamento de cobranças de associados com débito em conta.",
    image: "/images/project2.jpg",
    technologies: ["PHP", "JavaScript", "PostgreSQL", "API Integration"],
    githubUrl: "https://github.com/gutobjerky/sistema-cobranca",
  },
  {
    id: "gestao-estacionamento",
    title: "Sistema de Gestão de Estacionamento",
    description:
      "Plataforma para gerenciamento logístico de estacionamentos com alta demanda.",
    image: "/images/project3.jpg",
    technologies: ["PHP", "JavaScript", "PostgreSQL"],
    githubUrl: "https://github.com/gutobjerky/parking-management",
  },
];
