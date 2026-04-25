import type { Metadata } from 'next';
import { FadeIn } from '@/components/animations/fade-in';
import { CTA } from '@/components/sections/cta';
import { Stats } from '@/components/sections/stats';
import { Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Conoce a InsumosSM: misión, visión y valores que mueven a nuestra empresa.',
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="container-page max-w-4xl">
          <FadeIn>
            <span className="badge bg-white/10 border border-white/20 mb-4">Quiénes somos</span>
            <h1 className="text-display-sm lg:text-display-lg font-extrabold tracking-tight">
              Más de 12 años sirviendo al sector salud en Chile
            </h1>
            <p className="mt-6 text-lg text-white/80">
              InsumosSM nace para acercar a clínicas y centros de salud un distribuidor que
              entienda el rubro: stock confiable, certificaciones vigentes y respuesta el mismo día.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {[
            { Icon: Target, title: 'Misión', text: 'Proveer insumos médicos certificados que contribuyan a la atención de calidad de los pacientes.' },
            { Icon: Eye, title: 'Visión', text: 'Ser el distribuidor médico referente de Chile por confiabilidad, rapidez y trato humano.' },
            { Icon: Heart, title: 'Valores', text: 'Compromiso con la salud, honestidad, agilidad y respeto por cada profesional y paciente.' },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-900 to-accent-500 flex items-center justify-center text-white">
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-muted leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  );
}
