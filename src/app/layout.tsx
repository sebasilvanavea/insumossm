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
  weight: ['400', '500', '600', '700', '800'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insumossm.cl';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Insumos SM — Suministros industriales y de seguridad en Chile',
    template: '%s | Insumos SM',
  },
  description:
    'Insumos industriales, de aseo, seguridad y EPP para empresas en Chile. Cotización en línea en 60 segundos. Despacho rápido. Atención especializada.',
  keywords: [
    'insumos industriales', 'EPP', 'seguridad industrial', 'aseo industrial',
    'suministros Chile', 'cotización insumos', 'distribuidora industrial',
  ],
  authors: [{ name: 'Insumos SM' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: SITE_URL,
    title: 'Insumos SM — Suministros industriales en Chile',
    description: 'Cotiza en línea en 60 segundos. Despacho rápido a todo Chile.',
    siteName: 'Insumos SM',
  },
  twitter: { card: 'summary_large_image', title: 'Insumos SM', description: 'Suministros industriales' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0B3D91',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
