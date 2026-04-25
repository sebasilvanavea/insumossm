'use client';

import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, User, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { QuoteSchema, type QuoteInput } from '@/lib/schemas';
import { cn } from '@/lib/utils';

const STEPS = [
  { id: 1, label: 'Tipo de cliente' },
  { id: 2, label: 'Tus datos' },
  { id: 3, label: 'Tu solicitud' },
];

export function QuoteWizard({ defaultProduct }: { defaultProduct?: string }) {
  const methods = useForm<QuoteInput>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      clientType: undefined as unknown as 'empresa',
      products: defaultProduct ? `• ${defaultProduct} — ` : '',
      consent: false as unknown as true,
    },
    mode: 'onTouched',
  });

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ ticket: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const stepFields: Record<number, (keyof QuoteInput)[]> = {
    1: ['clientType'],
    2: ['fullName', 'email', 'phone', 'city'],
    3: ['products', 'consent'],
  };

  const next = async () => {
    const valid = await methods.trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(3, s + 1));
  };
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = async (data: QuoteInput) => {
    setServerError(null); setSubmitting(true);
    try {
      const res = await fetch('/api/cotizar', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Error al enviar');
      setDone({ ticket: json.ticket });
    } catch (e) {
      setServerError(e instanceof Error ? e.message : 'Ocurrió un error inesperado');
    } finally { setSubmitting(false); }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-ink mb-3">¡Cotización recibida!</h2>
        <p className="text-ink-muted max-w-md mx-auto mb-2">
          Tu número de ticket es <span className="font-mono font-bold text-primary-900">{done.ticket}</span>.
        </p>
        <p className="text-ink-muted max-w-md mx-auto">
          Un ejecutivo se pondrá en contacto en menos de 2 horas hábiles.
        </p>
      </motion.div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8" noValidate>
        {/* Stepper */}
        <div className="flex items-center justify-between gap-2">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex-1 flex items-center gap-2">
              <div className={cn(
                'flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all',
                step >= s.id ? 'bg-primary-900 text-white shadow-soft' : 'bg-surface-muted text-ink-muted'
              )}>
                {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : s.id}
              </div>
              <span className={cn(
                'text-xs lg:text-sm font-medium hidden sm:inline',
                step >= s.id ? 'text-ink' : 'text-ink-muted'
              )}>
                {s.label}
              </span>
              {i < STEPS.length - 1 && (
                <div className={cn(
                  'flex-1 h-0.5 transition-colors duration-500',
                  step > s.id ? 'bg-primary-900' : 'bg-surface-muted'
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Honeypot */}
        <input type="text" {...methods.register('website')} tabIndex={-1} autoComplete="off"
          className="hidden" aria-hidden />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
          </motion.div>
        </AnimatePresence>

        {serverError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{serverError}</p>
        )}

        <div className="flex items-center justify-between gap-3 pt-4">
          {step > 1 ? (
            <button type="button" onClick={prev} className="btn-outline btn-md">
              <ArrowLeft className="w-4 h-4" /> Atrás
            </button>
          ) : <span />}

          {step < 3 ? (
            <button type="button" onClick={next} className="btn-primary btn-md ml-auto">
              Continuar <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="btn-secondary btn-lg ml-auto">
              {submitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : 'Enviar cotización'}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

function Step1() {
  const { register, watch, formState: { errors } } = useFormContext<QuoteInput>();
  const value = watch('clientType');

  const Card = ({ id, label, desc, Icon }: { id: 'empresa' | 'persona'; label: string; desc: string; Icon: any }) => (
    <label className={cn(
      'cursor-pointer card p-6 flex gap-4 items-start transition-all',
      value === id ? 'ring-2 ring-accent-500 border-accent-500' : ''
    )}>
      <input type="radio" value={id} {...register('clientType')} className="sr-only" />
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors',
        value === id ? 'bg-primary-900 text-white' : 'bg-surface-muted text-ink-muted'
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-bold text-ink">{label}</h3>
        <p className="text-sm text-ink-muted mt-1">{desc}</p>
      </div>
    </label>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-ink mb-2">¿Cómo quieres cotizar?</h2>
      <p className="text-ink-muted mb-6">Esto nos ayuda a entregarte el mejor precio y condiciones.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Card id="empresa" label="Soy empresa" desc="Cotización con factura, condiciones de crédito y volumen." Icon={Building2} />
        <Card id="persona" label="Soy persona" desc="Compras puntuales, boleta y despacho rápido." Icon={User} />
      </div>
      {errors.clientType && <p className="text-sm text-red-600 mt-3">{errors.clientType.message}</p>}
    </div>
  );
}

function Field({ label, name, type = 'text', placeholder, required }: any) {
  const { register, formState: { errors } } = useFormContext<QuoteInput>();
  const err = (errors as any)[name]?.message as string | undefined;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink mb-1.5">
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <input id={name} type={type} placeholder={placeholder} {...register(name)} className="input" />
      {err && <p className="text-xs text-red-600 mt-1">{err}</p>}
    </div>
  );
}

function Step2() {
  const { watch } = useFormContext<QuoteInput>();
  const isEmpresa = watch('clientType') === 'empresa';
  return (
    <div>
      <h2 className="text-2xl font-bold text-ink mb-2">Tus datos</h2>
      <p className="text-ink-muted mb-6">Solo lo necesario para responderte rápido.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nombre completo" name="fullName" placeholder="Juan Pérez" required />
        <Field label={isEmpresa ? 'Razón social' : 'Empresa (opcional)'} name="company" placeholder="Mi Empresa SpA" />
        {isEmpresa && <Field label="RUT" name="rut" placeholder="76.123.456-7" />}
        <Field label="Email" name="email" type="email" placeholder="tu@correo.cl" required />
        <Field label="Teléfono" name="phone" placeholder="+56 9 1234 5678" required />
        <Field label="Ciudad" name="city" placeholder="Santiago" required />
      </div>
    </div>
  );
}

function Step3() {
  const { register, formState: { errors } } = useFormContext<QuoteInput>();
  return (
    <div>
      <h2 className="text-2xl font-bold text-ink mb-2">Cuéntanos qué necesitas</h2>
      <p className="text-ink-muted mb-6">Mientras más detalle, más precisa la cotización.</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">Productos a cotizar *</label>
          <textarea
            {...register('products')} rows={5} className="input"
            placeholder="• 50 cajas de guantes de nitrilo talla M&#10;• 10 cascos de seguridad blancos&#10;• ..."
          />
          {errors.products && <p className="text-xs text-red-600 mt-1">{errors.products.message}</p>}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Cantidad estimada (opc.)" name="estimatedQty" placeholder="Ej: 100 unidades" />
          <Field label="Plazo deseado (opc.)" name="deadline" placeholder="Ej: en 7 días" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">Mensaje adicional (opc.)</label>
          <textarea {...register('message')} rows={3} className="input" placeholder="Cualquier detalle relevante..." />
        </div>
        <label className="flex items-start gap-3 cursor-pointer text-sm text-ink-soft">
          <input type="checkbox" {...register('consent')} className="mt-0.5 rounded border-ink/20 text-primary-900 focus:ring-accent-500" />
          <span>Acepto el tratamiento de mis datos según la <a href="/privacidad" className="underline text-primary-900">política de privacidad</a> y la Ley 19.628.</span>
        </label>
        {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}
      </div>
    </div>
  );
}
