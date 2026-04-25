'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, HeartHandshake, Zap, Award, Headphones } from 'lucide-react';
import { StaggerContainer, staggerItem, FadeIn } from '@/components/animations/fade-in';

const FEATURES = [
  {
    icon: ShieldCheck, title: 'Productos certificados',
    desc: 'Trabajamos sólo con marcas con certificación SEC, ANSI y normativa chilena vigente.',
  },
  {
    icon: Truck, title: 'Despacho ágil',
    desc: 'Despacho 24–72 h en RM y nacional. Coordinación logística para grandes volúmenes.',
  },
  {
    icon: HeartHandshake, title: 'Atención dedicada',
    desc: 'Ejecutivo asignado por cuenta, con experiencia técnica en tu industria.',
  },
  {
    icon: Zap, title: 'Cotización en minutos',
    desc: 'Formulario inteligente que envía tu solicitud directo a nuestro equipo comercial.',
  },
  {
    icon: Award, title: 'Garantía total',
    desc: 'Cambio sin preguntas si el producto no cumple con lo solicitado.',
  },
  {
    icon: Headphones, title: 'Soporte post-venta',
    desc: 'Asesoría continua, capacitaciones y reposiciones programadas.',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <span className="badge bg-primary-50 text-primary-900 mb-4">Por qué elegirnos</span>
          <h2 className="text-display-sm lg:text-display font-extrabold tracking-tight text-ink">
            Más que un proveedor: <span className="gradient-text">un aliado</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Acompañamos a empresas grandes y pymes con un servicio integral pensado en
            optimizar tiempos, costos y seguridad operacional.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <motion.div key={f.title} variants={staggerItem} className="card p-7 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-900 to-accent-500 flex items-center justify-center text-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
