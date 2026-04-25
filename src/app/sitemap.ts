import type { MetadataRoute } from 'next';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insumossm.cl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, priority: 1, changeFrequency: 'weekly' },
    { url: `${SITE}/productos`, lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE}/cotizar`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE}/sobre-nosotros`, lastModified: now, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE}/contacto`, lastModified: now, priority: 0.6, changeFrequency: 'monthly' },
  ];
}
