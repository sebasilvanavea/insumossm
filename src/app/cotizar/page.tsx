import type { Metadata } from 'next';
import { QuoteWizard } from '@/components/forms/quote-wizard';
import { FadeIn } from '@/components/animations/fade-in';
import { Clock, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solicitar cotización',
  description: 'Cotiza insumos industriales en línea. Respuesta garantizada en menos de 2 horas hábiles.',
};

export default function CotizarPage({ searchParams }: { searchParams: { producto?: string } }) {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16 lg:py-20">
        <div className="container-page">
          <FadeIn>
            <span className="badge bg-white/10 border border-white/20 mb-4">Cotización rápida</span>
            <h1 className="text-display-sm lg:text-display font-extrabold tracking-tight">
              Cotización en 60 segundos
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Completa el formulario y recibe respuesta en menos de 2 horas hábiles.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="card p-8 lg:p-10">
                <QuoteWizard defaultProduct={searchParams.producto} />
              </div>
            </div>

            <aside className="space-y-4">
              <FadeIn delay={0.1}>
                <div className="card p-6">
                  <Clock className="w-8 h-8 text-accent-500 mb-3" />
                  <h3 className="font-bold text-ink">Respuesta &lt; 2 h hábiles</h3>
                  <p className="text-sm text-ink-muted mt-1">Compromiso real con cada cotización recibida.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="card p-6">
                  <Shield className="w-8 h-8 text-accent-500 mb-3" />
                  <h3 className="font-bold text-ink">Datos protegidos</h3>
                  <p className="text-sm text-ink-muted mt-1">
                    Cumplimos la Ley 19.628 y usamos cifrado en tránsito y en reposo.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="card p-6">
                  <Users className="w-8 h-8 text-accent-500 mb-3" />
                  <h3 className="font-bold text-ink">Ejecutivo asignado</h3>
                  <p className="text-sm text-ink-muted mt-1">Un mismo contacto para todo tu proceso.</p>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
