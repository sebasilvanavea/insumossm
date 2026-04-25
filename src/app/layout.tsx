import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/layout/whatsapp-float';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insumossm.cl';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'InsumosSM — Insumos médicos de alta calidad para profesionales',
    template: '%s | Insumos SM',
  },
  description:
    'Distribuidor de insumos médicos certificados para clínicas, hospitales y centros de salud en Chile. Catálogo +250 SKUs, despacho 24–48 h, cotización en minutos.',
  keywords: [
    'insumos médicos', 'apósitos', 'jeringas', 'equipos diagnóstico',
    'ISP', 'distribuidora médica Chile', 'cotización insumos clínica',
  ],
  authors: [{ name: 'Insumos SM' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    title: 'InsumosSM — Insumos médicos de alta calidad para profesionales',
    description: 'Distribuidor de insumos médicos certificados para clínicas, hospitales y centros de salud en Chile.',
    siteName: 'Insumos SM',
  },
  twitter: { card: 'summary_large_image', title: 'InsumosSM', description: 'Insumos médicos certificados en Chile' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
