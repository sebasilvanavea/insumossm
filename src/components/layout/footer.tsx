import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white mt-24">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-secondary-500 flex items-center justify-center text-ink font-extrabold">
                SM
              </div>
              <span className="font-extrabold text-lg">InsumosSM</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Distribuidor de insumos médicos de alta calidad para profesionales y
              centros de salud en todo Chile.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Productos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/productos?cat=apostitos" className="hover:text-secondary-400 transition-colors">Apósitos y Gasas</Link></li>
              <li><Link href="/productos?cat=jeringas" className="hover:text-secondary-400 transition-colors">Jeringas y Agujas</Link></li>
              <li><Link href="/productos?cat=diagnostico" className="hover:text-secondary-400 transition-colors">Equipos Diagnóstico</Link></li>
              <li><Link href="/productos?cat=curacion" className="hover:text-secondary-400 transition-colors">Material de Curación</Link></li>
              <li><Link href="/productos?cat=cirugia" className="hover:text-secondary-400 transition-colors">Insumos Quirúrgicos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/sobre-nosotros" className="hover:text-secondary-400 transition-colors">Quiénes somos</Link></li>
              <li><Link href="/cotizar" className="hover:text-secondary-400 transition-colors">Solicitar cotización</Link></li>
              <li><Link href="/contacto" className="hover:text-secondary-400 transition-colors">Contacto</Link></li>
              <li><Link href="/privacidad" className="hover:text-secondary-400 transition-colors">Política de privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-secondary-400 transition-colors">Términos y condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-secondary-400" /> +56 9 1234 5678</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-secondary-400" /> ventas@insumossm.cl</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-secondary-400" /> Santiago, Chile</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-secondary-400" /> Lun a Vie · 8:30 – 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} InsumosSM · Todos los derechos reservados.</p>
          <p>Hecho en Chile con Next.js</p>
        </div>
      </div>
    </footer>
  );
}
