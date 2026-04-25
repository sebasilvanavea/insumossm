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
              Una historia de servicio y compromiso industrial
            </h1>
            <p className="mt-6 text-lg text-white/80">
              InsumosSM nace para acercar a las empresas chilenas un proveedor que entienda
              de verdad la operación: tiempos, costos, calidad y seguridad.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page grid md:grid-cols-3 gap-8">
          {[
            { Icon: Target, title: 'Misión', text: 'Entregar suministros confiables y oportunos que potencien la productividad de cada cliente.' },
            { Icon: Eye, title: 'Visión', text: 'Ser el partner de insumos referente en Chile por excelencia operacional y trato humano.' },
            { Icon: Heart, title: 'Valores', text: 'Honestidad, agilidad, compromiso técnico y respeto por las personas y el medio ambiente.' },
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
