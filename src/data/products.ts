export type Product = {
  slug: string;
  name: string;
  category: 'aseo' | 'seguridad' | 'epp' | 'industrial' | 'oficina';
  shortDesc: string;
  image: string;
  features: string[];
  badge?: string;
};

export const CATEGORIES = [
  { id: 'aseo', label: 'Aseo industrial', icon: 'Sparkles' },
  { id: 'seguridad', label: 'Seguridad', icon: 'ShieldCheck' },
  { id: 'epp', label: 'EPP', icon: 'HardHat' },
  { id: 'industrial', label: 'Industrial', icon: 'Wrench' },
  { id: 'oficina', label: 'Oficina', icon: 'Briefcase' },
] as const;

export const products: Product[] = [
  {
    slug: 'kit-aseo-industrial-pro',
    name: 'Kit de Aseo Industrial Pro',
    category: 'aseo',
    shortDesc: 'Set completo de productos químicos profesionales para limpieza profunda.',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&auto=format&fit=crop',
    features: ['Desengrasante industrial 5L', 'Desinfectante multipropósito', 'Cera líquida'],
    badge: 'Más vendido',
  },
  {
    slug: 'casco-seguridad-vortex',
    name: 'Casco de Seguridad Vortex',
    category: 'epp',
    shortDesc: 'Casco con normativa ANSI Z89.1 — clase E. Suspensión 6 puntos.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop',
    features: ['Certificación ANSI', 'Ventilación premium', '5 colores disponibles'],
  },
  {
    slug: 'guantes-nitrilo-premium',
    name: 'Guantes de Nitrilo Premium',
    category: 'epp',
    shortDesc: 'Caja x100 unidades. Sin polvo. Resistencia química superior.',
    image: 'https://images.unsplash.com/photo-1599577180489-0e0e3aabd0ad?w=800&auto=format&fit=crop',
    features: ['100 uds.', 'Sin látex', 'Talla S/M/L/XL'],
  },
  {
    slug: 'sistema-extincion-co2',
    name: 'Extintor CO₂ 5kg',
    category: 'seguridad',
    shortDesc: 'Para fuegos clase B y C. Certificado SEC. Ideal data centers y industria.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop',
    features: ['Certificado SEC', 'Sin residuo', 'Recarga incluida'],
    badge: 'Certificado',
  },
  {
    slug: 'gabinete-herramientas-rolling',
    name: 'Gabinete Rolling 7 cajones',
    category: 'industrial',
    shortDesc: 'Acero reforzado, cierre de seguridad, ruedas de carga 600 kg.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop',
    features: ['Acero 1.5 mm', 'Cap. 600 kg', 'Cierre con llave'],
  },
  {
    slug: 'sillas-ergonomica-flux',
    name: 'Silla Ergonómica Flux',
    category: 'oficina',
    shortDesc: 'Soporte lumbar dinámico, apoyabrazos 4D, malla transpirable.',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop',
    features: ['Garantía 5 años', 'Apoyabrazos 4D', 'Reclinación múltiple'],
    badge: 'Nuevo',
  },
];
