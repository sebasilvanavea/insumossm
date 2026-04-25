import { z } from 'zod';

export const QuoteSchema = z.object({
  // step 1
  clientType: z.enum(['empresa', 'persona'], {
    required_error: 'Selecciona un tipo de cliente',
  }),
  // step 2
  fullName: z.string().min(2, 'Ingresa tu nombre completo').max(120),
  company: z.string().max(120).optional().or(z.literal('')),
  rut: z.string().min(8, 'RUT inválido').max(12).optional().or(z.literal('')),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'Teléfono inválido').max(20),
  city: z.string().min(2, 'Ingresa tu ciudad').max(80),
  // step 3
  products: z.string().min(10, 'Describe los productos que necesitas (mín. 10 caracteres)').max(2000),
  estimatedQty: z.string().max(80).optional().or(z.literal('')),
  deadline: z.string().max(80).optional().or(z.literal('')),
  message: z.string().max(1000).optional().or(z.literal('')),
  // anti-spam honeypot
  website: z.string().max(0, 'spam detected').optional().or(z.literal('')),
  // consent
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
});

export type QuoteInput = z.infer<typeof QuoteSchema>;

export const ContactSchema = z.object({
  name: z.string().min(2, 'Nombre requerido').max(120),
  email: z.string().email('Email inválido'),
  phone: z.string().max(20).optional().or(z.literal('')),
  subject: z.string().min(3).max(160),
  message: z.string().min(10, 'Mensaje muy corto').max(2000),
  website: z.string().max(0).optional().or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
});

export type ContactInput = z.infer<typeof ContactSchema>;
