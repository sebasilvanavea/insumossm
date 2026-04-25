'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTA() {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+56912345678').replace(/\D/g, '');
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 lg:p-16 text-white shadow-strong"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-500/30 blur-3xl" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-display-sm lg:text-display font-extrabold tracking-tight">
                ¿Listo para cotizar?
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-lg">
                Envíanos lo que necesitas y un ejecutivo te responde en menos de 2 horas
                hábiles con disponibilidad y precios.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/cotizar" className="btn-secondary btn-lg group">
                Cotizar ahora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/15"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
