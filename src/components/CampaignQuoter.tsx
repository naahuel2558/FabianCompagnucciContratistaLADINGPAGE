'use client';

import React, { useMemo } from 'react';
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Calendar,
  Phone,
} from 'lucide-react';
import {
  BRAND_INFO,
  QUOTER_OPTIONS,
  buildWhatsAppUrl,
} from '@/data/agro-content';

export interface QuoterFormState {
  recipient: 'fabian' | 'agustin';
  service: string;
  crop: string;
  hectares: string;
  location: string;
  targetDate: string;
  hasPrescriptionMap: boolean;
  customNotes: string;
}

interface CampaignQuoterProps {
  formState: QuoterFormState;
  setFormState: React.Dispatch<React.SetStateAction<QuoterFormState>>;
}

const DATE_WINDOWS = [
  'Próxima quincena (Urgente)',
  'Dentro de los próximos 30 días',
  'Planificación Campaña Fina / Pasturas',
  'Planificación Campaña Gruesa',
];

export default function CampaignQuoter({
  formState,
  setFormState,
}: CampaignQuoterProps) {
  const whatsappUrl = useMemo(() => {
    return buildWhatsAppUrl({
      recipient: formState.recipient,
      service: formState.service,
      crop: formState.crop,
      hectares: formState.hectares,
      location: formState.location || 'Córdoba / San Luis / La Pampa / Norte',
      targetDate: formState.targetDate,
      hasPrescriptionMap: formState.hasPrescriptionMap,
      customMessage: formState.customNotes,
    });
  }, [formState]);

  const previewText = useMemo(() => {
    try {
      const urlObj = new URL(whatsappUrl);
      return urlObj.searchParams.get('text') || '';
    } catch {
      return '';
    }
  }, [whatsappUrl]);

  const updateField = <K extends keyof QuoterFormState>(
    field: K,
    value: QuoterFormState[K]
  ) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const selectedContact =
    BRAND_INFO.contacts.find((c) => c.id === formState.recipient) ||
    BRAND_INFO.contacts[0];

  return (
    <>
      {/* 1. Bloque Dividido 50/50 ("ELEVE EL ESTÁNDAR de su producción" / "PROYECTE su CAMPAÑA") igual a 00:14 del video */}
      <section
        aria-label="Proyecte su campaña con Fabián Compagnucci"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px] border-b border-[#C9B282]/30"
      >
        {/* Mitad Izquierda: Fotografía Oscurecida */}
        <div className="relative p-10 sm:p-16 lg:p-20 flex flex-col justify-center overflow-hidden bg-[#111412] text-[#F8F6F1]">
          <img
            src="/images/hero-agro.png"
            alt="Maquinaria agrícola de precisión en el campo"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111412]/90 to-[#111412]/65" />

          <div className="relative z-10 max-w-md">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] text-white font-normal">
              ELEVE EL ESTÁNDAR
              <br />
              <span className="italic lowercase font-normal text-[#E5D7B8]">
                de su producción
              </span>
            </h2>
            <p className="mt-4 font-sans text-xs sm:text-sm text-[#F8F6F1]/80 leading-relaxed">
              Presentamos nuestros equipos con anticipación en el lote para un trabajo ordenado,
              puntual y eficiente.
            </p>
          </div>
        </div>

        {/* Mitad Derecha: Bloque Sólido Verde Monte Profundo (#13261B) */}
        <div className="bg-[#13261B] text-[#F8F6F1] p-10 sm:p-16 lg:p-20 flex flex-col justify-center items-start border-t lg:border-t-0 lg:border-l border-[#C9B282]/25">
          <div className="max-w-md">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] text-white font-normal mb-4">
              PROYECTE <span className="italic lowercase text-[#E5D7B8]">su</span>
              <br />
              CAMPAÑA
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#F8F6F1]/80 leading-relaxed mb-8">
              Coordine fechas directamente con Fabián y Agustín Compagnucci para asegurar su
              ventana de siembra, cosecha con mapeo o embolsado.
            </p>

            <a
              href="#formulario-campana"
              className="inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#E5D7B8] text-[#13261B] font-sans text-xs uppercase tracking-[0.22em] font-semibold px-8 py-4 transition-all shadow-lg"
            >
              <span>CONTACTAR</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Planificador / Cotizador Editorial de Campaña (WhatsApp Fabián o Agustín) */}
      <section
        id="cotizador"
        aria-labelledby="cotizador-heading"
        className="py-20 sm:py-28 bg-[#F5F2EB] text-[#161917] border-b border-[#DDD6C7]"
      >
        <div id="formulario-campana" className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="bg-white border border-[#DDD6C7] shadow-xl p-6 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-[#EBE6DC]">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#13261B] block mb-2">
                  AGENDA ABIERTA · ATENCIÓN PERSONALIZADA
                </span>
                <h2
                  id="cotizador-heading"
                  className="font-serif text-3xl sm:text-5xl text-[#161917] font-normal"
                >
                  Planificar <span className="italic text-[#13261B]">Labor en Lote.</span>
                </h2>
              </div>
              <span className="font-mono text-xs text-[#525854]">
                {BRAND_INFO.address} · CUIT {BRAND_INFO.cuit}
              </span>
            </div>

            <div className="space-y-8">
              {/* Selector de Destinatario: Fabián o Agustín */}
              <div>
                <label className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-3">
                  1. Seleccioná con quién comunicarte por WhatsApp:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {BRAND_INFO.contacts.map((contact) => {
                    const isSelected = formState.recipient === contact.id;
                    return (
                      <button
                        key={contact.id}
                        type="button"
                        onClick={() => updateField('recipient', contact.id)}
                        className={`p-4 border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#13261B] border-[#13261B] text-[#F8F6F1]'
                            : 'bg-[#F5F2EB] border-[#DDD6C7] text-[#161917] hover:border-[#13261B]'
                        }`}
                      >
                        <div>
                          <span className="font-serif text-xl block">{contact.name}</span>
                          <span
                            className={`font-mono text-xs tabular-nums block mt-0.5 ${
                              isSelected ? 'text-[#C9B282]' : 'text-[#525854]'
                            }`}
                          >
                            WhatsApp: {contact.phoneDisplay}
                          </span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-[#C9B282] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selector de Herramienta / Servicio */}
              <div>
                <label className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-3">
                  2. Herramienta / Labor requerida:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {QUOTER_OPTIONS.services.map((srv) => {
                    const isSelected = formState.service === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => updateField('service', srv.id)}
                        className={`p-4 border text-left transition-all ${
                          isSelected
                            ? 'bg-[#13261B] border-[#13261B] text-[#F8F6F1]'
                            : 'bg-[#F5F2EB] border-[#DDD6C7] text-[#161917] hover:border-[#13261B]'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider block mb-1 ${
                            isSelected ? 'text-[#C9B282]' : 'text-[#13261B]'
                          }`}
                        >
                          {srv.badge}
                        </span>
                        <span className="font-serif text-lg leading-snug block">
                          {srv.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cultivo + Superficie */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <label className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-3">
                    3. Cultivo y distanciamiento:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {QUOTER_OPTIONS.crops.map((crop) => {
                      const isSelected = formState.crop === crop;
                      return (
                        <button
                          key={crop}
                          type="button"
                          onClick={() => updateField('crop', crop)}
                          className={`py-3 px-3 text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#C9B282] border-[#C9B282] text-[#111412] font-semibold'
                              : 'bg-[#F5F2EB] border-[#DDD6C7] text-[#161917] hover:border-[#13261B]'
                          }`}
                        >
                          {crop}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <label
                    htmlFor="quoter-ha-input"
                    className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-3"
                  >
                    4. Superficie estimada (ha):
                  </label>
                  <input
                    id="quoter-ha-input"
                    type="text"
                    inputMode="numeric"
                    value={formState.hectares}
                    onChange={(e) => updateField('hectares', e.target.value)}
                    placeholder="Ej: 300 ha"
                    className="w-full px-4 py-3 bg-[#F5F2EB] border border-[#DDD6C7] focus:border-[#13261B] focus:outline-none font-mono text-base text-[#161917] mb-2"
                  />
                  <div className="grid grid-cols-4 gap-1.5">
                    {QUOTER_OPTIONS.hectareRanges.map((range) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => updateField('hectares', range.value)}
                        className={`py-1.5 text-[11px] font-mono border ${
                          formState.hectares === range.value
                            ? 'bg-[#13261B] text-[#E5D7B8] border-[#13261B]'
                            : 'bg-[#F5F2EB] text-[#525854] border-[#DDD6C7]'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Localidad y Fecha */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="quoter-loc-input"
                    className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-2.5"
                  >
                    5. Localidad / Zona del campo:
                  </label>
                  <div className="relative mb-2">
                    <MapPin className="w-4 h-4 text-[#525854] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="quoter-loc-input"
                      type="text"
                      value={formState.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      placeholder="Bulnes, Sampacho, Levalle, Buena Esperanza, Rancul, Gancedo..."
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F2EB] border border-[#DDD6C7] focus:border-[#13261B] focus:outline-none text-sm text-[#161917]"
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {QUOTER_OPTIONS.SuggestedLocations.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => updateField('location', loc)}
                        className="px-2.5 py-1 text-[10px] font-mono bg-[#F5F2EB] hover:bg-[#13261B] text-[#525854] hover:text-white border border-[#DDD6C7] transition-colors"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="quoter-date-select"
                    className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#13261B] font-semibold mb-2.5"
                  >
                    6. Ventana estimada de entrada:
                  </label>
                  <div className="relative mb-3">
                    <Calendar className="w-4 h-4 text-[#525854] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="quoter-date-select"
                      value={formState.targetDate}
                      onChange={(e) => updateField('targetDate', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-[#F5F2EB] border border-[#DDD6C7] focus:border-[#13261B] focus:outline-none text-sm text-[#161917]"
                    >
                      {DATE_WINDOWS.map((win) => (
                        <option key={win} value={win}>
                          {win}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vista previa resumida */}
                  <div className="p-3 bg-[#111412] text-[#F8F6F1] font-mono text-[11px] leading-relaxed border-l-2 border-[#C9B282]">
                    <span className="text-[#C9B282] block mb-1">
                      DESTINATARIO: {selectedContact.name.toUpperCase()} ({selectedContact.phoneDisplay})
                    </span>
                    <span className="line-clamp-2 text-white/85">{previewText}</span>
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-8 bg-[#13261B] hover:bg-[#111412] text-[#F8F6F1] font-sans text-xs uppercase tracking-[0.24em] font-semibold flex items-center justify-center gap-3 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 text-[#C9B282]" />
                  <span>
                    Enviar Consulta por WhatsApp a {selectedContact.name} (
                    {selectedContact.phoneDisplay})
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C9B282]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer Monumental en Verde Monte Profundo (#13261B) con Marca de Agua Gigante "compagnucci" (Calcado de 00:17-00:20 del video) */}
      <footer className="relative bg-[#13261B] text-[#F8F6F1] pt-14 pb-24 sm:pb-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          {/* Fila Superior: Ubicación a la izquierda, Dirección y CUIT a la derecha */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-16 border-b border-white/15 font-mono text-[11px] uppercase tracking-[0.24em] text-[#E5D7B8]/80">
            <span>BULNES, CÓRDOBA, ARG.</span>
            <span>
              {BRAND_INFO.address.toUpperCase()} · CUIT {BRAND_INFO.cuit}
            </span>
          </div>

          {/* Centro Monumental: Frase en Serif + Email Subrayado + Teléfonos de Fabián y Agustín */}
          <div className="py-16 sm:py-24 text-center max-w-3xl mx-auto">
            <p className="font-serif text-3xl sm:text-5xl text-[#F8F6F1] font-normal leading-tight mb-8">
              Proyectemos el rinde de su próxima campaña.
            </p>

            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="inline-block font-sans text-sm sm:text-lg uppercase tracking-[0.28em] text-[#E5D7B8] hover:text-white border-b border-[#C9B282] pb-2 mb-10 transition-colors"
            >
              {BRAND_INFO.email.toUpperCase()}
            </a>

            {/* Teléfonos Directos */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12">
              <a
                href={buildWhatsAppUrl({ recipient: 'fabian' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#F8F6F1] hover:text-[#C9B282] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9B282]" />
                <span>FABIÁN COMPAGNUCCI: {BRAND_INFO.whatsappDisplay}</span>
              </a>
              <a
                href={buildWhatsAppUrl({ recipient: 'agustin' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#F8F6F1] hover:text-[#C9B282] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9B282]" />
                <span>AGUSTÍN COMPAGNUCCI: {BRAND_INFO.secondaryWhatsappDisplay}</span>
              </a>
            </div>

            {/* Navegación de Pie */}
            <nav
              aria-label="Enlaces del pie de página"
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-sans text-[11px] uppercase tracking-[0.24em] text-[#F8F6F1]/75"
            >
              <a href="#inicio" className="hover:text-[#E5D7B8] transition-colors">
                INICIO
              </a>
              <a href="#maquinaria" className="hover:text-[#E5D7B8] transition-colors">
                HERRAMIENTAS
              </a>
              <a href="#filosofia" className="hover:text-[#E5D7B8] transition-colors">
                NOSOTROS
              </a>
              <a href="#zonas-trabajadas" className="hover:text-[#E5D7B8] transition-colors">
                ZONAS
              </a>
              <a href="#cotizador" className="hover:text-[#E5D7B8] transition-colors">
                CONTACTO
              </a>
            </nav>
          </div>
        </div>

        {/* Palabra Gigante Recortada "compagnucci" de lado a lado al pie (Exactamente como "somare" en 00:18-00:20 del video) */}
        <div
          className="w-full overflow-hidden select-none pointer-events-none leading-none text-center mt-2"
          aria-hidden="true"
        >
          <span className="block font-sans font-bold lowercase tracking-[-0.04em] text-[15vw] text-white/[0.07] leading-[0.78]">
            compagnucci
          </span>
        </div>
      </footer>

      {/* Botón Flotante Discreto y Elegante */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 rounded-full bg-[#13261B] hover:bg-[#111412] text-[#F8F6F1] border border-[#C9B282] shadow-2xl flex items-center gap-2.5 font-sans text-xs uppercase tracking-[0.16em] font-semibold transition-transform hover:scale-105"
          aria-label={`Contactar por WhatsApp a ${selectedContact.name}`}
        >
          <span className="w-2 h-2 rounded-full bg-[#C9B282] animate-pulse" />
          <MessageSquare className="w-4 h-4 text-[#C9B282]" />
          <span>WhatsApp {selectedContact.name.split(' ')[0]}</span>
        </a>
      </div>
    </>
  );
}
