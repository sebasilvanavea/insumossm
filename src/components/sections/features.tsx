'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, HeartHandshake, Zap, Award, Headphones } from 'lucide-react';
import { StaggerContainer, staggerItem, FadeIn } from '@/components/animations/fade-in';

const FEATURES = [
  {
    icon: ShieldCheck, title: 'Certificado ISP',
    desc: 'Todos nuestros productos están homologados y certificados por el Instituto de Salud Pública de Chile.',
  },
  {
    icon: Truck, title: 'Despacho 24–48 h',
    desc: 'Envío a todo Chile. Coordinación logística especial para grandes volúmenes y urgencias clínicas.',
  },
  {
    icon: HeartHandshake, title: 'Atención personalizada',
    desc: 'Ejecutivo dedicado a tu cuenta, con conocimiento del rubro salud y capacidad de cotizar en el día.',
  },
  {
    icon: Zap, title: 'Cotización en minutos',
    desc: 'Formulario inteligente que envía tu solicitud directo a nuestro equipo comercial.',
  },
  {
    icon: Award, title: 'Stock permanente',
    desc: 'Disponibilidad garantizada de líneas críticas. Sin quiebres de stock en productos de alta rotación.',
  },
  {
    icon: Headphones, title: 'Factura empresa',
    desc: 'Emitimos boleta y factura electrónica. Trabajamos con órdenes de compra y convenios de precio.',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <span className="badge bg-primary-50 text-primary-900 mb-4">Por qué elegirnos</span>
          <h2 className="text-display-sm lg:text-display font-extrabold tracking-tight text-ink">
            Más que un proveedor: <span className="gradient-text">tu partner clínico</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Acompañamos a clínicas, hospitales y centros de salud con servicio especializado,
            respuesta rápida y disponibilidad en líneas críticas.
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
