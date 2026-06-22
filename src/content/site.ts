import {
  Activity,
  BookOpen,
  Brain,
  Code2,
  Ear,
  HeartPulse,
  Instagram,
  Landmark,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const links = {
  humaniza: "https://humaniza.health",
  humanizaDev: "https://humaniza.dev",
  instagram: "https://www.instagram.com/medicos.de.gente/",
};

export const navItems = [
  { label: "Origem", href: "#origem" },
  { label: "Ponte Viva", href: "#ponte-viva" },
  { label: "Humaniza Health", href: "#humaniza" },
  { label: "Acompanhe", href: "#acompanhe" },
];

export const originPillars: Array<{
  title: string;
  icon: LucideIcon;
  text: string;
}> = [
  {
    title: "Escuta",
    icon: Ear,
    text: "O cuidado começava antes da conduta: ouvir bem, entender a história e deixar o contexto aparecer.",
  },
  {
    title: "Território",
    icon: MapPinned,
    text: "Zonas rurais, comunidades indígenas e periferias urbanas: contextos reais que ensinaram o que o dado isolado não mostra.",
  },
  {
    title: "Vínculo",
    icon: UsersRound,
    text: "Confiança se constrói no tempo. A medicina de família mostrou que presença e continuidade fazem parte do cuidado.",
  },
];

export const bridgeSteps: Array<{
  label: string;
  title: string;
  icon: LucideIcon;
  before: string;
  now: string;
}> = [
  {
    label: "Escuta",
    title: "Do encontro clínico ao raciocínio melhor informado",
    icon: Ear,
    before: "Histórias de pessoas reais orientavam a conduta.",
    now: "A Humaniza traduz essa escuta em ferramentas que organizam contexto, hipóteses e evidência.",
  },
  {
    label: "Território",
    title: "Do contexto vivido ao contexto brasileiro",
    icon: Landmark,
    before: "Cada casa mostrava limites, cultura, acesso e rotina.",
    now: "A tecnologia nasce para servir a saúde brasileira, com linguagem, riscos e decisões do nosso chão.",
  },
  {
    label: "Vínculo",
    title: "Da continuidade local à continuidade do cuidado",
    icon: HeartPulse,
    before: "Acompanhamento significava caminhar junto.",
    now: "O mesmo princípio guia interfaces que ajudam médicos a sustentar cuidado com clareza e responsabilidade.",
  },
  {
    label: "Evidência",
    title: "Da intuição clínica à decisão verificável",
    icon: BookOpen,
    before: "A experiência precisava dialogar com ciência e prudência.",
    now: "A Humaniza Health constrói produtos em que evidência, rastreabilidade e segurança não são detalhe.",
  },
  {
    label: "Tecnologia",
    title: "Da inquietação ao software de saúde",
    icon: Code2,
    before: "A pergunta era como cuidar melhor de quem estava perto.",
    now: "Agora a pergunta virou plataforma: como potencializar médicos no cuidado que realmente importa.",
  },
];

export const humanizaBlocks: Array<{
  title: string;
  icon: LucideIcon;
  text: string;
}> = [
  {
    title: "Tecnologia clínica",
    icon: Brain,
    text: "Ferramentas inteligentes para apoiar raciocínio, decisão e organização clínica, sem substituir julgamento médico.",
  },
  {
    title: "Construção pública",
    icon: Activity,
    text: "humaniza.dev mostra bastidores, escolhas técnicas e aprendizado em saúde digital com linguagem médica e responsável.",
  },
  {
    title: "Responsabilidade",
    icon: ShieldCheck,
    text: "Evidência, contexto brasileiro, segurança, clareza e respeito às pessoas como princípios de produto.",
  },
];

export const closingCards = [
  {
    title: "A comunidade continua",
    text: "O Médicos de Gente permanece como ponte entre quem acompanhou a história e a nova fase da Humaniza Health.",
    icon: Instagram,
  },
  {
    title: "A missão ganhou escala",
    text: "A origem não é apagada; ela explica por que a tecnologia precisa nascer perto da realidade clínica.",
    icon: Stethoscope,
  },
];
