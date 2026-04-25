export const CATEGORIES = [
  { id: 'gasas-apositos', label: 'Gasas y Ap\u00f3sitos', icon: 'Sparkles', emoji: '\u{1FA79}' },
  { id: 'jeringas-agujas', label: 'Jeringas y Agujas', icon: 'ShieldCheck', emoji: '\u{1F489}' },
  { id: 'suturas', label: 'Suturas', icon: 'Scissors', emoji: '\u{1FAA1}' },
  { id: 'cateteres', label: 'Cat\u00e9teres', icon: 'Activity', emoji: '\u{1F535}' },
  { id: 'guantes', label: 'Guantes', icon: 'Hand', emoji: '\u{1F9E4}' },
  { id: 'mascarillas', label: 'Mascarillas', icon: 'Shield', emoji: '\u{1F637}' },
  { id: 'canulas', label: 'C\u00e1nulas', icon: 'Workflow', emoji: '\u{1F527}' },
  { id: 'diagnostico', label: 'Equipos Diagn\u00f3stico', icon: 'Stethoscope', emoji: '\u{1FA7A}' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  shortDesc: string;
  features: string[];
  badge?: string;
  emoji?: string;
  image?: string;
};

export const getCategoryById = (id: CategoryId) => CATEGORIES.find((category) => category.id === id);

export const products: Product[] = [
  {
    slug: 'gasa-esteril-10x10cm',
    name: 'Gasa est\u00e9ril 10x10cm',
    category: 'gasas-apositos',
    shortDesc: 'Gasa de algod\u00f3n 100% est\u00e9ril, ideal para curaciones y ap\u00f3sitos. Alta capacidad de absorci\u00f3n.',
    features: ['Caja x100', '10x10cm', 'Est\u00e9ril', '100% algod\u00f3n'],
    badge: 'M\u00e1s vendido',
    emoji: '\u{1FA79}',
  },
  {
    slug: 'aposito-transparente',
    name: 'Ap\u00f3sito transparente',
    category: 'gasas-apositos',
    shortDesc: 'Ap\u00f3sito film transparente semipermeable. Protecci\u00f3n de heridas, impermeable, hipoalerg\u00e9nico.',
    features: ['10x12cm', 'Impermeable', 'Hipoalerg\u00e9nico', 'Caja x50'],
    emoji: '\u{1FA79}',
  },
  {
    slug: 'jeringa-5ml-con-aguja',
    name: 'Jeringa 5ml c/aguja',
    category: 'jeringas-agujas',
    shortDesc: 'Jeringa desechable con aguja 21G. \u00c9mbolo de goma, escala en relieve, est\u00e9ril de f\u00e1brica.',
    features: ['5ml', '21G x 1 1/2', 'Est\u00e9ril', 'Caja x100'],
    emoji: '\u{1F489}',
  },
  {
    slug: 'aguja-hipodermica-23g',
    name: 'Aguja hipod\u00e9rmica 23G',
    category: 'jeringas-agujas',
    shortDesc: 'Aguja hipod\u00e9rmica de bisel corto, tres cortes, recubrimiento de silicona para menor dolor.',
    features: ['23G x 1"', 'Est\u00e9ril', 'Tres cortes', 'Caja x100'],
    badge: 'Nuevo',
    emoji: '\u{1F489}',
  },
  {
    slug: 'sutura-nylon-2-0',
    name: 'Sutura Nylon 2-0',
    category: 'suturas',
    shortDesc: 'Sutura monofilamento de nylon, no absorbible. Aguja curva 3/8 de c\u00edrculo, ideal para piel y tejido.',
    features: ['2-0', 'Nylon', 'No absorbible', 'Aguja 3/8', 'Caja x24'],
    emoji: '\u{1FAA1}',
  },
  {
    slug: 'sutura-vicryl-3-0',
    name: 'Sutura Vicryl 3-0',
    category: 'suturas',
    shortDesc: 'Sutura trenzada absorbible de \u00e1cido poliglic\u00f3lico. Absorci\u00f3n completa en 56-70 d\u00edas.',
    features: ['3-0', 'Absorbible', 'Aguja curva', 'Caja x24'],
    emoji: '\u{1FAA1}',
  },
  {
    slug: 'cateter-venoso-periferico-18g',
    name: 'Cat\u00e9ter venoso perif\u00e9rico 18G',
    category: 'cateteres',
    shortDesc: 'Cat\u00e9ter IV con c\u00e1mara de retorno, protector de aguja, ala de fijaci\u00f3n y tap\u00f3n de cierre.',
    features: ['18G', 'Verde', 'Con alas', 'Est\u00e9ril', 'Caja x50'],
    emoji: '\u{1F535}',
  },
  {
    slug: 'guante-latex-s-m-l',
    name: 'Guante latex S/M/L',
    category: 'guantes',
    shortDesc: 'Guante de examinaci\u00f3n de l\u00e1tex natural, sin polvo, alta sensibilidad t\u00e1ctil y resistencia.',
    features: ['Latex', 'Sin polvo', 'Tallas S/M/L', 'Caja x100'],
    emoji: '\u{1F9E4}',
  },
  {
    slug: 'guante-nitrilo-azul',
    name: 'Guante nitrilo azul',
    category: 'guantes',
    shortDesc: 'Guante de nitrilo sin l\u00e1tex, apto para personas con alergia. Mayor resistencia qu\u00edmica.',
    features: ['Nitrilo', 'Sin l\u00e1tex', 'Azul', 'Caja x100', 'Tallas S/M/L/XL'],
    badge: 'M\u00e1s vendido',
    emoji: '\u{1F9E4}',
  },
  {
    slug: 'mascarilla-quirurgica-3-pliegues',
    name: 'Mascarilla quir\u00fargica 3 pliegues',
    category: 'mascarillas',
    shortDesc: 'Mascarilla m\u00e9dica con 3 capas de protecci\u00f3n, clip nasal met\u00e1lico y certificaci\u00f3n m\u00e9dica.',
    features: ['3 capas', 'BFE >=98%', 'Caja x50', 'Certificada'],
    emoji: '\u{1F637}',
  },
  {
    slug: 'mascarilla-ffp2-kn95',
    name: 'Mascarilla FFP2/KN95',
    category: 'mascarillas',
    shortDesc: 'Respirador de alta filtraci\u00f3n FFP2 equivalente. Protecci\u00f3n frente a part\u00edculas y aerosoles.',
    features: ['FFP2', 'Filtraci\u00f3n >=94%', '5 capas', 'Caja x10'],
    emoji: '\u{1F637}',
  },
  {
    slug: 'canula-nasal-adulto',
    name: 'C\u00e1nula nasal adulto',
    category: 'canulas',
    shortDesc: 'C\u00e1nula nasal de bajo flujo para oxigenoterapia, tuber\u00eda de 2.1m y conector universal.',
    features: ['Adulto', 'Flujo 1-6L/min', 'Tubo 2.1m', 'PVC m\u00e9dico'],
    emoji: '\u{1F527}',
  },
  {
    slug: 'estetoscopio-doble-campana',
    name: 'Estetoscopio doble campana',
    category: 'diagnostico',
    shortDesc: 'Estetoscopio de diagn\u00f3stico doble campana, diafragma de alta sensibilidad y auriculares blandos.',
    features: ['Doble campana', 'Tuber\u00eda PVC', 'Membrana dura/blanda', 'Negro'],
    emoji: '\u{1FA7A}',
  },
  {
    slug: 'oximetro-de-pulso-digital',
    name: 'Ox\u00edmetro de pulso digital',
    category: 'diagnostico',
    shortDesc: 'Ox\u00edmetro de dedo con pantalla OLED, medici\u00f3n SpO2 y frecuencia card\u00edaca, bater\u00eda incluida.',
    features: ['SpO2 + FC', 'Pantalla OLED', 'Pilas incluidas', 'Rango 70-100%'],
    badge: 'Nuevo',
    emoji: '\u{1FA7A}',
  },
];
