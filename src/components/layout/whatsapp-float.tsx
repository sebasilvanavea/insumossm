'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+56912345678').replace(/\D/g, '');
  const message = encodeURIComponent('¡Hola! Me gustaría una cotización de productos.');

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-strong flex items-center justify-center hover:shadow-glow transition-shadow"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary-500 ring-2 ring-white animate-pulse" />
    </motion.a>
  );
}
