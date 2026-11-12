'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { MAIN_SERVICES, ServiceItem, buildWhatsAppUrl } from '@/data/agro-content';

interface ServicesBentoProps {
  onSelectServiceForQuote: (serviceId: ServiceItem['id']) => void;
}

interface TriptychItem {
  id: 'siembra' | 'cosecha' | 'embolsado';
  serviceId: ServiceItem['id'];
  verticalTitle: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
}

const TRIPTYCH_COLUMNS: TriptychItem[] = [
  {
    id: 'siembra',
    serviceId: 'siembra-precision',
    verticalTitle: 'SIEMBRA',
    title: 'Siembra de Precisión & VRA',
    subtitle:
      'Air Drill Agrometal APX SEED PRO (22 a 52 cm · Twin Force + Precision Planting corte surco por surco y dosis variable) + Sembradora PLA Neumática 2022 + Sembradora PLA Fino y Pasturas (41 a 19 cm / 21 a 38 cm).',
    image: '/images/maquinaria/apx/apx-2.jpg',
    highlights: [
      'Agrometal APX SEED PRO + Case IH Puma 200',
      'PLA Neumática 22 a 52 cm + John Deere 7210J',
      'PLA Fino/Pasturas 41 a 19 / 21 a 38 cm + Case Puma 200',
    ],
  },
  {
    id: 'cosecha',
    serviceId: 'cosecha-mapeo',
    verticalTitle: 'COSECHA',
    title: 'Cosecha con Mapeo Satelital',
    subtitle:
      'Dos cosechadoras de alta capacidad equipadas con mapeo satelital y monitor de rendimiento en tiempo real: Case IH 7230 AFS Axial-Flow y John Deere 9570 STS.',
    image: '/images/maquinaria/case-7230/case-1.jpg',
    highlights: [
      'Cosechadora Case IH 7230 con mapeo y monitor de rinde',
      'Cosechadora John Deere 9570 STS con mapeo y monitor de rinde',
      'Trilla limpia, puntualidad y mecánica propia en lote',
    ],
  },
  {
    id: 'embolsado',
    serviceId: 'cosecha-mapeo',
    verticalTitle: 'EMBOLSADO',
    title: 'Embolsado & Autonomía en Lote',
    subtitle:
      'Equipo propio de embolsado de granos en el lote para que las cosechadoras no detengan su ritmo de trabajo, respaldado por más de 20 años en mecánica y conducción propia.',
    image: '/images/maquinaria/jd-9570/jd-1.jpg',
    highlights: [
      'Equipo de Embolsado de granos directo en el campo',
      'Presentación anticipada de equipos antes de iniciar campaña',
      'Autosuficientes y rápidos en soluciones mecánicas',
    ],
  },
];

export default function ServicesBento({ onSelectServiceForQuote }: ServicesBentoProps) {
  const [activeColumn, setActiveColumn] = useState<'siembra' | 'cosecha' | 'embolsado'>('siembra');

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="bg-[#111412] text-[#F8F6F1]"
    >
      {/* 1. Tríptico Vertical Expandible a Pantalla Completa (Calcado de 00:04-00:07 del video) */}
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[660px] w-full overflow-hidden border-b border-[#C9B282]/25">
        {TRIPTYCH_COLUMNS.map((col, idx) => {
          const isExpanded = activeColumn === col.id;
          return (
            <div
              key={col.id}
              onMouseEnter={() => setActiveColumn(col.id)}
              onClick={() => setActiveColumn(col.id)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out flex flex-col justify-between p-6 sm:p-10 border-b lg:border-b-0 ${
                idx < 2 ? 'lg:border-r border-white/20' : ''
              } ${isExpanded ? 'lg:flex-[1.75] min-h-[420px]' : 'lg:flex-1 min-h-[260px]'}`}
            >
              {/* Fotografía de Fondo con Zoom Sutil */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.title}
                  loading="lazy"
                  className={`w-full h-full object-cover object-center transition-transform duration-1000 ${
                    isExpanded ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded ? 'bg-[#111412]/70' : 'bg-[#111412]/55 hover:bg-[#111412]/65'
                  }`}
                />
              </div>

              {/* Numeración Superior */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.25em] text-[#C9B282]">
                  0{idx + 1} // LABOR
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/75 border border-white/25 px-3 py-1 rounded-full">
                  COMPAGNUCCI
                </span>
              </div>

              {/* Centro: Título Vertical (como VENTA | ALQUILER | FLIPPING del video) + Detalle Expandido */}
              <div className="relative z-10 my-auto py-6 flex flex-col items-center text-center">
                <h3
                  className={`font-serif uppercase text-white tracking-[0.28em] transition-all duration-500 ${
                    isExpanded
                      ? 'text-3xl sm:text-5xl mb-4'
                      : 'lg:writing-vertical text-2xl sm:text-4xl lg:py-8'
                  }`}
                >
                  {col.verticalTitle}
                </h3>

                {isExpanded && (
                  <div className="max-w-md mx-auto animate-fadeIn">
                    <p className="font-serif italic text-xl text-[#E5D7B8] mb-2">{col.title}</p>
                    <p className="font-sans text-xs sm:text-sm text-[#F8F6F1]/85 leading-relaxed mb-4">
                      {col.subtitle}
                    </p>
                    <ul className="space-y-1.5 text-left inline-block">
                      {col.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 font-mono text-[11px] text-[#E5D7B8]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9B282] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Pie de Columna: Botón "EXPLORAR ->" igual al video */}
              <div className="relative z-10 flex justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectServiceForQuote(col.serviceId);
                  }}
                  className="border border-white/50 hover:border-[#C9B282] bg-[#111412]/40 hover:bg-[#C9B282] text-white hover:text-[#111412] backdrop-blur-sm px-6 py-2.5 font-sans text-[11px] uppercase tracking-[0.22em] flex items-center gap-2.5 transition-all duration-300"
                >
                  <span>EXPLORAR</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Dossier Técnico Editorial de los Pilares Productivos */}
      <div className="bg-[#F5F2EB] text-[#161917] py-20 sm:py-24 border-b border-[#DDD6C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-[0.26em] text-[#13261B] block mb-3">
                INGENIERÍA APLICADA AL LOTE
              </span>
              <h2
                id="servicios-heading"
                className="font-serif text-4xl sm:text-5xl text-[#161917] font-normal leading-tight"
              >
                Excelencia en <span className="italic text-[#13261B]">Cada Pasada.</span>
              </h2>
            </div>
            <p className="font-sans text-sm text-[#525854] max-w-md leading-relaxed">
              Especificaciones completas de nuestros servicios de siembra directa variable,
              cosecha con mapeo satelital y embolsado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {MAIN_SERVICES.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-[#DDD6C7] p-7 sm:p-10 flex flex-col justify-between shadow-sm hover:border-[#C9B282] transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#EBE6DC]">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#13261B] font-semibold">
                      {service.code}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#13261B] text-[#E5D7B8] font-mono text-[11px]">
                      {service.heroStat.value}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#161917] font-normal leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#525854] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Especificaciones */}
                  <div className="space-y-3 mb-7">
                    {service.technicalSpecs.map((spec) => (
                      <div
                        key={spec.parameter}
                        className="p-3.5 bg-[#F5F2EB] border-l-2 border-[#13261B]"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#161917]">
                            {spec.parameter}
                          </span>
                          <span className="font-mono text-xs text-[#13261B] font-semibold">
                            {spec.value}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-[#525854] leading-relaxed">
                          {spec.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EBE6DC] flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="flex-1 py-3.5 px-6 bg-[#13261B] hover:bg-[#111412] text-[#F8F6F1] font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9B282]" />
                  </button>
                  <a
                    href={buildWhatsAppUrl({
                      recipient: 'fabian',
                      service: service.shortTitle,
                      customMessage: service.whatsappMessage,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 border border-[#13261B] text-[#13261B] hover:bg-[#13261B] hover:text-white font-sans text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
