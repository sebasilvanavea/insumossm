import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations/fade-in';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con InsumosSM por teléfono, email o WhatsApp. Atención de Lun a Vie.',
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 lg:py-20">
        <div className="container-page">
          <FadeIn>
            <span className="badge bg-white/10 border border-white/20 mb-4">Contacto</span>
            <h1 className="text-display-sm lg:text-display font-extrabold tracking-tight">
              Conversemos
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Estamos para resolver dudas, asesorar y construir la mejor solución para tu operación.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-page max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Phone, label: 'Teléfono', val: '+56 9 1234 5678', href: 'tel:+56912345678' },
              { Icon: Mail, label: 'Email', val: 'contacto@insumossm.cl', href: 'mailto:contacto@insumossm.cl' },
              { Icon: MessageCircle, label: 'WhatsApp', val: 'Chat directo', href: 'https://wa.me/56912345678' },
              { Icon: MapPin, label: 'Ubicación', val: 'Santiago, Chile', href: '#' },
              { Icon: Clock, label: 'Horario', val: 'Lun a Vie · 9:00 – 18:00', href: '#' },
            ].map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.05}>
                <a href={c.href} className="card p-6 flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-900 to-accent-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <c.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-ink-muted uppercase tracking-wider font-semibold">{c.label}</p>
                    <p className="font-bold text-ink mt-0.5">{c.val}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
