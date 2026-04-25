import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { QuoteSchema } from '@/lib/schemas';

// Rate limit en memoria (suficiente para inicio; reemplazar por Upstash en producción)
const ipHits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;            // máx envíos
const WINDOW_MS = 60 * 60 * 1000; // por hora

function rateLimit(ip: string) {
  const now = Date.now();
  const rec = ipHits.get(ip);
  if (!rec || rec.resetAt < now) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (rec.count >= RATE_LIMIT) return false;
  rec.count += 1;
  return true;
}

function generateTicket() {
  const ts = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SM-${ts}-${rnd}`;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta nuevamente en una hora.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = QuoteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Datos inválidos', issues: parsed.error.issues }, { status: 400 });
    }
    const data = parsed.data;

    // Honeypot
    if (data.website) {
      // simulamos éxito para no dar feedback al bot
      return NextResponse.json({ ticket: 'SM-OK', ok: true });
    }

    const ticket = generateTicket();

    // Si hay RESEND_API_KEY configurada, enviamos email
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.QUOTE_TO_EMAIL;
    const from = process.env.QUOTE_FROM_EMAIL;

    if (apiKey && to && from) {
      const resend = new Resend(apiKey);

      // Email al equipo
      await resend.emails.send({
        from,
        to: [to],
        subject: `Nueva cotización ${ticket} — ${data.fullName}`,
        text: [
          `Ticket: ${ticket}`,
          `Tipo: ${data.clientType}`,
          `Nombre: ${data.fullName}`,
          data.company ? `Empresa: ${data.company}` : '',
          data.rut ? `RUT: ${data.rut}` : '',
          `Email: ${data.email}`,
          `Teléfono: ${data.phone}`,
          `Ciudad: ${data.city}`,
          '',
          'PRODUCTOS:',
          data.products,
          '',
          data.estimatedQty ? `Cantidad estimada: ${data.estimatedQty}` : '',
          data.deadline ? `Plazo: ${data.deadline}` : '',
          data.message ? `Mensaje: ${data.message}` : '',
        ].filter(Boolean).join('\n'),
        replyTo: data.email,
      });

      // Email de confirmación al cliente
      await resend.emails.send({
        from,
        to: [data.email],
        subject: `Recibimos tu cotización (${ticket}) — InsumosSM`,
        text: `Hola ${data.fullName},\n\nRecibimos tu solicitud de cotización (${ticket}).\nUn ejecutivo se contactará contigo en menos de 2 horas hábiles.\n\nGracias por confiar en InsumosSM.`,
      });
    } else {
      console.log('[cotizar] RESEND no configurado — payload:', { ticket, ...data });
    }

    return NextResponse.json({ ticket, ok: true });
  } catch (err) {
    console.error('[cotizar]', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
