
export interface TattooImage {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  style: string;
  technique: string;
  bodyPart: string;
  isColor: boolean;
  description: string;
  sessionTime: string;
  inspiration: string;
}

export const tattooStyles = [
  "Todos",
  "Fineline",
  "Blackwork",
  "Pontilhismo",
  "Tradicional",
  "Realismo",
  "Geométrico",
  "Aquarela",
  "Místico"
];

export const bodyParts = [
  "Todos",
  "Braço",
  "Antebraço",
  "Costas",
  "Peito",
  "Perna",
  "Tornozelo",
  "Costela",
  "Mão",
  "Pescoço",
  "Pulso"
];

export const techniques = [
  "Todos", 
  "Linha Fina", 
  "Sombreamento", 
  "Pontilhismo", 
  "Traço Grosso",
  "Gradiente",
  "Linhas Geométricas"
];

// Sample tattoo data
export const tattooImages: TattooImage[] = [
  {
    id: 1,
    title: "Lua Crescente Mística",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    fullImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    style: "Místico",
    technique: "Linha Fina",
    bodyPart: "Antebraço",
    isColor: false,
    description: "Tatuagem de lua crescente com elementos botânicos e místicos, ideal para quem busca uma conexão com a natureza e os ciclos lunares.",
    sessionTime: "2-3 horas",
    inspiration: "Ciclos lunares e conexão com a natureza"
  },
  {
    id: 2,
    title: "Constelação Geométrica",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    fullImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    style: "Geométrico",
    technique: "Linhas Geométricas",
    bodyPart: "Costas",
    isColor: false,
    description: "Padrão de constelação com elementos geométricos, criando uma representação moderna dos céus noturnos.",
    sessionTime: "3-4 horas",
    inspiration: "Astronomia e padrões sagrados da geometria"
  },
  {
    id: 3,
    title: "Lâmpada da Inspiração",
    thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    fullImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    style: "Fineline",
    technique: "Linha Fina",
    bodyPart: "Braço",
    isColor: true,
    description: "Uma lâmpada azul representando inspiração e ideias, com traços delicados e um toque de cor.",
    sessionTime: "2 horas",
    inspiration: "Criatividade e momentos de iluminação mental"
  },
  {
    id: 4,
    title: "Céu Estrelado",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    fullImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    style: "Pontilhismo",
    technique: "Pontilhismo",
    bodyPart: "Perna",
    isColor: false,
    description: "Céu noturno estrelado criado com técnica de pontilhismo, trazendo profundidade e textura únicos.",
    sessionTime: "4-5 horas",
    inspiration: "Contemplação das estrelas e o infinito do universo"
  },
  {
    id: 5,
    title: "Floresta Mística",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    fullImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    style: "Blackwork",
    technique: "Sombreamento",
    bodyPart: "Antebraço",
    isColor: false,
    description: "Floresta encantada com luzes entre as árvores, criando uma atmosfera mística e convidativa.",
    sessionTime: "3-4 horas",
    inspiration: "Florestas encantadas e histórias de magia"
  },
  {
    id: 6,
    title: "Mandala Lunar",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    fullImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    style: "Geométrico",
    technique: "Pontilhismo",
    bodyPart: "Costas",
    isColor: false,
    description: "Mandala inspirada nas fases da lua, combinando geometria sagrada e simbolismo lunar.",
    sessionTime: "5-6 horas",
    inspiration: "Geometria sagrada e fases lunares"
  },
  {
    id: 7,
    title: "Cristal Energético",
    thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    fullImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    style: "Aquarela",
    technique: "Gradiente",
    bodyPart: "Pulso",
    isColor: true,
    description: "Cristal com efeito aquarela, representando energia, cura e equilíbrio interior.",
    sessionTime: "2-3 horas",
    inspiration: "Propriedades energéticas dos cristais"
  },
  {
    id: 8,
    title: "Serpente Cósmica",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    fullImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    style: "Tradicional",
    technique: "Traço Grosso",
    bodyPart: "Braço",
    isColor: false,
    description: "Uma serpente envolvendo símbolos cósmicos, representando sabedoria e transformação.",
    sessionTime: "3-4 horas",
    inspiration: "Mitologia da serpente como símbolo de transformação"
  }
];
